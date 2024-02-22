import Car from "@/app/ui/car";
import Link from "next/link";

export default function Page() {
    return (
      <>
        <div className="my-18 h-fit sm:m-20">
        
        <h1 className="text-2xl font-bold text-center">Cars</h1>
        <Link href={"/dashboard/addCar"}>Add Car</Link>
        <div className="my-20">

          
        <Car/>
          

          
        </div>
      </div>
      </>
    );
  }
  