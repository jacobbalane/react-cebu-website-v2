import Image from "next/image";
import Link from "next/link";

import Button from "../atoms/Button";
import NavButton from "../atoms/NavButton";

import logo from "@/assets/logo/react-cebu-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsDot } from "react-icons/bs";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="flex justify-between items-center h-24 md:h-36 md:max-w-mdMaxW lg:max-w-lgMaxW px-8 mx-auto">
        {/* Logo on the Left */}
        <Link href="/">
          <Image src={logo} alt="Logo" className="w-10 md:w-16" />
        </Link>

        {/* Centered Links */}
        <nav className="hidden md:flex space-x-4">
          <NavButton text="About" />
          <BsDot className="text-2xl" />
          <NavButton text="Events" />
          <BsDot className="text-2xl" />
          <NavButton text="Connect" />
        </nav>

        {/* Support Us Button on the Right */}
        <div className="hidden md:block">
          <Button text="Support Us" />
        </div>
        <RxHamburgerMenu className="md:hidden text-3xl" />
      </div>
    </header>
  );
}
