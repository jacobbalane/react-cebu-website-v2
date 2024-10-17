import SectionLayout from "../layouts/SectionLayout";
import Button from "../atoms/Button";
import Image from "next/image";
import image from "@/assets/images/event-background.webp";
import SectionText from "../atoms/SectionText";

export default function EventSection() {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={image}
        alt="Event Section Background"
        priority={true}
        className="absolute bottom-0 object-cover h-full w-full opacity-10"
      />
      <SectionLayout>
        <div className="relative flex flex-col items-center justify-center h-full space-y-8 md:space-y-20 z-10">
          <SectionText
            title="Join Us at Our Upcoming Events"
            description="Join us as we bring passion to every event. Connect, learn, and grow with us."
            alignCenterOnLargeScreen={true}
          />
          <div className="w-full md:w-fit">
            <Button text="Discover Our Events" link="events" accent={true} />
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
