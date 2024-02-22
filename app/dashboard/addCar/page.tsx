"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const [name,setName] = useState("");
  const [location,setLocation] = useState("");
  // definitions
  const [model,setModel] = useState("")
  const [year,setYear] = useState("")
  const [color,setColor] = useState("")
  const [price,setPrice] = useState("")
  const [mileage,setMileage] = useState("")
  const [engine,setEngine] = useState("")
  const [transmission,setTransmission] = useState("")
  const [seats,setSeats] = useState("")
  const [fuel,setFuel] = useState("")
  const [description,setDescription] = useState("")
  const [images,setImages] = useState("")

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
      <a href="/dashboard/stores" className="bg-gray-500 font-bold w-fit rounded-md text-white py-3 px-6">Back</a>

        <h1 className="text-2xl font-bold text-center">Add Store</h1>
        <form className="flex flex-col gap-3 mt-8" action={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="store-name"
            className="rounded-md border border-slate-500 px-8 py-2"
          />
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="store-location"
            className="rounded-md border border-slate-500 px-8 py-2"
          />
          <button type="submit" className="bg-green-500 font-bold w-fit rounded-md text-white py-3 px-6">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
