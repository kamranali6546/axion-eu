"use client"

import { useState, useRef, useMemo } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { teamMembers } from "@/lib/services-data"
import { useInView } from "@/hooks/use-in-view"
import { Briefcase, ArrowUpRight, GraduationCap, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

function TeamCard({ member, idx }: { member: any; idx: number }) {
  const [hovered, setHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative w-full will-change-[transform,opacity]"
    >
      <Link href="/profiles" className="block relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 transition-all duration-700 hover:border-primary/50"
        style={{
          // @ts-ignore
          "--mouse-x": useSpring(mouseX, { stiffness: 500, damping: 50 }) as any,
          // @ts-ignore
          "--mouse-y": useSpring(mouseY, { stiffness: 500, damping: 50 }) as any,
        }}
      >
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={70}
        />

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content Container */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <motion.div
            animate={{ y: hovered ? 0 : 10 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-3xl font-black tracking-tighter text-white uppercase italic leading-none mb-2">
              {member.name}
            </h3>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                {member.designation}
              </span>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-px w-8 bg-white/20" />
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                  {member.experience} EXP
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white">View Full Profile</span>
            <ArrowUpRight className="w-4 h-4 text-primary" />
          </motion.div>
        </div>

        {/* Spotlight Effect */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(66,133,244,0.15),transparent_40%)]"
        />
      </Link>
    </motion.div>
  )
}

export default function ProfilesSection() {
  const { ref, isInView } = useInView(0.1)
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-48 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50/40">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs - Optimized with lower blur and opacity */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-cyan-500/5 blur-3xl rounded-full" />

        {/* Animated Background Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.01]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="profile-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor" />
              <circle cx="0" cy="0" r="1" fill="currentColor" />
              <circle cx="60" cy="0" r="1" fill="currentColor" />
              <circle cx="0" cy="60" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#profile-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Bold Cinematic Header */}
        <header className="mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/40 mb-8">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-muted-foreground">
                The Architecture of Excellence
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
              <span className="block opacity-10">Squad.</span>
              <span className="block text-foreground ml-4 lg:ml-12 -mt-4 lg:-mt-8">Creative Visionaries</span>
              <span className="block text-foreground/50 font-serif italic text-3xl md:text-5xl tracking-normal normal-case mt-4">
                Driving Next-Gen Innovation.
              </span>
            </h2>
          </motion.div>
        </header>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">
          {teamMembers.map((member, idx) => (
            <TeamCard key={member.name} member={member} idx={idx} />
          ))}
        </div>

        {/* Bottom Navigation */}
        <motion.div
          className="mt-24 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/profiles"
            className="group relative px-10 py-5 rounded-2xl bg-blue-600 text-white font-black uppercase text-xs tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center gap-3 transition-colors group-hover:text-white">
              SQUAD DIRECTORY
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
