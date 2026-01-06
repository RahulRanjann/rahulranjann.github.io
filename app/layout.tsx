import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Fira_Code } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" })
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" })

const baseUrl = 'https://rahulranjann-github-io.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Rahul Ranjan - Full Stack Developer | React, Node.js, TypeScript",
    template: "%s | Rahul Ranjan",
  },
  verification: {
    google: "feo7mDhCWPO62HEglzem-ETMlVKsK_Ib8Z76ydT2Dy8",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building scalable web applications and automating digital workflows. View my projects and experience.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "JavaScript",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Bangalore",
    "India",
    "Rahul Ranjan",
    "Portfolio",
  ],
  authors: [{ name: "Rahul Ranjan", url: baseUrl }],
  creator: "Rahul Ranjan",
  publisher: "Rahul Ranjan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Rahul Ranjan - Full Stack Developer",
    title: "Rahul Ranjan - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building scalable web applications and automating digital workflows.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rahul Ranjan - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Ranjan - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building scalable web applications.",
    images: ["/og-image.png"],
    creator: "@rahulranjann",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  category: "technology",
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rahul Ranjan",
              url: baseUrl,
              image: `${baseUrl}/developer-profile-photo-cyber-aesthetic.jpg`,
              sameAs: [
                "https://github.com/rahulranjann",
                "https://www.linkedin.com/in/rahul-ranjan-591321277/",
                "https://www.instagram.com/rahulranjan257/",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Lets Transport",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Manipal Institute of Technology",
              },
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "JavaScript",
                "MongoDB",
                "PostgreSQL",
                "AWS",
                "Docker",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Rahul Ranjan Portfolio",
              url: baseUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: `${baseUrl}/projects?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${firaCode.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <Script 
          src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
