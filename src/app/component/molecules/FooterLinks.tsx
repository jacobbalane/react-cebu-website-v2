// Importing atoms components
import FooterButton from "../atoms/FooterButton";

export default function FooterLinks() {
  return (
    <div className="space-y-2 z-10">
      <FooterButton text="Send us an email" link="mailto: react@jscebu.org" />
      <FooterButton text="Join Newsletter" link="/" />
      <FooterButton
        text="Follow us on Facebook"
        link="https://www.facebook.com/reactcebu/"
      />
    </div>
  );
}
