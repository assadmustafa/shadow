"use client";

import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
export default function page() {
  return (
    <>
    
    <div className="my-18 h-fit sm:m-20">
      <a
        href="/dashboard/clients"
        className="flex w-fit h-[48px] items-center justify-center gap-2 rounded-md bg-green-600 p-3 text-md text-white font-medium hover:bg-green-500 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <ArrowLeftCircleIcon width={30} color="white"/>
        <div className="hidden md:block">Back</div>
        
      </a>
        <h1 className="text-2xl font-bold text-center mt-5">Add New Client</h1>
        {/* Add New Car Form */}
      </div>
    </>
  );
}
