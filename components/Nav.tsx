import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/images/logo.svg";
import { metadata } from "@/app/layout";
import { BsSearch } from "react-icons/bs";

const Nav = () => {
  return (
    <>
      <nav className="relative w-full">
        <div className="flex mb-16 w-full p-6 bg-gray-900 justify-between">
          <Link href="/" className="flex gap-2">
            <Image
              alt={metadata.title}
              src={logo}
              width={30}
              height={30}
              className="object-contain mx-2"
            />
          </Link>
          <div className="relative w-1/3 flex space-x-4">
            <input
              type="search"
              className="relative h-8 rounded-full px-2 py-1 w-auto"
              placeholder="Search"
            />
            <button className="baseline mb-1">
              <BsSearch color="white" size={30} />
            </button>
          </div>
          <div className="relative">Hamburger</div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
