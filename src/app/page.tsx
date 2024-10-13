import Hero from "./component/organisms/Hero";
import CommunitySection from "./component/organisms/CommunitySection";
import SupportSection from "./component/organisms/SupportSection";
import ImageSlider from "./component/organisms/ImageSlider";
import CallToAction from "./component/molecules/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <CommunitySection />
      <ImageSlider />
      <SupportSection />
      <CallToAction
        title="Discover More About Us"
        description="Learn about our mission, goal, and the community we are building."
        buttonText="Go to About Page"
        linkTo="/about"
      />
    </>
  );
}
