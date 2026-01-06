"use client"

import { useState, useEffect } from "react"
import { useTypeWriter } from "@/hooks/use-typewriter"
import { PROJECTS, PROJECT_FILTERS, PAGE_HEADINGS } from "@/constants/data"

export default function Projects() {
  const [showContent, setShowContent] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [bootComplete, setBootComplete] = useState(false)
  const headingTyping = useTypeWriter(PAGE_HEADINGS.projects.title, 40, 0)

  useEffect(() => {
    if (headingTyping.isComplete) {
      const timer = setTimeout(() => {
        setShowContent(true)
        setTimeout(() => setBootComplete(true), 600)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [headingTyping.isComplete])

  const filtered = PROJECTS.filter((p) => activeFilter === "all" || p.category === activeFilter)

  return (
    <main className="relative min-h-screen pt-24 pb-12 crt-flicker">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 matrix-rain-v2 opacity-30" />
      <div className="absolute inset-0 hex-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />
      
      {/* Data stream line */}
      <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent data-stream" />
      
      {/* Floating ASCII decoration */}
      <div className="absolute top-32 right-8 font-mono text-[10px] text-primary/15 pointer-events-none leading-relaxed hidden lg:block">
        <pre>{`
  ╔══════════════════╗
  ║  PROJECTS_DB     ║
  ║  ────────────    ║
  ║  STATUS: ACTIVE  ║
  ║  NODES: ${PROJECTS.length.toString().padStart(2, '0')}       ║
  ╚══════════════════╝
        `}</pre>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-3 py-1 border border-primary/30 rounded text-xs text-primary font-mono tracking-wider uppercase bg-primary/5">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {PAGE_HEADINGS.projects.prefix}
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 min-h-[60px] md:min-h-[80px] rgb-shift">
            {headingTyping.displayedText ? (
              <>
                {headingTyping.displayedText}
                {!headingTyping.isComplete && <span className="animate-blink">|</span>}
              </>
            ) : (
              <span className="animate-blink">|</span>
            )}
          </h1>
          {showContent && (
            <div className="animate-fade-in">
              <p className="text-gray-400 max-w-2xl font-mono text-sm">
                <span className="text-primary/70">// </span>
                A collection of deployed applications and experiments. Each module represents a specific problem solved through code.
              </p>
              <div className="loading-bar mt-4 max-w-md" />
            </div>
          )}
        </div>

        {/* Command Line Filter */}
        {showContent && (
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-3 bg-muted/50 border border-primary/20 rounded-lg font-mono text-sm mb-4">
              <span className="text-primary">$</span>
              <span className="text-gray-400">filter --category=</span>
              <span className="text-white">{activeFilter}</span>
              <span className="animate-blink text-primary">|</span>
            </div>
            <div className="flex flex-wrap gap-3">
            {PROJECT_FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded font-mono text-sm font-bold transition-all neon-border ${
                  activeFilter === filter.id
                    ? "bg-primary text-background box-glow"
                    : "border border-primary/30 text-primary hover:border-primary hover:bg-primary/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {showContent && (
          <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className={`group terminal-card rounded-lg overflow-hidden hover:border-primary/60 transition-all duration-300 box-glow flex flex-col h-full boot-sequence`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Terminal Header */}
              <div className="terminal-card-header">
                <div className="terminal-dots">
                  <span className="terminal-dot red" />
                  <span className="terminal-dot yellow" />
                  <span className="terminal-dot green" />
                </div>
                <span className="ml-auto text-[10px] text-primary/40 font-mono tracking-wider">
                  PID: {1000 + (project.id as number)}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
                {project.status && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-primary/20 border border-primary text-primary text-xs font-mono rounded pulse-ring">
                    {project.status}
                  </div>
                )}
                {/* Scanline overlay on image */}
                <div className="absolute inset-0 scanlines opacity-20 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 bg-muted/30 relative">
                {/* Process info */}
                <div className="flex items-center gap-2 mb-2 text-[10px] font-mono text-primary/50">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span>PROCESS_ACTIVE</span>
                  <span className="ml-auto">[{project.category.toUpperCase()}]</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors glitch-text">
                  <span className="glitch-text-inner">{project.title}</span>
                </h3>

                <p className="text-sm text-gray-400 mb-4 flex-1 font-mono leading-relaxed">
                  <span className="text-primary/50">/* </span>
                  {project.description}
                  <span className="text-primary/50"> */</span>
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-primary/10 border border-primary/30 text-primary rounded font-mono hover:bg-primary/20 hover:border-primary/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4 border-t border-primary/10">
                  {project.links?.source && (
                    <a
                      href={project.links.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 font-mono font-bold text-sm rounded border border-primary/50 text-primary hover:bg-primary/10 transition-colors flex items-center justify-center gap-2 neon-border"
                    >
                      <span>{"< >"}</span> SOURCE
                    </a>
                  )}
                  {project.links?.demo && (
                    <button className="flex-1 py-2 px-3 font-mono font-bold text-sm rounded bg-primary/20 border border-primary text-primary hover:bg-primary/30 transition-colors flex items-center justify-center gap-2 holographic">
                      <span>▶</span> DEMO
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          </div>

          {/* Load More Terminal Style */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted/50 border border-primary/20 rounded-lg font-mono text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/40 transition-all group">
              <span className="text-primary">$</span>
              <span className="text-gray-400 group-hover:text-white transition-colors">./load_more_modules.sh</span>
              <span className="text-primary animate-blink">_</span>
            </div>
          </div>

          {/* Bottom Status */}
          <div className="mt-8 border-t border-primary/10 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  SYSTEM: OPERATIONAL
                </span>
                <span>MODULES_LOADED: {filtered.length}</span>
              </div>
              <span className="text-primary/50">// All processes running nominal</span>
            </div>
          </div>
          </>
        )}
      </div>
    </main>
  )
}
