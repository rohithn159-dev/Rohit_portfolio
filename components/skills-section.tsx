"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Database, Smartphone, Globe } from "lucide-react"

const skills = [
  {
    name: "HTML",
    level: 80,
    icon: Globe,
    color: "from-orange-500 to-red-500",
    description: "Web structure & semantics",
  },
  {
    name: "Python",
    level: 65,
    icon: Code,
    color: "from-yellow-500 to-green-500",
    description: "Programming & scripting",
  },
  {
    name: "SQL",
    level: 70,
    icon: Database,
    color: "from-blue-500 to-cyan-500",
    description: "Database management",
  },
  {
    name: "Android Development",
    level: 55,
    icon: Smartphone,
    color: "from-green-500 to-emerald-500",
    description: "Mobile app development",
  },
]

const technologies = [
  "Android Studio",
  "Firebase",
  "Java",
  "XML",
  "Git",
  "VS Code",
  "MySQL",
  "HTML5",
  "CSS3",
  "JavaScript",
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full py-16 sm:py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="w-full px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary font-mono text-xs sm:text-sm mb-2 sm:mb-4">
            {"// My expertise"}
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
            Building a strong foundation in programming and development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card rounded-2xl p-4 sm:p-6 group hover:border-primary/30 transition-all duration-500"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <skill.icon className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-1">
                    <h3 className="font-semibold text-base sm:text-lg">{skill.name}</h3>
                    <span className="text-primary font-mono text-xs sm:text-sm">
                      {isVisible ? skill.level : 0}%
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 200}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Cloud */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 text-center max-w-5xl mx-auto">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-secondary/50 text-foreground border border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative code block */}
        <div className="mt-8 sm:mt-12 glass-card rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm max-w-3xl mx-auto overflow-x-auto">
          <div className="flex items-center gap-2 mb-3 sm:mb-4 flex-wrap">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-muted-foreground ml-1 sm:ml-2 text-xs">skills.js</span>
          </div>
          <pre className="text-muted-foreground overflow-x-auto">
            <code>
              <span className="text-primary">const</span>{" "}
              <span className="text-accent">developer</span> = {"{"}
              {"\n"}
              {"  "}name: <span className="text-green-400">{'"Rohith"'}</span>,
              {"\n"}
              {"  "}skills: [
              <span className="text-yellow-400">{'"HTML"'}</span>,{" "}
              <span className="text-yellow-400">{'"Python"'}</span>,{" "}
              <span className="text-yellow-400">{'"SQL"'}</span>,{" "}
              <span className="text-yellow-400">{'"Android"'}</span>],{"\n"}
              {"  "}learning: <span className="text-primary">true</span>,{"\n"}
              {"  "}available: <span className="text-primary">true</span>
              {"\n"}
              {"}"};
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
