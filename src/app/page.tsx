// Importing organism components
import Hero from "./component/organisms/Hero";
import AboutSection from "./component/organisms/AboutSection";
import EventSection from "./component/organisms/EventSection";
import ImageSlider from "./component/organisms/ImageSlider";

// Importing molecule components
import CallToAction from "./component/molecules/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ImageSlider />
      <EventSection />
      <CallToAction
        title="Discover More About Us"
        description="Learn about our mission, goal, and the community we are building."
        buttonText="Go to About Page"
        linkTo="about"
      />
    </>
  );
}
