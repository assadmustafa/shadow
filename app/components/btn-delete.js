"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function DeleteButton({ collection, id }) {
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
    <button onClick={remove} className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <TrashIcon width={20} color="white" />
    </button>
  );
}
