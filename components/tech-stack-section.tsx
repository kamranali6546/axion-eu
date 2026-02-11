"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"

const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Shopify", color: "#7AB55C" },
  { name: "Flutter", color: "#02569B" },
  { name: "MongoDB", color: "#47A248" },
]

export default function TechStackSection() {
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
                Technological Foundation
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
              <span className="block opacity-10">Tools.</span>
              <span className="block text-foreground ml-4 lg:ml-12 -mt-4 lg:-mt-8">Modern Stack</span>
              <span className="block text-foreground/50 font-serif italic text-3xl md:text-5xl tracking-normal normal-case mt-4">
                Powering Your Growth.
              </span>
            </h2>
          </motion.div>
        </header>

        {/* Infinite scroll row 1 */}
        <div className="relative overflow-hidden mb-4">
          <div className="flex gap-4 animate-[scroll_30s_linear_infinite] will-change-transform"
            style={{
              animation: "scroll 30s linear infinite",
              width: "max-content",
            }}
          >
            {[...technologies, ...technologies].map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="flex-shrink-0 frost-card rounded-xl px-6 py-4 flex items-center gap-3"
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tech.color }} />
                <span className="text-sm font-medium whitespace-nowrap" style={{ color: "hsl(var(--foreground))" }}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite scroll row 2 reverse */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4"
            style={{
              animation: "scroll-reverse 35s linear infinite",
              width: "max-content",
            }}
          >
            {[...[...technologies].reverse(), ...[...technologies].reverse()].map((tech, idx) => (
              <div
                key={`rev-${tech.name}-${idx}`}
                className="flex-shrink-0 frost-card rounded-xl px-6 py-4 flex items-center gap-3"
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tech.color }} />
                <span className="text-sm font-medium whitespace-nowrap" style={{ color: "hsl(var(--foreground))" }}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Animated SVG circuit lines */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <svg width="600" height="100" viewBox="0 0 600 100" fill="none" className="w-full max-w-2xl">
            {/* Circuit lines */}
            <motion.path
              d="M0 50 L100 50 L130 20 L200 20 L230 50 L350 50 L380 80 L450 80 L480 50 L600 50"
              stroke="#4285F4" strokeWidth="1.5" fill="none" opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 3 }}
            />
            <motion.path
              d="M0 30 L80 30 L110 60 L180 60 L210 30 L320 30 L350 70 L430 70 L460 30 L600 30"
              stroke="#0F9D58" strokeWidth="1.5" fill="none" opacity="0.2"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 3, delay: 0.3 }}
            />
            {/* Dots on intersections */}
            {[130, 230, 380, 480].map((cx, i) => (
              <motion.circle
                key={cx}
                cx={cx} cy={[20, 50, 80, 50][i]} r="4"
                fill={["#4285F4", "#DB4437", "#F4B400", "#0F9D58"][i]}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: [0, 1.5, 1] } : {}}
                transition={{ delay: 1 + i * 0.3, duration: 0.5 }}
              />
            ))}
            {/* Flowing dot */}
            <motion.circle
              r="3" fill="#4285F4"
              animate={isInView ? {
                cx: [0, 100, 130, 200, 230, 350, 380, 450, 480, 600],
                cy: [50, 50, 20, 20, 50, 50, 80, 80, 50, 50],
              } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
