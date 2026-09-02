"use client"

import {
  Download,
  Code2,
  Trophy,
  Zap,
  BookOpen,
  Users,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const technicalSkills = [
  {
    category: "Programming Languages",
    skills: ["Python (Primary)"],
    icon: Code2,
  },
  {
    category: "Tools & Platforms",
    skills: ["Android Studio", "Visual Studio Code", "Git/GitHub", "MS Office"],
    icon: Zap,
  },
  {
    category: "Web Technologies",
    skills: ["HTML", "CSS"],
    icon: Code2,
  },
  {
    category: "Languages",
    skills: ["Telugu", "English", "Hindi"],
    icon: Users,
  },
]

const strengths = [
  "Strong problem-solving ability",
  "Quick learner and adaptable",
  "Logical thinking and analytical skills",
  "Ability to work independently and in a team",
]

const achievements = [
  {
    title: "No. 1 Performer for PPT presentation",
    description: "College-level event",
  },
  {
    title: "Successfully developed final year academic project",
    description: "Demonstrated problem-solving skills with ABCD Dance App",
  },
  {
    title: "Consistently maintained good academic performance",
    description: "Without any backlogs throughout the course",
  },
  {
    title: "Performer for Dance Competition",
    description: "College-level event",
  },
]

export function ResumeSection() {
  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement("a")
    link.href = "https://blobs.vusercontent.net/blob/Rohith_Madupoju_Resume-enA5Iprkm8vqmNsOFap9kCZWCc7jMl.pdf"
    link.download = "Rohith_Madupoju_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="w-full py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="w-full px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary font-mono text-xs sm:text-sm mb-2 sm:mb-4">
            {"// Professional Resume"}
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            My <span className="text-primary">Resume</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2 mb-6 sm:mb-8">
            Download my complete resume or explore my qualifications below
          </p>

          {/* Download Button */}
          <Button
            onClick={handleDownloadResume}
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 inline-flex text-sm sm:text-base"
          >
            <Download size={18} />
            Download Resume
          </Button>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Left Column - Technical Skills */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Technical Skills */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2">
                <Code2 className="text-primary flex-shrink-0" size={24} />
                <span>Technical Skills</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {technicalSkills.map((skillGroup) => (
                  <div
                    key={skillGroup.category}
                    className="glass-card rounded-xl p-4 sm:p-6 hover:border-primary/30 transition-all duration-300"
                  >
                    <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4 text-foreground">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full bg-primary/10 border border-primary/30 text-primary font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths */}
            <div className="glass-card rounded-2xl p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2 mb-4 sm:mb-6">
                <Zap className="text-primary flex-shrink-0" size={24} />
                <span>Core Strengths</span>
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {strengths.map((strength) => (
                  <div key={strength} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5 w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-muted-foreground text-sm sm:text-base">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2">
                <Trophy className="text-primary flex-shrink-0" size={24} />
                <span>Achievements</span>
              </h3>

              <div className="grid gap-4 sm:gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-4 sm:p-6 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <span className="text-primary font-bold text-xs sm:text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Summary & Education */}
          <div className="space-y-6 sm:space-y-8">
            {/* Career Objective */}
            <div className="glass-card rounded-2xl p-4 sm:p-6 md:p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <BookOpen className="text-primary flex-shrink-0" size={20} />
                <span>Career Objective</span>
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Seeking an entry-level IT position where I can develop my
                technical skills and gain practical experience while
                contributing to organizational growth.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                <BookOpen className="text-primary flex-shrink-0" size={24} />
                <span>Education</span>
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {/* BCA */}
                <div className="glass-card rounded-xl p-4 sm:p-6 border-l-4 border-primary hover:border-primary/80 transition-all duration-300">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-semibold text-sm sm:text-base text-foreground">
                      Bachelor of Computer Applications
                    </h4>
                    <span className="text-primary text-xs font-mono bg-primary/10 px-2 py-1 rounded whitespace-nowrap">
                      2023-2026
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Bharathi Degree College, Warangal, Telangana
                  </p>
                </div>

                {/* Intermediate */}
                <div className="glass-card rounded-xl p-4 sm:p-6 border-l-4 border-accent hover:border-accent/80 transition-all duration-300">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-semibold text-sm sm:text-base text-foreground">
                      Intermediate (MPC)
                    </h4>
                    <span className="text-accent text-xs font-mono bg-accent/10 px-2 py-1 rounded whitespace-nowrap">
                      2021-2023
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Lal Bahadur College, Warangal, Telangana
                  </p>
                </div>

                {/* SSC */}
                <div className="glass-card rounded-xl p-4 sm:p-6 border-l-4 border-green-500 hover:border-green-600 transition-all duration-300">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-semibold text-sm sm:text-base text-foreground">
                      Matriculation (SSC)
                    </h4>
                    <span className="text-green-500 text-xs font-mono bg-green-500/10 px-2 py-1 rounded whitespace-nowrap">
                      2021
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Government High School Matwada, Warangal, Telangana
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="glass-card rounded-lg p-3 sm:p-4 text-center hover:border-primary/30 transition-all">
                <div className="text-lg sm:text-2xl font-bold text-primary mb-1">
                  4+
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Skills
                </p>
              </div>
              <div className="glass-card rounded-lg p-3 sm:p-4 text-center hover:border-primary/30 transition-all">
                <div className="text-lg sm:text-2xl font-bold text-primary mb-1">
                  1+
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Projects
                </p>
              </div>
              <div className="glass-card rounded-lg p-3 sm:p-4 text-center hover:border-primary/30 transition-all">
                <div className="text-lg sm:text-2xl font-bold text-primary mb-1">
                  4
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Achievements
                </p>
              </div>
              <div className="glass-card rounded-lg p-3 sm:p-4 text-center hover:border-primary/30 transition-all">
                <div className="text-lg sm:text-2xl font-bold text-primary mb-1">
                  ∞
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Potential
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
