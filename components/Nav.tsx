import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/images/logo.svg";
import { metadata } from "@/app/layout";
import { BsSearch } from "react-icons/bs";

const Nav = () => {
  return (
    <>
      <nav className="relative w-full bg-stone-300">
        <div className="container mx-auto flex mb-16 w-full py-6  justify-between text-stone-500">
          <Link href="/" className="flex gap-2 w-1/5">
            <Image
              alt={metadata.title}
              src={logo}
              width={30}
              height={30}
              className="object-contain mx-2"
            />
          </Link>
          <div className="relative w-4/6 flex space-x-4">
            <input
              type="search"
              className="relative h-8 px-3 pb-2 pt-1 rounded-full w-full"
              placeholder="Search"
            />
            <button className="baseline mb-1">
              <BsSearch color="white" size={30} />
            </button>
          </div>
          <div className="relative w-1/6 px-4 pt-1">Hamburger</div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
