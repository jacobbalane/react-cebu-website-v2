import React from "react";
import SectionLayout from "../layouts/SectionLayout";
import Button from "../atoms/Button";

interface CallToActionProps {
  readonly title: string;
  readonly description: string;
  readonly buttonText: string;
  readonly linkTo: string;
}

export default function CallToAction({
  title,
  description,
  buttonText,
  linkTo,
}: CallToActionProps) {
  return (
    <SectionLayout fitHeight={true}>
      <div className="flex flex-col justify-center items-center space-y-8 md:space-y-20 h-full w-full">
        <div className="flex flex-col md:items-center space-y-4 md:space-y-10">
          <p className="text-3xl md:text-5xl lg:text-7xl font-outfitBold md:text-center">
            {title}
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-outfitRegular md:text-center">
            {description}
          </p>
        </div>
        <div className="w-full md:w-80">
          <Button text={buttonText} link={linkTo} />
        </div>
      </div>
    </SectionLayout>
  );
}
