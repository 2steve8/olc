import prisma from "../prisma";

export function slugify(value: string) {
    return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export async function createUniqueCourseSlug(
    title: string,
    excludeCourseId?: number
) {
    const baseSlug = slugify(title) || "course"

    let slug = baseSlug
    let counter = 2

    while (true) {
        const existing = await prisma.course.findUnique({
            where: {
                slug
            },
            select: {
                id: true
            }
        })

        if (!existing || existing.id === excludeCourseId) {
            return slug
        }

        slug = `${baseSlug}-${counter}`

        counter++
    }
}