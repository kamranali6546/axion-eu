"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"

const stats = [
  { value: 250, suffix: "+", label: "Projects Delivered", color: "#4285F4" },
  { value: 98, suffix: "%", label: "Client Satisfaction", color: "#DB4437" },
  { value: 50, suffix: "+", label: "Team Members", color: "#F4B400" },
  { value: 15, suffix: "+", label: "Countries Served", color: "#0F9D58" },
]

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const increment = target / 60
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 20)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #f0faf4 100%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="frost-card rounded-2xl p-6 lg:p-8 text-center"
            >
              <div
                className="text-3xl lg:text-5xl font-bold mb-2 tabular-nums"
                style={{ color: stat.color }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="text-xs lg:text-sm font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
