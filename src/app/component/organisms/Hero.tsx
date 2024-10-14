import Image from "next/image";

import Button from "../atoms/Button";
import groupCutout from "@/assets/images/group-cutout.png";
import reactIcon from "@/assets/images/react-icon.png";
import SectionText from "../atoms/SectionText";

export default function Hero() {
  return (
    <section className="relative flex justify-center overflow-hidden">
      <div className="relative flex flex-col items-center bg-background h-smallScreen md:h-largeScreen max-w-mdMaxW lg:max-w-lgMaxW mx-auto">
        <div className="flex items-center h-3/5 min-h-fit p-8  z-30">
          <div className="min-h-60 flex flex-col justify-center space-y-8 md:space-y-12">
            <SectionText
              title="Meet and collab with other React developers in Cebu"
              description="React Cebu is a community for developers by developers"
              alignCenterOnSmallScreen={true}
              alignCenterOnLargeScreen={true}
            />
            <div className="flex flex-col md:flex-row md:justify-center space-y-3 md:space-y-0 md:space-x-3">
              <input
                type="text"
                placeholder="Your Email Address"
                className="
               lg:w-96 z-10 border-2 border-foreground rounded-md font-outfitRegular px-5 py-3 lg:text-lg"
              />
              <Button text="Join Newsletter" link="home" accent={true} />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={groupCutout}
        alt="group photo"
        priority={true}
        className="absolute bottom-0 z-20"
      />
      <Image
        src={reactIcon}
        alt="react icon"
        placeholder="blur"
        priority={true}
        className="absolute -bottom-14 md:-bottom-40 lg:-bottom-1/3 z-0 w-2/3 xl:w-7/12 opacity-10 animate-spin-slow"
      />
    </section>
  );
}
