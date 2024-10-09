import Link from "next/link";

interface NavButtonProps {
  readonly text: string;
}

export default function NavButton({ text }: NavButtonProps) {
  return (
    <Link href="/#" className="font-outfitRegular lg:text-lg">
      {text}
    </Link>
  );
}
