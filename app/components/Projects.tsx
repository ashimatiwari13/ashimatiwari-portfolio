"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, User } from "lucide-react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: "Network Intrusion Detection System (NIDS)",
      description:
        "Built an ML-based intrusion detection tool in Python using Scikit-learn, XGBoost, and Streamlit. Deployed on IBM Cloud to detect threats like DoS, Probe, and U2R with high precision.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "IBM Cloud"],
      details: "Visualized results using ROC, confusion matrix, and feature importance.",
      icon: Shield,
      color: "from-red-400 to-pink-500",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Created a dynamic one-page portfolio using React, Tailwind, and JavaScript. Integrated animated sections, skill displays, and a contact form with smooth scroll and responsive layout.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      details: "Features smooth animations, responsive design, and interactive elements.",
      icon: User,
      color: "from-cyan-400 to-purple-500",
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
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Projects
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div
                key={project.title}
                className={`group bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-cyan-400/50 hover:bg-slate-700/50 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 300}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-cyan-400 rounded-full text-sm border border-purple-500/30 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {project.details}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
