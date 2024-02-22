'use client'

import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface EditButtonProps {
  element: string;
  id: string;
}

export default function EditButton({ element, id }: EditButtonProps) {
  const capitalizedElement = element.charAt(0).toUpperCase() + element.slice(1);
  
  return (
    <Link href={`/dashboard/edit${capitalizedElement}/${id}`} className="flex w-fit h-[48px] items-center justify-center gap-2 rounded-md bg-yellow-500 p-3 text-md text-white font-medium hover:bg-yellow-400 transition duration-500 md:flex-none md:justify-start md:p-2 md:px-3">
      <PencilSquareIcon width={30} color="white" />
    </Link>
  );
}
