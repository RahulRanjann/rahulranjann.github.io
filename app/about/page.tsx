"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef, useCallback } from "react"
import { useTypeWriter } from "@/hooks/use-typewriter"
import { ABOUT_DATA, ABOUT_SKILLS, SOCIAL_LINKS, PAGE_HEADINGS } from "@/constants/data"

// Matrix Rain Profile Image Component
function MatrixProfileImage({ src, alt }: { src: string; alt: string }) {
  const [isHovered, setIsHovered] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)
  const [isRevealed, setIsRevealed] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const progressRef = useRef<NodeJS.Timeout | null>(null)

  const startMatrixRain = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 224
    canvas.height = 224

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF'
    const fontSize = 10
    const columns = canvas.width / fontSize
    const drops: number[] = Array(Math.floor(columns)).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#00ff9d'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      animationRef.current = requestAnimationFrame(draw)
    }

    draw()
  }, [])

  const stopMatrixRain = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
  }, [])

  useEffect(() => {
    if (isHovered && !isRevealed) {
      startMatrixRain()
      
      setLoadProgress(0)
      progressRef.current = setInterval(() => {
        setLoadProgress(prev => {
          if (prev >= 100) {
            if (progressRef.current) clearInterval(progressRef.current)
            setIsRevealed(true)
            return 100
          }
          return prev + 4
        })
      }, 100)
    } else if (!isHovered) {
      stopMatrixRain()
      if (progressRef.current) clearInterval(progressRef.current)
      setLoadProgress(0)
      setIsRevealed(false)
    }

    return () => {
      stopMatrixRain()
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [isHovered, isRevealed, startMatrixRain, stopMatrixRain])

  useEffect(() => {
    if (isRevealed) {
      const timeout = setTimeout(() => {
        stopMatrixRain()
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [isRevealed, stopMatrixRain])

  return (
    <div 
      className="relative w-56 h-56 mb-6 rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300 shadow-[0_0_20px_rgba(0,255,157,0.2)] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-all duration-500 ${isRevealed ? 'scale-105' : 'scale-100'}`}
      />
      
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 z-20 transition-opacity duration-500 ${
          isHovered && !isRevealed ? 'opacity-90' : 'opacity-0'
        }`}
      />
      
      <div 
        className="absolute inset-0 bg-black z-10 transition-all duration-100"
        style={{ 
          clipPath: isHovered 
            ? `inset(${100 - loadProgress}% 0 0 0)` 
            : 'inset(100% 0 0 0)',
          opacity: isHovered ? 0 : 1
        }}
      />
      
      {isHovered && !isRevealed && (
        <div className="absolute bottom-2 left-2 z-30 font-mono text-xs text-primary bg-black/70 px-2 py-1 rounded">
          LOADING... {loadProgress}%
        </div>
      )}
      
      {isRevealed && (
        <div className="absolute bottom-2 left-2 z-30 font-mono text-xs text-primary bg-black/70 px-2 py-1 rounded flex items-center gap-2 animate-fade-in">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          LOADED
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent z-5 pointer-events-none" />
      
      <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-primary/50 z-30" />
      <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-primary/50 z-30" />
      <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-primary/50 z-30" />
      <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-primary/50 z-30" />
    </div>
  )
}

export default function About() {
  const [showContent, setShowContent] = useState(false)
  const headingTyping = useTypeWriter(PAGE_HEADINGS.about.title, 40, 0)

  useEffect(() => {
    if (headingTyping.isComplete) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [headingTyping.isComplete])

  return (
    <main className="relative min-h-screen pt-24 pb-12">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 binary-rain opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        {/* Terminal Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <p className="text-sm font-mono text-primary/70">{ABOUT_DATA.systemInfo}</p>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 min-h-[60px] md:min-h-[80px]">
            {headingTyping.displayedText ? (
              <>
                {headingTyping.displayedText.includes("//") ? (
                  <>
                    {headingTyping.displayedText.split("//")[0]}
                    <span className="text-primary">// {headingTyping.displayedText.split("//")[1] || ""}</span>
                    {!headingTyping.isComplete && <span className="animate-blink">|</span>}
                  </>
                ) : (
                  <>
                    {headingTyping.displayedText}
                    {!headingTyping.isComplete && <span className="animate-blink">|</span>}
                  </>
                )}
              </>
            ) : (
              <span className="animate-blink">|</span>
            )}
          </h1>
          {showContent && (
            <p className="text-gray-400 font-mono text-sm mt-4 animate-fade-in">
              root@system:~$ cat intro.md | grep -i "rahul"
            </p>
          )}
        </div>

        {/* Main Content - Terminal Container */}
        {showContent && (
          <>
          {/* Profile Section */}
          <div className="border border-primary/20 rounded-lg bg-muted/50 backdrop-blur-sm p-6 md:p-8 box-glow animate-fade-in mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Left - Profile Image & Stats */}
              <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                {/* Profile Image with Matrix Effect */}
                <MatrixProfileImage 
                  src={ABOUT_DATA.profileImage} 
                  alt="Rahul Profile" 
                />

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="border border-primary/20 rounded-lg p-4 text-center hover:bg-primary/5 hover:border-primary/40 transition-all group relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                        {ABOUT_DATA.stats.experience.value}
                      </div>
                      <div className="text-xs text-gray-400 uppercase font-mono tracking-wider">{ABOUT_DATA.stats.experience.label}</div>
                    </div>
                  </div>
                  <div className="border border-primary/20 rounded-lg p-4 text-center hover:bg-primary/5 hover:border-primary/40 transition-all group relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                        {ABOUT_DATA.stats.projects.value}
                      </div>
                      <div className="text-xs text-gray-400 uppercase font-mono tracking-wider">{ABOUT_DATA.stats.projects.label}</div>
                    </div>
                  </div>
                </div>

                {/* Terminal Command Display */}
                <div className="mt-6 w-full border border-primary/10 rounded p-4 bg-background/50 font-mono text-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary">$</span>
                    <span className="text-gray-400">whoami</span>
                  </div>
                  <div className="text-primary">rahul@developer</div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-primary">$</span>
                    <span className="text-gray-400">pwd</span>
                  </div>
                  <div className="text-primary">~/portfolio/about</div>
                </div>
              </div>

              {/* Right - Bio */}
              <div className="lg:col-span-3">
                <div className="mb-6 font-mono text-sm text-gray-400 flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <p>cat intro.md</p>
                  <span className="text-primary/50">|</span>
                  <span className="text-primary/50">grep -i "developer"</span>
                </div>

                <h2 className="text-3xl font-bold text-white mb-6 text-glow">
                  {ABOUT_DATA.bio.title}
                </h2>

                <div className="space-y-4 mb-8">
                  {ABOUT_DATA.bio.paragraphs.map((paragraph, idx) => (
                    <div key={idx} className="relative pl-4 border-l-2 border-primary/20 animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                      <p className="text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Skills Grid */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-sm font-mono text-primary uppercase tracking-wider">
                      Known_Vulnerabilities (SKILLS)
                    </h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ABOUT_SKILLS.map((skill, idx) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 border border-primary/30 rounded text-sm text-primary hover:bg-primary/10 hover:border-primary/60 transition-all font-mono animate-slide-up hover:scale-105"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={ABOUT_DATA.cta.downloadCV.href}
                    className="group flex items-center justify-center gap-2 px-6 py-3 rounded bg-primary text-background font-bold transition-all hover:scale-105 box-glow relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="relative z-10">{ABOUT_DATA.cta.downloadCV.text}</span>
                  </Link>
                  <Link
                    href={ABOUT_DATA.cta.viewSource.href}
                    className="group flex items-center justify-center gap-2 px-6 py-3 rounded border border-primary/50 text-white font-bold transition-all hover:bg-primary/10 hover:border-primary relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <svg className="w-5 h-5 text-primary relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4m0 6V4m0 0L8 4m0 0l4 4"
                      />
                    </svg>
                    <span className="relative z-10">{ABOUT_DATA.cta.viewSource.text}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-sm font-mono text-primary uppercase tracking-wider">// Social_Uplink</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
              <span className="text-xs text-gray-500 font-mono">[3 connections]</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SOCIAL_LINKS.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-primary/20 rounded-lg p-6 hover:bg-primary/5 hover:border-primary/60 transition-all box-glow relative overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="mb-4 group-hover:text-primary transition-all duration-300">
                      <social.icon className="w-10 h-10 group-hover:scale-110 transition-transform" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {social.title}
                    </h4>
                    <p className="text-sm text-gray-400 font-mono group-hover:text-gray-300 transition-colors">
                      {social.desc}
                    </p>
                    <div className="mt-4 text-xs text-primary/50 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      → connect
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          </>
        )}
      </div>
    </main>
  )
}
