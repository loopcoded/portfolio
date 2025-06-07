"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiCplusplus,
  SiPython,
  SiDocker,
  SiGit,
  SiMysql,
} from "react-icons/si"

const JavaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    className="w-10 h-10 text-red-500 group-hover:scale-110 transition-all duration-500"
  >
    <path
      fill="#5382A1"
      d="M64 0C28.65 0 0 28.65 0 64s28.65 64 64 64 64-28.65 64-64S99.35 0 64 0zm0 118.4c-29.95 0-54.4-24.45-54.4-54.4S34.05 9.6 64 9.6 118.4 34.05 118.4 64 93.95 118.4 64 118.4z"
    />
    <path
      fill="#E76F00"
      d="M64 9.6c-29.95 0-54.4 24.45-54.4 54.4s24.45 54.4 54.4 54.4 54.4-24.45 54.4-54.4S93.95 9.6 64 9.6zm0 108.8c-29.95 0-54.4-24.45-54.4-54.4S34.05 9.6 64 9.6 118.4 34.05 118.4 64 93.95 118.4 64 118.4z"
    />
  </svg>
)

const technologies = [
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-400" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
  { name: "Python", icon: SiPython, color: "text-yellow-300" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "Java", icon: JavaIcon, color: "text-red-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
]

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">My Skills</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">Tech Stack.</h3>
        </div>

        <div className="space-y-8">
          <h4 className="text-xl font-semibold">Technologies & Frameworks</h4>

          {/* 3D rotating tech stack grid */}
          <div className="relative py-10">
            {/* Background glow effects */}
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05 * index,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5 },
                  }}
                  className="flex flex-col items-center justify-center gap-3 group"
                >
                  <div className="relative">
                    {/* Animated glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                    {/* Main icon container with 3D effect */}
                    <div className="relative w-20 h-20 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-all duration-300 overflow-hidden">
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <defs>
                            <pattern id={`grid-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
                              <path
                                d="M 10 0 L 0 0 0 10"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                className={tech.color}
                              />
                            </pattern>
                          </defs>
                          <rect width="100" height="100" fill={`url(#grid-${index})`} />
                        </svg>
                      </div>

                      {/* Icon with animation */}
                      <tech.icon
                        className={`w-10 h-10 ${tech.color} group-hover:scale-110 transition-all duration-500`}
                      />

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-full group-hover:translate-x-[-180%] transition-all duration-1000"></div>
                    </div>

                    {/* Shadow effect */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-background/30 rounded-full blur-sm"></div>
                  </div>

                  {/* Tech name with animation */}
                  <motion.span
                    className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
                  >
                    {tech.name}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
