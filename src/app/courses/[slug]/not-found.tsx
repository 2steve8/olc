import Link from "next/link"

export default function NotFoundPage() {
    return(
        <main style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "100px 20px",
            textAlign: "center"
        }}>
            <h1>404</h1>

            <h2>Course Not Found</h2>

            <p>The course you are looking for does not exist.</p>

            <Link href="/courses">⬅️ Return to Courses</Link>
        </main>
    )
}