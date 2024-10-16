// Importing layout component
import SectionLayout from "../component/layouts/SectionLayout";

// Importing molecule components
import CallToAction from "../component/molecules/CallToAction";

export default function Events() {
  return (
    <>
      <SectionLayout>
        <div className="flex items-center h-full" data-aos="fade">
          <div className="flex flex-col space-y-4 md:space-y-10 justify-center items-center md:pb-36">
            <p className="text-3xl md:text-5xl lg:text-7xl font-outfitBold md:text-center">
              Events Page Coming Soon...
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-outfitRegular md:text-center md:w-3/5">
              We’re working on something exciting! While we prepare, check out
              our{" "}
              <span className="font-outfitMedium text-accent-1">
                <a
                  href="https://www.facebook.com/reactcebu/events"
                  target="_blank"
                  rel="noopener noreferrer">
                  Facebook page
                </a>
              </span>{" "}
              for the latest updates and upcoming events.
            </p>
          </div>
        </div>
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
