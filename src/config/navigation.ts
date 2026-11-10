import { routes } from "./routes";
export const navigation = [
  { label: "Home", href: routes.home },
  { label: "Programs", href: "/#programs", children: [
    { label: "English Programs", href: routes.englishPrograms },
    { label: "University Pathway", href: routes.universityPathway },
    { label: "Gap Year", href: routes.gapYear },
  ] },
  { label: "Campuses", href: routes.campuses, children: [
    { label: "Discover our campuses", href: routes.campuses },
  ] },
  { label: "Youth camps", href: routes.youthCamp, children: [
    { label: "Youth camps", href: routes.youthCamp },
  ] },
  { label: "Study online", href: routes.studyOnline, children: [
    { label: "Virtual Campus", href: routes.studyOnline },
    { label: "Apply now", href: routes.apply },
  ] },
  { label: "Students information", href: routes.internationalStudents, children: [
    { label: "International Students", href: routes.internationalStudents },
  ] },
  { label: "Blog", href: routes.blog },
];
