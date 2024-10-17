// Importing icon components
import { FaReact } from "react-icons/fa";

// Importing atom components
import SectionText from "../atoms/SectionText";

// Importing molecule components
import FooterLinks from "../molecules/FooterLinks";
import Socials from "../molecules/Socials";
import Copyright from "../molecules/Copyright";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-accent-1 md:h-largeScreen">
      <div className="grow relative overflow-hidden" id="footer-info">
        <div className="lg:h-full flex items-center px-8 py-12 md:max-w-mdMaxW lg:max-w-lgMaxW mx-auto">
          <div className="overflow-hidden flex flex-col w-full space-y-10 z-10">
            <SectionText
              title="Stay Connected with Us!"
              description="Follow us on social media for the latest updates, events, and community highlights."
              limitDescriptionWidth={true}
            />
            <FooterLinks />
            <div className="md:hidden">
              <Socials />
            </div>
          </div>
        </div>
        <FaReact className="absolute -bottom-24 md:-bottom-52 lg:-bottom-[18rem] -right-36 md:-right-44 lg:-right-[20rem] text-[25rem] md:text-[40rem] lg:text-[65rem] text-background" />
      </div>
      <Copyright />
    </footer>
  );
}
