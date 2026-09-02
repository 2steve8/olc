import type { Metadata } from "next";
import Header from "@/components/site/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}