import { routes } from "@/config/routes";
export type MenuLink = { label: string; href: string };
export type IconMenuLink = MenuLink & { icon: string };
export const programMenu = {
  title: "Not sure which program to choose?",
  description:
    "Discover your English level and find the program best suited to your goals.",
  groups: [
    {
      title: "ENGLISH PROGRAMS",
      href: routes.englishPrograms,
      description: "Learn English based on your level and goals.",
      links: [
        { label: "General English", href: routes.generalEnglish },
        { label: "Academic English", href: routes.academicEnglish },
        { label: "Semi Intensive", href: routes.semiIntensive },
        { label: "Intensive English", href: routes.intensiveEnglish },
      ],
    },
    {
      title: "UNIVERSITY PATHWAY",
      href: routes.universityPathway,
      description: "Your pathway to American universities",
      links: [
        { label: "Higher Education", href: routes.higherEducation },
        { label: "University Partners", href: routes.universityPartners },
        { label: "University Admission", href: routes.universityAdmission },
        { label: "Westcliff at OHLA", href: routes.westcliff },
      ],
    },
    {
      title: "GAP YEAR",
      href: routes.gapYear,
      description: "Gap year program in the United States",
      links: [],
    },
  ],
};
export const campusMenu = [
  {
    label: "MIAMI BRICKELL",
    href: routes.miamiCampus,
    image: "miami",
    position: "60% center",
  },
  {
    label: "ORLANDO CELEBRATION",
    href: routes.orlandoCampus,
    image: "orlando",
    position: "85% center",
  },
  {
    label: "TAMPA",
    href: routes.tampaCampus,
    image: "tampa",
    position: "100% center",
  },
];
export const iconMenus: Record<
  "youth" | "online" | "students",
  IconMenuLink[]
> = {
  youth: [
    { label: "Overview", href: routes.youthCamp, icon: "youth-0" },
    { label: "Miami Programs", href: routes.youthMiami, icon: "youth-1" },
    { label: "Orlando Programs", href: routes.youthOrlando, icon: "youth-2" },
    {
      label: "Accommodation",
      href: routes.youthAccommodation,
      icon: "youth-3",
    },
    {
      label: "Enrollment process",
      href: routes.youthEnrollment,
      icon: "youth-4",
    },
  ],
  online: [
    { label: "Virtual Campus", href: routes.studyOnline, icon: "online-0" },
    { label: "Online Pathway", href: routes.onlinePathway, icon: "online-1" },
    { label: "Private Lessons", href: routes.privateLessons, icon: "online-2" },
    { label: "Group Classes", href: routes.groupClasses, icon: "online-3" },
    { label: "Business", href: routes.businessEnglish, icon: "online-4" },
    {
      label: "Exam Preparation",
      href: routes.examPreparation,
      icon: "online-5",
    },
  ],
  students: [
    { label: "2027 calendar", href: routes.calendar2027, icon: "students-0" },
    {
      label: "Overview",
      href: routes.internationalStudents,
      icon: "students-1",
    },
    { label: "F1 Students", href: routes.f1Students, icon: "students-2" },
    { label: "F1 Transfer", href: routes.f1Transfer, icon: "students-3" },
    { label: "Visa & I-20", href: routes.visaI20, icon: "students-4" },
    {
      label: "Accommodation",
      href: routes.studentAccommodation,
      icon: "students-5",
    },
    {
      label: "Student Services",
      href: routes.studentServices,
      icon: "students-6",
    },
  ],
};
export type MenuPanelKey = "programs" | "campuses" | keyof typeof iconMenus;
