import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/layout/Header";
import MenuContent from "@/component/layout/MenuContent";
import Information from "@/component/Information";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rita, the Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${inter.className}`}>
        <Header />
        <div className="p-4 pb-0 md:hidden">
          <Information />
        </div>
        <div className="mx-auto w-full max-w-limit gap-10 p-4 md:flex">
          <aside className="md:top-23 sticky top-16 hidden h-max basis-1/5 space-y-4 md:block">
            <Information />
            <MenuContent />
          </aside>
          <main className="relative md:basis-4/5">{children}</main>
        </div>
      </body>
    </html>
  );
}
