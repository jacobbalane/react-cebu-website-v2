import Link from "next/link";

import { MdArrowOutward } from "react-icons/md";

interface ButtonProps {
  readonly text: string;
  readonly accent?: boolean;
  readonly menu?: boolean;
}

export default function Button({ text, accent, menu }: ButtonProps) {
  return (
    <Link
      href="/"
      className={`flex justify-center items-center z-10 px-8 py-3 rounded-md font-outfitMedium md:text-xl lg:text-2xl ${
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
