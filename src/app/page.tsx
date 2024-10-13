import Hero from "./component/organisms/Hero";
import CommunitySection from "./component/organisms/CommunitySection";
import SupportSection from "./component/organisms/SupportSection";
import ImageSlider from "./component/organisms/ImageSlider";

export default function Home() {
  return (
    <>
      <Hero />
      <CommunitySection />
      <ImageSlider />
      <SupportSection />
    </>
  );
}
