"use client"

import { Smartphone, Globe, Database, Zap } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Android App Development",
    description:
      "Building functional Android applications using Android Studio, Java, and Firebase for authentication and database needs.",
    features: ["Android Studio", "Java/Kotlin", "Firebase Integration", "Material Design"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Creating responsive and modern web pages using HTML, CSS, and basic JavaScript for interactive elements.",
    features: ["HTML5 & CSS3", "Responsive Design", "Clean Code", "SEO Basics"],
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Setting up and managing databases using SQL and Firebase Realtime Database for mobile and web applications.",
    features: ["SQL Queries", "Firebase Realtime DB", "Data Modeling", "CRUD Operations"],
  },
  {
    icon: Zap,
    title: "Mobile App Solutions",
    description:
      "Developing simple yet effective mobile applications to solve real-world problems with user-friendly interfaces.",
    features: ["User-Centric Design", "Quick Prototyping", "Bug Fixing", "App Optimization"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-0 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="w-full px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary font-mono text-xs sm:text-sm mb-2 sm:mb-4">
            {"// What I offer"}
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
            Providing quality development services as a fresher eager to
            contribute
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

              <div className="relative glass-card rounded-2xl p-4 sm:p-6 md:p-8 h-full hover:border-primary/30 transition-all duration-500">
                {/* Icon */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-primary w-5 h-5 sm:w-[30px] sm:h-[30px]" />
                  </div>
                  {/* Service number */}
                  <span className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-xs font-mono">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 sm:px-3 py-1 text-xs rounded-full bg-secondary/50 text-muted-foreground border border-border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center px-4">
          <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium text-sm sm:text-base"
          >
            Get In Touch
            <Zap size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
        </div>
      </div>
    </section>
  )
}
