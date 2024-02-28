"server client";

import UploadForm from "../../components/form-upload";
import { getAllPhotos } from "../clients/add-client/upload-actions";
import PhotoList from "../../components/photos-list";

export default async function page() {
  const photos = await getAllPhotos();

  return (
    <div className="h-auto">
      <UploadForm />
      <h1 className="text-2xl font-bold text-center">Explore All Photos</h1>
      <PhotoList photos={photos || []} />
    </div>
  );
}
