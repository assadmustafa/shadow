import Store from "@/app/ui/store";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="relative my-18 h-fit sm:m-20">
        <h1 className="text-2xl font-bold text-center">Stores</h1>
        <Link href={"/dashboard/addStore"} className="flex w-fit h-[48px] items-center justify-center gap-2 rounded-md bg-green-600 p-3 text-md text-white font-medium hover:bg-green-500 transition duration-500 md:flex-none md:justify-start md:p-2 md:px-3">
        <PlusCircleIcon width={30} color="white" />
        <div className="hidden md:block">Add Store</div>
          </Link>
        <div className="my-20 relative w-full float-left">
          <Store />
        </div>
      </div>
    </>
  );
}
