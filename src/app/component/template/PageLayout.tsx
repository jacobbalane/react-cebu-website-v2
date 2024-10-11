import { ReactNode } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

interface PageLayoutProps {
  readonly children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
