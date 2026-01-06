import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills and expertise: React, Next.js, TypeScript, Node.js, Python, MongoDB, PostgreSQL, AWS, Docker, and more. Full Stack Developer capabilities.",
  keywords: [
    "Developer Skills",
    "React Skills",
    "Full Stack Skills",
    "JavaScript Expertise",
    "TypeScript Developer",
    "Node.js Expert",
  ],
  openGraph: {
    title: "Skills - Rahul Ranjan",
    description:
      "Technical skills: React, Next.js, TypeScript, Node.js, Python, MongoDB, PostgreSQL, AWS, Docker.",
    url: "https://rahulranjann-github-io.vercel.app/skills",
  },
  alternates: {
    canonical: "https://rahulranjann-github-io.vercel.app/skills",
  },
}

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
