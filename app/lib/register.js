"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const delay = (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);
  
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ formData }),
        headers: {
          "content-type": "application/json",
        },
      });
  
      if (!res.ok) {
        const response = await res.json();
        setErrorMessage(response.message);
        toast.error(response.message, { theme: "colored" });
      } else {
        toast.success("Account has been created successfully!", { theme: "colored" });
        await delay(6000);
        router.refresh();
        router.push("/auth/login");
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
      setErrorMessage("An error occurred during registration");
      toast.error("An error occurred during registration", { theme: "colored" });
    } finally {
      setIsLoading(false); // Set loading back to false regardless of the outcome
    }
  };

  if (isLoading) {
    return (
      <>
        <div className="flex items-center justify-center h-full">
          <div className="mx-auto text-center">
            <ToastContainer theme="colored" />
            <Box sx={{ display: "flex" }} >
              <CircularProgress size={"100px"} />
            </Box>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1015px-BMW.svg.png"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Registration
              </h2>
            </div>
            <form onSubmit={handleSubmit} method="post" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    onChange={handleChange}
                    required={true}
                    value={formData.name}
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your Email address"
                    onChange={handleChange}
                    required={true}
                    value={formData.email}
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                    required={true}
                    value={formData.password}
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <button
                type="submit"
                value="Create User"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="/auth/login"
                className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
              >
                Login
              </a>
            </p>
          </>

          <p className="text-red-500">{errorMessage}</p>
        </div>
      </div>
    </>
  );
};

export default Register;
