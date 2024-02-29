"use server";

import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import os from "os";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
import Photo from "@/app/models/photo";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

async function savePhotosToLocal(formData) {
  const files = formData.getAll("files");
  const multipleBufferPromise = files.map((file) =>
    file.arrayBuffer().then((data) => {
      const buffer = Buffer.from(data);
      const name = uuidv4();
      const ext = file.type.split("/")[1];

      const tempdir = os.tmpdir();
      const uploadDir = path.join(tempdir, `/${name}.${ext}`);
      console.log(uploadDir);

      // doesn't work in Vercel
      // const uploadDir = path.join(process.cwd(), "public", `/${name}.${ext}`)

      fs.writeFile(uploadDir, buffer);
      return { filepath: uploadDir, filename: file.name };
    })
  );
  return await Promise.all(multipleBufferPromise);
}

async function uploadPhotosToCloudanry(newFiles) {
  const multiplePhotosPromise = newFiles.map((file) =>
    cloudinary.v2.uploader.upload(file.filepath, {
      folder: "shadow",
      public_id: file.filename,
      tags: "shadow",
    })
  );
  return await Promise.all(multiplePhotosPromise);
}

const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

export default async function uploadPhoto(formData) {
  try {
    // save photo to temp folder
    const newFiles = await savePhotosToLocal(formData);

    // upload photo to cloudinary
    const photos = await uploadPhotosToCloudanry(newFiles);
    // notification
    console.log(
      photos.length,
      " images has been uploaded to cloudinary successfully!"
    );
    // delete photo in temp folder after upload
    newFiles.map((file) => fs.unlink(file.filepath));
    
    const newPhotos = photos.map((photo) => {
      const newPhoto = new Photo({public_id: photo.public_id,secure_url: photo.secure_url})
      return newPhoto
    })

    await Photo.insertMany(newPhotos)

    // delay 2s to update cloudinary database
    await delay(4000)
    revalidatePath("/");
    
    return { msg: "Success!" };

  } catch (error) {
    return { errMsg: error.message };
  }
}

export async function getAllPhotos() {
  try {
    // From cloudinary database
    // const { resources } = await cloudinary.v2.search
    //   .expression("folder:shadow/*")
    //   .sort_by("created_at", "desc")
    //   .max_results(500)
    //   .execute();

    // From mongodb database
    const photos = await Photo.find().sort('-createdAt')
    const resources = photos.map(photo => ({...photo._doc, _id: photo._id.toString()}))


    return resources;
  } catch (error) {
    return { errMsg: error.message };
  }
}

export async function deletePhoto(public_id) {
  try {
    await Promise.all([
      Photo.findOneAndDelete({ public_id }),
      cloudinary.v2.uploader.destroy(public_id),
    ])
    //await cloudinary.v2.uploader.destroy(public_id);
    revalidatePath("/");
    return { msg: "Delete Success!" };
  } catch (error) {
    return { errMsg: error.message };
  }
}

export async function revalidate(path) {
  revalidatePath(path);
}
