import Link from "next/link";
import { useRouter } from "next/navigation";

import { showFooterInfo, hideFooterInfo } from "@/app/scripts/scripts";

interface NavButtonProps {
  readonly text: string;
}

export default function NavButton({ text }: NavButtonProps) {
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
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
      onClick={handleClick}
      className="font-outfitRegular lg:text-lg capitalize">
      {text}
    </Link>
  );
}
