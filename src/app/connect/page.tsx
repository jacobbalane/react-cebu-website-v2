// Importing Next.js components
import Image from "next/image";

// Importing atom components
import Button from "../component/atoms/Button";
import SectionText from "../component/atoms/SectionText";

// Importing molecule components
import CallToAction from "../component/molecules/CallToAction";
import Socials from "../component/molecules/Socials";

// Importing layout component
import SectionLayout from "../component/layouts/SectionLayout";

// Importing icon components
import { MdArrowOutward } from "react-icons/md";

// Importing images
import reactIcon from "@/assets/images/react-icon.webp";

export default function Connect() {
  return (
    <>
      <div className="relative overflow-hidden w-full h-fit flex justify-center">
        <SectionLayout removeDefaultPaddingY={true}>
          <div className=" flex flex-col items-center md:justify-center h-full space-y-14 md:space-y-20 min-h-fit pt-12 md:pt-0">
            <div className="flex flex-col items-center space-y-8 md:space-y-12">
              <div className="flex-none h-fit md:max-w-[55rem]" data-aos="fade">
                <SectionText
                  title="Let’s Connect"
                  description="Have questions or ideas? Reach out, and let's connect to explore how we can collaborate and create something great together!"
                  alignCenterOnSmallScreen={true}
                />
              </div>
              <div className="flex-none w-full h-fit max-w-[40rem]">
                <div className="w-full flex flex-col space-y-3">
                  <input
                    type="text"
                    placeholder="Your Email Address"
                    className="md:w-full z-10 bg-background border-2 border-foreground rounded-md font-outfitRegular px-5 py-3 lg:text-lg select-none"
                  />
                  <div className="w-full flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                    <div className="md:w-1/2">
                      <Button text="Join Newsletter" link="/" />
                    </div>
                    <a
                      href="mailto: react@jscebu.org"
                      className="md:w-1/2 flex justify-center items-center z-10 px-8 py-3 rounded-md font-outfitMedium md:text-xl lg:text-2xl text-accent-2 bg-accent-1 border-2 border-foreground select-none">
                      Send us an email
                      <MdArrowOutward className=" text-lg ml-2" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center w-full space-y-3 md:space-y-5 min-h-40">
                <p className="font-outfitMedium md:text-2xl">
                  Follow or contact us on our social media
                </p>
                <Socials invertColor={true} />
              </div>
            </div>
          </div>
        </SectionLayout>
        <Image
          src={reactIcon}
          alt="react icon"
          priority={true}
          className="absolute -bottom-40 md:-bottom-72 lg:-bottom-[20rem] z-0 w-4/5 lg:w-3/5 opacity-10 animate-spin-slow"
        />
      </div>
      <CallToAction
        title="Return to the Home Page"
        description="You’ve explored our site—now head back to the beginning to discover even more!"
        buttonText="Go to Home Page"
        linkTo="/"
        index={0}
      />
    </>
  );
}
