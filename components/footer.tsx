"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/rohithn159-dev",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/rohith-nani",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:rohithn159@gmail.com",
    label: "Email",
  },
]

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative w-full py-8 sm:py-12 border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />

      <div className="w-full px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6 transition-all duration-300 hover:text-primary"
          >
            <span className="text-primary">&lt;</span>
            Rohith
            <span className="text-primary">/&gt;</span>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6 sm:mb-8" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground text-center">
            <span>
              &copy; {new Date().getFullYear()} Madupoju Rohith. All rights
              reserved.
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart size={12} className="sm:w-[14px] sm:h-[14px] text-red-500 fill-red-500" /> in India
            </span>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="fixed right-4 sm:right-6 md:right-8 bottom-6 sm:bottom-8 w-9 h-9 sm:w-10 sm:h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} className="sm:w-[18px] sm:h-[18px]" />
        </button>
      </div>
    </footer>
  )
}
