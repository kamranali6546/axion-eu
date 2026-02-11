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
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Section background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-5 bg-dev" />
      </div>

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

        {/* Service cards */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {services.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center will-change-transform will-change-opacity ${idx % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
            >
              {/* Text content */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: service.color }} />
                  </div>
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: service.color }}
                  >
                    {service.title}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-balance" style={{ color: "hsl(var(--foreground))" }}>
                  {service.tagline}
                </h3>

                <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {service.longDescription}
                </p>

                {/* Sub-services grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.subServices.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/services/${service.slug}/${sub.slug}`}
                      className="group flex items-center gap-2 p-3 rounded-xl frost-card transition-all duration-300"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform group-hover:scale-150"
                        style={{ backgroundColor: service.color }}
                      />
                      <span className="text-xs font-medium" style={{ color: "hsl(var(--foreground))" }}>
                        {sub.title}
                      </span>
                    </Link>
                  ))}
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                  style={{ color: service.color }}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* SVG illustration */}
              <div className={`flex justify-center ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <motion.div
                  className="relative rounded-3xl p-8 frost-card will-change-transform"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Background accent */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-5"
                    style={{ background: `radial-gradient(circle at center, ${service.color}, transparent)` }}
                  />
                  <ServiceSVGBySlug slug={service.slug} size={320} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
