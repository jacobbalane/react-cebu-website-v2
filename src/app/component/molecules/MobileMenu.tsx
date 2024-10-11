import React from "react";
import Button from "../atoms/Button";
import Link from "next/link";

interface MobileMenuProps {
  readonly isToggled: boolean;
  readonly toggleMenu: () => void;
}

export default function MobileMenu({ isToggled, toggleMenu }: MobileMenuProps) {
  const links = ["Home", "About", "Events", "Connect"];

  return (
    <div
      className={` ${
        isToggled ? "block" : "hidden"
      } flex flex-col justify-center bg-background fixed h-screen w-full z-40 space-y-10 px-8 py-24`}>
      <div className="flex flex-col items-center text-2xl font-outfitMedium w-full space-y-4">
        {links.map((link) => (
          <Link
            key={link}
            href="/"
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
              window.location.href = `/`;
            }}>
            <button>{link}</button>
          </Link>
        ))}
      </div>
      <Button text="Support Us" menu={true} />
    </div>
  );
}
