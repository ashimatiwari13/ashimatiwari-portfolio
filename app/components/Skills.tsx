"use client"

import { useEffect, useRef, useState } from "react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "Python", "SQL"],
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React"],
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub"],
      color: "from-#2a003f-400 to-cyan-500",
    },
    {
      title: "Core Concepts",
      skills: ["DBMS", "OOP", "Operating Systems", "Cloud Computing", "Computer Networks", "Shell Scripting"],
      color: "from-orange-400 to-red-500",
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
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Skills
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(categoryIndex + 1) * 200}ms` }}
            >
              <h3
                className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className={`group px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg hover:border-cyan-400/50 hover:bg-slate-700/50 transition-all duration-300 cursor-default transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10`}
                    style={{
                      transitionDelay: `${(categoryIndex + 1) * 200 + skillIndex * 100}ms`,
                    }}
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
