import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        className={`${outfitRegular.variable} ${outfitMedium.variable} ${outfitBold.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
