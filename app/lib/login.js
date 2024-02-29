import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const email = useRef("");
  const pass = useRef("");
  const router = useRouter();
  const delay = (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };

  const onSubmit = async () => {
    setIsLoading(true); // Set loading to true when the sign-in process starts

    try {
      const result = await signIn("credentials", {
        email: email.current,
        password: pass.current,
        redirect: false,
      });
      
      toast.success(`Welcome! `, {
        theme: "colored",
      });
      
      await delay(6000);
      router.push("/dashboard");
      await delay(1000);
      window.location.reload();

      // Handle result if needed
      console.log(result);
    } catch (error) {
      console.error("An error occurred during sign-in:", error);
      toast.error("An error occurred during sign-in", { theme: "colored" });
    } finally {
      await delay(1000);
      setIsLoading(false); // Set loading back to false regardless of the outcome
    }
  };

  return (
    <>
      <div id="hide" className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>

        <div className="space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {isLoading ? (
            <div className="flex items-center justify-center">
              <ToastContainer theme="colored" />
              <Box sx={{ display: "flex" }} className="relative animate-pulse">
                <img
                  className="mx-auto h-20 w-20 mb-10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1015px-BMW.svg.png"
                  alt="Your Company"
                />
                <CircularProgress
                  size={"95px"}
                  sx={{
                    position: "absolute",
                    top: -7,
                    left: -7,
                    zIndex: 1,
                  }}
                  thickness={4}
                />
              </Box>
            </div>
          ) : (
            <>
              <div>
                <img
                  className="mx-auto h-10 w-auto mb-10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1015px-BMW.svg.png"
                  alt="Your Company"
                />
                <h2 className="mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in
                </h2>
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
                    autoComplete="email"
                    required
                    onChange={(e) => (email.current = e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-blue-600 hover:text-blue-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => (pass.current = e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={onSubmit}
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Sign in
                </button>
              </div>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{" "}
                <a
                  href="/auth/register"
                  className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
                >
                  Sign up
                </a>
              </p>
              <ToastContainer theme="colored" />
            </>
          )}
        </div>
      </div>
    </>
  );
}
