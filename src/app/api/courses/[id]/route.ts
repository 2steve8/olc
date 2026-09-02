import prisma from "@/lib/prisma"
import { createUniqueCourseSlug } from "@/lib/server/course-slug"
import { courseUpdateSchema } from "@/lib/validations/course"

type CourseRouteContext = {
    params: Promise<{id: string}>
}

function parseCourseId(value: string) {
    const id = Number(value)

    if (!Number.isInteger(id) || id <= 0) {
        return null
    }

    return id
}

export async function GET (_request: Request, {params}: CourseRouteContext) {
    const {id: rawId} = await params
    const id = parseCourseId(rawId)

    if (id === null) {
        return Response.json(
            {
                success: false,
                message: "Invalid course ID."
            },
            {
                status: 400
            }
        )
    }

    try {
        const course = await prisma.course.findUnique({
            where: {
                id
            }
        })

        if (!course) {
            return Response.json(
                {
                    success: false,
                    message: "Course not found."
                },
                {
                    status: 400
                }
            )
        }

        return Response.json(
            {
                success: true,
                data: course
            },
            {
                status: 200
            }
        )
    } catch (error) {
        console.error("Get course error:", error)

        return Response.json(
            {
                success: false,
                message: "Unable to load course."
            }
        )
    }
}

export async function PATCH (request: Request, {params}: CourseRouteContext) {
    const {id: rawId} = await params
    const id = parseCourseId(rawId)

    if (id === null) {
        return Response.json(
            {
                success: false,
                message: "Invalid course ID."
            },
            {
                status: 400
            }
        )
    }

    let body: unknown

    try {
        body = await request.json()
    } catch {
        return Response.json(
            {
                success: false,
                message: "Invalid JSON request body."
            },
            {
                status: 400
            }
        )
    }

    const validation = courseUpdateSchema.safeParse(body)

    if(!validation.success) {
        return Response.json(
            {
                success: false,
                message: "Validation failed.",
                errors: validation.error.flatten().fieldErrors
            },
            {
                status: 400
            }
        )
    }

    try {
        const existingCourse = await prisma.course.findUnique({where: {id}})

        if (!existingCourse) {
            return Response.json(
                {
                    success: false,
                    message: "Course not found."
                },
                {
                    status: 404
                }
            )
        }

        let slug: string | undefined

        if (validation.data.title !== undefined){
            slug = await createUniqueCourseSlug(validation.data.title, id)
        }

        const course = await prisma.course.update({
            where: {
                id
            },
            data: {
                ...validation.data,
                ...(slug ? {slug} : {})
            }
        })

        return Response.json(
            {
                success: true,
                message: "Course updated succesasfully",
                data: course
            },
            {
                status: 200
            }
        )
    } catch (error) {
        console.error("Update course error:", error)

        return Response.json(
            {
                success: false,
                message: "Unable to update course."
            },
            {
                status: 500
            }
        )
    }
}

export async function DELETE(_request: Request, {params}: CourseRouteContext){
    const {id: rawId} = await params
    const id = parseCourseId(rawId)

    if (id === null) {
        return Response.json(
            {
                success: false,
                message: "Invalid course ID."
            },
            {
                status: 400
            }
        )
    }

    try {
        const existingCourse = await prisma.course.findUnique({where: {id}})

        if (!existingCourse) {
        return Response.json(
            {
                success: false,
                message: "Course not found."
            },
            {
                status: 404
            }
        )
    }

    const deletedCourse = await prisma.course.delete({where: {id}})

    return Response.json(
        {
            success: true,
            message: "Course deleted successfully.",
            data: deletedCourse
        },
        {
            status: 200
        }
    )

    } catch (error) {
        console.error("Delete crouse error:", error)

        return Response.json(
            {
                success: false,
                message: "Unable to delete course."
            },
            {
                status: 500
            }
        )
    }
}