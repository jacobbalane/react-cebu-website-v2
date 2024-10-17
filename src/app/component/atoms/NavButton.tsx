// Importing Next.js components
import Link from "next/link";
import { useRouter } from "next/navigation";

//Importing React useEffect hook
import { useEffect } from "react";

// Importing custom scripts
import {
  showFooterInfo,
  hideFooterInfo,
  setActiveNavButton,
  highlightLastActiveButtons,
} from "@/app/scripts/scripts";

interface NavButtonProps {
  readonly text: string;
  readonly index?: number;
}

export default function NavButton({ text, index = 0 }: NavButtonProps) {
  const router = useRouter();

  useEffect(() => {
    highlightLastActiveButtons();
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (text === "connect") {
      hideFooterInfo();
    } else {
      showFooterInfo();
    }
    setActiveNavButton(index);
    router.push(text === "home" ? "/" : `/${text}`);
  }
  return (
    <Link
      href="/"
      onClick={handleClick}
      className="font-outfitRegular lg:text-lg capitalize nav-button">
      {text}
    </Link>
  );
}
