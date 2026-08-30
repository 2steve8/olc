export type UserRole = 
| "ADMIN"
| "INSTRUCTOR"
| "STUDENT"

export type User = {
    id: number
    name: string
    email: string
    role: UserRole
    age?: number
}

export const currentUser: User = {
    id: 1,
    name: "Steve",
    email: "steve@example.com",
    role: "STUDENT",
    age: 30
}

export function getUserName(user: User): string {
    return user.name
}

export function canManageCourses(user: User): boolean {
    return(
        user.role === "ADMIN" ||
        user.role === "INSTRUCTOR"
    )
}

export interface Lesson {
    id: number
    title: string
    duration: number
    completed: boolean
}

export const lesson: Lesson = {
    id: 1,
    title: "Introduction to Next.js",
    duration: 15,
    completed: false
}

export type lessonItem = {
    id: number
    title: string
    completed: boolean
}

export const lessons: lessonItem[] = [
    {
        id: 1,
        title: "Introdcution",
        completed: true
    },
    {
        id: 2,
        title: "Components",
        completed: true
    },
    {
        id: 3,
        title: "Server Components",
        completed: false
    },
]

export type ApiResponse<T> = {
    success: boolean,
    message: string,
    data: T
}

export const lessonResponse: ApiResponse<lessonItem[]> = {
    success: true,
    message: "Lessons retrieved successfully",
    data: lessons
}