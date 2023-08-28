import Aside from "@/components/Aside";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RAWG Clone",
  description: "Using Next.js",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div className="container mx-auto mb-6">
          <main className="float-right w-full md:w-5/6">{children}</main>
          <Aside />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
