import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Fira_Code } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { PersonJsonLd, WebsiteJsonLd } from "@/components/JsonLd"
import { SEO_CONFIG, PAGE_SEO } from "@/lib/seo"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" })
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: {
    default: PAGE_SEO.home.title,
    template: `%s | Rahul Ranjan`,
  },
  description: PAGE_SEO.home.description,
  keywords: [
    "Rahul Ranjan",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
  ],
  authors: [{ name: "Rahul Ranjan", url: SEO_CONFIG.siteUrl }],
  creator: "Rahul Ranjan",
  publisher: "Rahul Ranjan",
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
  verification: {
    google: "feo7mDhCWPO62HEglzem-ETMlVKsK_Ib8Z76ydT2Dy8",
  },
  openGraph: {
    type: "website",
    locale: SEO_CONFIG.locale,
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    images: [
      {
        url: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`,
        width: 1200,
        height: 630,
        alt: "Rahul Ranjan - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    images: [`${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`],
    creator: SEO_CONFIG.twitterHandle,
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  alternates: {
    canonical: SEO_CONFIG.siteUrl,
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <PersonJsonLd />
        <WebsiteJsonLd />
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
