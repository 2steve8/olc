import Link from "next/link";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <main style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "60px 20px"
        }}>
            <div style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr",
                gap: "40px"
            }}>
                <aside style={{
                    border: "1px solid #ddd",
                    borderRadius: "12px",
                    padding: "20px",
                    height: "fit-content"
                }}>
                    <nav style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px"
                    }}>
                        <Link href="/dashboard">Overview</Link>
                        <Link href="/dashboard/courses">Courses</Link>
                        <Link href="/">Return Home</Link>

                    </nav>
                </aside>
                <section>{children}</section>
            </div>
        </main>
    )
    
}