import StoresTable from "@/app/components/stores-table";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import AddButton from "@/app/components/btn-add";

export default async function Page() {
  const session = await getServerSession(options);
  if (!session) {
    return redirect("/api/auth/signin?callbackUrl=/");
  }
    return (
      <>
        <div className="flex flex-col my-18 sm:m-20">
          <AddButton collection={'stores'} element={'store'}/>
            <h1 className="text-2xl font-bold text-center mt-5">Stores</h1>
            <StoresTable />
        </div>
      </>
    );
}
