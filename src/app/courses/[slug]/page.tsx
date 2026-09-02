import Link from "next/link";
import { notFound } from "next/navigation";
import { reactCourses } from "@/data/react-courses";

type CoursePageProps = {
    params: Promise<{
        slug: string
    }>
}

export default async function CoursePage({
    params,
}: CoursePageProps) {
    const { slug } = await params

    const course = reactCourses.find((course) => course.slug === slug)

    if (!course) {
        notFound()
    }

    return(
        <main style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "80px 20px"
        }}>
            <Link href="/courses">
                ⬅️ Back to Courses
            </Link>

            <div style={{
                marginTop: "40px"
            }}>
                <p style={{
                    color: "#2563eb",
                    fontWeight: "bold"
                }}>
                    {course.level}
                </p>

                <h1 style={{
                    fontSize: "48px"
                }}>
                    {course.title}
                </h1>

                <p style={{
                    fontSize: "20px",
                    lineHeight: "1.7",
                    color: "#6b7280"
                }}>
                    {course.description}
                </p>

                <p style={{
                    fontSize: "30px",
                    fontWeight: "bold"
                }}>
                    ${course.price}
                </p>

                <button style={{
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "14px 25px",
                    fontSize: "16px"
                }}>
                    Enroll Now
                </button>
            </div>
        </main>
    )
}