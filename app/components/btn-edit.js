'use client'

import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function EditButton({ element, id }) {
  
  return (
    <Link href={`/dashboard/edit-${element}/${id}`} className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <PencilSquareIcon width={20} color="white" />
    </Link>
  );
}
