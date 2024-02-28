import React from "react";
import EditStoreForm from "@/app/components/form-edit-store";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

const getStoreById = async(id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/stores/${id}`, {
      cache: 'no-store'
    })
    if (!response.ok) {
      throw new Error("Failed to fetch store")
    }
    return response.json()
  
  } catch (error) {
    console.log(error)
  }
}

export default async function EditStore({params}) {
  const {id} = params;
  const {store} = await getStoreById(id);
  const {name,location} = store;


  return (
    <div className="my-18 h-fit sm:m-20">
      <a
        href="/dashboard/stores"
        className="flex w-fit h-[48px] items-center justify-center gap-2 rounded-md bg-green-600 p-3 text-md text-white font-medium hover:bg-green-500 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <ArrowLeftCircleIcon width={30} color="white"/>
        <div className="hidden md:block">Back</div>
      </a>

      <h1 className="text-2xl font-bold text-center mt-5">Edit Store</h1>
      <EditStoreForm id={id} name={name} location={location} />
    </div>
  );
}
