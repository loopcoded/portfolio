"use client"

import { motion } from "framer-motion"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { FileText, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Hero() {
  const titles = ["Full Stack Developer", "Code Enthusiast", "Software Engineer"]
  const [currentTitle, setCurrentTitle] = useState(0)

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

  return (
    <section className="min-h-screen flex flex-col justify-center py-12 relative overflow-hidden">
      {/* Animated Starry Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random(),
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block"
          >
          </motion.div>

          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="block text-2xl text-gray-400"
            >
              Hello, I'm
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
                Sejal Sinha
              </span>
            </motion.h1>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300"
          >
            I'm a <span className="text-purple-400"> {titles[currentTitle]}.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="max-w-md text-gray-400 leading-relaxed"
          >
            I'm a full-stack developer and tech enthusiast with a passion for building intelligent, real-world applications. I enjoy working at the intersection of web, AI, and networking—exploring everything from scalable backend systems to secure, efficient communication protocols.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white group">
              <a href="/sejalsinha_resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                My Resume
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-600 hover:border-purple-500 hover:bg-purple-500/10 group"
            >
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kyosejal11@gmail.com&su=Inquiry&body=Hello Sejal,">
                <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Contact Me
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-purple-500/20">
              <a href="https://github.com/loopcoded" target="_blank" rel="noopener noreferrer">
                <SiGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-purple-500/20">
              <a href="https://www.linkedin.com/in/sejal-sinha-213812279/" target="_blank" rel="noopener noreferrer">
                <SiLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side - Floating 3D Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="hidden lg:block relative h-96"
        >
          {/* Floating Tech Cubes */}
          {[
            { tech: "React", position: { x: 100, y: 50 }, color: "from-cyan-400 to-blue-500" },
            { tech: "Developer", position: { x: 200, y: 150 }, color: "from-purple-500 to-pink-500" },
            { tech: "Next.js", position: { x: 50, y: 200 }, color: "from-green-400 to-emerald-500" },
            { tech: "TypeScript", position: { x: 250, y: 80 }, color: "from-blue-500 to-indigo-600" },
            { tech: "Node.js", position: { x: 150, y: 250 }, color: "from-yellow-400 to-orange-500" },
          ].map((item, index) => (
            <motion.div
              key={item.tech}
              className="absolute"
              initial={{
                x: item.position.x,
                y: item.position.y,
                rotateX: 0,
                rotateY: 0,
              }}
              animate={{
                x: item.position.x + Math.sin(Date.now() * 0.001 + index) * 20,
                y: item.position.y + Math.cos(Date.now() * 0.001 + index) * 20,
                rotateX: [0, 360],
                rotateY: [0, 360],
              }}
              transition={{
                x: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                rotateX: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                rotateY: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              }}
              whileHover={{ scale: 1.2 }}
            >
              <div
                className={`w-20 h-20 bg-gradient-to-br ${item.color} backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-xs font-bold text-white shadow-2xl transform-gpu perspective-1000`}
              >
                {item.tech}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-sm text-gray-400 mb-2">Scroll Down</p>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <ArrowDown className="w-5 h-5 text-purple-400 mx-auto" />
        </motion.div>
      </motion.div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}
