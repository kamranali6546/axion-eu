// Root page is now a Server Component

import dynamic from "next/dynamic"
import LoadingScreen from "@/components/loading-screen"
import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"

const ServicesSection = dynamic(() => import("@/components/services-section"))
const StatsSection = dynamic(() => import("@/components/stats-section"))
const ProcessSection = dynamic(() => import("@/components/process-section"))
const TechStackSection = dynamic(() => import("@/components/tech-stack-section"))
const ProfilesSection = dynamic(() => import("@/components/profiles-section"))
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"))
const Footer = dynamic(() => import("@/components/footer"))

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        <HeroBanner />
        <StatsSection />
        <ProcessSection />
        <ServicesSection />
        <TechStackSection />
        <ProfilesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}
