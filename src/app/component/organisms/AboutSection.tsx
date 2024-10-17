// Importing Next.js components
import Image from "next/image";

// Importing React
import React from "react";

// Importing atom components
import Button from "../atoms/Button";
import SectionText from "../atoms/SectionText";

// Importing layout component
import SectionLayout from "../layouts/SectionLayout";

// Importing images
import communityImage from "@/assets/images/landing-community.webp";

export default function CommunitySection() {
  return (
    <SectionLayout>
      <section className="flex items-center h-full">
        <div className="flex flex-col md:flex-row-reverse items-center space-y-10 md:space-y-0">
          <Image
            src={communityImage}
            alt="Growing Community Image"
            className="md:w-1/2 md:ml-4 lg:ml-8"
            priority={true}
          />{" "}
          <div className="flex flex-col md:w-1/2 space-y-8 md:space-y-20">
            <SectionText
              title="Join Our Growing Community"
              description="Be a part of something bigger. Together, we create, inspire, and make an impact."
            />
            <div className="w-full md:w-fit">
              <Button text="Be a Reactor today" link="about" accent={true} />
            </div>
          </div>
        </div>
      </section>
    </SectionLayout>
  );
}
