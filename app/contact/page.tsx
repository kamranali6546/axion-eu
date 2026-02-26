"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ArrowRight, CheckCircle2, ChevronDown } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useInView } from "@/hooks/use-in-view"
import { services } from "@/lib/services-data"

function ContactForm() {
  const { ref, isInView } = useInView(0.1)
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-background">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-dev/5 blur-[100px] rounded-full" />
      </div>

      <div className="mx-auto max-w-4xl px-4 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6">
            SEND A <span className="text-primary italic font-serif lowercase tracking-normal">Message</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
            Have a specific vision in mind? Map out your requirements below and our architecture team will respond within one business cycle.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <form
            onSubmit={handleSubmit}
            className="relative p-8 md:p-12 rounded-[2.5rem] bg-card/30 backdrop-blur-xl border border-border/50 shadow-2xl overflow-hidden"
          >
            {/* Form Glass Effect decoration */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-3xl rounded-full" />

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {[
                { id: "name", label: "Full Identity", type: "text", placeholder: "Your name" },
                { id: "email", label: "Digital Path", type: "email", placeholder: "you@domain.com" },
              ].map((field) => (
                <div key={field.id} className="relative">
                  <label htmlFor={field.id} className="block text-[10px] font-bold uppercase tracking-widest mb-3 ml-2 text-muted-foreground">
                    {field.label}
                  </label>
                  <motion.div animate={{ scale: focusedField === field.id ? 1.01 : 1 }}>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-6 py-4 rounded-2xl text-sm frost-input focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all font-medium"
                    />
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="relative">
                <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-widest mb-3 ml-2 text-muted-foreground">
                  Phone Uplink
                </label>
                <motion.div animate={{ scale: focusedField === "phone" ? 1.01 : 1 }}>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+92 000 0000000"
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-6 py-4 rounded-2xl text-sm frost-input focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all font-medium"
                  />
                </motion.div>
              </div>
              <div className="relative">
                <label htmlFor="service" className="block text-[10px] font-bold uppercase tracking-widest mb-3 ml-2 text-muted-foreground">
                  Project Logic
                </label>
                <motion.div animate={{ scale: focusedField === "service" ? 1.01 : 1 }}>
                  <select
                    id="service"
                    onFocus={() => setFocusedField("service")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-6 py-4 rounded-2xl text-sm frost-input focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none font-medium cursor-pointer"
                  >
                    <option value="">Select a module</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.title}</option>
                    ))}
                  </select>
                </motion.div>
              </div>
            </div>

            <div className="mb-10 relative">
              <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest mb-3 ml-2 text-muted-foreground">
                Data Payload
              </label>
              <motion.div animate={{ scale: focusedField === "message" ? 1.01 : 1 }}>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project infrastructure..."
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-6 py-4 rounded-2xl text-sm frost-input focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none font-medium"
                />
              </motion.div>
            </div>

            <motion.button
              type="submit"
              disabled={submitted}
              className="w-full group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-5 rounded-2xl text-sm font-black uppercase tracking-[0.2em] text-white transition-all disabled:opacity-70 shadow-xl"
              style={{ background: submitted ? "hsl(var(--primary))" : "linear-gradient(135deg, hsl(var(--foreground)), #333)" }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.span
                    key="sent"
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <CheckCircle2 className="w-5 h-5" /> Transmission Successful
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Deploy Request <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

function FAQSection() {
  const { ref, isInView } = useInView(0.1)
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const faqs = [
    { q: "How long does a typical project take?", a: "Project timelines vary based on complexity. A standard website takes 4-8 weeks, while larger enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation." },
    { q: "What is your pricing model?", a: "We offer flexible pricing including fixed-price projects, hourly rates, and retainer agreements. We provide detailed proposals tailored to your specific requirements and budget." },
    { q: "Do you offer ongoing support?", a: "Yes! We offer comprehensive maintenance and support packages for all our services. From bug fixes to feature enhancements, we are here for the long haul." },
    { q: "Can you work with our existing team?", a: "Absolutely. We regularly collaborate with in-house teams, acting as an extension of your workforce. We adapt to your workflow, tools, and communication preferences." },
    { q: "What technologies do you specialize in?", a: "Our tech stack includes React, Next.js, Node.js, Python, Flutter, AWS, and more. For marketing, we use industry-leading tools. We choose the best technology for each project's specific needs." },
  ]

  return (
    <section ref={ref} className="py-32 relative overflow-hidden bg-[#0F9D58]">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="faq-dots" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#faq-dots)" />
        </svg>
      </div>
      <div className="mx-auto max-w-4xl px-4 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.4em] uppercase mb-8 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <MessageSquare className="w-4 h-4" />
            Operational Queries
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase text-white">
            Common <span className="text-white/20 italic">Intelligence.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + idx * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors"
            >
              <motion.button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between px-10 py-8 text-left"
              >
                <span className="text-xl font-black uppercase tracking-tighter text-white pr-4">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIdx === idx ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5 text-white/40" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 pb-8">
                      <p className="text-lg leading-relaxed text-white/70 italic font-medium">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
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
        <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-black/5 bg-slate-50/20">
          {/* Cinematic Background Gradient */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(66,133,244,0.05),transparent_70%)]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-30" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
            <motion.div
              style={{ y: heroY, opacity: heroOpacity }}
            >
              <span className="text-[10px] uppercase font-black tracking-[0.6em] text-primary/80 mb-8 block">
                Global Connect
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase mb-12 text-black text-balance">
                Start <span className="text-black/10 italic font-serif lowercase tracking-normal">the</span>
                <br />Conversation
              </h1>
              <p className="max-w-xl mx-auto text-lg text-black/60 font-medium tracking-wide leading-relaxed">
                {"Get in touch with our team and let's discuss how we can bring your digital vision to life."}
              </p>
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

        <ContactForm />

        {/* Global Infrastructure Redesign */}
        <section id="offices" className="py-24 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[10px] uppercase font-black tracking-[0.4em] text-primary/60 mb-4 block">Our Infrastructure</span>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase">Global <span className="text-black/10 italic font-serif tracking-normal lowercase">Hubs</span></h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { city: "Barcelona", country: "Spain", role: "HQ & Design Hub", phone: "+34 632 841 902", color: "#4285F4" },
                { city: "Tbilisi", country: "Georgia", role: "European Logistics", phone: "+995 568 772744", color: "#DB4437" },
                { city: "Lahore", country: "Pakistan", role: "Engineering Center", phone: "+92 300 1234567", color: "#F4B400" }
              ].map((office, i) => (
                <motion.div
                  key={office.city}
                  className="group relative p-8 rounded-[2rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: office.color }} />
                  <span className="text-[10px] font-black tracking-[0.2em] text-muted-foreground uppercase mb-2 block">{office.role}</span>
                  <h3 className="text-2xl font-black tracking-tight mb-1">{office.city}</h3>
                  <p className="text-sm font-medium text-muted-foreground mb-6">{office.country}</p>

                  <a
                    href={`tel:${office.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 text-sm font-bold group-hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {office.phone}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
