"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"

const stats = [
  { value: 250, suffix: "+", label: "Projects Delivered", color: "#4285F4" },
  { value: 98, suffix: "%", label: "Client Satisfaction", color: "#DB4437" },
  { value: 50, suffix: "+", label: "Team Members", color: "#F4B400" },
  { value: 15, suffix: "+", label: "Countries Served", color: "#0F9D58" },
]

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.floor(latest))
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest).toString()
          }
        }
      })
      return controls.stop
    }
  }, [isInView, target, count])

  return (
    <span className="tabular-nums">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section ref={ref} className="relative py-20 lg:py-32 overflow-hidden bg-slate-950">
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 0% 0%, #0f172a 0%, #020617 100%)" }} />
      <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 100% 100%, #1e293b 0%, transparent 50%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 text-center will-change-[transform,opacity]"
            >
              <div
                className="text-3xl lg:text-5xl font-extrabold mb-2 tabular-nums"
                style={{ color: stat.color }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="text-xs lg:text-sm font-bold tracking-tight text-white/60 uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
