import Link from "next/link";

export default function Header() {
    return(
        <header style={{
            borderBottom: "1px solid #e5e7eb",
            background: "#fff"
        }}>
            <div style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "30px"
            }}>
                <Link
                href="/"
                style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#111827"
                }}
                >
                    Next Course
                </Link>

                <nav style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center"
                }}>
                    <Link href="/">
                        Home
                    </Link>

                    <Link href="/courses">
                        Courses
                    </Link>

                    <Link href="/about">
                        About
                    </Link>

                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                </nav>
            </div>
        </header>
    )
}