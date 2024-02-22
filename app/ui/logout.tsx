import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { PowerIcon } from "@heroicons/react/24/outline";
import ArrowLeftStartOnRectangleIcon from "@heroicons/react/24/outline";

export default function Logout() {
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? (
        <form
          action={async () => {
            await signOut();
          }}
        >
          <button className="flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-black hover:text-white transition duration-500 md:flex-none md:justify-start md:p-2 md:px-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>

            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      ) : (
        <a
          href="/login"
          className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
          </svg>


          <div className="hidden md:block">Sign In</div>
        </a>
      )}
    </>
  );
}
