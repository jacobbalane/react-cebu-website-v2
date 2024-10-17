// Importing Next.js types
import type { Metadata } from "next";

// Importing Next.js font
import localFont from "next/font/local";

// Importing global styles
import "./globals.css";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitRegular.variable} ${outfitMedium.variable} ${outfitBold.variable} antialiased relative md:overflow-y-auto`}>
        <Header />
        <main className="flex flex-col">{children}</main>
        <Footer />
        <MobileMenu />
      </body>
    </html>
  );
}
