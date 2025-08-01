"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ashimatiwari13",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ashima-tiwari-259b312a8",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:ashimatiwari013@gmail.com",
      label: "Email",
    },
  ]

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-purple-500/20 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 mb-4">&copy; 2024 Ashima Tiwari. All rights reserved.</p>

        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => {
            const IconComponent = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                aria-label={link.label}
              >
                <IconComponent size={24} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
