"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

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
      <a
        href="/dashboard/cars"
        className="flex w-fit h-[48px] items-center justify-center gap-2 rounded-md bg-green-600 p-3 text-md text-white font-medium hover:bg-green-500 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <ArrowLeftCircleIcon width={30} color="white"/>
        <div className="hidden md:block">Back</div>
        
      </a>
        <h1 className="text-2xl font-bold text-center mt-5">Add New Car</h1>
        {/* Add New Car Form */}
      </div>
    </>
  );
}
