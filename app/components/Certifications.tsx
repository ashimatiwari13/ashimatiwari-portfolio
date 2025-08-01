"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Cloud, Code, Settings } from "lucide-react"

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const certifications = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      icon: Award,
      color: "from-red-400 to-orange-500",
    },
    {
      title: "AI & Cloud Internship",
      issuer: "Edunet Foundation",
      icon: Cloud,
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Python for Beginners",
      issuer: "Udemy",
      icon: Code,
      color: "from-#2a003f-400 to-emerald-500",
    },
    {
      title: "Software Engineering",
      issuer: "Accenture (Forage)",
      icon: Settings,
      color: "from-purple-400 to-pink-500",
    },
  ]

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

  return (
    <section id="certifications" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Certifications
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <div
                key={cert.title}
                className={`group bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-cyan-400/50 hover:bg-slate-700/50 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className={`text-sm bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
