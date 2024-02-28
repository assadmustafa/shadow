import Car from "@/app/components/car-card";
import AddButton from "@/app/components/btn-add"

export default function Page() {
    return (
      <>
      <div className="flex flex-col my-18 sm:m-20">
        <AddButton collection={"cars"} element={"car"} />
        <h1 className="text-2xl font-bold text-center mt-5 mb-10">Cars</h1>
        <div className="grid grid-cols-none md:grid-cols-4 gap-4">
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
        </div>
        
      </div>
    </>
    );
  }
  