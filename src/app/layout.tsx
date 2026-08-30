import type { Metadata } from "next";
import Header from "@/components/site/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextCourse LMS",
  description: "Learn Next.js full-stack development from beginner to advanced."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return(
    <html lang="en">
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}