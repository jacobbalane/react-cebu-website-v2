import FooterButton from "../atoms/FooterButton";

export default function FooterLinks() {
  return (
    <div className="space-y-6 lg:space-y-12 z-10">
      <div className="space-y-2">
        <FooterButton text="Send us an email" />
        <FooterButton text="Join Newsletter" />
        <FooterButton text="Follow us on Facebook" />
      </div>
      <div>
        <FooterButton text="Learn more about us" />
      </div>
    </div>
  );
}
