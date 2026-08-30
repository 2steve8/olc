import {
    beginnerCourses,
    calculateDiscount,
    courseTitles,
    practiceCourses,
    publishedCourses,
    selectedCourse,
    totalCoursePrice,
} from "@/lib/javascript-practice"

import {
    canManageCourses,
    currentUser
} from "@/lib/typescript-practice"

export default function PracticePage() {
    const discountPrice = calculateDiscount(100, 20)

    return(
        <main style={({
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "60px 20px"
        })}>
            <h1>Javascript & Typescript Practice</h1>

            <hr />

            <section>
                <h2>All Courses</h2>

                {practiceCourses.map((course) => (
                    <div key={course.id}>
                        <h3>{course.title}</h3>
                        <p>Price: ${course.price}</p>
                        <p>Level: {course.level}</p>

                        <p>
                            Status:{" "}
                            {course.published ? "Published" : "Draft"}
                        </p>
                    </div>
                ))}
            </section>

           <hr />

            <section>
                <h2>Beginner Courses</h2>
                {beginnerCourses.map((course) => (
                    <p key={course.id}>
                        {course.title}
                    </p>
                ))}
            </section>

            <hr />

            <section>
                <h2>Course Titles</h2>
                {courseTitles.map((title) => (
                    <p key={title}>{title}</p>
                ))}
            </section>

            <hr />

            <section>
                <h2>Calculations</h2>

                <p>Total course price: ${totalCoursePrice}</p>
                <p>
                    $100 with 20% discount:
                    ${discountPrice}
                </p>
            </section>

            <hr />

            <section>
                <h2>Current User</h2>

                <p>Name: {currentUser.name}</p>
                <p>Email: {currentUser.email}</p>
                <p>Role: {currentUser.role}</p>

                <p>
                    Can manage courses:{" "}
                    {canManageCourses(currentUser)
                    ? "Yes"
                    : "No"
                    }
                </p>
            </section>
        </main>
    )
}