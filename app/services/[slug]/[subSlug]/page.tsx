"use client"

import React, { useRef } from "react"
import { useParams } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Zap, TrendingUp } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { services } from "@/lib/services-data"

export default function SubServicePage() {
  const params = useParams()
  const slug = params.slug as string
  const subSlug = params.subSlug as string
  const service = services.find((s) => s.slug === slug)
  const subService = service?.subServices.find((s) => s.slug === subSlug)

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  if (!service || !subService) return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link href="/services" className="text-primary font-medium">View All Services</Link>
        </div>
      </main>
      <Footer />
    </>
  )

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
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-black/40 mb-12 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to {service.title}
            </Link>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase font-black tracking-[0.6em] text-primary/80 mb-8 block"
            >
              Technical Specialization
            </motion.span>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase mb-12 text-black"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {subService.title.split(" ")[0]} <br /><span className="text-black/10 italic font-serif lowercase tracking-normal">{subService.title.split(" ").slice(1).join(" ") || "Capability"}</span>
            </motion.h1>
          </motion.div>
        </section>

        <DetailsSection subService={subService} service={service} />
        <ToolsSection subService={subService} color={service.color} />
        <CTAFooter service={service} />
      </main>
      <Footer />
    </>
  )
}

function DetailsSection({ subService, service }: { subService: any; service: any }) {
  return (
    <section className="py-48 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32">
          <div className="space-y-12">
            <span className="text-[10px] uppercase font-black tracking-[0.4em] text-black/40 block">Value Proposition</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-black uppercase italic leading-[0.85]">
              Strategic <br /><span className="text-black/10">Impact.</span>
            </h2>
            <p className="text-2xl text-black/50 font-medium leading-relaxed max-w-lg">
              {subService.longDescription}
            </p>

            <div className="space-y-6 pt-12">
              {subService.benefits.map((benefit: string, idx: number) => (
                <div key={benefit} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5" style={{ color: service.color }} />
                  </div>
                  <span className="text-lg font-black tracking-tight text-black italic">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <span className="text-[10px] uppercase font-black tracking-[0.4em] text-black/40 block mb-6">Core Capabilities</span>
            {subService.features.map((feature: string, idx: number) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-black/5 flex items-center gap-6 shadow-[0_0_80px_rgba(0,0,0,0.01)]"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-black text-white">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-black uppercase tracking-tighter text-black">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ToolsSection({ subService, color }: { subService: any; color: string }) {
  return (
    <section
      className="relative py-48 overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="subservice-tools-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#subservice-tools-grid)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 mb-24 text-center relative z-10">
        <span className="text-[10px] uppercase font-black tracking-[0.6em] text-white/40 mb-8 block">Technical Ecosystem</span>
        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic opacity-10 leading-none">Advanced Stack</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto px-4 relative z-10">
        {subService.tools.map((tool: string) => (
          <div key={tool} className="px-10 py-6 rounded-[1.5rem] border border-white/20 bg-white/10 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.4em] text-white hover:bg-black hover:text-white transition-all cursor-default shadow-xl font-sans">
            {tool}
          </div>
        ))}
      </div>
    </section>
  )
}

function CTAFooter({ service }: { service: any }) {
  return (
    <section className="py-64 bg-white border-t border-black/5 flex flex-col items-center text-center px-4">
      <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase text-black mb-16">
        Ready to <br /><span className="text-black/10 italic">Deploy?</span>
      </h2>
      <Link
        href="/contact"
        className="group relative px-20 py-10 rounded-[3rem] bg-black text-white overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        <span className="relative z-10 text-xs font-black uppercase tracking-[0.6em] flex items-center gap-4">
          Initiate Inquiry <ArrowRight className="w-5 h-5" />
        </span>
      </Link>
    </section>
  )
}
