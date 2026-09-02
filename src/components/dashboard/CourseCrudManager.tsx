"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { CourseRecord } from "@/types/course-record"
import { courseFormSchema, type CourseFormValues } from "@/lib/validations/course"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"

type CoursesApiResponse = {
    success: boolean
    count?: number
    message?: string
    data?: CourseRecord[]
}

type CourseApiResponse = {
    success: boolean
    count?: number
    message?: string
    data?: CourseRecord
}

export default function CourseCrudManager() {
    const [courses, setCourses] = useState<CourseRecord[]>([])
    const [editingCourse, setEditingCourse] = useState<CourseRecord | null>(null)
    const [loading, setLoading] = useState(false)
    const [deletingId, setDeletingId] = useState<number | null>(null)
    const [message, setMessage] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    const {register, handleSubmit, reset, formState:{
        errors,
        isSubmitting
    }} = useForm<CourseFormValues>(
        {
            resolver: zodResolver(courseFormSchema),
            defaultValues: {
                title: "",
                description: "",
                price: 0,
                level: "Beginner",
                published: false
            }
        }
    )

    async function loadCourses() {
        setLoading(true)
        setMessage(null)
        setError(null)

        try {
            const response = await fetch("/api/courses", {cache: "no-store"})
            const result: CoursesApiResponse = await response.json()

            if (!response.ok) {
                throw new Error(result.message || "Unable to load courses.")
            }

            setCourses(result.data ?? [])

        } catch (error) {
            console.error(error)

            setError(error instanceof Error ? error.message : "Unable to loead courses.")
        } finally {
            setLoading(false)
        }
    }

    function startEditing(course: CourseRecord) {
        setEditingCourse(course)
        setMessage(null)
        setError(null)

        reset({
            title: course.title,
            description: course.description,
            price: course.price,
            level: course.level,
            published: course.published
        })
    }

    function cancelEditing() {
        setEditingCourse(null)

        reset({
            title: "",
            description: "",
            price: 0,
            level: "Beginner",
            published: false
        })
    }

    async function updateSelectedCourse(data: CourseFormValues) {
        
        if (!editingCourse) {
            return
        }

        setMessage(null)
        setError(null)

        try{
            const response = await fetch(`/api/courses/${editingCourse.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            )

            const result: CourseApiResponse = await response.json()

            if (!response.ok || !result.data) {
                throw new Error(result.message || "Unable to update course.")
            }

            setCourses((currentCourses) => currentCourses.map((course) => course.id === result.data!.id ? result.data! : course))
            setMessage(result.message || "Course update")
            setEditingCourse(null)

            reset()

        } catch (error) {
            console.error(error)

            setError(error instanceof Error ? error.message : "Unable to update course")
        }
    }

    async function handleDelete(course: CourseRecord) {
        const confirmed = window.confirm(`Delete "${course.title}"?`)

        if (!confirmed) {
            return
        }

        setDeletingId(course.id)
        setMessage(null)
        setError(null)

        try{
            const response = await fetch(`/api/courses/${course.id}`,
                {
                    method: "DELETE"
                }
            )

            const result: CourseApiResponse = await response.json()

            if (!response.ok) {
                throw new Error(result.message || "Unable to delete courses.") 
            }

            setCourses((currentCourses) => currentCourses.filter((item) => item.id !== course.id))

            if (editingCourse?.id === course.id) {
                cancelEditing()
            }

            setMessage(result.message || "Course deleted.")
        } catch (error) {
            console.error(error)

            setError(error instanceof Error ? error.message : "Unable to delete course.")
        } finally {
            setDeletingId(null)
        }
    }

    return(
        <div className="space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ">
                <div>
                    <h1 className="text-3xl font-bold">
                        Course CRUD Manager
                    </h1>

                    <p className="mt-2 text-muted-foreground">
                        Read, update, and delete courses using your Next.js API
                    </p>
                </div>

                <Button
                onClick={loadCourses}
                disabled={loading}
                >
                    {loading ? "Loading..." : "Load Courses"}
                </Button>
            </div>

            {message && (
                <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
                    {message}
                </div>
            )}

            {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                    {error}
                </div>
            )}

            {!loading && courses.length === 0 && (
                <Card>
                    <CardContent className="py-10 text-center text-muted-foreground">
                        Click &quot;Load Courses&quot; to retrieve data from GET /api/courses. 
                    </CardContent>
                </Card>
            )}

            {courses.length > 0 && (
                <div className="grid gap-5 md:grid-cols-2">
                    {courses.map((course) => (
                        <Card key={course.id}>
                            <CardHeader>
                                <div className="flex items-start justify-between gap-4">
                                    <CardTitle>{course.title}</CardTitle>
                                    <CardDescription>{course.description}</CardDescription>
                                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold">#{course.id}</span>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-muted-foreground">Price</p>
                                        <p className="font-semibold">{course.price === 0 ? "Free" : `$${course.price}`}</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground">Level</p>
                                        <p className="font-semibold">{course.level}</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground">Status</p>
                                        <p className="font-semibold">{course.published ? "Published" : "Draft"}</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground">SLug</p>
                                        <p className="font-semibold">{course.slug}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <Button variant="outline" onClick={() => startEditing(course)}>Edit</Button>
                                    <Button variant="destructive" disabled={deletingId === course.id} onClick={() => handleDelete(course)}>
                                        {deletingId === course.id ? "Deleting..." : "Delete"}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}

            {editingCourse && (
                <Card>
                    <CardHeader>
                        <CardTitle>Edit Course #{editingCourse.id}</CardTitle>
                        <CardDescription>This form sends a PATCH request to{" "} /api/courses/{editingCourse.id}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(updateSelectedCourse)} className="space-y-6" noValidate>
                            <div className="space-y-2">
                                <Label htmlFor="edit-title">Title</Label>
                                <Input id="edit-title" {...register("title")} />

                                {errors.title && (
                                    <p className="text-sm text-destructive">{errors.title.message}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="edit-description">Description</Label>
                                <Textarea id="edit-description" rows={5} {...register("description")} />

                                {errors.description && (
                                    <p className="text-sm text-destructive">{errors.description.message}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="edit-price">Price</Label>
                                <Input id="edit-price" type="number" min="0" step="0.01" {...register("price", {valueAsNumber: true})} />

                                {errors.price && (
                                    <p className="text-sm text-destructive">{errors.price.message}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="edit-level">Level</Label>
                                <select 
                                    id="edit-level"
                                    className="border-input bg-background h-10 w-full rounded-md border px-3 text-sm"
                                    {...register("level")}
                                >
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                 </select>

                                {errors.level && (
                                    <p className="text-sm text-destructive">{errors.level.message}</p>
                                )}
                            </div>

                            <div className="flex items-start gap-3 rounded-lg border p-4">
                                <input id="edit-published" type="checkbox" className="mt-1 h-4 w-4" {...register("published")} />

                                <div>
                                    <Label htmlFor="edit-published">Published</Label>
                                    <p className="mt-1 text-sm text-muted-foreground">Make the course visible to students</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Saving..." : "Save Changes"}
                                </Button>
                                <Button type="button" variant="outline" onClick={cancelEditing}>Cancel</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}