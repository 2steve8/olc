export const studentName = "Steve"
export const coursePrice = 49
export const isEnrolled = true

export const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js"
]

export const student = {
    id: 1,
    name: "Steve",
    email: "steve@example.coom",
    role: "Student",
}

export function greetStudent(name: string) {
    return `Welcome to NextCrouse, ${name}!`
}

export function calculateDiscount(
    price: number,
    discountPercentage: number
){
    const discount = price * (discountPercentage / 100)

    return price - discount
}

export const practiceCourses = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    price: 39,
    level: "Beginner",
    published: true,
  },
  {
    id: 2,
    title: "React Fundamentals",
    price: 49,
    level: "Beginner",
    published: true,
  },
  {
    id: 3,
    title: "Next.js Full-Stack",
    price: 79,
    level: "Intermediate",
    published: true,
  },
  {
    id: 4,
    title: "Advanced Next.js",
    price: 129,
    level: "Advanced",
    published: false,
  },
];

export const courseTitles = practiceCourses.map((course) => {
    return course.title;
})

export const beginnerCourses = practiceCourses.filter((course) => {
    return course.level === "Beginner";
})

export const publishedCourses = practiceCourses.filter((course) => {
    return course.published === true
})

export const selectedCourse = practiceCourses.find((course) => {
    return course.id === 3
})

export const hasAdvancedCourse = practiceCourses.some((course) => {
    return course.level === "Advanced"
})

export const totalCoursePrice = practiceCourses.reduce((total, course) => {
    return total + course.price
}, 0)

export const {
    name: studentFullName,
    email: studentEmail,
} = student

export const updateStudent = {
    ...student,
    role: "Instructor"
}

export function getCourseStatus(published: boolean) {
    return published ? "Published" : "Draft"
}

export async function getCourseData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")

    const data = await response.json()

    return data
}

export async function getSafeCourseData() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")

        if (response.ok){
            throw new Error("Failed to fetch data")
        }
        const data = await response.json()

        return data
    } catch(error) {
        console.error("Error:", error)

        return null
    }
}