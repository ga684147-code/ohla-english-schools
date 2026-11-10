import {ReviewOverlay} from "@/components/review/ReviewOverlay";
import "@/components/review/review.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
export const metadata: Metadata = {
  title: "OHLA English Schools | Study English in the United States & Online",
  description:
    "Study English with OHLA, an award-winning English school in Florida since 1998. Explore English programs, the Virtual Campus, and University Pathway opportunities.",
  robots: { index: false, follow: false },
  icons: { icon: "/images/logo.webp" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body id="top">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer /><ReviewOverlay />
      </body>
    </html>
  );
}
