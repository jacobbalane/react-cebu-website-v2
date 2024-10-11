import Image from "next/image";

import Button from "../atoms/Button";
import groupCutout from "@/assets/images/group-cutout.png";
import reactIcon from "@/assets/images/react-icon.png";

export default function Hero() {
  return (
    <section className="relative flex justify-center overflow-hidden">
      <div className="relative flex flex-col items-center bg-background h-sectionMobileHeight md:h-sectionTabletHeight max-w-mdMaxW lg:max-w-lgMaxW mx-auto">
        <div className="flex items-center h-3/5 min-h-fit p-8  z-30">
          <div className="min-h-60 flex flex-col justify-center space-y-8 md:space-y-12">
            <p className="text-4xl md:text-6xl lg:text-7xl font-outfitBold text-center">
              Meet and collab with other <br className="hidden lg:block" />{" "}
              React developers in Cebu
            </p>
            <p className="font-outfitRegular text-xl md:text-2xl text-center">
              React Cebu is a community for developers by developers
            </p>
            <div className="flex flex-col md:flex-row md:justify-center space-y-3 md:space-y-0 md:space-x-3">
              <input
                type="text"
                placeholder="Your Email Address"
                className="
               lg:w-96 z-10 border-2 border-foreground rounded-md font-outfitRegular px-5 py-3 lg:text-lg"
              />
              <Button text="Join Newsletter" accent={true} />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={groupCutout}
        alt="group photo"
        className="absolute bottom-0 z-20"
      />
      <Image
        src={reactIcon}
        alt="react icon"
        className="absolute -bottom-14 md:-bottom-40 lg:-bottom-1/3 z-0 w-2/3 xl:w-7/12 opacity-10 animate-spin-slow"
      />
    </section>
  );
}
