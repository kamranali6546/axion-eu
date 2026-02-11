"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Zain Ahmad",
    company: "TechVentures Inc.",
    role: "CTO",
    text: "Exion transformed our entire digital infrastructure. Their development team delivered a platform that handles 10x our previous traffic without breaking a sweat. The team was incredibly responsive and professional throughout.",
    color: "#4285F4",
    rating: 5,
    metric: "10x",
    metricLabel: "Traffic Increase",
    initial: "Z",
  },
  {
    name: "Maria Chen",
    company: "GrowthScale Marketing",
    role: "Marketing VP",
    text: "The marketing campaigns Exion crafted for us resulted in a 340% increase in qualified leads within just 3 months. Their data-driven approach and creative thinking set them apart from every agency we have worked with.",
    color: "#DB4437",
    rating: 5,
    metric: "340%",
    metricLabel: "Lead Growth",
    initial: "M",
  },
  {
    name: "Omar Sheikh",
    company: "Luxe Fashion House",
    role: "Brand Director",
    text: "Our brand identity redesign by Exion elevated our perception in the market. We have seen a significant uptick in brand recall and customer loyalty. They truly understood our vision and brought it to life beautifully.",
    color: "#F4B400",
    rating: 5,
    metric: "85%",
    metricLabel: "Brand Recall",
    initial: "O",
  },
  {
    name: "Priya Sharma",
    company: "MegaShop Online",
    role: "CEO",
    text: "Exion built our e-commerce platform from scratch. Within 6 months, we processed over $2M in transactions with zero downtime. Their attention to detail and conversion optimization expertise is simply world-class.",
    color: "#0F9D58",
    rating: 5,
    metric: "$2M+",
    metricLabel: "Revenue",
    initial: "P",
  },
]

export default function TestimonialsSection() {
  const { ref, isInView } = useInView(0.1)
  const [activeIdx, setActiveIdx] = useState(0)
  const [direction, setDirection] = useState(1)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], [80, -80])

  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
    autoplayRef.current = setInterval(() => {
      setDirection(1)
      setActiveIdx((prev) => (prev + 1) % testimonials.length)
    }, 7000)
  }

  useEffect(() => {
    resetAutoplay()
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current) }
  }, [])

  const goTo = (idx: number) => {
    setDirection(idx > activeIdx ? 1 : -1)
    setActiveIdx(idx)
    resetAutoplay()
  }

  const goPrev = () => { goTo((activeIdx - 1 + testimonials.length) % testimonials.length) }
  const goNext = () => { goTo((activeIdx + 1) % testimonials.length) }

  const active = testimonials[activeIdx]

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0, scale: 0.95 }),
  }

  return (
    <section
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Background */}
      <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, transparent 0%, #f5f8ff 30%, #f5f8ff 70%, transparent 100%)" }}
        />
        <motion.div
          className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: `radial-gradient(circle, ${active.color}, transparent)`,
            y: bgY,
          }}
        />
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
                Client Voices
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
              <span className="block opacity-10">Trust.</span>
              <span className="block text-foreground ml-4 lg:ml-12 -mt-4 lg:-mt-8">Client Stories</span>
              <span className="block text-foreground/50 font-serif italic text-3xl md:text-5xl tracking-normal normal-case mt-4">
                Built on Excellence.
              </span>
            </h2>
          </motion.div>
        </header>

        {/* Main testimonial area */}
        <div className="relative max-w-4xl mx-auto">
          {/* Large quote decorative */}
          <motion.div
            className="absolute -top-6 -left-6 lg:-top-10 lg:-left-10 pointer-events-none"
            animate={{ rotate: [0, 5, 0], y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Quote className="w-16 h-16 lg:w-24 lg:h-24 opacity-[0.06]" style={{ color: active.color }} />
          </motion.div>

          {/* Card */}
          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIdx}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full frost-card rounded-3xl p-8 lg:p-14 will-change-transform will-change-opacity"
              >
                {/* Metric badge */}
                <motion.div
                  className="inline-flex items-center gap-3 mb-8 px-5 py-3 rounded-2xl"
                  style={{ backgroundColor: `${active.color}08` }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-3xl lg:text-4xl font-bold" style={{ color: active.color }}>
                    {active.metric}
                  </span>
                  <span className="text-xs font-medium leading-tight" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {active.metricLabel}
                  </span>
                </motion.div>

                {/* Quote text */}
                <motion.blockquote
                  className="text-lg lg:text-xl leading-relaxed mb-10"
                  style={{ color: "hsl(var(--foreground))" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  {`"${active.text}"`}
                </motion.blockquote>

                {/* Author */}
                <motion.div
                  className="flex items-center justify-between flex-wrap gap-4"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${active.color}12` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-xl font-bold" style={{ color: active.color }}>
                        {active.initial}
                      </span>
                    </motion.div>
                    <div>
                      <p className="text-base font-bold" style={{ color: "hsl(var(--foreground))" }}>
                        {active.name}
                      </p>
                      <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                        <span style={{ color: active.color }}>{active.role}</span>
                        {" at "}
                        <span className="font-medium">{active.company}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.08 }}
                      >
                        <Star
                          className="w-5 h-5"
                          fill={active.color}
                          style={{ color: active.color }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <motion.button
              onClick={goPrev}
              className="w-12 h-12 rounded-xl frost-card flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" style={{ color: "hsl(var(--foreground))" }} />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((t, idx) => (
                <button key={idx} onClick={() => goTo(idx)} className="relative p-1" aria-label={`Go to testimonial ${idx + 1}`}>
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor: idx === activeIdx ? t.color : "hsl(var(--border))",
                    }}
                    animate={{
                      scale: idx === activeIdx ? 1.4 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  {idx === activeIdx && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: `2px solid ${t.color}`, opacity: 0.3 }}
                      layoutId="testimonialRing"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <motion.button
              onClick={goNext}
              className="w-12 h-12 rounded-xl frost-card flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" style={{ color: "hsl(var(--foreground))" }} />
            </motion.button>
          </div>

          {/* Company logos strip */}
          <motion.div
            className="flex items-center justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            {testimonials.map((t, idx) => (
              <motion.button
                key={t.company}
                onClick={() => goTo(idx)}
                className="text-sm font-semibold transition-all px-4 py-2 rounded-xl"
                style={{
                  color: idx === activeIdx ? t.color : "hsl(var(--muted-foreground))",
                  backgroundColor: idx === activeIdx ? `${t.color}08` : "transparent",
                  opacity: idx === activeIdx ? 1 : 0.5,
                }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                {t.company}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
