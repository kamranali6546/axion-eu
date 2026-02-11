"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { services } from "@/lib/services-data"
import { ServiceSVGBySlug } from "@/components/animated-svgs"
import { useInView } from "@/hooks/use-in-view"

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

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

function AllServicesGrid() {
  return (
    <section className="relative py-48 overflow-hidden bg-white">
      {/* Visual background cues */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.01),transparent_70%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24">
          {services.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group p-12 rounded-[2.5rem] bg-white border border-black/5 hover:border-black/20 transition-all duration-500 shadow-[0_0_80px_rgba(0,0,0,0.01)]"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-black/5" style={{ backgroundColor: `${service.color}05` }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: service.color }} />
                </div>
                <h2 className="text-4xl font-black tracking-tighter uppercase italic text-black">
                  {service.title}
                </h2>
              </div>

              <p className="text-xl text-black/50 font-medium leading-relaxed mb-12">
                {service.tagline}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-12">
                {service.subServices.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/services/${service.slug}/${sub.slug}`}
                    className="flex items-center gap-3 p-4 rounded-xl border border-black/5 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: service.color }} />
                    <span className="text-[10px] font-black uppercase tracking-widest">{sub.title}</span>
                  </Link>
                ))}
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-4 group/btn"
              >
                <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center transition-all group-hover/btn:bg-black group-hover/btn:text-white">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Explore {service.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


