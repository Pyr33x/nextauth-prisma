import { Separator } from "~/components/ui";
import { Grid } from "~/components/shared";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4">
      <Header />
      <Separator className="my-6 rounded-full" />
      <Grid />
    </div>
  );
}

function Header() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-black text-white md:text-6xl">
          Next-Auth + Prisma
        </h1>
        <p className="mt-2 text-balance text-center text-xl font-medium text-neutral-600 md:text-2xl">
          This is a boilerplate template for{" "}
          <span className="font-mono">"Next-Auth@Beta" + "Prisma"</span> stack.
        </p>
        <a
          href="https://github.com/pyr33x/nextauth-prisma"
          target="_blank"
          rel="noopener noreferrer"
          className="my-2 text-center font-mono text-lg font-bold text-blue-500 hover:underline"
        >
          Source on Github
        </a>
      </div>
    </>
  );
}
