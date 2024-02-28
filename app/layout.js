import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import connectMongoDB from "./lib/mongodb";

connectMongoDB();

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shadow",
  description: "Created by Bonotti.",
};

export default function RootLayout({ children }) {
  return (
    <html className=" bg-white" lang="en">
      <body className={`${inter.className} w-full h-[920px] `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
