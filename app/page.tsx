import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import ScrollToSection from "@/components/scroll-to-section"

export const metadata: Metadata = {
  title: "Sejal Sinha | Portfolio",
  description: "Personal portfolio website of Sejal Sinha",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {Array.from({ length: 10 }).map((_, i) => (
            <path
              key={i}
              d={`M0 ${10 + i * 8} C${20 + i * 5} ${5 + i * 10}, ${50 + i * 3} ${20 + i * 5}, 100 ${15 + i * 8}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary/30"
            />
          ))}
        </svg>
      </div>

      <ScrollToSection />

      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">SS</span>
            <span className="font-semibold">Sejal Sinha</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </a>
          </nav>
        </div>
      </header>

      <main className="container relative z-10 pt-16">
        <Hero />
        <About />
        <TechStack />
        <Projects />
      </main>
    </div>
  )
}
