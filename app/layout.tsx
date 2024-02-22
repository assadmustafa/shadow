import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/nav";
import Footer from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadow",
  description: "Created by Bonotti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full bg-white" lang="en">
      <body className={`${inter.className} w-full h-full`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
