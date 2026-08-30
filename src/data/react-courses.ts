export type ReactCourse = {
  id: number
  slug: string
  title: string
  description: string
  price: number
  level: "Beginner" | "Intermediate" | "Advanced"
}

export const reactCourses: ReactCourse[] = [
  {
    id: 1,
    slug: "react-fundamentals",
    title: "React Fundamentals",
    description:
      "Learn components, props, state, events, hooks, and conditional rendering.",
    price: 39,
    level: "Beginner",
  },
  {
    id: 2,
    slug: "nextjs-fundamentals",
    title: "Next.js Fundamentals",
    description:
      "Learn routing, layouts, Server Components, and the App Router.",
    price: 59,
    level: "Beginner",
  },
  {
    id: 3,
    slug: "nextjs-full-stack",
    title: "Next.js Full-Stack",
    description:
      "Learn APIs, databases, Server Actions, authentication, and full-stack development.",
    price: 89,
    level: "Intermediate",
  },
  {
    id: 4,
    slug: "advanced-nextjs",
    title: "Advanced Next.js",
    description:
      "Learn caching, performance, security, architecture, and production deployment.",
    price: 129,
    level: "Advanced",
  },
]