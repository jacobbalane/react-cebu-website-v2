// Importing React icon
import { MdArrowOutward } from "react-icons/md";

interface LinkProps {
  readonly text: string;
  readonly link: string;
}

export default function FooterButton({ text, link }: LinkProps) {
  return (
    <a
      href={link}
      target={link === "/" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="flex items-center font-outfitMedium text-accent-2 border-b-2 border-accent-2 w-fit md:text-xl lg:text-2xl">
      {text}
      <MdArrowOutward className="text-lg ml-2" />
    </a>
  );
}
