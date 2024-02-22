"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
    collection: string;
    id: string;
  }

export default function DeleteButton({ collection, id }: DeleteButtonProps) {
  const router = useRouter();
  const remove = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const response = await fetch(
        `http://localhost:3000/api/${collection}?id=${id}`,
        {
          method: "DELETE",
        }
      );
      // refresh the page after delete
      if (response.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={remove} className="flex w-fit h-[48px] items-center justify-center gap-2 rounded-md bg-red-600 p-3 text-md text-white font-medium hover:bg-red-500 transition duration-500 md:flex-none md:justify-start md:p-2 md:px-3">
      <TrashIcon width={30} color="white" />
    </button>
  );
}
