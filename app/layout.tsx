import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/dashboard/navbar";
import Slidebar from "./component/dashboard/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaufmann",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-400">
      <body className={inter.className}>
      <header>
        <Navbar/>
      </header>
      <div className="flex ">
         <Slidebar/>
      <main>{children}</main>
      </div>
     
</body>
    </html>
  );
}
