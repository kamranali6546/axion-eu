"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/services-data"
import { ServiceSVGBySlug } from "./animated-svgs"
import { useInView } from "@/hooks/use-in-view"

export default function ServicesSection() {
  const { ref, isInView } = useInView(0.05)

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
    >
      {/* Elegant background graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-green-500/10 to-yellow-500/10 rounded-full blur-3xl" />

        {/* Geometric patterns */}
        <svg className="absolute top-1/4 left-1/4 w-64 h-64 opacity-[0.03]" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        <svg className="absolute bottom-1/4 right-1/4 w-64 h-64 opacity-[0.03]" viewBox="0 0 200 200">
          <rect x="50" y="50" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 100 100)" />
          <rect x="65" y="65" width="70" height="70" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 100 100)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <header className="mb-20 lg:mb-24">
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
                Digital Capabilities
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
              <span className="block opacity-10">Services.</span>
              <span className="block text-foreground ml-4 lg:ml-12 -mt-4 lg:-mt-8">Solutions That</span>
              <span className="block text-foreground/50 font-serif italic text-3xl md:text-5xl tracking-normal normal-case mt-4">
                Drive Digital Transformation.
              </span>
            </h2>
          </motion.div>
        </header>

        {/* Service cards - 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative"
            >
              <Link
                href={`/services/${service.slug}`}
                className="block relative rounded-[2.5rem] p-10 lg:p-12 bg-white/80 backdrop-blur-sm border border-black/5 hover:border-black/10 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden"
              >
                {/* Color accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: service.color }}
                />

                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity"
                  style={{ background: `radial-gradient(circle at top right, ${service.color}, transparent 70%)` }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${service.color}15` }}
                      >
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: service.color }} />
                      </div>
                      <div>
                        <span
                          className="text-xs font-black tracking-[0.2em] uppercase block"
                          style={{ color: service.color }}
                        >
                          {service.title}
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-black tracking-tighter uppercase mb-4 text-black leading-tight">
                    {service.tagline}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed mb-6 text-black/60 font-medium line-clamp-3">
                    {service.longDescription}
                  </p>

                  {/* Sub-services */}
                  <div className="flex flex-wrap gap-2">
                    {service.subServices.slice(0, 3).map((sub) => (
                      <span
                        key={sub.slug}
                        className="px-3 py-1.5 rounded-lg bg-black/5 text-xs font-bold text-black/60"
                      >
                        {sub.title}
                      </span>
                    ))}
                    {service.subServices.length > 3 && (
                      <span className="px-3 py-1.5 rounded-lg bg-black/5 text-xs font-bold text-black/60">
                        +{service.subServices.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
