"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import dynamic from "next/dynamic"
import Header from "@/components/header"
import Footer from "@/components/footer"

const StorySection = dynamic(() => import("@/components/about/story-section").then(m => m.StorySection))
const MissionVisionSection = dynamic(() => import("@/components/about/mission-vision-section").then(m => m.MissionVisionSection))
const AboutStatsSection = dynamic(() => import("@/components/about/about-stats-section").then(m => m.AboutStatsSection))
const WhatWeDoSection = dynamic(() => import("@/components/about/what-we-do-section").then(m => m.WhatWeDoSection))

export default function AboutPage() {
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
                Corporate Philosophy
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase mb-12 text-black text-balance">
                The <span className="text-black/10 italic font-serif lowercase tracking-normal">Exion</span>
                <br />Story
              </h1>
              <p className="max-w-xl mx-auto text-lg text-black/60 font-medium tracking-wide leading-relaxed">
                Exion Technologies is a full-service IT company delivering development, marketing, branding, and e-commerce solutions that transform businesses and drive measurable growth.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
                <Link
                  href="/services"
                  className="group relative px-8 py-4 rounded-xl bg-black text-white font-black uppercase text-xs tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95"
                >
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 flex items-center gap-3 transition-colors group-hover:text-white">
                    Our Services
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link
                  href="/profiles"
                  className="px-8 py-4 rounded-xl border border-black/5 bg-[#FAFAFA] font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all"
                >
                  Meet the Team
                </Link>
              </div>
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

        <StorySection />
        <MissionVisionSection />
        <AboutStatsSection />
        <WhatWeDoSection />
      </main>
      <Footer />
    </>
  )
}
