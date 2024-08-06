import { redirect } from "next/navigation";
import { auth } from "~/lib/auth";

export default async function Dashboard() {
  const session = await auth();
  if (!session) return redirect("/");
  return (
    <div className="mx-auto max-w-2xl px-4 md:px-0">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-black text-white md:text-6xl">
          Welcome <span className="text-blue-600">{session?.user?.name}</span>
          👋
        </h1>
        <p className="mt-2 text-balance text-center text-xl font-medium text-neutral-600 md:text-2xl">
          Here's your dashboard, you've successfully authenticated with Github.
        </p>
      </div>
    </div>
  );
}
