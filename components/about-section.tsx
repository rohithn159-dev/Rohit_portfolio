"use client"

import { GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Bharathi Degree College",
    year: "2026",
    icon: GraduationCap,
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Lal Bahadur College",
    year: "2023",
    icon: Calendar,
  },
  {
    degree: "SSC",
    institution: "GHS Matwada",
    year: "2021",
    icon: MapPin,
  },
]

const highlights = [
  "Passionate about mobile app development",
  "Quick learner with strong problem-solving skills",
  "Experience with Android Studio & Firebase",
  "Committed to writing clean, efficient code",
]

export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="w-full px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary font-mono text-xs sm:text-sm mb-2 sm:mb-4">{"// Get to know me"}</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
            A passionate fresher developer eager to learn and grow in the tech industry
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left - About Text */}
          <div className="space-y-4 sm:space-y-6">
            <div className="glass-card rounded-2xl p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="text-primary flex-shrink-0" size={20} />
                <span>Who I Am</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                {
                  "I'm a dedicated BCA student with a strong passion for technology and software development. As a fresher, I bring fresh perspectives and an eagerness to learn and contribute to innovative projects."
                }
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {
                  "My journey in tech started with curiosity about how apps work, which led me to dive into Android development. I love turning ideas into functional applications that can make a difference in people's lives."
                }
              </p>
            </div>

            {/* Highlights */}
            <div className="glass-card rounded-2xl p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">What I Bring</h3>
              <ul className="space-y-2 sm:space-y-3">
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-muted-foreground text-sm sm:text-base"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Education Timeline */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary flex-shrink-0" size={20} />
              <span>Educational Background</span>
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

              <div className="space-y-4 sm:space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-12 sm:pl-16 group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2.5 sm:left-4 top-2 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary group-hover:scale-125 transition-transform duration-300">
                      <div className="absolute inset-1 rounded-full bg-primary animate-pulse" />
                    </div>

                    <div className="glass-card rounded-xl p-4 sm:p-6 transition-all duration-300 hover:border-primary/30 group-hover:translate-x-1 sm:group-hover:translate-x-2">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                        <h4 className="font-semibold text-foreground text-sm sm:text-base">
                          {edu.degree}
                        </h4>
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded w-fit">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fresher Badge */}
            <div className="glass-card rounded-xl p-4 sm:p-6 border-primary/20 mt-6 sm:mt-8">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-primary" size={24} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                    Fresh Talent
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Eager to learn, grow, and contribute to meaningful projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
