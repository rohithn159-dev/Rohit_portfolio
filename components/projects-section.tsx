"use client"

import { useState } from "react"
import { ExternalLink, Github, Smartphone, Play, Users, Video, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectModal } from "@/components/project-modal"

const projectFeatures = [
  { icon: Users, text: "User Login System" },
  { icon: Play, text: "Dance Category Selection" },
  { icon: Video, text: "Video Streaming" },
  { icon: Shield, text: "Admin Panel" },
]

const technologies = [
  "Android Studio",
  "Java",
  "Firebase Auth",
  "Firebase Realtime DB",
  "XML",
  "Material Design",
]

export function ProjectsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="projects" className="w-full py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary font-mono text-xs sm:text-sm mb-2 sm:mb-4">
            {"// Featured work"}
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
            Showcasing my hands-on experience with real-world applications
          </p>
        </div>

        {/* Featured Project */}
        <div className="max-w-5xl mx-auto">
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-gradient" />

            <div className="relative glass-card rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Project Preview */}
                <div className="lg:col-span-2 relative bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-[250px] sm:min-h-[300px]">
                  {/* Phone mockup */}
                  <div className="relative transform scale-75 sm:scale-90 md:scale-100 origin-center">
                    <div className="w-48 h-96 rounded-[2.5rem] border-4 border-foreground/20 bg-background/80 backdrop-blur-sm p-2 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                      {/* Phone notch */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/20 rounded-full" />

                      {/* App content */}
                      <div className="h-full rounded-[2rem] bg-gradient-to-br from-primary/20 to-accent/20 flex flex-col items-center justify-center gap-4 p-4">
                        <div className="w-16 h-16 rounded-2xl bg-primary/30 flex items-center justify-center">
                          <Smartphone className="text-primary" size={32} />
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-sm">ABCD</p>
                          <p className="text-xs text-muted-foreground">
                            Dance App
                          </p>
                        </div>
                        <div className="w-full space-y-2">
                          <div className="h-2 bg-primary/30 rounded-full w-full" />
                          <div className="h-2 bg-primary/20 rounded-full w-3/4" />
                          <div className="h-2 bg-primary/10 rounded-full w-1/2" />
                        </div>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center animate-float">
                      <Play className="text-primary" size={18} />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center animate-float delay-500">
                      <Video className="text-accent" size={18} />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="lg:col-span-3 p-4 sm:p-6 md:p-8 lg:p-10">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-3 sm:mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Featured Project
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                    ABCD – Any Body Can Dance
                  </h3>
                  <p className="text-primary font-mono text-xs sm:text-sm mb-3 sm:mb-4">
                    Dance Learning Application
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    A comprehensive Android application designed to make dance
                    learning accessible to everyone. Users can browse through
                    categorized video tutorials, from classical to contemporary
                    styles, and learn at their own pace with a user-friendly
                    interface.
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {projectFeatures.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                      >
                        <feature.icon
                          size={16}
                          className="text-primary flex-shrink-0"
                        />
                        <span className="line-clamp-2">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 sm:px-3 py-1 text-xs rounded-full bg-secondary text-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4">
                    <Button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-sm w-full sm:w-auto">
                      <ExternalLink size={16} />
                      View Project
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/10 gap-2 text-sm w-full sm:w-auto"
                    >
                      <a
                        href="https://github.com/rohithn159-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Projects Coming Soon */}
          <div className="mt-8 sm:mt-12 glass-card rounded-2xl p-6 sm:p-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 mb-3 sm:mb-4">
              <Smartphone className="text-primary w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">More Projects Coming Soon</h4>
            <p className="text-muted-foreground text-xs sm:text-sm max-w-md mx-auto mb-4">
              Currently working on new exciting projects. Stay tuned for more
              updates on my GitHub profile.
            </p>
            <a
              href="https://github.com/rohithn159-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm sm:text-base"
            >
              <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
              Follow on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
