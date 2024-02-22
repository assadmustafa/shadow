import Link from "next/link";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import DeleteButton from "./delete-btn";
import EditButton from "./edit-btn";

interface StoreType {
  _id: string;
  name: string;
  location: string;
  // Add other properties if necessary
}

const getStores = async() => {
  try {
    const response = await fetch('http://localhost:3000/api/stores', {cache: "no-store"});
    if (!response.ok) {
      throw new Error("Failed to load stores");
    }
    return response.json();
  } catch (error) {
    console.log("Error loading stores: ", error)
  }
}

export default async function Store() {
  const { stores }: { stores: StoreType[] } = await getStores();
  return (
    <>
    {stores.map((s) => (
      
    
      <div key={s._id} className="p-4 rounded-lg border border-slate-300 my-3 flex justify-between gap-5 items-start">
        
        <div>
          <h2 className="font-bold text-2xl">{s.name}</h2>
          <div>{s.location}</div>
        </div>

        <div className="flex gap-2">
          <DeleteButton collection={'stores'} id={s._id}/>
          <EditButton element="store" id={s._id} />
        </div>
      </div>
      ))}
    </>
  );
}
