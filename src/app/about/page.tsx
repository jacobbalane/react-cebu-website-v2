import Image from "next/image";
import SectionLayout from "../component/layouts/SectionLayout";
import CallToAction from "../component/molecules/CallToAction";

import HeroSectionImage from "@/assets/images/about-hero.webp";
import AboutInfoSection from "../component/molecules/AboutInfoSection";

import MissionImage from "@/assets/images/about-our-mission.webp";
import DeveloperImage1 from "@/assets/images/about-developer-growth-1.webp";
import DeveloperImage2 from "@/assets/images/about-developer-growth-2.webp";
import CutoutImage from "@/assets/images/group-cutout.webp";

import SectionText from "../component/atoms/SectionText";

export default function About() {
  return (
    <>
      <SectionLayout fitHeight={true} reducePaddingY={true}>
        <div className="flex flex-col space-y-8 md:space-y-20 w-full">
          <p className="flex-none text-3xl md:text-5xl lg:text-7xl font-outfitBold">
            <span className="text-accent-1">React Cebu</span> — a community for
            developers by developers
          </p>
          <Image
            src={HeroSectionImage}
            alt="Community Group Photo"
            priority={true}
            className="h-40 md:h-[30rem] rounded-md border-2 border-foreground object-cover"
          />
        </div>
      </SectionLayout>
      <AboutInfoSection
        title="Our Mission"
        description="At React Cebu, we aim to promote React JS and JavaScript technologies by hosting free meetups, workshops, code camps, and training sessions. Our goal is to build a friendly, inclusive space where members can connect and grow."
        images={MissionImage}
      />
      <AboutInfoSection
        title="Supporting Developer Growth"
        description="Through free learning, knowledge sharing, and collaboration, we strive to empower developers and foster cutting-edge talent in Cebu City."
        images={[DeveloperImage1, DeveloperImage2]}
        multipleImages={true}
      />
      <SectionLayout
        removeDefaultPaddingY={true}
        fitHeight={true}
        reducePaddingY={true}>
        <SectionText
          title="The Power of Community"
          description="We believe in the importance of community—finding your tribe to support, grow, and learn together. That’s what React Cebu is all about."
          alignCenterOnLargeScreen={true}
        />
      </SectionLayout>

      <Image
        src={CutoutImage}
        alt="Community Group Photo"
        priority={true}
        className="w-full md:mt-40"
      />
      <CallToAction
        title="Upcoming Events"
        description="Join us for our latest events and activities. Stay connected and engaged!"
        buttonText="Go to Events Page"
        linkTo="events"
      />
    </>
  );
}
