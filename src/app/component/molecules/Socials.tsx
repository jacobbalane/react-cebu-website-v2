import { AiFillMediumCircle, AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

export default function Socials() {
  return (
    <div className="flex items-center space-x-1 text-4xl md:text-background z-10">
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
