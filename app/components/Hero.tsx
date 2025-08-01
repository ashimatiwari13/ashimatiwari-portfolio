"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Download, Mail } from "lucide-react"

export default function Hero() {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    "Computer Science Student",
    "Frontend Developer",
    "AI & Cloud Enthusiast",
    "Problem Solver",
    "Tech Explorer",
  ]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex]

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1))
        } else {
          setCurrentText(current.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % texts.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
    }
  }

  const handleResumeDownload = () => {
    // Placeholder for resume download
    alert("Resume download will be available soon!")
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ashima
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-16 flex items-center justify-center">
            <span className="mr-2">{currentText}</span>
            <span className="animate-pulse text-cyan-400">|</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="flex items-center">
                <Mail className="mr-2" size={20} />
                Get In Touch
              </span>
            </button>

            <button
              onClick={handleResumeDownload}
              className="group px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center">
                <Download className="mr-2" size={20} />
                Download Resume
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => {
            const element = document.getElementById("about")
            if (element) {
              const offsetTop = element.offsetTop - 80
              window.scrollTo({ top: offsetTop, behavior: "smooth" })
            }
          }}
          className="text-cyan-400 text-2xl hover:text-purple-400 transition-colors duration-300"
        >
          <ChevronDown />
        </button>
      </div>
    </section>
  )
}
