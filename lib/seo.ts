// SEO Configuration Constants
export const SEO_CONFIG = {
  siteName: "Rahul Ranjan Portfolio",
  siteUrl: "https://rahulranjann-github-io.vercel.app",
  defaultTitle: "Rahul Ranjan | Software Engineer",
  defaultDescription:
    "Software Engineer portfolio of Rahul Ranjan showcasing projects, skills, and experience in Next.js, React, Node.js, MongoDB, and full-stack development.",
  defaultImage: "/rahulIMG.png",
  twitterHandle: "@rahulranjann",
  locale: "en_US",
  author: {
    name: "Rahul Ranjan",
    jobTitle: "Software Engineer",
    email: "contact@rahulranjan.dev",
    url: "https://rahulranjann-github-io.vercel.app",
    sameAs: [
      "https://github.com/rahulranjann",
      "https://www.linkedin.com/in/rahul-ranjan-591321277/",
      "https://www.instagram.com/rahulranjan257/",
    ],
  },
} as const;

// Page-specific SEO metadata
export const PAGE_SEO = {
  home: {
    title: "Rahul Ranjan | Software Engineer",
    description:
      "Software Engineer portfolio of Rahul Ranjan showcasing projects, skills, and experience in Next.js, React, Node.js, MongoDB, and full-stack development.",
  },
  about: {
    title: "About | Rahul Ranjan - Software Engineer",
    description:
      "Learn about Rahul Ranjan, a Software Engineer specializing in React, Next.js, Node.js, and cloud technologies. Based in Bangalore, India.",
  },
  projects: {
    title: "Projects | Rahul Ranjan - Software Engineer",
    description:
      "Explore Rahul Ranjan's portfolio of software engineering projects including e-commerce platforms, automation tools, and full-stack applications.",
  },
  skills: {
    title: "Skills | Rahul Ranjan - Software Engineer",
    description:
      "Technical skills of Rahul Ranjan including React, Next.js, TypeScript, Node.js, Python, MongoDB, PostgreSQL, AWS, and Docker.",
  },
  experience: {
    title: "Experience | Rahul Ranjan - Software Engineer",
    description:
      "Professional experience of Rahul Ranjan as a Software Engineer at Lets Transport, Zinc, and other companies.",
  },
  education: {
    title: "Education | Rahul Ranjan - Software Engineer",
    description:
      "Educational background of Rahul Ranjan including B.Tech in Computer Science from Manipal Institute of Technology.",
  },
  contact: {
    title: "Contact | Rahul Ranjan - Software Engineer",
    description:
      "Get in touch with Rahul Ranjan for software engineering projects, collaboration opportunities, or professional inquiries.",
  },
} as const;

// JSON-LD Person Schema
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rahul Ranjan",
    jobTitle: "Software Engineer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and cloud technologies.",
    url: SEO_CONFIG.siteUrl,
    image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`,
    sameAs: SEO_CONFIG.author.sameAs,
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Full Stack Development",
      "Web Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Manipal Institute of Technology",
    },
    worksFor: {
      "@type": "Organization",
      name: "Lets Transport",
    },
  };
}

// JSON-LD WebSite Schema
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    description: SEO_CONFIG.defaultDescription,
    author: {
      "@type": "Person",
      name: "Rahul Ranjan",
    },
  };
}
