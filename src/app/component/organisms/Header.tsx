"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { showMenu, hideMenu } from "@/app/scripts/scripts";

import Button from "../atoms/Button";
import NavButton from "../atoms/NavButton";

import logo from "@/assets/logo/react-cebu-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import { BsDot } from "react-icons/bs";

export default function Header() {
  const navButtons = ["home", "about", "events", "connect"];

  return (
    <header className="sticky w-full top-0 z-50 bg-background">
      <div className="flex justify-between items-center h-24 md:h-36 md:max-w-mdMaxW lg:max-w-lgMaxW px-8 mx-auto">
        {/* Logo on the Left */}
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            className="w-10 md:w-16"
            priority={true}
          />
        </Link>

        {/* Centered Links */}
        <nav className="hidden md:flex space-x-4">
          {navButtons.map((button, index) => (
            <React.Fragment key={button}>
              <NavButton text={button} />
              {index !== navButtons.length - 1 && (
                <BsDot className="text-2xl" />
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Support Us Button on the Right */}
        <div className="hidden md:block">
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
