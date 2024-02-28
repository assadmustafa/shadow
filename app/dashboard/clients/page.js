import AddButton from "@/app/components/btn-add";
import ClientsTable from "@/app/components/clients-table";

export default function Page() {
  return (
    <>
      <div className="flex flex-col my-18 sm:m-20">
        <AddButton collection={"clients"} element={"client"} />
        <h1 className="text-2xl font-bold text-center mt-5 mb-10">Clients</h1>
        <ClientsTable />
      </div>
    </>
  );
}
