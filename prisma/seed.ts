import "dotenv/config"
import { PrismaClient } from "@/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"

const adapter = new PrismaPg({connectionString: process.env.DATABASE_URL!})
const prisma = new PrismaClient({adapter})

async function main() {
    const courses = [
        {
            slug: "react-fundamentals",
            title: "React Fundamentals",
            description: "Learn components, props, state, events, hooks, and modern React development.",
            price: 39,
            level: "Beginner" as const,
            published: true
        },
        {
            slug: "nextjs-fundamentals",
            title: "Next.js Fundamentals",
            description: "Learn routing, layouts, Server Components, Route Handlers, and the modern App Router.",
            price: 59,
            level: "Beginner" as const,
            published: true
        },
        {
            slug: "nextjs-full-stack",
            title: "Next.js Full-Stack",
            description: "Learn frontend development, backend APIs, validation, databases, and modern full-stack architecture.",
            price: 89,
            level: "Intermediate" as const,
            published: true
        }
    ]

    console.log("Database seeded successfully.")

    for (const course of courses) {
        await prisma.course.upsert({
            where: {
                slug: course.slug
            },
            update: {},
            create: course
        })
    }

    console.log("Database seeded successfully.")
}

main().catch((error) => {
    console.error(error)

    process.exit(1)
}).finally(async () => {await prisma.$disconnect()})