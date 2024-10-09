import Image from "next/image";

import Button from "../atoms/Button";
import groupCutout from "@/assets/images/group-cutout.png";
import reactIcon from "@/assets/images/react-icon.png";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative flex flex-col items-center bg-background h-heroH md:h-fullH max-w-mdMaxW lg:max-w-lgMaxW mx-auto overflow-hidden">
        <div className="flex-none p-8">
          <div className="min-h-60 md:min-h-[40rem] flex flex-col justify-center space-y-8 md:space-y-12 lg:space-y-20">
            <p className="text-4xl md:text-6xl lg:text-8xl font-outfitBold text-center">
              Meet and collab with other React developers in Cebu
            </p>
            <p className="font-outfitRegular text-xl md:text-2xl lg:text-4xl md:text-center">
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
        <Image
          src={reactIcon}
          alt="react icon"
          className="absolute bottom-0 lg:-bottom-60 z-0 w-3/4 lg:w-full opacity-10 animate-spin-slow"
        />
      </div>

      <Image
        src={groupCutout}
        alt="group photo"
        className="absolute bottom-0 z-20"
      />
    </section>
  );
}
