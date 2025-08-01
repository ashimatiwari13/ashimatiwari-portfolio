"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Mail, Github, Linkedin, Send } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      )
      const mailtoLink = `mailto:ashimatiwari013@gmail.com?subject=${subject}&body=${body}`

      window.location.href = mailtoLink

      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)

      // Show success notification
      alert("Message sent successfully!")
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ashimatiwari013@gmail.com",
      href: "mailto:ashimatiwari013@gmail.com",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ashimatiwari13",
      href: "https://github.com/ashimatiwari13",
      color: "from-gray-400 to-gray-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ashima-tiwari-259b312a8",
      href: "https://linkedin.com/in/ashima-tiwari-259b312a8",
      color: "from-blue-400 to-blue-600",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Get In Touch
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div key={info.label} className="flex items-center space-x-4 group">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-cyan-400 hover:text-purple-400 transition-colors duration-300 hover:underline"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
