export const routes = {
  home: "/",
  studyOnline: "/study-online",
  englishPrograms: "/programs/english",
  universityPathway: "/programs/university-pathway",
  gapYear: "/programs/gap-year",
  campuses: "/campuses",
  internationalStudents: "/international-students",
  youthCamp: "/youth-camp",
  blog: "/blog",
  about: "/about",
  contact: "/contact",
  levelTest: "/english-level-test",
  apply: "/contact#contact-form",
  privacy: "/privacy-policy",
  whatsapp: "https://bit.ly/37A5BWq",
  generalEnglish: "/programs/english/general",
  academicEnglish: "/programs/english/academic",
  semiIntensive: "/programs/english/semi-intensive",
  intensiveEnglish: "/programs/english/intensive",
  higherEducation: "/programs/university-pathway/higher-education",
  universityPartners: "/programs/university-pathway/partners",
  universityAdmission: "/programs/university-pathway/admission",
  westcliff: "/programs/university-pathway/westcliff",
  miamiCampus: "/campuses/miami-brickell",
  orlandoCampus: "/campuses/orlando-celebration",
  tampaCampus: "/campuses/tampa",
  youthMiami: "/youth-camp/miami-programs",
  youthOrlando: "/youth-camp/orlando-programs",
  youthAccommodation: "/youth-camp/accommodation",
  youthEnrollment: "/youth-camp/enrollment-process",
  onlinePathway: "/study-online/pathway",
  privateLessons: "/study-online/private-lessons",
  groupClasses: "/study-online/group-classes",
  businessEnglish: "/study-online/business",
  examPreparation: "/study-online/exam-preparation",
  calendar2027: "/international-students/calendar-2027",
  f1Students: "/international-students/f1-students",
  f1Transfer: "/international-students/f1-transfer",
  visaI20: "/international-students/visa-i20",
  studentAccommodation: "/international-students/accommodation",
  studentServices: "/international-students/student-services",
} as const;
export const englishTestUrl = "https://www.classmarker.com/online-test/start/user-info/?quiz=ddr644a715424b27";

const implementedPages = new Set<string>([
  routes.levelTest,
  routes.youthMiami, routes.youthOrlando, routes.youthAccommodation, routes.youthEnrollment,
  routes.onlinePathway, routes.privateLessons, routes.groupClasses, routes.businessEnglish, routes.examPreparation,
  routes.internationalStudents, routes.f1Students, routes.f1Transfer, routes.visaI20, routes.studentAccommodation, routes.studentServices,
]);

export const futurePages: Record<string, string> = Object.fromEntries(
  Object.entries(routes)
    .filter(([key, path]) => key !== "home" && key !== "whatsapp" && key !== "apply" && !implementedPages.has(path))
    .map(([key, path]) => [
      path,
      key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()),
    ]),
);
