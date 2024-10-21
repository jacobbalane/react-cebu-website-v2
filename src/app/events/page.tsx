// Importing layout component
import SectionText from "../component/atoms/SectionText";
import SectionLayout from "../component/layouts/SectionLayout";

// Importing molecule components
import CallToAction from "../component/molecules/CallToAction";
import EventInstance from "../component/molecules/EventInstance";

export default function Events() {
  return (
    <>
      <SectionLayout>
        <SectionText
          title="React Cebu"
          titleHighlight="Events"
          description="Join us for exciting workshops, meetups, and webinars!"
          alignCenterOnLargeScreen={true}
        />
        <EventInstance />
      </SectionLayout>
      <CallToAction
        title="Get in Touch"
        description="We’d love to hear from you! Reach out for inquiries, support, or collaboration."
        buttonText="Go to Connect Page"
        linkTo="connect"
        index={3}
      />
    </>
  );
}
