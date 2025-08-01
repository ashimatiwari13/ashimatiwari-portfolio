"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setDarkMode(savedTheme === "dark")
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-slate-900 pointer-events-none"></div>
      <div className="relative z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
