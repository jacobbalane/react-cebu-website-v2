"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { showFooterInfo, hideFooterInfo } from "@/app/scripts/scripts";

import { MdArrowOutward } from "react-icons/md";

interface ButtonProps {
  readonly text: string;
  readonly link: string;
  readonly accent?: boolean;
  readonly menu?: boolean;
}

export default function Button({ text, link, accent, menu }: ButtonProps) {
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, text: string) {
    e.preventDefault();
    if (text === "connect") {
      hideFooterInfo();
    } else {
      showFooterInfo();
    }
    router.push(text === "home" ? "/" : `/${text}`);
  }

  return (
    <Link
      href="/"
      onClick={(e) => handleClick(e, link)}
      className={`flex justify-center items-center z-10 px-8 py-3 rounded-md font-outfitMedium md:text-xl lg:text-2xl ${
        menu ? "text-xl" : ""
      } ${
        accent
          ? "text-accent-2 bg-accent-1 border-2 border-foreground"
          : "text-background bg-foreground md:w-fit"
      }`}>
      {text}
      {accent && <MdArrowOutward className=" text-lg ml-2" />}
    </Link>
  );
}
