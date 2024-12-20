"use client"; // Enabling client-side rendering

// Importing Next.js components
import Link from "next/link";
import { useRouter } from "next/navigation";

// Importing React Icons
import { MdArrowOutward } from "react-icons/md";

// Importing custom scripts
import {
  showFooterInfo,
  hideFooterInfo,
  setActiveNavButton,
} from "@/app/scripts/scripts";

interface ButtonProps {
  readonly text: string;
  readonly link: string;
  readonly accent?: boolean;
  readonly menu?: boolean;
  readonly index?: number;
}

export default function Button({
  text,
  link,
  accent,
  menu,
  index = 0,
}: ButtonProps) {
  const router = useRouter();
  const navs = ["home", "events", "about", "connect"];

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, text: string) {
    e.preventDefault();
    if (navs.includes(text)) text = "/" + text;
    if (text === "/connect") {
      hideFooterInfo();
    } else {
      showFooterInfo();
    }
    setActiveNavButton(index);
    router.push(text === "home" ? "/" : `${text}`);
  }

  return (
    <Link
      href="/"
      onClick={(e) => handleClick(e, link)}
      className={`w-full flex justify-center items-center z-10 px-8 py-3 rounded-md select-none font-outfitMedium md:text-xl lg:text-2xl ${
        menu ? "text-xl" : ""
      } ${
        accent
          ? "text-accent-2 bg-accent-1 border-2 border-foreground"
          : "text-background bg-foreground"
      }`}>
      {text}
      {accent && <MdArrowOutward className=" text-lg ml-2" />}
    </Link>
  );
}
