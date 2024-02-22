import Link from "next/link";
import { PencilIcon } from "@heroicons/react/24/outline";

export default function Car() {
  return (
    <>
      <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Car Name</h2>
          <div>Model</div>
        </div>

        <div className="flex gap-2">
          Delete
          <Link href={"/"}>
            <PencilIcon width={30} color="orange" />
          </Link>
        </div>
      </div>
    </>
  );
}
