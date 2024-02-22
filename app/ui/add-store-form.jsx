"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

export default function AddStoreForm() {
  const [name,setName] = useState("");
  const [location,setLocation] = useState("");

  const router = useRouter();


  const handleSubmit = async () => {
    if (!name || !location) {
      alert("Store name and location are required.")
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/stores',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          location: location
        }),
      });
      if (response.ok) {
        router.push("/dashboard/stores")
        router.refresh();
      } else {
        throw new Error("Failed to create a store");
      }
    } catch (error) {
      console.log(error)
    }

    return false;
  }

  return (
    <>
    
    <div className="my-18 h-fit sm:m-20">
      <a
        href="/dashboard/stores"
        className="flex w-fit h-[48px] items-center justify-center gap-2 rounded-md bg-green-600 p-3 text-md text-white font-medium hover:bg-green-500 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <ArrowLeftCircleIcon width={30} color="white"/>
        <div className="hidden md:block">Back</div>
      </a>
        <h1 className="text-2xl font-bold text-center mt-5">Add New Store</h1>
        <form className="flex flex-col gap-3 mt-8 items-center" action={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Store Name"
            className="rounded-md border border-slate-500 px-8 py-2"
          />
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Store Location"
            className="rounded-md border border-slate-500 px-8 py-2"
          />
          <button type="submit" className="bg-green-600 hover:bg-green-500 flex w-fit h-[58px] mt-4 items-center justify-center gap-2 rounded-md p-3 text-md text-white font-bold  md:flex-none md:justify-start md:p-2 md:px-3">
          <PlusCircleIcon width={30} color="white" />
          <div className="hidden md:block">Add Store</div>
          </button>
        </form>
      </div>
    </>
  );
}
