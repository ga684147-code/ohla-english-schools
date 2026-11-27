import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { englishTestUrl } from "@/config/routes";

export const metadata: Metadata = {
  title: "English Level Test | OHLA English Schools",
};

export default function EnglishLevelTest() {
  return (
    <main id="main" className="future-page">
      <RevealHeading as="h1">Discover your English level</RevealHeading>
      <p>
        Take OHLA&apos;s free test and get a reference of your current level
        before choosing a program.
      </p>
      <Button href={englishTestUrl}>Take the free test</Button>
    </main>
  );
}
