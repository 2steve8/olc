import CreateCourseForm from "@/components/forms/CreateCourseForm";

export default function CourseFormPage() {
    return(
        <main className="min-h-screen bg-muted/30">
            <section className="border-b bg-background">
                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="mb-3 font-semibold text-primary">
                            Lesson 10
                        </p>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            React Hook Form + Zod
                        </h1>

                        <p className="mt-5 text-lg leading-8 text-muted-foreground">
                            Build TypeScript-safe forms with validation, error messages, and reusable schemas.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
                <CreateCourseForm />
            </section>
        </main>
    )
}