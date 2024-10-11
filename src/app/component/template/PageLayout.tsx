"use client";

import { ReactNode, useState } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import MobileMenu from "../molecules/MobileMenu";

interface PageLayoutProps {
  readonly children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  function handleMenuToggle() {
    setIsMenuToggled(!isMenuToggled);
    console.log(setIsMenuToggled);
  }

  return (
    <div className="flex flex-col">
      <Header isToggled={isMenuToggled} toggleMenu={handleMenuToggle} />
      <main>{children}</main>
      <Footer />
      <MobileMenu isToggled={isMenuToggled} toggleMenu={handleMenuToggle} />
    </div>
  );
}
