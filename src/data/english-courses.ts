type About = { alt: string; text: string };
type CourseBase = { title: string; heroText: string; about: About };
type ScheduleCourse = CourseBase & {
  kind: "schedule"; image: "semi" | "intensive"; tagline?: string; lessons: 20 | 25;
  heroDetails: string[]; aboutLead: string; facts: string[];
  learningTitle: string; learningLead?: string; learningText: string;
  registerTitle: string; registerText: string;
};
type LevelCourse = CourseBase & {
  kind: "level"; image: "general" | "academic"; band: string;
  electives: string[]; electiveText?: string;
};
export type EnglishCourse = ScheduleCourse | LevelCourse;

export const englishCourses = {
  "semi-intensive": {
    kind: "schedule", image: "semi", title: "Semi-Intensive English", lessons: 20,
    tagline: "Learn English. Explore more. Experience the U.S.",
    heroText: "Improve your English skills while enjoying the flexibility to explore life in the United States. OHLA’s Semi-Intensive program combines essential English classes with more free time for personal experiences.",
    heroDetails: ["20 lessons/week", "Monday to Friday", "Flexible learning schedule"],
    aboutLead: "Learn English while making the most of your experience.",
    about: { alt: "OHLA school corridor", text: "The Semi-Intensive program offers a balanced approach to English learning, helping students develop speaking, listening, reading, writing, vocabulary, and grammar skills while enjoying more flexibility outside the classroom." },
    facts: ["20 Lessons per week", "5 days — Monday to Friday", "14 Hours per week", "Flexible Learning Schedule"],
    learningTitle: "How the program works", learningLead: "The perfect balance between learning and exploring.",
    learningText: "Semi-Intensive students develop essential English skills through Core ESL classes and practical learning experiences, with a schedule designed to leave more time for activities outside the classroom.",
    registerTitle: "Ready to start your OHLA experience?", registerText: "Improve your English with 20 lessons every week while enjoying the freedom to discover new places, meet people, and experience life in the United States.",
  },
  intensive: {
    kind: "schedule", image: "intensive", title: "Intensive English", lessons: 25,
    heroText: "Improve your English faster with 25 lessons per week, combining Core ESL classes, electives and practical learning experiences.",
    heroDetails: ["25 lessons/week", "Monday to Friday", "F-1 Students"],
    aboutLead: "More time to learn. More confidence to communicate.",
    about: { alt: "Reception at an OHLA English school", text: "The Intensive English Program helps students strengthen speaking, listening, reading, writing, vocabulary and grammar through a structured and immersive learning experience." },
    facts: ["25 Lessons per Week", "5 Days per Week", "10 Weeks per Level", "F-1 Student Visa"],
    learningTitle: "How you learn", learningText: "Your schedule combines Core ESL classes, focused on essential English skills, with electives that allow you to strengthen specific areas of the language.",
    registerTitle: "Ready to take your English further?", registerText: "Study, practice and experience English every day with OHLA.",
  },
  general: {
    kind: "level", image: "general", title: "General English program", heroText: "Levels 1 to 4:", band: "Basic 1 through Intermediate 2",
    about: { alt: "OHLA students enjoying an outdoor excursion", text: "Our core ESL program covers fluency and comprehension: listening, word structure, word usage, reading, vocabulary, writing, and speaking." },
    electives: ["Strategic reading", "Applying grammar rules", "Mastering English sounds", "Oral fluency", "Clarity and confidence", "English in the workplace"],
  },
  academic: {
    kind: "level", image: "academic", title: "English Pre-Academic & Academic", heroText: "Levels 5–9", band: "Intermediate Plus to Elite Plus",
    about: { alt: "Students talking together in a university building", text: "This ESL (English as a Second Language) program is designed for international students who want to achieve full fluency or pursue higher education in the US. It prepares students linguistically for both undergraduate and graduate studies, focusing on grammar mastery and developing reading, writing, listening, and speaking skills." },
    electives: ["Vocabulary", "Accent Reduction", "English Sounds", "Grammar Rules", "Presentations", "Business English"],
    electiveText: "As a complement to the main program, we offer a wide range of elective courses to meet students’ needs. Examples of elective courses offered include:",
  },
} satisfies Record<string, EnglishCourse>;

export function getEnglishCourse(slug: string): EnglishCourse | undefined {
  if (Object.hasOwn(englishCourses, slug)) return englishCourses[slug as keyof typeof englishCourses];
}
