import Link from "next/link";

export default function HomePage() {
  return(
    <main style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "100px 20px"
    }}>
      <section style={{
        maxWidth: "750px"
      }}>
        <p style={{
          color: "#2563eb",
          fontWeight: "bold"
        }}>
          NextCourse LMS
        </p>

        <h1 style={{
          fontSize: "56px",
          marginBottom: "20px"
        }}>
          Become a Full-Stack Next.js Developer
        </h1>

        <p style={{
          fontSize: "20px",
          lineHeight: "1.7",
          color: "#6b7280"
        }}>
          Learn React, Next.js, TypeScript, databases, authentication, APIs, testing, Git, and deployment.
         </p>

        <div style={{
          display: "flex",
          gap: "15px",
          marginTop: "30px"
        }}>
          <Link
          href="/courses"
          style={{
            background: "#2563eb",
            color: "white",
            padding: "14px 24px",
            borderRadius: "8px",
            textDecoration: "none"
          }}
          >
            Browse Courses
          </Link>

          <Link
          href="/dashboard"
          style={{
            border: "1px solid #ddd",
            padding: "14px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#111"
          }}
          >
            Dashboard
          </Link>
        </div>
       
      </section>
    </main>
  )
}