"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative glass-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/50 hover:bg-background flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8 md:p-10">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              ABCD – Any Body Can Dance
            </h2>
            <p className="text-primary font-mono text-xs sm:text-sm">
              Android Dance Learning Application
            </p>
          </div>

          {/* Project Mockup */}
          <div className="mb-6 sm:mb-8 relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 sm:p-8 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
              <div className="relative transform scale-75 sm:scale-90 md:scale-100 origin-center">
                <div className="w-48 h-96 rounded-[2.5rem] border-4 border-foreground/20 bg-background/80 backdrop-blur-sm p-2 shadow-2xl">
                  {/* Phone notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/20 rounded-full z-10" />

                  {/* App content */}
                  <div className="h-full rounded-[2rem] bg-gradient-to-br from-primary/20 to-accent/20 flex flex-col items-center justify-center gap-4 p-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/30 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">🎭</span>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-sm">ABCD</p>
                      <p className="text-xs text-muted-foreground">Dance App</p>
                    </div>
                    <div className="w-full space-y-2 mt-4">
                      <div className="h-2 bg-primary/30 rounded-full w-full" />
                      <div className="h-2 bg-primary/20 rounded-full w-3/4" />
                      <div className="h-2 bg-primary/10 rounded-full w-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Project Description</h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4">
              ABCD is a comprehensive Android application that makes dance learning accessible to everyone. The app features a user-friendly interface where dancers can browse through categorized video tutorials, from classical to contemporary styles.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Whether you&apos;re a beginner looking to start your dance journey or an experienced dancer wanting to learn new moves, ABCD provides the perfect platform to learn at your own pace with high-quality video content and an intuitive navigation system.
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Key Features</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "User Authentication & Login System",
                "Dance Category Selection (Classical, Contemporary, etc.)",
                "Seamless Video Streaming with Quality Control",
                "Comprehensive Admin Panel for Content Management",
                "User-Friendly Navigation & Intuitive UI",
                "Firebase Real-time Database Integration",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2 text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Android Studio",
                "Java",
                "Firebase Auth",
                "Firebase Realtime Database",
                "XML Layouts",
                "Material Design",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-secondary border border-border text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 sm:mb-10 p-4 sm:p-6 bg-secondary/30 rounded-xl border border-border">
            <div className="text-center">
              <p className="text-lg sm:text-2xl font-bold text-primary">50+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Video Tutorials</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-2xl font-bold text-primary">10+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Dance Categories</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-2xl font-bold text-primary">100%</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Native Android</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1"
            >
              <a
                href="https://github.com/rohithn159-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 flex-1"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
