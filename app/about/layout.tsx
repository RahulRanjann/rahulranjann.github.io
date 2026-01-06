import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Rahul Ranjan - Full Stack Developer with 5+ years of experience in React, Next.js, Node.js, and TypeScript. Based in Bangalore, India.",
  keywords: [
    "About Rahul Ranjan",
    "Full Stack Developer",
    "React Developer Bangalore",
    "Software Engineer India",
  ],
  openGraph: {
    title: "About Rahul Ranjan - Full Stack Developer",
    description:
      "Learn about Rahul Ranjan - Full Stack Developer with experience in React, Next.js, Node.js, and TypeScript.",
    url: "https://rahulranjann-github-io.vercel.app/about",
  },
  alternates: {
    canonical: "https://rahulranjann-github-io.vercel.app/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
