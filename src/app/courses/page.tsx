import Link from "next/link";
import { reactCourses } from "@/data/react-courses";

export default function CoursesPage() {
    return(
        <main style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 20px"
        }}>
            <header style={{
                marginBottom: "40px"
            }}>
                <p style={{
                    color: "#2563eb",
                    fontWeight: "bold"
                }}>
                    Courses
                </p>

                <h1>Explore Our Courses</h1>

                <p>Choose a course and start learning.</p>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "25px"
                }}>
                    {reactCourses.map((course) => (
                        <article key={course.id}
                        style={{
                            border: "1px solid #ddd",
                            padding: "25px",
                            borderRadius: "12px"
                        }}>
                            <p style={{
                                color: "#2563eb",
                                fontWeight: "bold"
                            }}>
                                {course.level}
                            </p>

                            <h2>{course.title}</h2>

                            <p style={{
                                color: "#6b7280",
                                lineHeight: "1.6"
                            }}>
                                {course.description}
                            </p>

                            <p style={{
                                fontSize: "22px",
                                fontWeight: "bold"
                            }}>
                                ${course.price}
                            </p>

                            <Link href={`/courses/${course.slug}`}>
                                View Course ➡️
                            </Link>
                        </article>
                    ))}
                </div>
            </header>
        </main>
    )
}