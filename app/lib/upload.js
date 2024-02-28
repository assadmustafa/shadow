'use client'

import { useRef } from "react";
import multer from "multer";

const UploadForm = () => {
  const formRef = useRef();

  return (
    <form action="" ref={formRef}>
      <div>
        <input type="file" accept="image/*" multiple/>
      </div>
    </form>
  )
}

export default UploadForm