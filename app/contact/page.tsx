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

  const contactInfo = [
    { icon: Mail, label: "Email Us", value: "hello@exion.pk", href: "mailto:hello@exion.pk", color: "#4285F4" },
    { icon: Phone, label: "Call Us", value: "+92 300 1234567", href: "tel:+923001234567", color: "#DB4437" },
    { icon: MapPin, label: "Visit Us", value: "Lahore, Punjab, Pakistan", href: "#", color: "#F4B400" },
    { icon: Clock, label: "Working Hours", value: "Mon-Fri: 9AM - 6PM PKT", href: "#", color: "#0F9D58" },
  ]

  return (
    <section ref={ref} className="py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-balance" style={{ color: "hsl(var(--foreground))" }}>
              {"Let's Start a Conversation"}
            </h2>
            <p className="text-sm leading-relaxed mb-10" style={{ color: "hsl(var(--muted-foreground))" }}>
              Have a project in mind? We would love to hear about it. Fill out the form or reach out directly, and our team will get back to you within 24 hours.
            </p>

            <div className="flex flex-col gap-5">
              {contactInfo.map((item, idx) => {
                const CIcon = item.icon
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="group flex items-start gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}10` }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      <CIcon className="w-5 h-5" style={{ color: item.color }} />
                    </motion.div>
                    <div>
                      <div className="text-xs font-semibold mb-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>
                        {item.label}
                      </div>
                      <div className="text-sm font-medium group-hover:translate-x-1 transition-transform" style={{ color: "hsl(var(--foreground))" }}>
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Service tags */}
            <motion.div
              className="mt-10 pt-8 border-t"
              style={{ borderColor: "hsl(var(--border))" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <p className="text-xs font-semibold mb-4 uppercase tracking-wider" style={{ color: "hsl(var(--muted-foreground))" }}>
                Interested In
              </p>
              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <motion.span
                    key={s.slug}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium frost-card"
                    style={{ color: s.color }}
                    whileHover={{ scale: 1.05, backgroundColor: `${s.color}10` }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
                    {s.title}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="frost-card rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "you@company.com" },
                ].map((field) => (
                  <motion.div
                    key={field.id}
                    animate={{
                      scale: focusedField === field.id ? 1.01 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor={field.id} className="block text-xs font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl text-sm frost-input focus:outline-none focus:ring-2 focus:ring-[#4285F4]/30 transition-all"
                      style={{ color: "hsl(var(--foreground))" }}
                    />
                  </motion.div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <motion.div animate={{ scale: focusedField === "phone" ? 1.01 : 1 }}>
                  <label htmlFor="phone" className="block text-xs font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+92 300 1234567"
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-xl text-sm frost-input focus:outline-none focus:ring-2 focus:ring-[#4285F4]/30 transition-all"
                    style={{ color: "hsl(var(--foreground))" }}
                  />
                </motion.div>
                <motion.div animate={{ scale: focusedField === "service" ? 1.01 : 1 }}>
                  <label htmlFor="service" className="block text-xs font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    onFocus={() => setFocusedField("service")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-xl text-sm frost-input focus:outline-none focus:ring-2 focus:ring-[#4285F4]/30 transition-all appearance-none"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.title}</option>
                    ))}
                  </select>
                </motion.div>
              </div>

              <motion.div className="mb-6" animate={{ scale: focusedField === "subject" ? 1.01 : 1 }}>
                <label htmlFor="subject" className="block text-xs font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Project discussion"
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl text-sm frost-input focus:outline-none focus:ring-2 focus:ring-[#4285F4]/30 transition-all"
                  style={{ color: "hsl(var(--foreground))" }}
                />
              </motion.div>

              <motion.div className="mb-6" animate={{ scale: focusedField === "message" ? 1.01 : 1 }}>
                <label htmlFor="message" className="block text-xs font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl text-sm frost-input focus:outline-none focus:ring-2 focus:ring-[#4285F4]/30 transition-all resize-none"
                  style={{ color: "hsl(var(--foreground))" }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={submitted}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-70"
                style={{ background: submitted ? "#0F9D58" : "linear-gradient(135deg, #4285F4, #0F9D58)" }}
                whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(66,133,244,0.3)" }}
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
                      <CheckCircle2 className="w-4 h-4" /> Message Sent Successfully!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      Send Message <Send className="w-4 h-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
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
    <section ref={ref} className="py-28" style={{ background: "linear-gradient(180deg, transparent, #f5f8ff, transparent)" }}>
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4 px-5 py-2 rounded-full frost"
            style={{ color: "hsl(var(--muted-foreground))" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            FAQ
          </motion.span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: "hsl(var(--foreground))" }}>
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + idx * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="frost-card rounded-xl overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                whileHover={{ backgroundColor: "rgba(66,133,244,0.02)" }}
              >
                <span className="text-sm font-semibold pr-4" style={{ color: "hsl(var(--foreground))" }}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIdx === idx ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: "#4285F4" }} />
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
                    <div className="px-6 pb-5">
                      <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
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
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
