// Importing social media icons
import { AiFillMediumCircle, AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

interface SocialsProps {
  readonly invertColor?: boolean;
}

export default function Socials({ invertColor }: SocialsProps) {
  return (
    <div
      className={`flex items-center space-x-1 text-4xl ${
        !invertColor ? "md:text-background" : " md:text-5xl"
      } z-10`}>
      <a
        href="https://medium.com/react-cebu"
        target="_blank"
        rel="noopener noreferrer">
        <AiFillMediumCircle />
      </a>
      <a
        href="https://www.facebook.com/reactcebu/"
        target="_blank"
        rel="noopener noreferrer">
        <MdFacebook />
      </a>
      <a
        href="https://x.com/reactcebu"
        target="_blank"
        rel="noopener noreferrer">
        <AiFillTwitterCircle />
      </a>
    </div>
  );
}
