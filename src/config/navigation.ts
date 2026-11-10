import { routes } from "./routes";
export const navigation = [
  { label: "Home", href: routes.home },
  {
    label: "Study online",
    href: routes.studyOnline,
    children: [
      { label: "Virtual Campus", href: routes.studyOnline },
      { label: "Apply now", href: routes.apply },
    ],
  },
  {
    label: "Programs",
    href: "#programs",
    children: [
      { label: "English Programs", href: routes.englishPrograms },
      { label: "University Pathway", href: routes.universityPathway },
      { label: "Gap Year", href: routes.gapYear },
    ],
  },
  {
    label: "Campuses",
    href: routes.campuses,
    children: [{ label: "Discover our campuses", href: routes.campuses }],
  },
  {
    label: "International students",
    href: routes.internationalStudents,
    children: [
      { label: "International Students", href: routes.internationalStudents },
    ],
  },
  {
    label: "Youth camp",
    href: routes.youthCamp,
    children: [{ label: "Youth Camp", href: routes.youthCamp }],
  },
  { label: "Blog", href: routes.blog },
];
