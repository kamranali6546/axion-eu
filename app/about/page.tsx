"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Target, Eye, Zap, Globe, Users, Award, Clock, CheckCircle2, ChevronDown } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useInView } from "@/hooks/use-in-view"
import { services } from "@/lib/services-data"

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

function StorySection() {
  const { ref, isInView } = useInView(0.1)
  const timeline = [
    { year: "2018", title: "Founded", desc: "Exion.pk launched as a web development studio.", color: "#4285F4" },
    { year: "2019", title: "Marketing Wing", desc: "Expanded to offer digital marketing services.", color: "#DB4437" },
    { year: "2021", title: "Branding Division", desc: "Added brand identity and design services.", color: "#F4B400" },
    { year: "2023", title: "E-Commerce Hub", desc: "Launched dedicated e-commerce solutions.", color: "#0F9D58" },
    { year: "2025", title: "Global Reach", desc: "Serving 200+ clients across 15 countries.", color: "#4285F4" },
  ]

  return (
    <section ref={ref} className="py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-5 py-2 rounded-full frost"
              style={{ color: "#4285F4" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Our Story
            </motion.span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-balance" style={{ color: "hsl(var(--foreground))" }}>
              From a Bold Idea to a Leading IT Partner
            </h2>
            <div className="flex flex-col gap-4">
              {[
                "Founded in Lahore, Pakistan, Exion.pk started with a simple mission: make world-class digital solutions accessible to businesses of all sizes. What began as a small development studio has grown into a full-service IT company serving clients across the globe.",
                "Today, we combine cutting-edge technology with creative excellence to deliver solutions that don't just meet expectations -- they redefine them.",
                "We believe in building lasting partnerships, not just completing projects. Every line of code, every campaign strategy, and every brand element we create is crafted with your long-term success in mind.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className="text-sm leading-relaxed"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-6">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + idx * 0.12, duration: 0.5 }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: item.color }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      {item.year.slice(2)}
                    </motion.div>
                    {idx < timeline.length - 1 && (
                      <motion.div
                        className="w-px h-8 mt-2"
                        style={{ backgroundColor: `${item.color}30` }}
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ delay: 0.6 + idx * 0.12, duration: 0.4 }}
                      />
                    )}
                  </div>
                  <div className="pt-1">
                    <h4 className="text-sm font-bold" style={{ color: "hsl(var(--foreground))" }}>
                      {item.title}
                    </h4>
                    <p className="text-xs mt-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MissionVisionSection() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section ref={ref} className="py-28" style={{ background: "linear-gradient(180deg, transparent, #f5f8ff, transparent)" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Target, title: "Our Mission", color: "#4285F4", text: "To empower businesses with innovative, reliable, and scalable digital solutions that drive sustainable growth. We strive to be the bridge between ambitious ideas and successful digital realities, making cutting-edge technology accessible to all." },
            { icon: Eye, title: "Our Vision", color: "#0F9D58", text: "To become the most trusted IT partner for businesses worldwide, known for transforming industries through technology, creativity, and relentless dedication to client success. We envision a future where every business thrives in the digital landscape." },
          ].map((item, idx) => {
            const MIcon = item.icon
            return (
              <motion.div
                key={item.title}
                className="frost-card rounded-2xl p-8 magnetic-hover"
                initial={{ opacity: 0, y: 50, rotateX: -8 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: idx * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${item.color}10` }}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                >
                  <MIcon className="w-6 h-6" style={{ color: item.color }} />
                </motion.div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "hsl(var(--foreground))" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const { ref, isInView } = useInView(0.1)
  const stats = [
    { icon: Globe, label: "Countries Served", value: "15+", color: "#4285F4" },
    { icon: Users, label: "Satisfied Clients", value: "200+", color: "#DB4437" },
    { icon: Award, label: "Projects Completed", value: "500+", color: "#F4B400" },
    { icon: Clock, label: "Years of Experience", value: "7+", color: "#0F9D58" },
  ]

  return (
    <section ref={ref} className="py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const SIcon = stat.icon
            return (
              <motion.div
                key={stat.label}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="frost-card rounded-2xl p-8 text-center magnetic-hover"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${stat.color}10` }}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                >
                  <SIcon className="w-6 h-6" style={{ color: stat.color }} />
                </motion.div>
                <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-xs font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function WhatWeDoSection() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section ref={ref} className="py-28" style={{ background: "linear-gradient(180deg, transparent, #f5f8ff, transparent)" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: "hsl(var(--foreground))" }}>
            What We Do
          </h2>
          <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            Four pillars of expertise working together to deliver complete digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.slug}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block frost-card rounded-2xl p-6 h-full magnetic-hover"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${service.color}12` }}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                >
                  <Zap className="w-6 h-6" style={{ color: service.color }} />
                </motion.div>
                <h3 className="text-base font-bold mb-2" style={{ color: service.color }}>
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {service.description}
                </p>
                <ul className="flex flex-col gap-1.5 mb-4">
                  {service.subServices.slice(0, 3).map((sub) => (
                    <li key={sub.slug} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 flex-shrink-0" style={{ color: service.color }} />
                      <span className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{sub.title}</span>
                    </li>
                  ))}
                </ul>
                <span className="text-xs font-semibold flex items-center gap-1 transition-all group-hover:gap-2" style={{ color: service.color }}>
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
        <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-black/5 bg-white">
          {/* Cinematic Background Gradient */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(0,0,0,0.03),transparent_70%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
            <motion.div
              style={{ y: heroY, opacity: heroOpacity }}
            >
              <span className="text-[10px] uppercase font-black tracking-[0.6em] text-primary/80 mb-8 block">
                Corporate Philosophy
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase mb-12 text-black text-balance">
                The <span className="text-black/10 italic font-serif lowercase tracking-normal">Axion</span>
                <br />Story
              </h1>
              <p className="max-w-xl mx-auto text-lg text-black/60 font-medium tracking-wide leading-relaxed">
                Exion.pk is a full-service IT company delivering development, marketing, branding, and e-commerce solutions that transform businesses and drive measurable growth.
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
        <StatsSection />
        <WhatWeDoSection />
      </main>
      <Footer />
    </>
  )
}
