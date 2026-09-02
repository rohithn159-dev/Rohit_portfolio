"use client"

import { useState } from "react"
import { Mail, Phone, Linkedin, Github, Send, MapPin, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rohithn159@gmail.com",
    href: "mailto:rohithn159@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6302531749",
    href: "tel:+916302531749",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "rohith-nani",
    href: "https://linkedin.com/in/rohith-nani",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "rohithn159-dev",
    href: "https://github.com/rohithn159-dev",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitted(true)
    setIsLoading(false)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="w-full py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute bottom-0 left-1/4 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="w-full px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary font-mono text-xs sm:text-sm mb-2 sm:mb-4">
            {"// Let's connect"}
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
            {
              "Have a project in mind or want to collaborate? I'd love to hear from you!"
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="glass-card rounded-2xl p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                <MapPin className="text-primary flex-shrink-0" size={20} />
                <span>Contact Information</span>
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3 sm:gap-4 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <info.icon className="text-primary w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="font-medium group-hover:text-primary transition-colors duration-300 text-sm sm:text-base truncate">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass-card rounded-2xl p-4 sm:p-6 border-primary/20">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-green-500/50 animate-ping" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm sm:text-base">Available for Opportunities</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Open to internships, projects, and collaborations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Send a Message</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center min-h-[250px] sm:min-h-[300px] text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-3 sm:mb-4">
                  <CheckCircle2 className="text-green-500 w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h4 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">Message Sent!</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {"Thank you for reaching out. I'll get back to you soon!"}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-secondary/50 border-border focus:border-primary transition-colors text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-secondary/50 border-border focus:border-primary transition-colors text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-secondary/50 border-border focus:border-primary transition-colors resize-none text-sm sm:text-base"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-sm sm:text-base"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      <span className="hidden sm:inline">Sending...</span>
                      <span className="sm:hidden">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
