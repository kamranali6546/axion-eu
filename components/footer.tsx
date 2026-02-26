"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { services } from "@/lib/services-data"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, ArrowRight, MessageSquare, Facebook } from "lucide-react"
import Image from "next/image"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "Github" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/exionofficial", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/exion_technologies", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/exiontechnologies", label: "Facebook" },
]

export default function Footer() {
  const [year, setYear] = useState("2026")
  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="relative bg-slate-50 pt-24 pb-12 overflow-hidden border-t border-slate-200/60">
      {/* Cinematic Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[20vw] font-black tracking-tighter text-foreground/[0.03] leading-none uppercase">
          Exion
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Upper Footer: Premium CTA */}
        <motion.div
          className="relative mb-24 p-8 lg:p-16 rounded-[2.5rem] overflow-hidden border border-white/5 bg-secondary/20 backdrop-blur-xl shadow-2xl will-change-[transform,opacity]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-4 leading-none">
                READY TO SCALE <br />
                <span className="text-primary">YOUR VISION?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Let's architect your success together. Our expert team is ready to turn your complex challenges into digital breakthroughs.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-foreground text-background rounded-2xl font-black uppercase tracking-widest text-sm transition-all hover:pr-12 hover:scale-[1.02] active:scale-95"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand & Culture Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link href="/" className="relative inline-block h-10 w-40">
              <Image
                src="/logo.png"
                alt="Exion Technologies"
                width={100}
                height={100}
                className="object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              We create modern, responsive, and high-performance websites tailored to your business needs.
              From simple websites to powerful web applications — we deliver smart digital solutions.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center border border-border/40 text-foreground transition-colors hover:bg-primary hover:text-white"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Dynamic Services Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            {services.slice(0, 2).map((service) => (
              <div key={service.slug} className="flex flex-col gap-6">
                <h3 className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: service.color }}>
                  {service.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {service.subServices.map((sub) => (
                    <li key={sub.slug}>
                      <Link
                        href={`/services/${service.slug}/${sub.slug}`}
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline-offset-8 hover:underline decoration-primary/30"
                      >
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Information Column */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-foreground">
              Contact Detail
            </h3>
            <div className="flex flex-col gap-5">
              <a href="mailto:hello@exiontechnologies.eu" className="group flex flex-col gap-1">
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Email Us</span>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">hello@exiontechnologies.eu</span>
              </a>
              <a href="https://wa.me/34632841902" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-1">
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">WhatsApp</span>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">+34 632 841 902</span>
              </a>
              <a href="https://www.exiontechnologies.eu" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-1">
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Website</span>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">www.exiontechnologies.eu</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              &copy; {year} EXION TECHNOLOGIES. ALL RIGHTS RESERVED.
            </p>
            {/* <div className="flex items-center gap-6">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div> */}
          </div>

          <div className="flex items-center gap-2 text-primary">
            <MessageSquare className="w-4 h-4 animate-bounce" />
            <span className="text-xs font-bold uppercase tracking-tighter">System Online</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
