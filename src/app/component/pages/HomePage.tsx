import Hero from "../organisms/Hero";
import CommunitySection from "../organisms/CommunitySection";
import PageLayout from "../template/PageLayout";
import SupportSection from "../organisms/SupportSection";
import ImageSlider from "../organisms/ImageSlider";

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <CommunitySection />
      <ImageSlider />
      <SupportSection />
    </PageLayout>
  );
}
