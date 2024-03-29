"use client";

import Car from "@/app/components/car-card";
import AddButton from "@/app/components/btn-add";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const delay = (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };

  useEffect(() => {
    const fetchData = async () => {
      await delay(2000);
      setIsLoading(false);
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
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
        <div className="flex flex-col my-18 sm:m-20">
          <AddButton collection={"cars"} element={"car"} />
          <h1 className="text-2xl font-bold text-center mt-5 mb-10">Cars</h1>
          <div className="grid grid-cols-none md:grid-cols-4 gap-4 scroll-smooth">
            
            <motion.div
              initial={{ opacity: 0, y: "-200%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: "100%" }}
            >
              <Car />
            </motion.div>
            <motion.div
              transition={{ delay: 0.2 }}
              initial={{ opacity: 0, y: "-200%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: "100%" }}
            >
              <Car />
            </motion.div>
            <motion.div
              transition={{ delay: 0.4 }}
              initial={{ opacity: 0, y: "-200%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: "100%" }}
            >
              <Car />
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}
