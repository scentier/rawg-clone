import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/images/logo.svg";
import { metadata } from "@/app/layout";

const Nav = () => {
  return (
    <>
      <nav className="flex-between w-full mb-16 py-3 bg-gray-600">
        <Link href="/" className="flex gap-2">
          <Image
            alt={metadata.title}
            src={logo}
            width={30}
            height={30}
            className="object-contain mx-2"
          />
        </Link>
      </nav>
    </>
  );
};

export default Nav;
