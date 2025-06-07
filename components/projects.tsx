"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { SiGithub } from "react-icons/si"
import Image from "next/image"

const projects = [
  {
    title: "ClassBuddy ",
    subtitle: "—Your Academic Companion",
    description:
      "ClassBuddy is a full-stack academic management platform that enables teachers and class representatives to manage class schedules, announcements, and reminders in a centralized dashboard. Designed for campus-wide use, it ensures secure, section-specific access for students with role-based controls.",
    image: "/Classbuddy.jpg?height=300&width=500",
    tags: ["React", "Tailwind CSS", "Axios", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/loopcoded/CLASSBUDDY--Your-Academic-Companion",
    demo: "https://classbuddy-one.vercel.app/",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "EmoSense",
    subtitle: "-A REALTIME MULTILINGUAL EMOTION DETECTION",
    description:
      "An AI-powered web application that detects emotions from speech in real time using Wav2Vec2 for speech-to-text and a custom NLP model for emotion analysis. Features dynamic UI updates, multilingual support and it showcase your top 3 emotions in a voice message. ",
    image: "/emotion.jpg?height=450&width=500",
    tags: ["React", "Node.js", "Express", "Python", "Hugging Face", "Wav2Vec2", "Tailwind CSS"],
    github: "https://github.com/loopcoded/EmoSense-A-REALTIME-MULTILINGUAL-EMOTION-DETECTION",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "ChatSecure",
    subtitle: "--Encrypted Socket Based Chat App",
    description:
      "Developed a real-time encrypted chat app using raw TCP sockets and RSA encryption, supporting private messages, file sharing, and GUI interface. Python, Socket Programming, Threading, RSA, Tkinter.",
    image: "/chatsecure.jpg?height=300&width=500",
    tags: ["Python", "Socket Programming", "Threading", "RSA", "Tkinter"],
    github: "https://github.com/loopcoded/ChatSecure--Encrypted-Socket-Based-Chat-App",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "BATTERYIQ",
    subtitle: "Intelligent Battery Recommendations For Every Purpose",
    description:
      "BatteryIQ is a smart web app that recommends the best battery for any use case using AI. Just type your scenario — like battery for a solar light — and get fast, tailored suggestions with details like specs, pros/cons, and suitable applications.",
    image: "/battery.jpg?height=300&width=500",
    tags: ["React", "Tailwind CSS", "GroqCloud Chat Completion API"],
    github: "https://github.com/loopcoded/BATTERYIQ",
    demo: "https://batteryiq.vercel.app/",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "DiabML",
    subtitle: "Diabetes Prediction Web App",
    description:
      "This project is based on the data of diabetic and non diabetic patients which detects whether they are prone to diabetes or not. here we have used 2 models i.e logistic regression and support vector machine and ensembled it with stacking ensemble to provide higher accuracy.",
    image: "/diabetes.jpg?height=300&width=500",
    tags: ["React", "Tailwind CSS", "Machine Learning", "Flask", "Python"],
    github: "https://github.com/loopcoded/DiabML--Diabetes-Prediction-Web-App",
    demo: "https://diabetes-prediction-y7ga.onrender.com",
    color: "from-indigo-500 to-purple-600",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            My <span className="text-purple-400">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]">
                {/* Project Preview */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Button
                      asChild
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-0"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <SiGithub className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-0"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  {/* Project Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-300">{project.subtitle}</p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border-purple-500/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-gray-600 hover:border-purple-500 hover:bg-purple-500/10"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <SiGithub className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
