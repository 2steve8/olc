export default function AboutPage() {
    return(
        <main style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "80px 20px"
        }}>
            <p style={{
                color: "#2563eb",
                fontWeight: "bold"
            }}>
                About NextCourse
            </p>

            <h1>Learn by Building Real Applications</h1>

            <p style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#6b7280"
            }}>
                NextCourse is a learning platform design to teach modern web development from beginner to advanced.
            </p>

            <p style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#6b7280"
            }}>
                Students learn React, Next.js, TypeScript, backend development, databases, authentication, APIs, testing, Git, GitHub, and deployment.
            </p>

        </main>
    )
}