import type { Course } from "@/types/course";

export const courses: Course[] = [
    {
    id: 1,
    title: "Next.js Fundamentals",
    description:
      "Learn the fundamentals of Next.js, React, routing, components, and layouts.",
    price: 49,
    level: "Beginner",
  },
  {
    id: 2,
    title: "Next.js Full-Stack Development",
    description:
      "Build full-stack applications using Next.js, TypeScript, APIs, and databases.",
    price: 79,
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Advanced Next.js",
    description:
      "Learn advanced Next.js concepts including performance, caching, authentication, and deployment.",
    price: 129,
    level: "Advanced",
  },
]