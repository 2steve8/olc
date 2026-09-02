import { z } from "zod"

export const courseFormSchema = z.object({
    title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(80, "Title must not exceed 80 characters."),

    description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters.")
    .max(500, "Description must not exceed 500 characters."),

    price: z
    .number()
    .min(0, "Price cannot be negative.")
    .max(10000, "Price cannot exceed $10,000"),

    level: z.enum([
        "Beginner",
        "Intermediate",
        "Advanced"
    ]),

    published: z.boolean()
})

export const courseUpdateSchema = courseFormSchema.partial().refine(
    (data) => Object.keys(data).length > 0, {
            message: "Atleat one field must be previded."
        }
)

export type CourseFormValues = z.infer<typeof courseFormSchema>
export type CourseUpdateValue = z.infer<typeof courseUpdateSchema>