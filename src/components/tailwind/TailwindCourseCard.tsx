import Link from "next/link";
import type { ReactCourse } from "@/data/react-courses";

type TailwindCourseCardProps = {
    course: ReactCourse
}

export default function TailwindCourseCard({
    course
}: TailwindCourseCardProps) {
    return(
        <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow=sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-4">
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                    {course.level}
                </span>
            </div>

            <h2 className="mb-3 text-2xl font-bold text-gray-900 transition group-hover:text-blue-600">
                {course.title}
            </h2>

            <p className="mb-6 flex-1 leading-7 text-gray-600">
                {course.description}
            </p>

            <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                <span className="text-2xl font-bold text-gray-900">
                    ${course.price}
                </span>

                <Link
                    href={`/courses/${course.slug}`}
                    className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    View Course
                </Link>
            </div>
        </article>
    )
}