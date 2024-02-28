"use client";

import PhotoCard from "@/app/components/photo-card";
import { useRef, useState } from "react";
import ButtonSubmit from "@/app/components/btn-submit.js";
import uploadPhoto from "@/app/dashboard/clients/add-client/upload-actions.js";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadForm = () => {
  const formRef = useRef();
  const [files, setFiles] = useState([]);

  async function handleInputFiles(e) {
    const files = e.target.files;
    const newFiles = [...files].filter((file) => {
      if (file.type.startsWith("image/")) {
        return file;
      }
    });
    setFiles((prev) => [...newFiles, ...prev]);
    formRef.current.reset();
  }

  async function handleDeleteFiles(index) {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  }

  async function handleUpload() {
    if (!files.length)
      return toast.warn("No Image files are selected!", { theme: "colored" });
    if (files.length > 5)
      return toast.warn("Maximum upload limit is 5 images", {
        theme: "colored",
      });
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });
    const response = await uploadPhoto(formData);

    if (response?.errMsg)
      toast.success(`Error: ${response?.errMsg}`, { theme: "colored" });
    setFiles([]);
    formRef.current.reset();
    toast.success("Photo uploaded successfully!", { theme: "colored" });
    //revalidate("/");
  }
  return (
    <>
      <div className="text-center sm:m-20">
        <h1 className="text-2xl font-bold text-center">Gallery</h1>
        <div className="mt-2">
          <form action={handleUpload} ref={formRef}>
            <div className="bg-sky-100 min-h-[200px] p-10 m-10 rounded-lg">
              <h2 className="text-xl font-bold text-center pb-4">
                Upload photos
              </h2>
              <div className="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Maximum upload limit is 5 images
                    </p>
                  </div>
                  <input
                    accept="image/*"
                    multiple
                    onChange={handleInputFiles}
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  margin: "10px 0",
                }}
              >
                {files?.map((file, index) => (
                  <PhotoCard
                    key={index}
                    url={URL.createObjectURL(file)}
                    onClick={() => {
                      handleDeleteFiles(index);
                    }}
                  />
                ))}
              </div>
              <ButtonSubmit value={<CloudUploadIcon />} />
              <ToastContainer theme="colored" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadForm;
