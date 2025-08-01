"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            About Me
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`bg-gradient-to-r from-slate-800/50 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-lg md:text-xl leading-relaxed text-gray-300 space-y-6">
              <p>
                Hi, I'm{" "}
                <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ashima Tiwari
                </span>{" "}
                — a passionate developer, curious problem solver, and tech enthusiast exploring the intersections of
                frontend, cloud, and AI.
              </p>
              <p>
                With a foundation in Computer Science and a drive to build beautiful and meaningful web experiences, I'm
                always looking to grow, learn, and create impactful solutions.
              </p>
              <p>
                I believe in the power of technology to solve real-world problems and am constantly exploring new ways
                to blend creativity with technical expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
