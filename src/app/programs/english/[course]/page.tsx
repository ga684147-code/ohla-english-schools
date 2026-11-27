import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EnglishCoursePage } from "@/components/english-courses/EnglishCoursePage";
import { englishCourses, getEnglishCourse } from "@/data/english-courses";

type Props = { params: Promise<{ course: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(englishCourses).map(course => ({ course }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = getEnglishCourse((await params).course);
  if (!course) notFound();
  return { title: `${course.title} | OHLA English Schools`, description: course.about.text };
}
export default async function Page({ params }: Props) {
  const course = getEnglishCourse((await params).course);
  if (!course) notFound();
  return <EnglishCoursePage course={course} />;
}
