import Link from "next/link"
import { Github, Linkedin, Instagram } from "lucide-react"

const FOOTER_LINKS = [
  {
    icon: Github,
    href: "https://github.com/rahulranjann",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rahul-ranjan-591321277/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/rahulranjan257/",
    label: "Instagram",
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-muted/50 py-8 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-gray-400 text-sm font-mono">
          <span className="text-primary/70">//</span> © 2026 Rahul_Ranjan. <span className="text-primary/60">[STATUS: OPERATIONAL]</span>
        </div>
        <div className="flex items-center gap-6">
          {FOOTER_LINKS.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
