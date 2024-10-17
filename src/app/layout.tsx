// Importing Next.js types
import type { Metadata } from "next";

// Importing Next.js font
import localFont from "next/font/local";

// Importing Next.js Script component
import Script from "next/script";

// Importing global styles
import "./globals.css";

// Importing AOSInitializer component
import AOSInitializer from "./utils/AOSInitializer";

// Importing organism components
import Header from "./component/organisms/Header";
import Footer from "./component/organisms/Footer";

// Importing molecule components
import MobileMenu from "./component/molecules/MobileMenu";

const outfitRegular = localFont({
  src: "./fonts/Outfit-Regular.ttf",
  variable: "--font-outfit-regular",
});
const outfitMedium = localFont({
  src: "./fonts/Outfit-Medium.ttf",
  variable: "--font-outfit-medium",
});

const outfitBold = localFont({
  src: "./fonts/Outfit-Bold.ttf",
  variable: "--font-outfit-bold",
});

export const metadata: Metadata = {
  title: "React Cebu",
  description: "A community for developers by developers",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"
        strategy="afterInteractive"
      />
      <body
        className={`${outfitRegular.variable} ${outfitMedium.variable} ${outfitBold.variable} antialiased relative md:overflow-y-auto`}>
        <AOSInitializer />
        <Header />
        <main className="flex flex-col">{children}</main>
        <Footer />
        <MobileMenu />
      </body>
    </html>
  );
}
