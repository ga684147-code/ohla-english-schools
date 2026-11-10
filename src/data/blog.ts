export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  dateLabel: string;
  minutes: number;
};
export const featuredArticle: BlogArticle = {
  slug: "how-to-give-compliments-in-english",
  title: "How to give compliments in English (without sounding awkward)",
  description:
    "Many English learners worry about giving compliments because they don't want to sound awkward. Fortunately, giving a compliment is....",
  image: "blog-featured",
  date: "2026-08-17",
  dateLabel: "August 17, 2026",
  minutes: 5,
};
export const blogArticles: BlogArticle[] = [
  {
    slug: "toefl-scores-are-changing",
    title: "TOEFL scores are changing — here's what students need to know.",
    description:
      "If you've been researching universities recently, you may have noticed something confusing.",
    image: "blog-toefl",
    date: "2026-07-21",
    dateLabel: "July 21, 2026",
    minutes: 6,
  },
  {
    slug: "top-english-skills-employers-2026",
    title: "Top English skills employers are looking for in 2026",
    description:
      "Landing your dream job in 2026 takes more than an impressive resume or a university degree.",
    image: "blog-career",
    date: "2026-07-13",
    dateLabel: "July 13, 2026",
    minutes: 7,
  },
  {
    slug: "best-youtube-channels-english-learners",
    title: "9 best YouTube channels for English learners in 2026",
    description:
      "Every day, millions of students around the world choose to learn English online because it's flexible, engaging, and completely free.",
    image: "blog-youtube",
    date: "2026-07-13",
    dateLabel: "July 13, 2026",
    minutes: 7,
  },
  {
    slug: "4th-of-july-florida-2026",
    title: "4th of July weekend in Florida, 2026",
    description:
      "This year, the 4th of July is a special moment. On July 4, 2026, the United States marks 250 years.",
    image: "blog-florida",
    date: "2026-07-02",
    dateLabel: "July 2, 2026",
    minutes: 6,
  },
  {
    slug: "english-breakfast-vs-continental",
    title:
      "English breakfast vs. continental breakfast: what's the difference?",
    description:
      "When booking a hotel, breakfast is usually included. But many travelers get confused by the options.",
    image: "blog-breakfast",
    date: "2026-04-22",
    dateLabel: "April 22, 2026",
    minutes: 5,
  },
  {
    slug: "online-english-university-no-toefl",
    title: "Online English that takes you to university — no TOEFL required",
    description:
      "This isn't your average online English program. What if you could study English online and get accepted...",
    image: "blog-online",
    date: "2026-04-22",
    dateLabel: "April 22, 2026",
    minutes: 5,
  },
];
export const allBlogArticles = [featuredArticle, ...blogArticles];
