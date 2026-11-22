import type { Metadata } from "next";
import { LessonPage } from "@/components/online-programs/LessonPage";

export const metadata: Metadata = {
  title: "Private Lessons | OHLA Virtual Campus",
  description: "Explore online private lessons for exam preparation and business English, including enrollment options, fees and tuition.",
};
export default function PrivateLessons() {
  return <LessonPage program="private" />;
}
