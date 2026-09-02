import Link from "next/link";

import FeatureCard from "@/components/tailwind/FeatureCard";
import TailwindCourseCard from "@/components/tailwind/TailwindCourseCard";
import { reactCourses } from "@/data/react-courses";

export default function TailwindPracticePage() {
    return(
        <main className="min-h-screen bg-gray-50">
            <section className="border-b border-gray-200 bg-white">
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-6 md:py-28 lg:py-32">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="mb-5 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                            Lesson 8 - Tailwind CSS
                        </span>

                        <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-7xl">
                            Build modern interfaces
                            <span className="text-blue-600">
                            {" "}
                            faster with Tailwind
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                            Learn spacing, typography, colors, Flexbox, Grid, responsive design, hover states, and reusable UI patterns using Tailwind CSS.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                            <Link
                            href="#courses"
                            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                            Explore Courses
                            </Link>

                            <Link
                            href="/"
                            className="rounded-xl border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 transition hover:bg-gray-100"
                            >
                            Return Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
                <div className="mb-10 max-w-2xl">
                    <p className="mb-2 font-semibold text-blue-600">
                        Tailwind Fundamentals
                    </p>

                    <h2 className="text-3xl font-bold text-gray-950 sm:text-4xl">
                        What your are learning
                    </h2>

                    <p className="mt-4 leading-7 text-gray-600">
                        These concepts replace many of the inline styles we used during the earlier lessons.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"> 
                    <FeatureCard
                        number="01"
                        title="Utility Classes"
                        description="Style elements using small reusable classes for spacing, colors, typography, borders, and more."
                    />
                    <FeatureCard
                        number="02"
                        title="Responsive Design"
                        description="Create layouts that automatically adapt to phones, tablets, laptops, and desktop screens."
                    />
                    <FeatureCard
                        number="03"
                        title="Interaction States"
                        description="Add hover, focus, active, transition, and other UI states directly through Tailwind classes."
                    />
                </div>
            </section>

            <section className="bg-gray-900 py-20 text-white">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <p className="mb-3 font-semibold text-blue-400">
                                Responsive Design
                            </p>

                            <h2 className="text-3xl font-bold sm:text-4xl">
                                One layout, every device.
                            </h2>

                            <p className="mt-5 max-w-xl leading-8 text-gray-300">
                                Tailwind lets us change styling at different screen sizes without writing separate media queries for every element.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-gray-800 p-6">
                            <code className="text-sm leading-8 text-gray-200">
                                grid
                                <br />
                                grid-cols-1
                                <br />
                                md:grid-cols-2
                                <br />
                                ld:grid-cols-3
                            </code>
                        </div>
                    </div>
                </div>
            </section>

            <section
            id="courses"
            className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8"
            >
                <div className="mb-10">
                    <p className="mb-2 font-semibold text-blue-600">
                        Course Grid
                    </p>

                    <h2 className="text-3xl font-bold text-gray-950 sm:text-4xl">
                        Available Courses
                    </h2>

                    <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                        Resize your browser and watch how the course grid automatically changes its column count.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {reactCourses.map((course) => (
                            <TailwindCourseCard 
                            key={course.id}
                            course={course}
                            />
                    ))}
                </div>
            </section>

            <section className="border-t border-gray-200 bg-white py-20">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <h2 className="mb-10 text-3xl font-bold-">
                        Spacing Examples
                    </h2>

                    <div className="space-y-4">
                        <div className="rounded-lg bg-blue-100 p-2">
                            p-2
                        </div>
                        <div className="rounded-lg bg-blue-200 p-4">
                            p-4
                        </div>
                        <div className="rounded-lg bg-blue-300 p-6">
                            p-6
                        </div>
                        <div className="rounded-lg bg-blue-400 p-8">
                            p-8
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}