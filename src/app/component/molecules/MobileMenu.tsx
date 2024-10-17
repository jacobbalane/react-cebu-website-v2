"use client"; // Enabling client-side rendering

// Importing Next.js components
import Link from "next/link";
import { useRouter } from "next/navigation";

// Importing React
import React from "react";

// Importing custom scripts
import {
  hideMenu,
  showFooterInfo,
  hideFooterInfo,
} from "@/app/scripts/scripts";

// Importing atom components
import Button from "../atoms/Button";

export default function MobileMenu() {
  const links = ["home", "about", "events", "connect"];
  const router = useRouter();

  function handleClick(
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
    text: string
  ) {
    e.preventDefault();
    if (text === "connect") {
      hideFooterInfo();
    } else {
      showFooterInfo();
    }
    hideMenu();
    router.push(text === "home" ? "/" : `/${text}`);
  }
  return (
    <div id="menu" className="hidden md:hidden fixed top-0 z-40">
      <div className="flex flex-col justify-center bg-background fixed h-screen w-full space-y-10 px-8 py-24">
        <div className="flex flex-col items-center text-2xl font-outfitMedium capitalize w-full space-y-4">
          {links.map((link) => (
            <Link key={link} href="/" onClick={(e) => handleClick(e, link)}>
              {link}
            </Link>
          ))}
        </div>
        <button onClick={(e) => handleClick(e, "connect")}>
          <Button text="Support Us" link="connect" menu={true} />
        </button>
      </div>
    </div>
  );
}
