"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import dynamic from "next/dynamic"
import Header from "@/components/header"
import Footer from "@/components/footer"

const AllServicesGrid = dynamic(() => import("@/components/services/all-services-grid").then(m => m.AllServicesGrid))

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <>
      <Header />
      <main className="bg-[#FAFAFA] min-h-screen selection:bg-black selection:text-white">
        {/* Editorial Hero */}
        <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-black/5 bg-slate-50/20">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(66,133,244,0.05),transparent_70%)]" />
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-40 animate-pulse" />
          </div>

          <motion.div
            className="relative z-10 max-w-7xl mx-auto px-4 text-center"
            style={{ y, opacity }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase font-black tracking-[0.6em] text-primary/80 mb-8 block"
            >
              Operational Scope
            </motion.span>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase mb-12 text-black"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              The <span className="text-black/10 italic font-serif lowercase tracking-normal">Technical</span>
              <br />Ecosystem
            </motion.h1>
          </motion.div>
        </section>

        <AllServicesGrid />
      </main>
      <Footer />
    </>
  )
}
