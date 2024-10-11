import { ReactNode } from "react";

interface SectionLayoutProps {
  readonly children: ReactNode;
}

export default function SectionLayout({ children }: SectionLayoutProps) {
  return (
    <section className="bg-background p-8 md:h-sectionTabletHeight max-w-mdMaxW lg:max-w-lgMaxW mx-auto">
      {children}
    </section>
  );
}
