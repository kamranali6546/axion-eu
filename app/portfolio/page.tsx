"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ExternalLink, Layers, ArrowUpRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useInView } from "@/hooks/use-in-view"

const projects = [
  {
    title: "Osmosis Portal",
    subtitle: "Modern Healthcare Ecosystem",
    category: "development",
    description: "A revolutionary healthcare management platform bridging patients and providers. We built a robust, secure, and intuitive portal that streamlines medical records, appointment scheduling, and real-time consultations.",
    tags: ["Next.js", "Healthcare", "Portal", "Secure Infrastructure"],
    color: "#4285F4",
    image: "/portfolio/osmosis.png",
    url: "https://osmosisportal.com/",
    metrics: { uptime: "99.99%", users: "Active", security: "High" }
  },
  {
    title: "RAH Consultants",
    subtitle: "Global Strategic Growth",
    category: "marketing",
    description: "Expert consulting services for global business strategy and growth. We designed a premium digital presence that reflects their industry authority and helps them connect with high-value enterprise partners.",
    tags: ["Business", "Strategy", "Digital Branding", "Growth"],
    color: "#DB4437",
    image: "/portfolio/rah-consultants.png",
    url: "https://rahconsultants.pk/",
    metrics: { growth: "Scalable", reach: "Global", impact: "Direct" }
  }
]

function ProjectGrid() {
  return (
    <section className="relative py-24 space-y-32 overflow-hidden bg-white">
      {/* Visual background cues */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.01),transparent_70%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center mb-32 last:mb-0`}
          >
            {/* Project Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <motion.span
                  className="inline-block px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest"
                  style={{ backgroundColor: `${project.color}15`, color: project.color }}
                >
                  {project.category}
                </motion.span>
                <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase leading-tight">
                  {project.title}
                </h2>
                <p className="text-xl font-medium opacity-60 italic">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-lg leading-relaxed opacity-80 max-w-xl font-medium">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-8 p-8 rounded-3xl frost-card border-none bg-white/[0.03]">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-xl font-black uppercase tracking-tighter" style={{ color: project.color }}>{value}</div>
                    <div className="text-[10px] uppercase font-black tracking-widest opacity-40">{key}</div>
                  </div>
                ))}
              </div>

              <Link
                href={project.url}
                target="_blank"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-foreground text-background font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform"
              >
                Visit Live Site
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>

            import Image from "next/image"

            // ... inside ProjectGrid ...
            {/* Project Visual */}
            <div className="flex-1 w-full group relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  quality={70}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Background Glow */}
              <div
                className="absolute -inset-4 blur-[80px] opacity-20 -z-10 rounded-full"
                style={{ backgroundColor: project.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default function PortfolioPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <>
      <Header />
      <main className="page-enter">
        {/* Hero */}
        <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-black/5 bg-slate-50/20">
          {/* Cinematic Background Gradient */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(66,133,244,0.05),transparent_70%)]" />
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-40 animate-pulse" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
            <motion.div
              style={{ y: heroY, opacity: heroOpacity }}
            >
              <span className="text-[10px] uppercase font-black tracking-[0.6em] text-primary/80 mb-8 block">
                Success Metrics
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase mb-12 text-black text-balance">
                Recent <span className="text-black/10 italic font-serif lowercase tracking-normal">Work</span>
                <br />Showcase
              </h1>
              <p className="max-w-xl mx-auto text-lg text-black/60 font-medium tracking-wide leading-relaxed">
                Explore our portfolio of successful projects spanning development, marketing, branding, and e-commerce.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20 text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 1 }}
          >
            <span className="text-[10px] uppercase font-black tracking-widest">Scroll to Explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </section>

        <ProjectGrid />

        {/* Clients marquee */}
        <section className="py-32 overflow-hidden bg-[#4285F4] relative">
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="brands-dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#brands-dots)" />
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center mb-16 relative z-10">
            <motion.h2
              className="text-4xl lg:text-6xl font-black tracking-tighter uppercase text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Trusted by <span className="text-white/20 italic">Industry Leaders.</span>
            </motion.h2>
          </div>
          <div className="relative overflow-hidden z-10">
            <div
              className="flex gap-8 items-center"
              style={{ animation: "marquee 25s linear infinite", width: "max-content" }}
            >
              {[...Array(2)].flatMap((_, setIdx) =>
                ["TechNova", "CloudFirst", "GreenLeaf", "DataPrime", "ShopWave", "BrandHub", "MediaFlux", "FinEdge"].map((name) => (
                  <motion.div
                    key={`${setIdx}-${name}`}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-10 py-6 flex-shrink-0 transition-all hover:bg-white/10"
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <span className="text-sm font-black uppercase tracking-[0.3em] text-white">
                      {name}
                    </span>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
