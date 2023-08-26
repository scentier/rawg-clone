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
        <div className="flex flex-col-reverse">
          <div className="container mx-auto">
            <div className="float-right w-full md:w-5/6">{children}</div>
            <Aside />
          </div>
          <Nav />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
