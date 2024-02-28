import Link from "next/link";
import { EyeIcon, PencilIcon } from "@heroicons/react/24/outline";
import EditButton from "./btn-edit";
import DeleteButton from "./btn-delete";

export default function Car() {
  return (
    <>
      <div className="w-full sm:max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://hips.hearstapps.com/hmg-prod/images/2024-bmw-i7-m70-119-643d69e564b2a.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              BMW i7 2024
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">Starting at €106,695</p>
          <div className="grid grid-cols-5">
            <a
              href="#"
              className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              <EyeIcon width={20} height={20} />
            </a>
            <EditButton />
            <DeleteButton />
          </div>
        </div>
      </div>
    </>
  );
}
