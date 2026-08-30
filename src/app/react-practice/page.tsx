import Counter from "@/components/react-practice/Counter";
import CourseList from "@/components/react-practice/CourseList";
import StudentForm from "@/components/react-practice/StudentForm";

export default function ReactPracticePage() {
    return(
        <main style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "60px 20px",
            fontFamily: "Arial, sans-serif"
        }}>
            <header style={{
                marginBottom: "50px"
            }}>
                <p style={{
                    color: "#2563eb",
                    fontWeight: "bold"
                }}>
                    NextCourse LMS
                </p>

                <h1>Lesson 3 - React Fundamentals</h1>

                <p style={{
                    maxWidth: "700px",
                    lineHeight: "1.6"
                }}>
                    Learn React components, props, state, events, forms, conditional rendering and lists inside Next.js
                </p>
            </header>

            <Counter />

            <CourseList />

            <StudentForm />
        </main>
    )
}