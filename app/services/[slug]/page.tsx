"use client"

import React, { useRef } from "react"
import { useParams } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { services } from "@/lib/services-data"

export default function ServicePage() {
  const params = useParams()
  const slug = params.slug as string
  const service = services.find((s) => s.slug === slug)

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  if (!service) return (
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
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(0,0,0,0.05),transparent_70%)]" />
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-40 animate-pulse" />
          </div>

          <motion.div
            className="relative z-10 max-w-7xl mx-auto px-4 text-center"
            style={{ y, opacity }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-black/40 mb-12 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Services
            </Link>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase font-black tracking-[0.6em] text-primary/80 mb-8 block"
            >
              Service Architecture
            </motion.span>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase mb-12 text-black"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {service.title.split(" ")[0]} <br /><span className="text-black/10 italic font-serif lowercase tracking-normal">{service.title.split(" ").slice(1).join(" ") || "Domain"}</span>
            </motion.h1>
          </motion.div>
        </section>

        <SubServicesSection service={service} />
        <ProcessSection service={service} />
        <FAQSection service={service} />
      </main>
      <Footer />
    </>
  )
}

function SubServicesSection({ service }: { service: any }) {
  return (
    <section className="py-48 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32">
          <div className="space-y-12">
            <span className="text-[10px] uppercase font-black tracking-[0.4em] text-black/40 block">Specializations</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-black uppercase italic leading-[0.85]">
              Core <br /><span className="text-black/10">Functions.</span>
            </h2>
            <p className="text-2xl text-black/50 font-medium leading-relaxed max-w-lg">
              {service.longDescription}
            </p>
          </div>

          <div className="grid gap-6">
            {service.subServices.map((sub: any, idx: number) => (
              <motion.div
                key={sub.slug}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={`/services/${service.slug}/${sub.slug}`}
                  className="group block p-10 rounded-[2.5rem] bg-white border border-black/5 hover:border-black/20 transition-all duration-500 shadow-[0_0_80px_rgba(0,0,0,0.01)]"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-black text-black/20 uppercase tracking-widest">{String(idx + 1).padStart(2, '0')}</span>
                    <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter text-black uppercase italic mb-4">{sub.title}</h3>
                  <p className="text-lg text-black/40 font-medium line-clamp-2">{sub.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection({ service }: { service: any }) {
  return (
    <section
      className="relative py-48 overflow-hidden"
      style={{ backgroundColor: service.color }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="service-process-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#service-process-grid)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center mb-32 relative z-10">
        <span className="text-[10px] uppercase font-black tracking-[0.6em] text-white/50 mb-8 block">Execution Framework</span>
        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic opacity-10 leading-none">Strategic Workflow</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {service.process.map((step: any, idx: number) => (
          <div key={step.title} className="relative space-y-8 p-10 block bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all duration-500">
            <div className="text-8xl font-black text-white/[0.05] absolute -top-8 -left-4 select-none">{idx + 1}</div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter relative z-10">{step.title}</h3>
            <p className="text-lg text-white/60 font-medium leading-relaxed relative z-10 italic">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function FAQSection({ service }: { service: any }) {
  const faqs = [
    { q: "Typical Timelines?", a: "Project cycles typically range from 4-12 weeks depending on technical complexity." },
    { q: "Partnership Models?", a: "We offer fixed-scope or retainer-based engagements tailored to your growth." },
    { q: "Ongoing Support?", a: "Post-launch maintenance and optimization are integral to our service lifecycle." },
  ]

  return (
    <section className="py-48 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase font-black tracking-[0.6em] text-black/20 mb-8 block">FAQ Hub</span>
          <h2 className="text-5xl font-black text-black tracking-tighter uppercase italic opacity-10">Common Queries</h2>
        </div>

        <div className="space-y-12">
          {faqs.map(faq => (
            <div key={faq.q} className="group border-b border-black/5 pb-12 cursor-pointer">
              <h3 className="text-2xl font-black text-black uppercase tracking-tighter mb-4 transition-colors group-hover:text-primary">{faq.q}</h3>
              <p className="text-xl text-black/40 font-medium leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
