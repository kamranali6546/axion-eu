"use client"

import dynamic from "next/dynamic"
import LoadingScreen from "@/components/loading-screen"
import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"

const ServicesSection = dynamic(() => import("@/components/services-section"), { ssr: true })
const StatsSection = dynamic(() => import("@/components/stats-section"), { ssr: true })
const ProcessSection = dynamic(() => import("@/components/process-section"), { ssr: true })
const TechStackSection = dynamic(() => import("@/components/tech-stack-section"), { ssr: true })
const ProfilesSection = dynamic(() => import("@/components/profiles-section"), { ssr: true })
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"), { ssr: true })
const Footer = dynamic(() => import("@/components/footer"), { ssr: true })

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        <HeroBanner />
        <ServicesSection />
        <StatsSection />
        <ProcessSection />
        <TechStackSection />
        <ProfilesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}
