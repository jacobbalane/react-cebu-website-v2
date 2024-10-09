import FooterLinks from "../molecules/FooterLinks";
import { FaReact } from "react-icons/fa";
import Socials from "../molecules/Socials";

export default function Footer() {
  return (
    <footer className="bg-accent-1">
      <div className="relative overflow-hidden ">
        <div className="lg:h-50rem flex items-center px-8 py-12 md:max-w-mdMaxW lg:max-w-lgMaxW mx-auto">
          <div className="overflow-hidden flex flex-col w-full space-y-10 z-10">
            <div className="flex flex-col space-y-4 md:space-y-10">
              <p className="text-4xl md:text-6xl font-outfitBold z-10">
                Stay Connected <br className="md:hidden" /> with Us!
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-outfitRegular  text-accent-2 z-10 md:w-1/2">
                Follow us on social media for the latest updates, events, and
                community highlights.
              </p>
            </div>
            <FooterLinks />
            <div className="md:hidden">
              <Socials />
            </div>
          </div>
        </div>
        <FaReact className="absolute -bottom-24 md:-bottom-52 lg:-bottom-[18rem] -right-36 md:-right-44 lg:-right-[20rem] text-[25rem] md:text-[40rem] lg:text-[65rem] text-background" />
      </div>
      <div className="bg-foreground">
        <div className="h-32 lg:h-40 flex justify-between px-8 items-center md:max-w-mdMaxW lg:max-w-lgMaxW mx-auto">
          <p className="text-background text-sm lg:text-base font-outfitRegular">
            Copyright 2024 © React Cebu. All rights reserved.
          </p>
          <div className="hidden md:block">
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
}
