"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import uploadPhoto from "@/app/dashboard/clients/add-client/upload-actions.js";
import axios from 'axios';

export default function AddClientForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [clientNumber, setClientNumber] = useState("");
  const formRef = useRef();
  const router = useRouter();

  const handleFileChange = () => {
    
  };

  async function handleUpload() {
    
  }

  

  const handleSubmit = async () => {
    if (
      !firstName
    ) {
      alert("First name required.");
      return;
    }

    if (
      !lastName
    ) {
      alert("Last name required.");
      return;
    }

    if (
      !street
    ) {
      alert("Street name required.");
      return;
    }

    if (
      !houseNumber
    ) {
      alert("House number required.");
      return;
    }

    if (
      !postcode
    ) {
      alert("Postcode required.");
      return;
    }

    if (
      !city
    ) {
      alert("City required.");
      return;
    }

    try {
      // generate client number
      const randomNum = Math.floor(
        Math.random() * (999999 - 100000 + 1) + 100000
      );

      setClientNumber(randomNum);

      const mongoResponse = await fetch("http://localhost:3000/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: firstName + " " + lastName,
          address: street + " " + houseNumber,
          postcode: postcode,
          city: city,
          clientNumber: clientNumber,
        }),
      });

      console.log("Mongo Response:" + mongoResponse.data);
      
      if (mongoResponse.ok) {
        router.push("/dashboard/clients");
        router.refresh();
      } else {
        throw new Error("Failed to add new client");
      }
    } catch (error) {
      console.log(error);
    }

    return false;
  };

  return (
    <form
      className="flex flex-col gap-3 mt-8 items-center text-sm"
      action={handleSubmit}
      ref={formRef}
    >
      <div className=" bg-sky-100 p-5 items-center rounded-lg">
        <h1 className="text-xl font-bold text-center my-2">Add New Client</h1>

        <div className="grid grid-cols-2 gap-4 my-3">
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            placeholder="first name"
            className="rounded-md border border-slate-500 pl-3 col-span-1"
          />
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            placeholder="last name"
            className="rounded-md border border-slate-500 pl-3 py-2 col-span-1"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            onChange={(e) => setStreet(e.target.value)}
            value={street}
            placeholder="street name"
            className="rounded-md border border-slate-500 pl-3 col-span-2"
          />
          <input
            type="text"
            onChange={(e) => setHouseNumber(e.target.value)}
            value={houseNumber}
            placeholder="house number"
            className="rounded-md border border-slate-500 pl-3 py-2 col-span-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 my-3">
          <input
            type="text"
            onChange={(e) => setPostcode(e.target.value)}
            value={postcode}
            placeholder="postcode"
            className="rounded-md border border-slate-500 pl-3 col-span-1"
          />
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="city"
            className="rounded-md border border-slate-500 pl-3 py-2 col-span-1"
          />
        </div>
        <div className="w-[50%]">
          <label
            className="block ml-2 mb-2 text-sm font-medium text-gray-900"
            htmlFor="file_input"
          >
            Upload profile picture
          </label>
          <input
            className="block w-full text-sm  border  rounded-lg cursor-pointer  text-white focus:outline-none bg-blue-500 border-gray-600 placeholder-white"
            id="file_input"
            type="file"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-500 transition duration-300 flex w-fit h-[50px] mt-4 items-center justify-center gap-2 rounded-md p-3 text-md text-white font-bold  md:flex-none md:justify-start md:p-2 md:px-3 float-right"
        >
          <PlusCircleIcon width={30} color="white" />
          Add Client
        </button>
      </div>
    </form>
  );
}
