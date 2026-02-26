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
  const [svgSize, setSvgSize] = useState(320)

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) setSvgSize(180)
        else if (window.innerWidth < 1024) setSvgSize(260)
        else setSvgSize(320)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const activeService = services[activeIndex]
  const ActiveSVG = svgComponents[activeIndex]

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden pt-28 lg:pt-20">
      {/* Dynamic Background with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 will-change-opacity"
            style={{
              background: `radial-gradient(circle at 70% 50%, ${activeService.color}15 0%, transparent 70%),
                          radial-gradient(circle at 20% 40%, ${activeService.color}10 0%, transparent 50%)`,
            }}
          />
        </AnimatePresence>

        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[80px]" style={{ background: `${activeService.color}20` }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[100px]" style={{ background: `${activeService.color}15` }} />
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

        {/* Optimized Cinematic Orbs */}
        <motion.div
          className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] blur-[80px] rounded-full opacity-20 pointer-events-none"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, 30, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            background: `radial-gradient(circle, ${activeService.color}, transparent)`,
            top: "-10%",
            right: "-5%",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 w-full py-12 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 text-center lg:text-left">
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
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground whitespace-nowrap">
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
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[0.95] sm:leading-[0.9]">
                    <span className="block text-foreground opacity-90">{activeService.slogan.toUpperCase()}</span>
                    <span className="block" style={{ color: activeService.color }}>
                      {activeService.title.toUpperCase()}
                    </span>
                    <span className="block text-foreground/40 italic font-serif font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-normal mt-2">
                      {activeService.subHeading.toUpperCase()}.
                    </span>
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                className="text-base sm:text-lg md:text-xl text-muted-foreground/80 max-w-lg lg:max-w-none mx-auto lg:mx-0 leading-relaxed font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {activeService.description}
              </motion.p>
            </AnimatePresence>

            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-5 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href={`/services/${activeService.slug}`}
                className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-background font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 text-center"
              >
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ backgroundColor: activeService.color }} />
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors will-change-transform">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold border border-border/60 hover:bg-secondary/50 transition-all backdrop-blur-sm text-center"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Quick Selector */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mt-4 md:mt-8">
              {services.map((service, idx) => (
                <button
                  key={service.slug}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border ${idx === activeIndex
                    ? "border-transparent text-white shadow-lg"
                    : "border-border/40 text-muted-foreground hover:border-border hover:text-foreground"
                    }`}
                  style={{
                    backgroundColor: idx === activeIndex ? service.color : "transparent"
                  }}
                >
                  <span className="relative z-10">{service.title}</span>
                  {idx !== activeIndex && (
                    <div className="absolute inset-0 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[400px] lg:max-w-[500px]">
              {/* Background Glow */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  style={{ backgroundColor: activeService.color }}
                  className="absolute inset-0 blur-[40px] md:blur-[60px] rounded-full opacity-30 will-change-transform"
                />
              </AnimatePresence>

              {/* SVG Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 w-full h-full flex items-center justify-center will-change-transform"
                >
                  <div className="p-6 sm:p-8 md:p-12 rounded-[30px] sm:rounded-[40px] bg-background/40 backdrop-blur-xl border border-white/10 shadow-2xl">
                    <ActiveSVG size={svgSize} />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Cards / Details */}
              <motion.div
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 p-3 md:p-4 rounded-xl md:rounded-2xl bg-background/80 backdrop-blur-md border border-border/40 shadow-xl hidden sm:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center opacity-80" style={{ backgroundColor: `${activeService.color}20`, color: activeService.color }}>
                    <ActiveSVG size={12} />
                  </div>
                  <div className="pr-2 md:pr-4 text-left">
                    <p className="text-[8px] md:text-[10px] uppercase font-bold text-muted-foreground mb-0">Performance</p>
                    <p className="text-xs md:text-sm font-black italic">OPTIMIZED</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicator bottom */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 md:gap-4">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className="group relative h-1 md:h-1.5 transition-all"
            style={{ width: idx === activeIndex ? "30px" : "10px" }}
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
