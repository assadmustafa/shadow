"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/outline";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { red } from "@mui/material/colors";

const PhotoCard = ({ url, onClick }) => {
  const [isPending, startTransition] = useTransition();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative">
      <div
        className="p-1 border-2 border-solid border-gray-300 rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div className="absolute top-1 right-1 opacity-75">
            <button type="button" onClick={() => startTransition(onClick)}>
              {isPending ? (
                <Stack sx={{ color: red[500] }} spacing={2} direction="row">
                  <CircularProgress color="inherit" />
                </Stack>
              ) : (
                <TrashIcon
                  width={30}
                  height={30}
                  className="text-red-500 bg-white rounded-md"
                />
              )}
            </button>
          </div>
        )}

        <Image
          alt="car-images"
          src={url}
          width={100}
          height={60}
          className="w-[200px] h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default PhotoCard;
