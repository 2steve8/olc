import prisma from "@/lib/prisma"
import { createUniqueCourseSlug } from "@/lib/server/course-slug"
import { courseFormSchema } from "@/lib/validations/course"

export async function GET() {
    try {
        const courses = await prisma.course.findMany({
            orderBy: {
                id: "asc"
            }
        })

        return Response.json(
            {
                success: true,
                count: courses.length,
                data: courses
            },
            {
                status: 200
            }
        )
    } catch (error) {
        console.error("Get courses error:", error)

        return Response.json(
            {
                success: false
            },
            {
                status: 500
            }
        )
    }
}

export async function POST(request: Request) {
    let body: unknown

    try{
        body = await request.json()
    } catch {
        return Response.json(
            {
                success: false,
                message: "Invalid JSON request body"
            },
            {
                status: 400
            }
        )
    }

    const validation = courseFormSchema.safeParse(body)

    if (!validation.success) {
        return Response.json(
            {
                success: false,
                message: "Validation failed",
                errors: validation.error.flatten().fieldErrors
            },
            {
                status: 400
            }
        )
    }

    try {
        const slug = await createUniqueCourseSlug(validation.data.title)
        const course = await prisma.course.create({
            data: {
                slug,
                title: validation.data.title,
                description: validation.data.description,
                price: validation.data.price,
                level: validation.data.level,
                published: validation.data.published
            }
        })

        return Response.json(
            {
                success: true,
                message: "Course created successfully.",
                data: course
            },
            {
                status: 201
            }
        )
        
    } catch (error) {
        console.error("Create course error:", error)

        return Response.json(
            {
                success: false,
                message: "Interserver error."
            },
            {
                status: 500
            }
        )
    }
}