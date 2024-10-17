"use client"; // Enabling client-side rendering

// Importing Next.js components
import Image from "next/image";
import Link from "next/link";

// Importing React
import React from "react";

// Importing custom scripts
import { showMenu, hideMenu } from "@/app/scripts/scripts";

// Importing atom components
import Button from "../atoms/Button";
import NavButton from "../atoms/NavButton";

// Importing images
import logo from "@/assets/logo/react-cebu-logo.webp";

// Importing icon components
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import { BsDot } from "react-icons/bs";

export default function Header() {
  const navButtons = ["home", "about", "events", "connect"];

  return (
    <header className="sticky w-full top-0 z-50 bg-background">
      <div className="flex justify-between items-center h-24 md:h-36 md:max-w-mdMaxW lg:max-w-lgMaxW px-8 mx-auto">
        {/* Logo on the Left */}
        <Link href="/" className="md:w-52">
          <Image src={logo} alt="Logo" priority={true} className="w-10" />
        </Link>

        {/* Centered Links */}
        <nav className="hidden md:flex space-x-4">
          {navButtons.map((button, index) => (
            <React.Fragment key={button}>
              <NavButton text={button} index={index} />
              {index !== navButtons.length - 1 && (
                <BsDot className="text-2xl text-accent-3" />
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Support Us Button on the Right */}
        <div className="hidden md:block md:w-52">
          <Button text="Support Us" link="connect" />
        </div>
        <RxHamburgerMenu
          className="md:hidden text-3xl show-menu-icon"
          onClick={showMenu}
        />
        <RiCloseLargeFill
          className="hidden md:hidden text-3xl hide-menu-icon"
          onClick={hideMenu}
        />
      </div>
    </header>
  );
}
