import CourseCardShadcn from "@/components/shadcn/CourseCardShadcn";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { reactCourses } from "@/data/react-courses";

export default function ShadcnPracticePage(){
    return(
        <main className="min-h-screen bg-muted/30">
            <section className="border-b bg-background">
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <Badge
                            variant="outline"
                            className="mb-5"
                        >  
                            Lesson 9
                        </Badge>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Building UI with{" "}
                            <span className="text-primary">
                                shadcn/ui
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                            Build reusable buttons, cards, dialogs, badges, forms, and other components on top of Tailwind CSS.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold">
                        Button Variant
                    </h2>

                    <p className="mt-2 text-muted-foreground">
                        shadcn components proveide reusable variant instead of repeating styles.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <Button>
                            Default
                        </Button>
                        <Button variant="secondary">
                            Secondary
                        </Button>
                        <Button variant="outline">
                            Outline
                        </Button>
                        <Button variant="ghost">
                            Ghost
                        </Button>
                        <Button variant="destructive">
                            Destructive
                        </Button>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
                <div className="mb-10">
                    <Badge>
                        NextCourse LMS
                    </Badge>

                    <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                        Available Courses
                    </h2>

                    <p className="mt-3 max-w-2xl text-muted-foreground">
                        These cards combine shadcn Card, Badge, Button, Dialog, Input, and Label components.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {reactCourses.map((course) => (
                        <CourseCardShadcn
                            key={course.id}
                            course={course}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}