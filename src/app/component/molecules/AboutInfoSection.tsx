// Importing Next.js components and types
import Image, { StaticImageData } from "next/image";

// Importing React
import React from "react";

// Importing custom components
import SectionLayout from "../layouts/SectionLayout";
import SectionText from "../atoms/SectionText";

interface AboutInfoSectionProps {
  readonly title: string;
  readonly description: string;
  readonly images: StaticImageData | StaticImageData[];
  readonly multipleImages?: boolean;
}

export default function AboutInfoSection({
  title,
  description,
  images,
  multipleImages = false,
}: AboutInfoSectionProps) {
  return (
    <SectionLayout
      removeDefaultPaddingY={true}
      fitHeight={true}
      reducePaddingY={true}>
      <div
        className={`flex flex-col ${
          multipleImages ? "md:flex-row-reverse" : "md:flex-row"
        } space-y-8 md:space-y-0  w-full`}>
        <div
          className={`md:w-1/2 my-auto ${
            multipleImages ? "md:pl-16" : "md:md:pr-16"
          }`}>
          <SectionText title={title} description={description} />
        </div>
        <div className="relative h-auto space-y-4 md:space-y-0 md:w-1/2">
          {Array.isArray(images) ? (
            images.map((image: StaticImageData, index: number) => (
              <Image
                key={image.src}
                src={image}
                alt="Community Group Photo"
                loading="lazy"
                className={`h-60 md:h-72 md:w-4/5 rounded-md border-2 border-foreground object-cover md:absolute  ${
                  index === images.length - 1
                    ? "hidden md:block top-0 right-0"
                    : "md:bottom-0 md:left-0 z-10"
                }`}
              />
            ))
          ) : (
            <Image
              src={images}
              alt="Community Group Photo"
              loading="lazy"
              className="h-60 md:h-full w-full rounded-md border-2 border-foreground object-cover"
            />
          )}
        </div>
      </div>
    </SectionLayout>
  );
}
