import Image from "next/image";
import Button from "../atoms/Button";

import growingCommunityImage from "@/assets/images/landing-community.png";

export default function GrowingCommunity() {
  return (
    <section className="flex items-center bg-background md:h-sectionTabletHeight max-w-mdMaxW lg:max-w-lgMaxW mx-auto">
      <div className="flex flex-col md:flex-row-reverse items-center p-8 space-y-10 md:space-y-0">
        <Image
          src={growingCommunityImage}
          alt="Growing Community Image"
          className="md:w-1/2 md:ml-4 lg:ml-8"
        />{" "}
        <div className="flex flex-col md:w-1/2 space-y-8 md:space-y-20">
          <div className="flex flex-col space-y-4 md:space-y-10">
            <p className="text-3xl md:text-5xl lg:text-7xl font-outfitBold text-center md:text-left">
              Join Our Growing Community
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-outfitRegular text-center md:text-left">
              Be a part of something bigger. Together, we create, inspire, and
              make an impact.
            </p>
          </div>
          <div className="w-full md:w-fit">
            <Button text="Be a Reactor today" accent={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
