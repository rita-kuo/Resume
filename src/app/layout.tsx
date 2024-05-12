import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/layout/Header";
import MenuContent from "@/component/layout/MenuContent";
import Information from "@/component/Information";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume - Rita Kuo",
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
        <div className="md:hidden">
          <Information />
        </div>
        <div className="mx-auto w-full max-w-limit items-start gap-10 px-4 md:flex">
          <aside className="sticky hidden min-h-max basis-1/5 space-y-4 md:block">
            <Information />
            <MenuContent />
          </aside>
          <main className="relative py-4 md:basis-4/5">{children}</main>
        </div>
      </body>
    </html>
  );
}
