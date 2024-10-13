"use client";

import React from "react";
import Button from "../atoms/Button";
import Link from "next/link";
import { hideMenu } from "@/app/scripts/scripts";

export default function MobileMenu() {
  const links = ["home", "about", "events", "connect"];

  return (
    <div id="menu" className="hidden md:hidden fixed top-0 z-40">
      <div className="flex flex-col justify-center bg-background fixed h-screen w-full space-y-10 px-8 py-24">
        <div className="flex flex-col items-center text-2xl font-outfitMedium capitalize w-full space-y-4">
          {links.map((link) => (
            <Link
              key={link}
              href={link === "home" ? "/" : `/${link}`}
              onClick={() => hideMenu()}>
              {link}
            </Link>
          ))}
        </div>
        <Button text="Support Us" menu={true} />
      </div>
    </div>
  );
}
