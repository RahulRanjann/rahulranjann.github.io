(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hooks/use-typewriter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTypeWriter",
    ()=>useTypeWriter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const useTypeWriter = (text, speed = 50, delay = 0)=>{
    _s();
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isComplete, setIsComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTypeWriter.useEffect": ()=>{
            setIsMounted(true);
        }
    }["useTypeWriter.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTypeWriter.useEffect": ()=>{
            if (!isMounted) return;
            setDisplayedText("");
            setIsComplete(false);
            if (delay > 0) {
                const delayTimer = setTimeout({
                    "useTypeWriter.useEffect.delayTimer": ()=>{
                        let index = 0;
                        intervalRef.current = setInterval({
                            "useTypeWriter.useEffect.delayTimer": ()=>{
                                if (index < text.length) {
                                    setDisplayedText(text.slice(0, index + 1));
                                    index++;
                                } else {
                                    setIsComplete(true);
                                    if (intervalRef.current) {
                                        clearInterval(intervalRef.current);
                                        intervalRef.current = null;
                                    }
                                }
                            }
                        }["useTypeWriter.useEffect.delayTimer"], speed);
                    }
                }["useTypeWriter.useEffect.delayTimer"], delay);
                return ({
                    "useTypeWriter.useEffect": ()=>{
                        clearTimeout(delayTimer);
                        if (intervalRef.current) {
                            clearInterval(intervalRef.current);
                            intervalRef.current = null;
                        }
                    }
                })["useTypeWriter.useEffect"];
            } else {
                let index = 0;
                intervalRef.current = setInterval({
                    "useTypeWriter.useEffect": ()=>{
                        if (index < text.length) {
                            setDisplayedText(text.slice(0, index + 1));
                            index++;
                        } else {
                            setIsComplete(true);
                            if (intervalRef.current) {
                                clearInterval(intervalRef.current);
                                intervalRef.current = null;
                            }
                        }
                    }
                }["useTypeWriter.useEffect"], speed);
                return ({
                    "useTypeWriter.useEffect": ()=>{
                        if (intervalRef.current) {
                            clearInterval(intervalRef.current);
                            intervalRef.current = null;
                        }
                    }
                })["useTypeWriter.useEffect"];
            }
        }
    }["useTypeWriter.useEffect"], [
        text,
        speed,
        delay,
        isMounted
    ]);
    // Return empty on server to match initial client state
    if (!isMounted) {
        return {
            displayedText: "",
            isComplete: false
        };
    }
    return {
        displayedText,
        isComplete
    };
};
_s(useTypeWriter, "IiSZISHrWXbcRy3axNxUHO4Z7SM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/constants/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================
// PORTFOLIO DATA CONSTANTS
// ============================================
__turbopack_context__.s([
    "ABOUT_DATA",
    ()=>ABOUT_DATA,
    "ABOUT_SKILLS",
    ()=>ABOUT_SKILLS,
    "EDUCATION_ITEMS",
    ()=>EDUCATION_ITEMS,
    "EDUCATION_STATS",
    ()=>EDUCATION_STATS,
    "EXPERIENCES",
    ()=>EXPERIENCES,
    "GITHUB_USERNAME",
    ()=>GITHUB_USERNAME,
    "HOME_DATA",
    ()=>HOME_DATA,
    "IMAGES",
    ()=>IMAGES,
    "PAGE_HEADINGS",
    ()=>PAGE_HEADINGS,
    "PROJECTS",
    ()=>PROJECTS,
    "PROJECT_FILTERS",
    ()=>PROJECT_FILTERS,
    "SKILL_CATEGORIES",
    ()=>SKILL_CATEGORIES,
    "SOCIAL_LINKS",
    ()=>SOCIAL_LINKS,
    "STATS",
    ()=>STATS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
;
const IMAGES = {
    profile: "/rahulIMG.png",
    projects: {
        cybersecurity: "/cybersecurity-scan-interface.jpg",
        crypto: "/crypto-dashboard.jpg",
        messaging: "/secure-messaging-app.jpg",
        ai: "/ai-sentiment-analysis.jpg",
        portfolio: "/minimalist-portfolio-design.jpg",
        management: "/project-management-interface.jpg"
    },
    placeholder: "/placeholder.svg"
};
const EXPERIENCES = [
    {
        title: "SDE",
        company: "Lets Transport",
        period: "[2025.05 :: PRESENT]",
        location: "Bangalore",
        status: "ACTIVE_PROCESS",
        description: [
            "Built ad-optimization automations using Google Ads API.",
            "Created scraping pipelines and upload workflows.",
            "Improved digital ad revenue through automation."
        ],
        skills: [
            "React",
            "Node.js",
            "Google Ads API",
            "Automation"
        ],
        isActive: true
    },
    {
        title: "QA Engineer",
        company: "Zinc",
        period: "[2025.01 :: 2025.05]",
        location: "Bangalore",
        description: [
            "Automated testing for ADA platform.",
            "Created AI 'talk to ADA' parent interface.",
            "Focused on quality assurance and automation testing."
        ],
        skills: [
            "Testing",
            "Automation",
            "QA"
        ],
        isActive: true
    },
    {
        title: "Full Stack Developer",
        company: "Lets Transport",
        period: "[2024.05 :: 2024.08]",
        location: "Bangalore",
        description: [
            "Built website that boosted traffic by 40% and profit by 7%.",
            "Automated scraping and upload workflows.",
            "Implemented responsive design and performance optimization."
        ],
        skills: [
            "React",
            "Next.js",
            "MongoDB",
            "Node.js"
        ]
    },
    {
        title: "Full Stack Developer",
        company: "Pine&Lime",
        period: "[2024.03 :: 2024.05]",
        location: "Gurgaon",
        description: [
            "Delivered full-featured e-commerce application.",
            "Implemented authentication and product management systems.",
            "Built responsive UI with Tailwind CSS."
        ],
        skills: [
            "React",
            "Firebase",
            "Tailwind CSS",
            "JavaScript"
        ]
    },
    {
        title: "Full Stack Developer",
        company: "GoMilestone",
        period: "[2023.12 :: 2024.01]",
        location: "Gurgaon",
        description: [
            "Developed responsive, scalable company website.",
            "Used HTML, CSS, JavaScript and Bootstrap 5.",
            "Optimized for cross-browser compatibility."
        ],
        skills: [
            "HTML5",
            "CSS3",
            "Bootstrap 5",
            "JavaScript"
        ]
    }
];
const PROJECTS = [
    {
        id: 1,
        title: "GitHub Profile Finder",
        description: "React app using GitHub API to surface profiles with bio, repos, and followers. Features dynamic fetching with clean, intuitive UI for discovering developers.",
        image: IMAGES.projects.cybersecurity,
        tags: [
            "React",
            "GitHub API",
            "JavaScript"
        ],
        category: "full-stack",
        links: {
            source: "https://github.com/rahulranjann",
            demo: "#"
        }
    },
    {
        id: 2,
        title: "Go Milestone",
        description: "Official company site with Google Maps integration and phone country codes. Hosted on GitHub Pages with responsive design and optimization.",
        image: IMAGES.projects.crypto,
        tags: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Maps API"
        ],
        category: "ui-ux",
        links: {
            source: "https://github.com/rahulranjann",
            demo: "#"
        }
    },
    {
        id: 3,
        title: "TourTravel",
        description: "Travel booking site with authentication and ticketing via Firebase. Real-time chat support integrated with Tawk.to for customer assistance.",
        image: IMAGES.projects.messaging,
        tags: [
            "React",
            "Firebase",
            "Tawk.to"
        ],
        category: "full-stack",
        links: {
            source: "https://github.com/rahulranjann",
            demo: "#"
        }
    },
    {
        id: 4,
        title: "E-Commerce Platform",
        description: "Full-featured e-commerce application with product management, authentication, and shopping cart. Built with modern React and Firebase.",
        image: IMAGES.projects.ai,
        tags: [
            "React",
            "Firebase",
            "Tailwind CSS"
        ],
        category: "full-stack",
        links: {
            source: "https://github.com/rahulranjann",
            demo: "#"
        }
    },
    {
        id: 5,
        title: "Digital Ads Automation",
        description: "Automation system for Google Ads optimization using Google Ads API. Improved digital ad revenue through intelligent workflow automation.",
        image: IMAGES.projects.portfolio,
        tags: [
            "Node.js",
            "Google Ads API",
            "Python"
        ],
        category: "automation",
        links: {
            source: "https://github.com/rahulranjann",
            demo: "#"
        }
    },
    {
        id: 6,
        title: "Web Scraping Pipeline",
        description: "Automated scraping and data upload workflows for Lets Transport. Streamlined data processing with efficient pipeline architecture.",
        image: IMAGES.projects.management,
        tags: [
            "Python",
            "Web Scraping",
            "Automation"
        ],
        category: "automation",
        links: {
            source: "https://github.com/rahulranjann",
            demo: "#"
        }
    }
];
const PROJECT_FILTERS = [
    {
        id: "all",
        label: "ALL"
    },
    {
        id: "full-stack",
        label: "FULL_STACK"
    },
    {
        id: "automation",
        label: "AUTOMATION"
    },
    {
        id: "ui-ux",
        label: "UI/UX"
    }
];
const SKILL_CATEGORIES = [
    {
        title: "FRONTEND_MODULE",
        status: "OPTIMIZED",
        skills: [
            {
                name: "React",
                percentage: 95
            },
            {
                name: "Next.js",
                percentage: 90
            },
            {
                name: "TypeScript",
                percentage: 92
            },
            {
                name: "Tailwind CSS",
                percentage: 95
            }
        ]
    },
    {
        title: "BACKEND_SYSTEMS",
        status: "OPERATIONAL",
        skills: [
            {
                name: "Node.js / Express",
                percentage: 85
            },
            {
                name: "Python / Django",
                percentage: 75
            },
            {
                name: "Firebase",
                percentage: 85
            },
            {
                name: "REST APIs",
                percentage: 90
            }
        ]
    },
    {
        title: "DATA_PERSISTENCE",
        status: "CONNECTED",
        skills: [
            {
                name: "MongoDB",
                percentage: 85
            },
            {
                name: "PostgreSQL",
                percentage: 80
            },
            {
                name: "MySQL",
                percentage: 75
            },
            {
                name: "Firebase DB",
                percentage: 85
            }
        ],
        icon: "circular"
    },
    {
        title: "DEVOPS_PROTOCOL",
        status: "DEPLOYING",
        skills: [
            {
                name: "AWS",
                percentage: 80
            },
            {
                name: "Docker",
                percentage: 75
            },
            {
                name: "Vercel",
                percentage: 90
            },
            {
                name: "Nginx",
                percentage: 70
            }
        ]
    },
    {
        title: "LANGUAGES",
        status: "READY",
        skills: [
            {
                name: "JavaScript",
                percentage: 95
            },
            {
                name: "TypeScript",
                percentage: 92
            },
            {
                name: "Python",
                percentage: 80
            },
            {
                name: "Java",
                percentage: 75
            },
            {
                name: "Dart",
                percentage: 70
            },
            {
                name: "Bash",
                percentage: 80
            }
        ]
    }
];
const ABOUT_SKILLS = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Firebase",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Tailwind CSS"
];
const EDUCATION_ITEMS = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
        title: "B.Tech. in Computer Science",
        institution: "Manipal Institute of Technology, Manipal",
        period: "2022 - 2025",
        details: `First Class. Focus on Full Stack Development and Machine Learning. Studying advanced algorithms, web technologies, and distributed systems.`,
        tags: [
            "Full Stack Development",
            "ML",
            "Web Technologies"
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        title: "Diploma in ITEMS",
        institution: "Rajokari Institute of Technology, Delhi",
        period: "2019 - 2022",
        details: "Strong foundation in mathematics and computer science. Prepared for advanced technical studies with focus on programming fundamentals.",
        tags: [
            "Programming",
            "Math",
            "CS Fundamentals"
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"],
        title: "Full Stack Development",
        institution: "Self-Taught & Industry Experience",
        period: "2023 - Present",
        details: "Continuous learning through real-world projects, open-source contributions, and hands-on experience with modern web technologies.",
        tags: [
            "React",
            "Node.js",
            "Cloud Technologies"
        ]
    }
];
const EDUCATION_STATS = [
    {
        label: "Degrees",
        value: "1",
        suffix: ""
    },
    {
        label: "Years Learning",
        value: "5",
        suffix: "+"
    },
    {
        label: "Certifications",
        value: "10",
        suffix: "+"
    },
    {
        label: "Skills Acquired",
        value: "20",
        suffix: "+"
    }
];
const SOCIAL_LINKS = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
        title: "GitHub",
        desc: "github.com/rahulranjann",
        link: "https://github.com/rahulranjann"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
        title: "LinkedIn",
        desc: "in/rahulranjann",
        link: "https://www.linkedin.com/in/rahul-ranjan-591321277/"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
        title: "Instagram",
        desc: "@rahulranjann",
        link: "https://www.instagram.com/rahulranjan257/"
    }
];
const ABOUT_DATA = {
    profileImage: IMAGES.profile,
    systemInfo: "< System.Rahul > v1.0.0",
    stats: {
        experience: {
            value: "5+",
            label: "Years Exp"
        },
        projects: {
            value: "42",
            label: "Projects"
        }
    },
    bio: {
        title: "Full Stack Developer & Product Builder",
        paragraphs: [
            "Full Stack Developer focused on user-centered, impactful products. Blending tech and design to solve real problems. Born in 2000 in India with a mission-driven approach to using code and tech for positive change and innovation.",
            "Currently building scalable web apps, automating digital workflows, and exploring AI-driven tooling. Passionate about product design, automation, and continuous learning. My favorite quote: \"There is nothing so useless as doing efficiently that which should not be done at all.\" — Peter Drucker."
        ]
    },
    cta: {
        downloadCV: {
            text: "Download_CV.exe",
            href: "/contact"
        },
        viewSource: {
            text: "View_Source",
            href: "/projects"
        }
    }
};
const HOME_DATA = {
    name: "Hi, I'm Rahul",
    role: "> Full Stack Developer | Problem Solver_",
    description: "Blending tech and design to solve real problems. Building scalable web apps, automating workflows, and driving digital innovation. Let's turn lines of code into impactful solutions.",
    typingSpeed: {
        name: 50,
        role: 50,
        description: 30
    },
    typingDelay: {
        name: 0,
        role: 1000,
        description: 2000
    }
};
const STATS = {
    experience: {
        years: 2,
        label: "years"
    },
    projects: {
        count: "7+",
        label: "deployed"
    },
    contributions: {
        default: "20+",
        label: "approx"
    },
    skillMatrix: [
        {
            name: "TypeScript / React",
            percent: 98
        },
        {
            name: "Python / Django",
            percent: 85
        },
        {
            name: "System Architecture",
            percent: 90
        }
    ]
};
const PAGE_HEADINGS = {
    home: {
        prefix: "",
        title: ""
    },
    about: {
        prefix: "< System.Rahul > v1.0.0",
        title: "Dev_Access // Granted"
    },
    projects: {
        prefix: "• SYSTEM_MODULES",
        title: "SELECTED_WORKS_"
    },
    skills: {
        prefix: "• SYSTEM_LOG",
        title: "SYSTEM_CAPABILITIES // SKILLS"
    },
    experience: {
        prefix: "> SYSTEM_EXECUTION",
        title: "run experience.exe _"
    },
    education: {
        prefix: "",
        title: "//EDUCATION"
    },
    contact: {
        prefix: "",
        title: "ESTABLISH_CONNECTION_"
    }
};
const GITHUB_USERNAME = "rahulranjann";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/contact/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_react@19.2.0/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$typewriter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-typewriter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Success Animation Component
function SuccessAnimation({ onComplete }) {
    _s();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [typedText, setTypedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const successMessages = [
        "> INITIALIZING SECURE CHANNEL...",
        "> ENCRYPTING PAYLOAD [AES-256]...",
        "> TRANSMISSION SUCCESSFUL ✓",
        "> MESSAGE DELIVERED TO TARGET"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuccessAnimation.useEffect": ()=>{
            const phaseTimers = [
                setTimeout({
                    "SuccessAnimation.useEffect": ()=>setPhase(1)
                }["SuccessAnimation.useEffect"], 300),
                setTimeout({
                    "SuccessAnimation.useEffect": ()=>setPhase(2)
                }["SuccessAnimation.useEffect"], 800),
                setTimeout({
                    "SuccessAnimation.useEffect": ()=>setPhase(3)
                }["SuccessAnimation.useEffect"], 1500),
                setTimeout({
                    "SuccessAnimation.useEffect": ()=>setPhase(4)
                }["SuccessAnimation.useEffect"], 2200),
                setTimeout({
                    "SuccessAnimation.useEffect": ()=>setPhase(5)
                }["SuccessAnimation.useEffect"], 3000),
                setTimeout({
                    "SuccessAnimation.useEffect": ()=>onComplete()
                }["SuccessAnimation.useEffect"], 4500)
            ];
            return ({
                "SuccessAnimation.useEffect": ()=>phaseTimers.forEach(clearTimeout)
            })["SuccessAnimation.useEffect"];
        }
    }["SuccessAnimation.useEffect"], [
        onComplete
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuccessAnimation.useEffect": ()=>{
            if (phase >= 1 && phase <= 4) {
                const message = successMessages[phase - 1];
                let index = 0;
                setTypedText("");
                const typeInterval = setInterval({
                    "SuccessAnimation.useEffect.typeInterval": ()=>{
                        if (index < message.length) {
                            setTypedText(message.slice(0, index + 1));
                            index++;
                        } else {
                            clearInterval(typeInterval);
                        }
                    }
                }["SuccessAnimation.useEffect.typeInterval"], 25);
                return ({
                    "SuccessAnimation.useEffect": ()=>clearInterval(typeInterval)
                })["SuccessAnimation.useEffect"];
            }
        }
    }["SuccessAnimation.useEffect"], [
        phase
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-cc0b6337e90fbb58" + " " + "fixed inset-0 z-50 flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    animation: "fadeIn 0.3s ease-out"
                },
                className: "jsx-cc0b6337e90fbb58" + " " + "absolute inset-0 bg-black/95 backdrop-blur-sm"
            }, void 0, false, {
                fileName: "[project]/app/contact/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,197,94,0.03) 2px, rgba(34,197,94,0.03) 4px)",
                    animation: "scanlines 8s linear infinite"
                },
                className: "jsx-cc0b6337e90fbb58" + " " + "absolute inset-0 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/contact/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    backgroundImage: `
            linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)
          `,
                    backgroundSize: "50px 50px",
                    animation: "gridPulse 2s ease-in-out infinite"
                },
                className: "jsx-cc0b6337e90fbb58" + " " + "absolute inset-0 opacity-10"
            }, void 0, false, {
                fileName: "[project]/app/contact/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    boxShadow: "0 0 60px rgba(34,197,94,0.3), inset 0 0 60px rgba(34,197,94,0.05)",
                    animation: "containerGlow 2s ease-in-out infinite alternate"
                },
                className: "jsx-cc0b6337e90fbb58" + " " + "relative z-10 max-w-lg w-full mx-4 p-8 border border-primary/30 rounded-lg bg-black/80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-cc0b6337e90fbb58" + " " + "flex items-center gap-2 mb-6 pb-4 border-b border-primary/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-cc0b6337e90fbb58" + " " + "w-3 h-3 rounded-full bg-red-500 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animationDelay: "0.2s"
                                },
                                className: "jsx-cc0b6337e90fbb58" + " " + "w-3 h-3 rounded-full bg-yellow-500 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animationDelay: "0.4s"
                                },
                                className: "jsx-cc0b6337e90fbb58" + " " + "w-3 h-3 rounded-full bg-green-500 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-cc0b6337e90fbb58" + " " + "ml-2 text-xs text-gray-500 font-mono",
                                children: "transmission_status.log"
                            }, void 0, false, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    phase >= 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animation: "glitchIn 0.5s ease-out"
                        },
                        className: "jsx-cc0b6337e90fbb58" + " " + "flex justify-center mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                boxShadow: "0 0 30px rgba(34,197,94,0.5), inset 0 0 30px rgba(34,197,94,0.2)",
                                animation: "iconPulse 1.5s ease-in-out infinite"
                            },
                            className: "jsx-cc0b6337e90fbb58" + " " + "relative w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    style: {
                                        animation: "checkDraw 0.6s ease-out forwards"
                                    },
                                    className: "jsx-cc0b6337e90fbb58" + " " + "w-12 h-12 text-primary",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 3,
                                        d: "M5 13l4 4L19 7",
                                        style: {
                                            strokeDasharray: 30,
                                            strokeDashoffset: 30,
                                            animation: "drawCheck 0.6s ease-out 0.2s forwards"
                                        },
                                        className: "jsx-cc0b6337e90fbb58"
                                    }, void 0, false, {
                                        fileName: "[project]/app/contact/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/contact/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        animation: "glitchCopy1 0.3s ease-in-out infinite"
                                    },
                                    className: "jsx-cc0b6337e90fbb58" + " " + "absolute inset-0 rounded-full border-2 border-cyan-400 opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/app/contact/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        animation: "glitchCopy2 0.3s ease-in-out infinite"
                                    },
                                    className: "jsx-cc0b6337e90fbb58" + " " + "absolute inset-0 rounded-full border-2 border-red-400 opacity-30"
                                }, void 0, false, {
                                    fileName: "[project]/app/contact/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/contact/page.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-cc0b6337e90fbb58" + " " + "font-mono text-sm space-y-2 mb-6",
                        children: successMessages.slice(0, phase).map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animation: i === phase - 1 ? "textGlow 0.5s ease-out" : undefined
                                },
                                className: "jsx-cc0b6337e90fbb58" + " " + `${i === phase - 1 ? "text-primary" : "text-gray-500"}`,
                                children: [
                                    i === phase - 1 ? typedText : msg,
                                    i === phase - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-cc0b6337e90fbb58" + " " + "animate-blink",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/app/contact/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    phase >= 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animation: "fadeSlideUp 0.5s ease-out"
                        },
                        className: "jsx-cc0b6337e90fbb58" + " " + "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    animation: "glitchText 3s infinite"
                                },
                                className: "jsx-cc0b6337e90fbb58" + " " + "text-2xl font-black text-white mb-2 relative inline-block",
                                children: [
                                    "TRANSMISSION_COMPLETE",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            animation: "glitchOffset1 0.3s infinite"
                                        },
                                        className: "jsx-cc0b6337e90fbb58" + " " + "absolute inset-0 text-cyan-400 opacity-70",
                                        children: "TRANSMISSION_COMPLETE"
                                    }, void 0, false, {
                                        fileName: "[project]/app/contact/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            animation: "glitchOffset2 0.3s infinite"
                                        },
                                        className: "jsx-cc0b6337e90fbb58" + " " + "absolute inset-0 text-red-400 opacity-50",
                                        children: "TRANSMISSION_COMPLETE"
                                    }, void 0, false, {
                                        fileName: "[project]/app/contact/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-cc0b6337e90fbb58" + " " + "text-gray-400 text-sm",
                                children: "Response latency: < 24h"
                            }, void 0, false, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-cc0b6337e90fbb58" + " " + "mt-6 h-1 bg-gray-800 rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: `${phase / 5 * 100}%`,
                                transition: "width 0.5s ease-out",
                                boxShadow: "0 0 10px rgba(34,197,94,0.8)"
                            },
                            className: "jsx-cc0b6337e90fbb58" + " " + "h-full bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/app/contact/page.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-cc0b6337e90fbb58" + " " + "absolute inset-0 pointer-events-none overflow-hidden rounded-lg",
                        children: [
                            ...Array(20)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    opacity: Math.random() * 0.7 + 0.3,
                                    animation: `particleFloat ${2 + Math.random() * 3}s ease-in-out infinite`,
                                    animationDelay: `${Math.random() * 2}s`
                                },
                                className: "jsx-cc0b6337e90fbb58" + " " + "absolute w-1 h-1 bg-primary rounded-full"
                            }, i, false, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/contact/page.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    animation: "cornerPulse 2s infinite"
                },
                className: "jsx-cc0b6337e90fbb58" + " " + "absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/50"
            }, void 0, false, {
                fileName: "[project]/app/contact/page.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    animation: "cornerPulse 2s infinite 0.5s"
                },
                className: "jsx-cc0b6337e90fbb58" + " " + "absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-primary/50"
            }, void 0, false, {
                fileName: "[project]/app/contact/page.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    animation: "cornerPulse 2s infinite 1s"
                },
                className: "jsx-cc0b6337e90fbb58" + " " + "absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary/50"
            }, void 0, false, {
                fileName: "[project]/app/contact/page.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    animation: "cornerPulse 2s infinite 1.5s"
                },
                className: "jsx-cc0b6337e90fbb58" + " " + "absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/50"
            }, void 0, false, {
                fileName: "[project]/app/contact/page.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "cc0b6337e90fbb58",
                children: "@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes scanlines{0%{transform:translateY(0)}to{transform:translateY(4px)}}@keyframes gridPulse{0%,to{opacity:.1}50%{opacity:.2}}@keyframes containerGlow{0%{box-shadow:0 0 60px #22c55e33,inset 0 0 60px #22c55e08}to{box-shadow:0 0 80px #22c55e66,inset 0 0 80px #22c55e14}}@keyframes glitchIn{0%{opacity:0;filter:blur(10px);transform:scale(.8)translate(-10px)}50%{filter:blur(2px);transform:scale(1.05)translate(5px)}to{opacity:1;filter:blur();transform:scale(1)translate(0)}}@keyframes iconPulse{0%,to{transform:scale(1);box-shadow:0 0 30px #22c55e80,inset 0 0 30px #22c55e33}50%{transform:scale(1.05);box-shadow:0 0 50px #22c55eb3,inset 0 0 50px #22c55e4d}}@keyframes drawCheck{to{stroke-dashoffset:0}}@keyframes glitchCopy1{0%,to{transform:translate(0)}25%{transform:translate(-2px,1px)}75%{transform:translate(2px,-1px)}}@keyframes glitchCopy2{0%,to{transform:translate(0)}25%{transform:translate(2px,-1px)}75%{transform:translate(-2px,1px)}}@keyframes textGlow{0%{text-shadow:0 0 20px #22c55ecc}to{text-shadow:0 0 5px #22c55e80}}@keyframes fadeSlideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes glitchText{0%,90%,to{transform:translate(0)}92%{transform:translate(-2px,1px)}94%{transform:translate(2px,-1px)}96%{transform:translate(-1px,-1px)}98%{transform:translate(1px,1px)}}@keyframes glitchOffset1{0%,to{clip-path:inset(0);transform:translate(0)}25%{clip-path:inset(10% 0 60%);transform:translate(-2px)}50%{clip-path:inset(40% 0 20%);transform:translate(2px)}75%{clip-path:inset(70% 0 10%);transform:translate(-1px)}}@keyframes glitchOffset2{0%,to{clip-path:inset(0);transform:translate(0)}25%{clip-path:inset(60% 0 10%);transform:translate(2px)}50%{clip-path:inset(20% 0 40%);transform:translate(-2px)}75%{clip-path:inset(10% 0 70%);transform:translate(1px)}}@keyframes particleFloat{0%,to{opacity:.3;transform:translateY(0)scale(1)}50%{opacity:.8;transform:translateY(-20px)scale(1.5)}}@keyframes cornerPulse{0%,to{opacity:.5}50%{opacity:1}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/contact/page.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(SuccessAnimation, "miNQYfCfVb5dDvNcbuRd7+ofHB4=");
_c = SuccessAnimation;
function Contact() {
    _s1();
    const [showContent, setShowContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [showSuccessAnimation, setShowSuccessAnimation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingTyping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$typewriter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypeWriter"])("ESTABLISH_CONNECTION_", 40, 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Contact.useEffect": ()=>{
            if (headingTyping.isComplete) {
                const timer = setTimeout({
                    "Contact.useEffect.timer": ()=>{
                        setShowContent(true);
                    }
                }["Contact.useEffect.timer"], 300);
                return ({
                    "Contact.useEffect": ()=>clearTimeout(timer)
                })["Contact.useEffect"];
            }
        }
    }["Contact.useEffect"], [
        headingTyping.isComplete
    ]);
    // Initialize EmailJS when component mounts and script is loaded
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Contact.useEffect": ()=>{
            let retryCount = 0;
            const maxRetries = 10;
            const initEmailJS = {
                "Contact.useEffect.initEmailJS": ()=>{
                    if (("TURBOPACK compile-time value", "object") !== "undefined" && window.emailjs) {
                        const publicKey = ("TURBOPACK compile-time value", "MzH2luE9PsvYIi64p") || "PUBLIC_KEY_HERE";
                        if ("TURBOPACK compile-time truthy", 1) {
                            try {
                                window.emailjs.init(publicKey);
                                console.log("EmailJS initialized successfully with public key:", publicKey.substring(0, 10) + "...");
                            } catch (error) {
                                console.error("Error initializing EmailJS:", error);
                            }
                        } else //TURBOPACK unreachable
                        ;
                    } else {
                        // Retry if script not loaded yet
                        if (retryCount < maxRetries) {
                            retryCount++;
                            setTimeout(initEmailJS, 500);
                        } else {
                            console.error("EmailJS script failed to load after multiple retries");
                        }
                    }
                }
            }["Contact.useEffect.initEmailJS"];
            // Start initialization after a short delay to ensure script is loaded
            const timer = setTimeout(initEmailJS, 1000);
            return ({
                "Contact.useEffect": ()=>clearTimeout(timer)
            })["Contact.useEffect"];
        }
    }["Contact.useEffect"], []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!formRef.current) {
            alert("Form not found. Please refresh the page.");
            return;
        }
        // Check if EmailJS is loaded
        if (("TURBOPACK compile-time value", "object") === "undefined" || !window.emailjs) {
            alert("EmailJS is not loaded. Please wait a moment and try again, or refresh the page.");
            return;
        }
        const serviceId = ("TURBOPACK compile-time value", "service_g6zoq0q") || "SERVICE_ID_HERE";
        const templateId = ("TURBOPACK compile-time value", "template_b8ldcbd") || "TEMPLATE_ID_HERE";
        const publicKey = ("TURBOPACK compile-time value", "MzH2luE9PsvYIi64p") || "PUBLIC_KEY_HERE";
        // Validate configuration
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setIsSubmitting(true);
        setSubmitStatus("idle");
        try {
            // Ensure EmailJS is initialized
            if (!window.emailjs || !window.emailjs.init) {
                throw new Error("EmailJS is not loaded. Please refresh the page.");
            }
            // Initialize EmailJS
            window.emailjs.init(publicKey);
            console.log("EmailJS initialized with public key");
            // Log form data for debugging
            const formData = new FormData(formRef.current);
            console.log("Form data being sent:", {
                from_name: formData.get("from_name"),
                reply_to: formData.get("reply_to"),
                message: formData.get("message"),
                name: formData.get("name"),
                email: formData.get("email")
            });
            // Send the form
            console.log("Sending form with:", {
                serviceId,
                templateId
            });
            // Wrap in explicit promise to catch all errors
            const response = await new Promise((resolve, reject)=>{
                try {
                    window.emailjs.sendForm(serviceId, templateId, formRef.current).then((result)=>{
                        console.log("EmailJS success result:", result);
                        resolve(result);
                    }).catch((error)=>{
                        console.error("EmailJS sendForm catch - raw error:", error);
                        console.error("Error type:", typeof error);
                        console.error("Error constructor:", error?.constructor?.name);
                        if (error && typeof error === 'object') {
                            console.error("Error properties:", Object.getOwnPropertyNames(error));
                            console.error("Error values:", Object.values(error));
                        }
                        reject(error);
                    });
                } catch (syncError) {
                    console.error("Synchronous error in sendForm:", syncError);
                    reject(syncError);
                }
            });
            console.log("EmailJS response:", response);
            console.log("Response status:", response?.status);
            console.log("Response text:", response?.text);
            // EmailJS v3 returns { status: 200, text: "OK" } on success
            if (response && response.status === 200 && response.text === "OK") {
                setSubmitStatus("success");
                setShowSuccessAnimation(true);
                // Reset form
                if (formRef.current) {
                    formRef.current.reset();
                    // Reset hidden fields
                    const hiddenName = document.getElementById('hidden_name');
                    const hiddenEmail = document.getElementById('hidden_email');
                    if (hiddenName) hiddenName.value = "";
                    if (hiddenEmail) hiddenEmail.value = "";
                }
            } else {
                // If response exists but doesn't match success criteria
                const errorMsg = response?.text || `Unexpected response: status ${response?.status}`;
                throw new Error(errorMsg);
            }
        } catch (error) {
            setSubmitStatus("error");
            // Extract error message from different possible formats
            let errorMessage = "Unknown error occurred";
            // Try different ways to extract error message
            if (error?.text) {
                errorMessage = error.text;
            } else if (error?.message) {
                errorMessage = error.message;
            } else if (error?.statusText) {
                errorMessage = error.statusText;
            } else if (typeof error === "string") {
                errorMessage = error;
            } else if (error?.toString && typeof error.toString === "function") {
                errorMessage = error.toString();
            }
            // Try to stringify the error to see its structure
            let errorString = "Could not stringify error";
            try {
                errorString = JSON.stringify(error, Object.getOwnPropertyNames(error));
            } catch (e) {
                errorString = String(error);
            }
            // Log full error details
            console.error("EmailJS error details:", {
                error,
                errorType: typeof error,
                errorConstructor: error?.constructor?.name,
                errorKeys: error ? Object.keys(error) : [],
                errorString,
                errorMessage,
                serviceId,
                templateId,
                publicKeyConfigured: publicKey !== "PUBLIC_KEY_HERE",
                emailjsAvailable: !!window.emailjs,
                emailjsInitAvailable: !!(window.emailjs && window.emailjs.init),
                emailjsSendFormAvailable: !!(window.emailjs && window.emailjs.sendForm)
            });
            // Show user-friendly error message
            const userMessage = errorMessage !== "Unknown error occurred" ? errorMessage : "Please check your EmailJS configuration and try again.";
            alert(`Failed to send message: ${userMessage}\n\nPlease check:\n1. Your EmailJS credentials are correct in .env.local\n2. Your EmailJS template Content uses: {{from_name}}, {{reply_to}}, {{message}}\n3. Your EmailJS template Settings uses: {{name}} for From Name, {{email}} for Reply To\n4. Your EmailJS service is active\n5. Restart your dev server after updating .env.local\n\nCheck browser console for detailed error information.`);
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleAnimationComplete = ()=>{
        setShowSuccessAnimation(false);
        setSubmitStatus("idle");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showSuccessAnimation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessAnimation, {
                onComplete: handleAnimationComplete
            }, void 0, false, {
                fileName: "[project]/app/contact/page.tsx",
                lineNumber: 518,
                columnNumber: 30
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative min-h-screen pt-24 pb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 cyber-grid opacity-20 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 521,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 md:px-10 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-block mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-mono text-primary/70 uppercase tracking-wider",
                                            children: "ROOT_ACCESS"
                                        }, void 0, false, {
                                            fileName: "[project]/app/contact/page.tsx",
                                            lineNumber: 527,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/contact/page.tsx",
                                        lineNumber: 526,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl md:text-6xl font-black text-white mb-4 min-h-[60px] md:min-h-[80px]",
                                        children: headingTyping.displayedText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: headingTyping.displayedText.includes("CONNECTION") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    headingTyping.displayedText.split("CONNECTION")[0],
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-primary",
                                                        children: "CONNECTION"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/contact/page.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 21
                                                    }, this),
                                                    headingTyping.displayedText.split("CONNECTION")[1],
                                                    !headingTyping.isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "animate-blink",
                                                        children: "|"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/contact/page.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 51
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    headingTyping.displayedText,
                                                    !headingTyping.isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "animate-blink",
                                                        children: "|"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/contact/page.tsx",
                                                        lineNumber: 542,
                                                        columnNumber: 51
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "animate-blink",
                                            children: "|"
                                        }, void 0, false, {
                                            fileName: "[project]/app/contact/page.tsx",
                                            lineNumber: 547,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/contact/page.tsx",
                                        lineNumber: 529,
                                        columnNumber: 11
                                    }, this),
                                    showContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 max-w-2xl animate-fade-in",
                                        children: "Secure channel open. Input your parameters below to initialize communication protocol. Response latency: < 24h."
                                    }, void 0, false, {
                                        fileName: "[project]/app/contact/page.tsx",
                                        lineNumber: 551,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 525,
                                columnNumber: 9
                            }, this),
                            showContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-primary/20 rounded-lg overflow-hidden bg-muted/30 box-glow animate-fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 px-6 py-4 border-b border-primary/20 bg-muted/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3 h-3 rounded-full bg-red-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/contact/page.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3 h-3 rounded-full bg-yellow-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/contact/page.tsx",
                                                        lineNumber: 565,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3 h-3 rounded-full bg-green-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/contact/page.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/contact/page.tsx",
                                                lineNumber: 563,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-500 font-mono ml-2",
                                                children: "user@guest: ~/contact-form [bash]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/contact/page.tsx",
                                                lineNumber: 568,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/contact/page.tsx",
                                        lineNumber: 562,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        id: "contact-form",
                                        ref: formRef,
                                        onSubmit: handleSubmit,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "hidden",
                                                name: "name",
                                                id: "hidden_name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/contact/page.tsx",
                                                lineNumber: 573,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "hidden",
                                                name: "email",
                                                id: "hidden_email"
                                            }, void 0, false, {
                                                fileName: "[project]/app/contact/page.tsx",
                                                lineNumber: 574,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 lg:grid-cols-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-8 border-r border-primary/10",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "text-sm font-mono text-primary uppercase tracking-wider block mb-3",
                                                                            children: "> ENTER_NAME"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/contact/page.tsx",
                                                                            lineNumber: 581,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            name: "from_name",
                                                                            id: "from_name",
                                                                            placeholder: "$ your_name",
                                                                            className: "w-full px-4 py-3 rounded bg-muted border border-primary/20 text-white font-mono placeholder-gray-600 focus:outline-none focus:border-primary transition-colors",
                                                                            required: true,
                                                                            onChange: (e)=>{
                                                                                // Sync with hidden field for template settings
                                                                                const hiddenName = document.getElementById('hidden_name');
                                                                                if (hiddenName) hiddenName.value = e.target.value;
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/contact/page.tsx",
                                                                            lineNumber: 584,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/contact/page.tsx",
                                                                    lineNumber: 580,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "text-sm font-mono text-primary uppercase tracking-wider block mb-3",
                                                                            children: "> ENTER_EMAIL"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/contact/page.tsx",
                                                                            lineNumber: 600,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "email",
                                                                            name: "reply_to",
                                                                            id: "reply_to",
                                                                            placeholder: "@ your_email@domain.com",
                                                                            className: "w-full px-4 py-3 rounded bg-muted border border-primary/20 text-white font-mono placeholder-gray-600 focus:outline-none focus:border-primary transition-colors",
                                                                            required: true,
                                                                            onChange: (e)=>{
                                                                                // Sync with hidden field for template settings
                                                                                const hiddenEmail = document.getElementById('hidden_email');
                                                                                if (hiddenEmail) hiddenEmail.value = e.target.value;
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/contact/page.tsx",
                                                                            lineNumber: 603,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/contact/page.tsx",
                                                                    lineNumber: 599,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-mono text-gray-500 uppercase tracking-wider mb-3",
                                                                            children: "DIRECT_FEED:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/contact/page.tsx",
                                                                            lineNumber: 619,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-4",
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL_LINKS"].map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: social.link,
                                                                                    target: "_blank",
                                                                                    rel: "noopener noreferrer",
                                                                                    className: "w-10 h-10 rounded border border-primary/30 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group",
                                                                                    title: social.title,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(social.icon, {
                                                                                        className: "w-5 h-5 text-primary/70 group-hover:text-primary transition-colors"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/contact/page.tsx",
                                                                                        lineNumber: 630,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                }, social.title, false, {
                                                                                    fileName: "[project]/app/contact/page.tsx",
                                                                                    lineNumber: 622,
                                                                                    columnNumber: 25
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/contact/page.tsx",
                                                                            lineNumber: 620,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/contact/page.tsx",
                                                                    lineNumber: 618,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/contact/page.tsx",
                                                            lineNumber: 579,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/contact/page.tsx",
                                                        lineNumber: 578,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-8 bg-muted/50 font-mono text-sm border-l border-primary/10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-4 text-gray-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-primary",
                                                                        children: ">"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/contact/page.tsx",
                                                                        lineNumber: 641,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    " COMPILE_MESSAGE"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/contact/page.tsx",
                                                                lineNumber: 640,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                name: "message",
                                                                placeholder: "// write your message here...",
                                                                className: "w-full h-48 bg-transparent text-gray-300 font-mono placeholder-gray-600 focus:outline-none resize-none",
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/contact/page.tsx",
                                                                lineNumber: 644,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-4 text-gray-600 text-xs mt-4",
                                                                children: Array(8).fill(0).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: String(i + 1).padStart(2, "0")
                                                                    }, i, false, {
                                                                        fileName: "[project]/app/contact/page.tsx",
                                                                        lineNumber: 656,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/contact/page.tsx",
                                                                lineNumber: 652,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/contact/page.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/contact/page.tsx",
                                                lineNumber: 576,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-8 py-4 border-t border-primary/20 bg-muted/50 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-500 font-mono",
                                                        children: [
                                                            "STATUS: ",
                                                            isSubmitting ? "TRANSMITTING..." : submitStatus === "success" ? "TRANSMITTED ✓" : submitStatus === "error" ? "ERROR ✗" : "ONLINE",
                                                            " • ENCRYPTION: AES-256"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/contact/page.tsx",
                                                        lineNumber: 664,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: isSubmitting,
                                                        className: `px-6 py-2 rounded bg-primary text-background font-bold font-mono uppercase tracking-wider hover:scale-105 transition-transform box-glow ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`,
                                                        children: isSubmitting ? "▶ [ TRANSMITTING... ]" : "▶ [ EXECUTE_TRANSMISSION ]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/contact/page.tsx",
                                                        lineNumber: 667,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/contact/page.tsx",
                                                lineNumber: 663,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/contact/page.tsx",
                                        lineNumber: 571,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 560,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 523,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/contact/page.tsx",
                lineNumber: 519,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
_s1(Contact, "htsrMeyr5kaCi0pKXiHKL8gwIO0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$typewriter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypeWriter"]
    ];
});
_c1 = Contact;
var _c, _c1;
__turbopack_context__.k.register(_c, "SuccessAnimation");
__turbopack_context__.k.register(_c1, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_00f102ed._.js.map