import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic"

export default async function DatabasePracticePage() {
    const courses = await prisma.course.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })

    return (
        <main className="min-h-screen bg-muted/30">
            <section className="border-b bg-background">
                <div className="mx-auto max-w-6xl px-5 py-16">
                    <p className="mb-3 font-semibold text-primary">Lesson 13</p>
                    <h1 className="text-4xl font-bold">PostgreSQL + Prisma</h1>
                    <p className="mt-4 max-w-2xl text-muted-foreground">
                        This page queries PostgreSQL directly from a Next.js Server Component.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-5 py-12">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold">Batabase Courses</h2>
                    <p className="text-muted-foreground">{courses.length} course{courses.length === 1 ? "" : "s"}{" "} stored in PostgreSQL.</p>
                </div>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course) => (
                        <Card
                            key={course.id}
                        >
                            <CardHeader>
                                <div className="mb-2">
                                    <Badge variant="secondary">{course.level}</Badge>
                                </div>

                                <CardTitle>{course.title}</CardTitle>
                                <CardDescription>{course.description}</CardDescription>
                                <CardContent className="space-y-3">
                                    <p className="text-2xl font-bold">{course.price === 0 ? "Free" : `$${course.price}`}</p>
                                    <p className="text-sm text-muted-foreground">Status:{" "} {course.published ? "Published" : "Draft"}</p>
                                    <p className="text-sm text-muted-foreground">ID:{" "} {course.id}</p>
                                </CardContent>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    )
}