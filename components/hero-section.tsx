"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const titles = [
  "BCA Student",
  "Android Developer",
  "Tech Enthusiast",
  "Problem Solver",
]

export function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTitleIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, oklch(0.75 0.18 195 / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, oklch(0.75 0.18 195 / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "clamp(30px, 8vw, 50px) clamp(30px, 8vw, 50px)",
          }}
        />

        {/* Gradient orbs - responsive sizes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 md:w-[600px] h-96 md:h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative group flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500 animate-gradient" />
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-background flex-shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="Madupoju Rohith"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-2 -right-2 glass-card px-3 sm:px-4 py-2 rounded-full animate-float text-xs sm:text-sm">
              <span className="text-primary font-medium">
                Open to Work
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left w-full lg:w-auto max-w-xl px-2">
            <p className="text-primary font-mono text-xs sm:text-sm mb-2 sm:mb-4 animate-fade-in">
              {"// Hello World, I'm"}
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-4 tracking-tight leading-tight">
              <span className="text-foreground">Madupoju</span>
              <br />
              <span className="text-primary text-glow">Rohith</span>
            </h1>

            <div className="h-6 sm:h-8 md:h-10 mb-4 sm:mb-6">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-mono line-clamp-2">
                {displayText}
                <span className="animate-pulse text-primary">|</span>
              </p>
            </div>

            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 px-1">
              {
                "Hi, I'm Rohith, a BCA student passionate about technology and app development. I enjoy building projects like my ABCD Dance Learning App and continuously learning new skills in programming and Android development."
              }
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8 px-1">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="https://github.com/rohithn159-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} className="sm:w-[22px] sm:h-[22px]" />
              </a>
              <a
                href="https://linkedin.com/in/rohith-nani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="sm:w-[22px] sm:h-[22px]" />
              </a>
              <a
                href="mailto:rohithn159@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} className="sm:w-[22px] sm:h-[22px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 sm:gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-mono">Scroll Down</span>
            <ArrowDown size={16} className="sm:w-[20px] sm:h-[20px]" />
          </a>
        </div>
      </div>
    </section>
  )
}
