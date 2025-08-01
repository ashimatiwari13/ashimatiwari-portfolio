"use client"

import { useEffect, useRef, useState } from "react"
import { Cloud, Code } from "lucide-react"

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const experiences = [
    {
      title: "AI & Cloud Intern",
      company: "Edunet Foundation",
      period: "July–August 2025",
      description:
        "Used IBM Cloud tools like AutoAI, Exploratory Data Analysis, and chatbot development. Delivered a capstone project applying AI/ML and cloud solutions to real-world problems.",
      icon: Cloud,
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Frontend Developer Intern",
      company: "DIIT Institute",
      period: "June–August 2024",
      description:
        "Built responsive web pages using semantic HTML and Tailwind CSS. Developed forms, buttons, and navigations using JavaScript while maintaining accessibility and responsiveness.",
      icon: Code,
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
    <section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Experience
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <div
                key={exp.title}
                className={`group bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-cyan-400/50 hover:bg-slate-700/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 300}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className={`bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-medium`}>
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {exp.description}
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
