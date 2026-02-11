"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/services-data"
import { DevelopmentSVG, MarketingSVG, BrandingSVG, EcommerceSVG } from "./animated-svgs"

const svgComponents = [DevelopmentSVG, MarketingSVG, BrandingSVG, EcommerceSVG]

export default function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isChanging, setIsChanging] = useState(false)

  const nextSlide = useCallback(() => {
    setIsChanging(true)
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % services.length)
      setIsChanging(false)
    }, 500)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const activeService = services[activeIndex]
  const ActiveSVG = svgComponents[activeIndex]

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden pt-20">
      {/* Dynamic Background with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 transition-colors duration-1000 will-change-auto"
          style={{
            background: `radial-gradient(circle at 70% 50%, ${activeService.color}15 0%, transparent 70%),
                        radial-gradient(circle at 20% 40%, ${activeService.color}10 0%, transparent 50%)`,
          }}
        />

        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]" style={{ background: `${activeService.color}20` }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px]" style={{ background: `${activeService.color}15` }} />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        {/* Cinematic Orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] blur-[120px] rounded-full opacity-25 pointer-events-none"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, 30, 40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            background: `radial-gradient(circle, ${activeService.color}, transparent)`,
            top: "-10%",
            right: "-5%",
          }}
        />

        <motion.div
          className="absolute w-[400px] h-[400px] blur-[100px] rounded-full opacity-15 pointer-events-none"
          animate={{
            x: [0, -40, 20, 0],
            y: [0, -20, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{
            background: `radial-gradient(circle, ${activeService.color}, transparent)`,
            bottom: "10%",
            left: "-5%",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/40 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" style={{ backgroundColor: activeService.color }}></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" style={{ backgroundColor: activeService.color }}></span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
                  Leading Digital Integration
                </span>
              </div>
            </motion.div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="will-change-transform will-change-opacity"
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] lg:leading-[0.85]">
                    <span className="block text-foreground opacity-90">EMPOWERING</span>
                    <span className="block" style={{ color: activeService.color }}>
                      {activeService.title.toUpperCase()}
                    </span>
                    <span className="block text-foreground/40 italic font-serif font-light text-4xl md:text-6xl lg:text-7xl tracking-normal mt-2">
                      With Precision.
                    </span>
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                className="text-lg md:text-xl text-muted-foreground/80 max-w-lg leading-relaxed font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {activeService.description}
              </motion.p>
            </AnimatePresence>

            <motion.div
              className="flex flex-wrap items-center gap-5 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href={`/services/${activeService.slug}`}
                className="group relative px-8 py-4 rounded-full bg-foreground text-background font-bold overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ backgroundColor: activeService.color }} />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors will-change-transform">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-full font-bold border border-border/60 hover:bg-secondary/50 transition-all backdrop-blur-sm"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Quick Selector */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              {services.map((service, idx) => (
                <button
                  key={service.slug}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${idx === activeIndex
                    ? "border-transparent text-white"
                    : "border-border/40 text-muted-foreground hover:border-border hover:text-foreground"
                    }`}
                >
                  <span className="relative z-10">{service.title}</span>
                  {idx === activeIndex && (
                    <motion.div
                      layoutId="bannerActiveIndicator"
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: service.color }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {idx !== activeIndex && (
                    <div className="absolute inset-0 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[500px]">
              {/* Background Glow */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  style={{ backgroundColor: activeService.color }}
                  className="absolute inset-0 blur-[80px] rounded-full opacity-30 will-change-transform"
                />
              </AnimatePresence>

              {/* SVG Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 w-full h-full flex items-center justify-center will-change-transform"
                >
                  <div className="p-12 rounded-[40px] bg-background/40 backdrop-blur-xl border border-white/10 shadow-2xl">
                    <ActiveSVG size={320} />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Cards / Details */}
              <motion.div
                className="absolute -top-6 -right-6 p-4 rounded-2xl bg-background/80 backdrop-blur-md border border-border/40 shadow-xl hidden md:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center opacity-80" style={{ backgroundColor: `${activeService.color}20`, color: activeService.color }}>
                    <ActiveSVG size={16} />
                  </div>
                  <div className="pr-4">
                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-0.5">Performance</p>
                    <p className="text-sm font-black italic">OPTIMIZED</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicator bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className="group relative h-1.5 transition-all"
            style={{ width: idx === activeIndex ? "40px" : "12px" }}
          >
            <div className={`absolute inset-0 rounded-full transition-colors ${idx === activeIndex ? "" : "bg-border/60 group-hover:bg-border"}`}
              style={{ backgroundColor: idx === activeIndex ? services[idx].color : undefined }}
            />
          </button>
        ))}
      </div>
    </section>
  )
}
