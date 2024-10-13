import SectionLayout from "../template/SectionLayout";
import Button from "../atoms/Button";
import Image from "next/image";
import image from "@/assets/images/support-background.jpg";

export default function SupportSection() {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={image}
        alt="Support background"
        className="absolute bottom-0 object-cover h-full w-full opacity-10"
      />
      <SectionLayout>
        <div className="relative flex flex-col items-center justify-center h-full space-y-8 md:space-y-20 z-10">
          <div className="flex flex-col space-y-4 md:space-y-10">
            <p className="text-3xl md:text-5xl lg:text-7xl font-outfitBold md:text-center">
              We’re all into this together
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-outfitRegular md:text-center">
              We do this by heart, and we love what we do.
            </p>
          </div>
          <div className="w-full md:w-fit">
            <Button text="Let's support each other" accent={true} />
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}