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
  apply: "/apply",
  privacy: "/privacy-policy",
  whatsapp: "/contact?channel=whatsapp",
} as const;
export const futurePages: Record<string, string> = Object.fromEntries(
  Object.entries(routes)
    .filter(([key]) => key !== "home" && key !== "whatsapp")
    .map(([key, path]) => [
      path,
      key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()),
    ]),
);
