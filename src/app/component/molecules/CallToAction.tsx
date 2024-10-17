// Importing React
import React from "react";

// Importing from layouts
import SectionLayout from "../layouts/SectionLayout";

// Importing from atoms
import Button from "../atoms/Button";
import SectionText from "../atoms/SectionText";

interface CallToActionProps {
  readonly title: string;
  readonly description: string;
  readonly buttonText: string;
  readonly linkTo: string;
  readonly index?: number;
}

export default function CallToAction({
  title,
  description,
  buttonText,
  linkTo,
  index = 0,
}: CallToActionProps) {
  return (
    <SectionLayout fitHeight={true}>
      <div className="flex flex-col justify-center items-center space-y-8 md:space-y-20 h-full w-full">
        <SectionText
          title={title}
          description={description}
          alignCenterOnLargeScreen={true}
        />
        <div className="w-full md:w-80 flex justify-center">
          <Button text={buttonText} link={linkTo} index={index} />
        </div>
      </div>
    </SectionLayout>
  );
}
