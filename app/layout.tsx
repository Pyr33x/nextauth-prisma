import { Navigation } from "~/components/shared/navbar";
import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next-Prisma",
  description: "NextAuth Playground",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} h-full w-full bg-neutral-950`}>
        <Navigation />
        <main className="z-10 flex min-h-screen justify-center scroll-smooth py-36 antialiased selection:bg-violet-800 selection:text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
