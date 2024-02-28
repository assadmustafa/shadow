'use client'

import {  PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function AddButton({ collection, element }) {
  
  return (
    <Link href={`/dashboard/${collection}/add-${element}`} className="flex w-fit h-[48px] items-center justify-center gap-2 rounded-md bg-green-600 p-3 text-md text-white font-medium hover:bg-green-500 transition duration-500 md:flex-none md:justify-start md:p-2 md:px-3">
      <PlusCircleIcon width={30} color="white" /><div className="hidden md:block">Add new {element}</div> 
    </Link>
  );
}
