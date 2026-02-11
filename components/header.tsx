"use client"

import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, ArrowRight, Code2, Megaphone, Palette, ShoppingCart } from "lucide-react"
import { services } from "@/lib/services-data"
import Image from "next/image"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/services", hasDropdown: true },
  { label: "Showcase", href: "/portfolio" },
  { label: "Talent", href: "/profiles" },
  { label: "Story", href: "/about" },
  { label: "Connect", href: "/contact" },
]

const serviceIcons: Record<string, React.ElementType> = {
  development: Code2,
  marketing: Megaphone,
  branding: Palette,
  "e-commerce": ShoppingCart,
}

const ServiceSidebarItem = React.memo(({
  service,
  idx,
  isActive,
  onMouseEnter,
  Icon
}: {
  service: any;
  idx: number;
  isActive: boolean;
  onMouseEnter: () => void;
  Icon: React.ElementType;
}) => (
  <button
    onMouseEnter={onMouseEnter}
    className={`relative flex items-center gap-3 shrink-0 md:shrink px-4 py-3 rounded-xl text-left transition-all duration-200 group ${isActive ? "bg-background shadow-sm ring-1 ring-border/50" : "hover:bg-background/50"
      }`}
  >
    {isActive && (
      <motion.div
        className="absolute left-0 right-0 md:right-auto bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 h-0.5 md:h-8 w-full md:w-1 rounded-t-md md:rounded-r-md"
        layoutId="activeIndicator"
        style={{ backgroundColor: service.color }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    )}
    <div
      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors`}
      style={{
        backgroundColor: isActive ? `${service.color}15` : "transparent",
        color: isActive ? service.color : "hsl(var(--muted-foreground))"
      }}
    >
      <Icon className="w-4 h-4" />
    </div>
    <div className="flex-1 whitespace-nowrap md:whitespace-normal">
      <span className={`text-sm font-semibold block leading-tight ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
        {service.title}
      </span>
    </div>
    <ChevronDown
      className={`hidden md:block w-3 h-3 transition-transform ${isActive ? "-rotate-90" : "opacity-0 group-hover:opacity-50"}`}
      style={{ color: isActive ? service.color : "inherit" }}
    />
  </button>
))
ServiceSidebarItem.displayName = "ServiceSidebarItem"

const SubServiceItem = React.memo(({
  sub,
  subIdx,
  activeColor
}: {
  sub: any;
  subIdx: number;
  activeColor: string;
}) => (
  <Link
    href={`/services/${sub.parentSlug}/${sub.slug}`}
    className="group block p-4 rounded-xl hover:bg-muted/50 transition-all border border-transparent hover:border-border/40"
  >
    <div className="flex items-center gap-2 mb-2">
      <span className="text-xs font-bold px-2 py-0.5 rounded border" style={{ color: activeColor, backgroundColor: `${activeColor}05`, borderColor: `${activeColor}20` }}>
        {String(subIdx + 1).padStart(2, "0")}
      </span>
      <h4 className="font-semibold text-sm group-hover:text-primary transition-colors" style={{ color: "inherit" }}>
        {sub.title}
      </h4>
    </div>
    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
      {sub.description}
    </p>
  </Link>
))
SubServiceItem.displayName = "SubServiceItem"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const megaTimerRef = React.useRef<NodeJS.Timeout | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [activeServiceIdx, setActiveServiceIdx] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (megaTimerRef.current) clearTimeout(megaTimerRef.current)
    }
  }, [])

  const handleMegaEnter = useCallback(() => {
    if (megaTimerRef.current) clearTimeout(megaTimerRef.current)
    setMegaOpen(true)
  }, [])

  const handleMegaLeave = useCallback(() => {
    megaTimerRef.current = setTimeout(() => {
      setMegaOpen(false)
    }, 150) // Small delay to prevent accidental closing
  }, [])

  const activeService = services[activeServiceIdx]
  const ActiveIcon = serviceIcons[activeService.slug] || Code2

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
        ? "bg-background/80 backdrop-blur-md border-border/40 shadow-sm"
        : "bg-transparent border-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="relative z-10 flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative h-12 w-32"
            >
              <Image
                src="/logo.png"
                alt="Axion"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseLeave={link.hasDropdown ? handleMegaLeave : undefined}
              >
                <Link
                  href={link.href}
                  onMouseEnter={link.hasDropdown ? handleMegaEnter : undefined}
                  className="group relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  <span className="relative z-10">{link.label}</span>
                  {link.hasDropdown && (
                    <motion.span
                      animate={{ rotate: megaOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                    </motion.span>
                  )}

                  {/* Hover Pill Effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-secondary/50 -z-0" />
                </Link>

                {/* Mega Menu */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        className="fixed inset-x-0 top-24 z-50 px-4 lg:px-8"
                        onMouseEnter={handleMegaEnter}
                        onMouseLeave={handleMegaLeave}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10, pointerEvents: "none" }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <div className="mx-auto max-w-7xl">
                          <div className="overflow-hidden rounded-2xl border border-border/40 bg-background/95 backdrop-blur-xl shadow-2xl ring-1 ring-black/5">
                            <div className="flex flex-col lg:flex-row max-h-[calc(100vh-8rem)]">
                              {/* Sidebar - Service List */}
                              <div className="w-full lg:w-72 shrink-0 border-b lg:border-b-0 lg:border-r border-border/40 bg-muted/30">
                                <div className="p-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:max-h-[calc(100vh-8rem)] no-scrollbar">
                                  {services.map((service, idx) => (
                                    <ServiceSidebarItem
                                      key={service.slug}
                                      service={service}
                                      idx={idx}
                                      isActive={idx === activeServiceIdx}
                                      onMouseEnter={() => setActiveServiceIdx(idx)}
                                      Icon={serviceIcons[service.slug] || Code2}
                                    />
                                  ))}
                                </div>
                              </div>

                              {/* Main Content Area */}
                              <div className="flex-1 overflow-y-auto lg:max-h-[calc(100vh-8rem)]">
                                <div className="p-6 lg:p-8">
                                  <AnimatePresence mode="wait">
                                    <motion.div
                                      key={activeServiceIdx}
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -20 }}
                                      transition={{ duration: 0.2 }}
                                      className="flex flex-col"
                                    >
                                      {/* Header */}
                                      <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-8 pb-6 border-b border-border/40">
                                        <div className="flex gap-4">
                                          <div
                                            className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                                            style={{ backgroundColor: `${activeService.color}15`, color: activeService.color }}
                                          >
                                            <ActiveIcon className="w-6 h-6" />
                                          </div>
                                          <div>
                                            <h3 className="text-xl font-bold mb-1">{activeService.title}</h3>
                                            <p className="text-sm text-muted-foreground max-w-md">{activeService.tagline}</p>
                                          </div>
                                        </div>
                                        <Link
                                          href={`/services/${activeService.slug}`}
                                          className="group flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0"
                                          style={{ color: activeService.color, backgroundColor: `${activeService.color}10` }}
                                        >
                                          View All
                                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                      </div>

                                      {/* Sub-services Grid */}
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        {activeService.subServices.map((sub, subIdx) => (
                                          <SubServiceItem
                                            key={sub.slug}
                                            sub={{ ...sub, parentSlug: activeService.slug }}
                                            subIdx={subIdx}
                                            activeColor={activeService.color}
                                          />
                                        ))}
                                      </div>

                                      {/* Bottom Action Bar */}
                                      <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <p className="text-xs text-muted-foreground font-medium text-center sm:text-left">
                                          Need a custom solution for your business?
                                        </p>
                                        <Link
                                          href="/contact"
                                          className="w-full sm:w-auto text-center text-xs font-bold px-6 py-2.5 rounded-lg text-white transition-opacity hover:opacity-90 shrink-0"
                                          style={{ backgroundColor: activeService.color }}
                                        >
                                          Talk to Expert
                                        </Link>
                                      </div>
                                    </motion.div>
                                  </AnimatePresence>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="relative group px-6 py-2.5 rounded-full overflow-hidden bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 rounded-full hover:bg-secondary/50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 bg-background"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, idx) => (
                  <div key={link.label} className="border-b border-border/40 pb-2">
                    {link.hasDropdown ? (
                      <>
                        <button
                          className="flex items-center justify-between w-full py-4 text-lg font-medium"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        >
                          {link.label}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-primary" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-4 pb-4 pl-2">
                                {services.map((service) => (
                                  <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/30"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center" style={{ color: service.color }}>
                                      {React.createElement(serviceIcons[service.slug] || Code2, { className: "w-4 h-4" })}
                                    </div>
                                    <span className="font-medium text-sm" style={{ color: service.color }}>{service.title}</span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="block py-4 text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-lg shadow-primary/20"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
