import type { Course } from "@/types/course";

type CourseCardProps = {
    course: Course
}

export default function CourseCard ({course,}: CourseCardProps){
    return(
        <div className="course-card">
            <span className="course-evel">
                {course.level}
            </span>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <strong>${course.price}</strong>
        </div>
    )
}