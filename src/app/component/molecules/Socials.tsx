import { AiFillMediumCircle, AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

export default function Socials() {
  return (
    <div className="flex items-center space-x-1 text-4xl md:text-background z-10">
      <AiFillMediumCircle />
      <MdFacebook />
      <AiFillTwitterCircle />
    </div>
  );
}
