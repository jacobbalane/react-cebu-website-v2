// Importing React type for defining children nodes
import { ReactNode } from "react";

interface SectionLayoutProps {
  readonly removeDefaultPaddingY?: boolean;
  readonly reducePaddingY?: boolean;
  readonly fitHeight?: boolean;
  readonly children: ReactNode;
}

export default function SectionLayout({
  removeDefaultPaddingY = false,
  reducePaddingY,
  fitHeight,
  children,
}: SectionLayoutProps) {
  return (
    <section
      className={`bg-background ${
        fitHeight
          ? "h-fit md:py-40"
          : "h-smallScreen md:h-largeScreen min-h-smallScreen"
      }  max-w-mdMaxW lg:max-w-lgMaxW md:mx-auto px-8 ${
        removeDefaultPaddingY ? "" : "py-16"
      } ${reducePaddingY ? "py-12 md:py-32" : ""}`}>
      {children}
    </section>
  );
}
