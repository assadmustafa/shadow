'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { InboxArrowDownIcon } from "@heroicons/react/24/outline";

export default function EditStoreForm({id, name, location}) {
  const [newName,setNewName] = useState(name);
  const [newLocation,setNewLocation] = useState(location);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/stores/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        newName: newName,
        newLocation: newLocation
      })
    })
    if (!response.ok) {
      throw new Error("Failed to update store")
    }
    router.push("/dashboard/stores");
    router.refresh();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="flex flex-col gap-3 mt-8 items-center">
      <label htmlFor="name" >Store Name</label>
      <input
        type="text"
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        placeholder="Enter store name"
        required
        className="w-[400px] rounded-md border border-slate-500 px-4 py-2 mb-2"
      />
      <label htmlFor="location" >Store Location</label>
      <input
        type="text"
        onChange={(e) => setNewLocation(e.target.value)}
        value={newLocation}
        placeholder="Enter store location"
        className="w-[400px] rounded-md border border-slate-500 px-4 py-2 mb-2"
      />
      <button onClick={handleSubmit} className="bg-green-600 hover:bg-green-500 flex w-fit h-[58px] mt-4 items-center justify-center gap-2 rounded-md p-3 text-md text-white font-medium  md:flex-none md:justify-start md:p-2 md:px-3">
      <InboxArrowDownIcon width={30} color="white" />
      <div className="hidden md:block">Save Changes</div>
      </button>
    </form>
  );
}
