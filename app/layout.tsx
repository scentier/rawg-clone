import { Aside } from "@/components/Aside";
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
      <body className={inter.className}>
        <Nav />
        <div className="float-right">{children}</div>
        <Aside />
      </body>
    </html>
  );
};

export default RootLayout;
