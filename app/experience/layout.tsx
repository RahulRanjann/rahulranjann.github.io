import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience as a Full Stack Developer at Lets Transport, Zinc, Pine&Lime, and GoMilestone. React, Node.js, and automation expertise.",
  keywords: [
    "Work Experience",
    "Full Stack Developer Experience",
    "Software Developer Career",
    "React Developer Jobs",
    "Bangalore Developer",
  ],
  openGraph: {
    title: "Experience - Rahul Ranjan",
    description:
      "Professional experience as a Full Stack Developer at Lets Transport, Zinc, and more.",
    url: "https://rahulranjann-github-io.vercel.app/experience",
  },
  alternates: {
    canonical: "https://rahulranjann-github-io.vercel.app/experience",
  },
}

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
