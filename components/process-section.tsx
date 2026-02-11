"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { Search, PenTool, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discovery & Research",
    description: "We deep-dive into your business, market, and users to understand the full scope and create a strategic roadmap.",
    color: "#4285F4",
  },
  {
    icon: PenTool,
    title: "Design & Strategy",
    description: "Our designers craft intuitive experiences and our strategists build data-backed plans for maximum impact.",
    color: "#DB4437",
  },
  {
    icon: Code,
    title: "Development & Build",
    description: "Our engineers bring designs to life with clean, scalable code using cutting-edge technologies.",
    color: "#F4B400",
  },
  {
    icon: Rocket,
    title: "Launch & Optimize",
    description: "We deploy your product and continuously optimize for performance, growth, and user satisfaction.",
    color: "#0F9D58",
  },
]

export default function ProcessSection() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <header className="mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/40 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-muted-foreground">
                Operational Framework
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
              <span className="block opacity-10">Process.</span>
              <span className="block text-foreground ml-4 lg:ml-12 -mt-4 lg:-mt-8">Strategic Path</span>
              <span className="block text-foreground/50 font-serif italic text-3xl md:text-5xl tracking-normal normal-case mt-4">
                From Idea to Reality.
              </span>
            </h2>
          </motion.div>
        </header>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px" style={{ backgroundColor: "hsl(var(--border))" }} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative text-center"
                >
                  {/* Step number */}
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white z-10"
                    style={{ backgroundColor: step.color }}
                  >
                    {idx + 1}
                  </div>

                  <div className="frost-card rounded-2xl p-6 pt-8">
                    <motion.div
                      className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}12` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-6 h-6" style={{ color: step.color }} />
                    </motion.div>
                    <h3 className="text-base font-bold mb-2" style={{ color: "hsl(var(--foreground))" }}>
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
