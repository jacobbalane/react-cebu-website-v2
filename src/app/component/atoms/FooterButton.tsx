import Link from "next/link";

import { MdArrowOutward } from "react-icons/md";

interface LinkProps {
  readonly text: string;
}

export default function FooterButton({ text }: LinkProps) {
  return (
    <Link
      href="/"
      className="flex items-center font-outfitRegular border-b border-foreground w-fit md:text-xl lg:text-2xl">
      {text}
      <MdArrowOutward className="text-lg ml-2" />
    </Link>
  );
}
