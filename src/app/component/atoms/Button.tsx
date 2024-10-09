import Link from "next/link";

import { MdArrowOutward } from "react-icons/md";

interface ButtonProps {
  readonly text: string;
  readonly accent?: boolean;
}

export default function Button({ text, accent }: ButtonProps) {
  return (
    <Link
      href="/"
      className={`flex justify-center items-center z-10 px-8 py-3 rounded-md font-outfitMedium lg:text-lg ${
        accent
          ? "text-foreground bg-accent-1 border-2 border-foreground"
          : "text-background bg-foreground"
      }`}>
      {text}
      {accent && <MdArrowOutward className=" text-lg ml-2" />}
    </Link>
  );
}
