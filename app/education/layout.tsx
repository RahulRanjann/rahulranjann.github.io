import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Education",
  description:
    "Educational background: B.Tech in Computer Science from Manipal Institute of Technology. Diploma from Rajokari Institute of Technology.",
  keywords: [
    "Computer Science Education",
    "Manipal Institute of Technology",
    "B.Tech CS",
    "Developer Education",
  ],
  openGraph: {
    title: "Education - Rahul Ranjan",
    description:
      "B.Tech in Computer Science from Manipal Institute of Technology. Full Stack Development expertise.",
    url: "https://rahulranjann-github-io.vercel.app/education",
  },
  alternates: {
    canonical: "https://rahulranjann-github-io.vercel.app/education",
  },
}

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
