import { routes } from "@/config/routes";
export const programs = [
  {
    title: "English Programs",
    description:
      "Develop your reading, writing, listening, speaking, vocabulary, and grammar skills.",
    cta: "Discover the programs",
    href: routes.englishPrograms,
    image: "program-english",
  },
  {
    title: "Study Online",
    description: "Take live classes with OHLA teachers from wherever you are.",
    cta: "Discover the Virtual Campus",
    href: routes.studyOnline,
    image: "program-online",
  },
  {
    title: "University Pathway",
    description:
      "Improve your English and advance to partner universities and colleges in the United States.",
    cta: "Discover University Pathway",
    href: routes.universityPathway,
    image: "program-pathway",
  },
  {
    title: "Gap Year",
    description:
      "Combine English study with an academic experience at an American institution.",
    cta: "Discover Gap Year",
    href: routes.gapYear,
    image: "program-gap",
  },
];
export const features = [
  {
    title: "28+ years of experience",
    icon: "165-14497",
    width: 30,
    height: 30,
  },
  { title: "70+ nationalities", icon: "165-14507", width: 25, height: 26 },
  { title: "Award-winning school", icon: "165-15132", width: 30, height: 30 },
  {
    title: "200+ partner universities",
    icon: "165-15149",
    width: 29,
    height: 30,
  },
  { title: "CEA and SEVIS", wide: true, icon: "165-15140", width: 30, height: 29 },
  {
    wide: true,
    title: "OHLA is authorized under Federal law to enroll nonimmigrant alien students",
    icon: "165-15149", width:29, height:30,
  },
];
export const countries = [
  "Brazil",
  "Colombia",
  "France",
  "Russia",
  "Saudi Arabia",
  "Spain",
] as const;
export const articles = [
  {
    category: "Guide to studying abroad",
    title: "How to plan your English studies in the United States",
    description:
      "Editable placeholder content with general guidance to begin your international journey.",
    image: "article-study",
    slug: "planning-english-studies",
  },
  {
    category: "Student Visas and Immigration",
    title: "What to consider before applying for a student visa",
    description:
      "General editable information to organize documents and next steps.",
    image: "article-visa",
    slug: "student-visa",
  },
  {
    category: "TOEFL and IELTS",
    title: "TOEFL or IELTS: differences for international students",
    description:
      "Editable placeholder summary to compare goals, formats, and preparation.",
    image: "article-exams",
    slug: "toefl-or-ielts",
  },
];
