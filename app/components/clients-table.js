import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function ClientsTable() {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-sky-100">
          <div>
            <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              className="mt-5 ml-5 inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
              type="button"
            >
              <span className="sr-only">Action button</span>
              Action
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdownAction"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
            >
              <ul
                className="py-1 text-sm text-gray-700 "
                aria-labelledby="dropdownActionButton"
              >
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                    Reward
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                    Promote
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100   ">
                    Activate account
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                >
                  Delete User
                </a>
              </div>
            </div>
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="mt-5 absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="mt-5 mr-6 block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-9 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Adres
              </th>
              <th scope="col" className="px-6 py-3">
                Postcode
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Client Number
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
              <th
                scope="row"
                className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"
                  alt="Jese image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">Assad Mustafa</div>
                  <div className="font-normal text-gray-500">
                    mr.assad@live.fr
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">
                <div className="font-normal text-gray-500">
                  <p className="float-left">Zuil</p>{" "}
                  <p className="float-left pl-1">32</p>
                </div>
              </td>

              <td className="px-6 py-4">6641 MG</td>
              <td className="px-6 py-4">Beuningen</td>
              <td className="px-6 py-4">1168379</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600  hover:underline"
                >
                  <PencilSquareIcon width={20} color="blue" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
