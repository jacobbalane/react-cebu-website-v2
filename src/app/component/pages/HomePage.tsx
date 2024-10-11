import Hero from "../organisms/Hero";
import CommunitySection from "../organisms/CommunitySection";
import PageLayout from "../template/PageLayout";

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <CommunitySection />
    </PageLayout>
  );
}
