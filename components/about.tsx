"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin, Mail, GraduationCap, Award, Code, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export default function About() {
  const titles = ["Full Stack Developer", "Code Enthusiast", "Software Engineer"]
  const [currentTitle, setCurrentTitle] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTitle((prev) => (prev + 1) % titles.length)
      }, 2000) // Change every 2 seconds
      return () => clearInterval(interval)
    }, [])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const personalInfo = [
    { label: "Name", value: "Sejal Sinha", icon: Sparkles },
    { label: "Gmail", value: "kyosejal11@gmail.com", icon: Mail },
    { label: "Location", value: "Bangalore, Karnataka, India", icon: MapPin },
    { label: "College", value: "B.M.S College Of Engineering", icon: GraduationCap },
    { label: "Degree", value: "B.Tech Information Science And Engineering", icon: Code },
    { label: "CGPA", value: "9.55", icon: Award },
  ]

  const goals = [
    "Build intelligent systems that understand human emotions and behavior.",
    "Create impactful full-stack applications that solve real-world problems",
    "Learn advanced system design and scalable architectures",
    "Embracing challenges as opportunities to grow, experiment, and improve",
    "Supporting the developer community by contributing, collaborating, and sharing knowledge",
    "Continuously learning and adapting to new technologies and methodologies",
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Floating Tech Cubes */}
        {["React", "Next.js", "TypeScript", "Node.js", "MongoDB"].map((tech, i) => (
          <motion.div
            key={tech}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg flex items-center justify-center text-xs font-medium text-purple-300 transform-gpu">
              {tech}
            </div>
          </motion.div>
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 space-y-12"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span>
          </motion.h2>
        </div>

        {/* Personal Info Cards - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {personalInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <info.icon className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="text-xs text-gray-400 font-medium">{info.label}</span>
                </div>
                <p className="text-white font-semibold text-sm group-hover:text-purple-100 transition-colors">
                  {info.value}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Who I Am and My Goals - Same Level */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Who I Am */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="relative group h-fit"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 h-full">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              >
                Who I Am
              </motion.h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  I’m a full-stack developer and creative problem solver who blends technology, empathy, and design to build impactful solutions. With experience in AI, behavioral systems, and user-centered design, I focus on creating tools that enhance learning, emotional well-being, and human interaction.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  I aspire to work on systems that go beyond functionality — blending innovation with impact. I believe in the power of technology to not only solve problems but also to connect people, foster understanding, and create a more compassionate world.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  My journey is about more than just code; it’s about crafting a future where technology and humanity thrive together.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - My Goals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="relative group h-fit"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 h-full">
              <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                My Goals
              </h3>
              <ul className="space-y-4">
                {goals.map((goal, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                    className="flex items-start gap-3 text-gray-300 group/item hover:text-white transition-colors duration-300"
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                    <span className="leading-relaxed">{goal}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
