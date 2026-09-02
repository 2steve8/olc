import Link from "next/link";
import { reactCourses } from "@/data/react-courses";

export default function DashboardCoursesPage(){
    return(
        <div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
                marginBottom: "30px"
            }}>
                <div>
                    <h1>Manage Courses</h1>

                    <p>View and manage your courses.</p>
                </div>

                <button style={{
                    padding: "12px 20px",
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "8px"
                }}>
                    Add Course
                </button>
            </div>

            <div style={{
                display: "grid",
                gap: "15px"
            }}>
                {reactCourses.map((course) => (
                    <div
                        key={course.id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            padding: "20px",
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "20px"
                        }}
                    >
                        <div>
                            <strong>{course.title}</strong>

                            <p>{course.level} - ${course.price}</p>
                        </div>

                        <Link href={`/courses/${course.slug}`}>View</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}