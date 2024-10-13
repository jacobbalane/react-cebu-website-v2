import Link from "next/link";

interface NavButtonProps {
  readonly text: string;
}

export default function NavButton({ text }: NavButtonProps) {
  return (
    <Link
      href={text === "home" ? "/" : `/${text}`}
      className="font-outfitRegular lg:text-lg capitalize nav-button">
      {text}
    </Link>
  );
}
