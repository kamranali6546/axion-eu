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
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50/50">
      {/* Elegant background graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs - Optimized with lower blur and opacity */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[80px]" />

        {/* Geometric grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="process-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-grid)" />
        </svg>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <header className="mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/40 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
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
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative text-center will-change-[transform,opacity]"
                >
                  {/* Step number */}
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-emerald-600 text-white z-10"
                  >
                    {idx + 1}
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm border border-black/5 rounded-2xl p-6 pt-8 hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300">
                    <motion.div
                      className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}15` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-6 h-6" style={{ color: step.color }} />
                    </motion.div>
                    <h3 className="text-base font-bold mb-2 text-black">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-black/60">
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
