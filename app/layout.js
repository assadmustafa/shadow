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
    <html className="flex flex-col h-screen justify-between bg-white" lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${inter.className} w-full h-screen `}>
        <Navbar />
        <div className="h-[1900px] sm:h-screen mb-auto">
        {children}
        </div>
        <div className="">
        <Footer />
        </div>
        
      </body>
    </html>
  );
}
