import { ReactNode } from "react";

interface SectionLayoutProps {
  readonly children: ReactNode;
}

export default function SectionLayout({ children }: SectionLayoutProps) {
  return (
    <section className="bg-background h-smallScreen md:h-largeScreen max-w-mdMaxW lg:max-w-lgMaxW mx-auto px-8 py-16">
      {children}
    </section>
  );
}
