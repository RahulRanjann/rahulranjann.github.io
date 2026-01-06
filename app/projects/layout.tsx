import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects including React applications, automation tools, and full-stack solutions. GitHub Profile Finder, E-Commerce Platform, and more.",
  keywords: [
    "Web Development Projects",
    "React Projects",
    "Full Stack Portfolio",
    "GitHub Projects",
    "Next.js Applications",
  ],
  openGraph: {
    title: "Projects - Rahul Ranjan",
    description:
      "Explore my portfolio of web development projects including React applications, automation tools, and full-stack solutions.",
    url: "https://rahulranjann-github-io.vercel.app/projects",
  },
  alternates: {
    canonical: "https://rahulranjann-github-io.vercel.app/projects",
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
