import { ReactNode } from "react";

interface SectionLayoutProps {
  readonly fitHeight?: boolean;
  readonly children: ReactNode;
}

export default function SectionLayout({
  fitHeight,
  children,
}: SectionLayoutProps) {
  return (
    <section
      className={`bg-background ${
        fitHeight ? "h-fit md:py-40" : "h-smallScreen md:h-largeScreen"
      }  max-w-mdMaxW lg:max-w-lgMaxW md:mx-auto px-8 py-16`}>
      {children}
    </section>
  );
}
