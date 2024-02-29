import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(options);

  if (!session) {
    return redirect("/api/auth/signin?callbackUrl=/");
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
        <p className="font-bold text-2xl cursor-default">{session?.user.name}</p>
      </div>
    </>
  );
}
