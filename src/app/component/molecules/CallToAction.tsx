import React from "react";
import SectionLayout from "../layouts/SectionLayout";
import Button from "../atoms/Button";
import SectionText from "../atoms/SectionText";

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
        <SectionText
          title={title}
          description={description}
          alignCenterOnLargeScreen={true}
        />
        <div className="w-full md:w-80">
          <Button text={buttonText} link={linkTo} />
        </div>
      </div>
    </SectionLayout>
  );
}
