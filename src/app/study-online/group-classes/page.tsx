import type { Metadata } from "next";
import { LessonPage } from "@/components/online-programs/LessonPage";

export const metadata: Metadata = {
  title: "Group Classes | OHLA Virtual Campus",
  description: "Study English online in a group for 12 contact hours a week. See session lengths, fees and tuition and contact OHLA.",
};
export default function GroupClasses() {
  return <LessonPage program="group" />;
}
