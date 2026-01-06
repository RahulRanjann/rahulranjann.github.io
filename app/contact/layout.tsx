import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rahul Ranjan - Full Stack Developer. Available for freelance projects, collaborations, and job opportunities.",
  keywords: [
    "Contact Developer",
    "Hire Full Stack Developer",
    "Freelance React Developer",
    "Developer for Hire",
  ],
  openGraph: {
    title: "Contact - Rahul Ranjan",
    description:
      "Get in touch with Rahul Ranjan for web development projects and collaborations.",
    url: "https://rahulranjann-github-io.vercel.app/contact",
  },
  alternates: {
    canonical: "https://rahulranjann-github-io.vercel.app/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
