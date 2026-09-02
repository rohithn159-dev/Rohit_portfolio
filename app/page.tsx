import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ResumeSection } from "@/components/resume-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary/30 animate-float" />
        <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-accent/20 animate-float delay-1000" />
        <div className="absolute top-60 left-1/3 w-2 h-2 rounded-full bg-primary/20 animate-float delay-500" />
        <div className="absolute bottom-40 right-1/4 w-2 h-2 rounded-full bg-accent/30 animate-float delay-700" />
        <div className="absolute bottom-60 left-20 w-3 h-3 rounded-full bg-primary/20 animate-float delay-300" />
      </div>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
