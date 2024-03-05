"use client";

import React from "react";
import Login from "../../lib/login";
import { SessionProvider } from "next-auth/react";

const page = () => {
  return (
    <SessionProvider>
      <div className="h-screen">
        <Login />
      </div>
    </SessionProvider>
  );
};

export default page;
