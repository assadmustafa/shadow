import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Car from "../ui/car";
import Link from "next/link";

export default async function Page() {
  const session = await getServerSession(options);

  if (!session) {
    return redirect("/api/auth/signin?callbackUrl=/");
  }

  return (
    <>
      <div className="my-18 h-fit sm:m-20">
        <h1 className="text-2xl font-bold text-center">Dashboard</h1>

        <div className="my-20">
          <div className="">
            <a
              href="#"
              className="inline-block text-black float-left px-4 py-2 no-underline border border-solid border-gray-300 hover:bg-sky-100 transition duration-300"
            >
              {" "}
              &laquo;{" "}
            </a>
            <a
              href="#"
              className="inline-block bg-blue-500 border-blue-500 text-white float-left px-4 py-2 no-underline border border-solid hover:cursor-default"
            >
              1
            </a>
            <a
              href="#"
              className="inline-block text-black float-left px-4 py-2 no-underline border border-solid border-gray-300 hover:bg-sky-100 transition duration-300 "
            >
              2
            </a>
            <a
              href="#"
              className="inline-block text-black float-left px-4 py-2 no-underline border border-solid border-gray-300 hover:bg-sky-100 transition duration-300"
            >
              3
            </a>
            <a
              href="#"
              className="inline-block text-black float-left px-4 py-2 no-underline border border-solid border-gray-300 hover:bg-sky-100 transition duration-300"
            >
              4
            </a>
            <a
              href="#"
              className="inline-block text-black float-left px-4 py-2 no-underline border border-solid border-gray-300 hover:bg-sky-100 transition duration-300"
            >
              5
            </a>
            <a
              href="#"
              className="inline-block text-black float-left px-4 py-2 no-underline border border-solid border-gray-300 hover:bg-sky-100 transition duration-300"
            >
              6
            </a>
            <a
              href="#"
              className="inline-block text-black float-left px-4 py-2 no-underline border border-solid border-gray-300 hover:bg-sky-100 transition duration-300"
            >
              {" "}
              &raquo;{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
