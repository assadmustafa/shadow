'use client'

import PhotoCard from "@/app/components/photo-card";
import React from "react";
import { deletePhoto } from "../dashboard/clients/add-client/upload-actions";
import { toast } from "react-toastify";

const PhotoList = ({ photos }) => {

  async function handleDeletePhoto(public_id){
    await deletePhoto(public_id)
    toast.success("Photo deleted successfully!", { theme: "colored" });
  }
  
  return (
    <div className="flex gap-10 flex-wrap m-10">
      {
        photos.map(photo =>(
            <PhotoCard key={photo?.public_id} url={photo?.secure_url} onClick={() => handleDeletePhoto(photo?.public_id)} />
        ))
      }
    </div>
  );
};

export default PhotoList;
