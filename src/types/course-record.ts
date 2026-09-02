import { CourseFormValues } from "@/lib/validations/course";

export type CourseRecord = CourseFormValues & {
    id: number
    slug: string
    createdAt: string
    updatedAt: string
}