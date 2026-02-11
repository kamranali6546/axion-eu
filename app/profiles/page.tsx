"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Mail, Linkedin, Globe, Briefcase, Quote, ChevronDown } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { teamMembers } from "@/lib/services-data"

export default function ProfilesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#FAFAFA] min-h-screen selection:bg-black selection:text-white">
        <HeroSection />

        <div className="relative">
          {teamMembers.map((member, idx) => (
            <ExpertChapter
              key={member.name}
              member={member}
              index={idx}
            />
          ))}
        </div>

        <PhilosophySection />
      </main>
      <Footer />
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-black/5 bg-slate-50/20">
      {/* Cinematic Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(66,133,244,0.05),transparent_70%)]" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-40 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] uppercase font-black tracking-[0.6em] text-primary/80 mb-8 block">
            Archive of Excellence
          </span>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase mb-12 text-black">
            The <span className="text-black/10 italic font-serif lowercase tracking-normal">expert</span>
            <br />Collective
          </h1>
          <p className="max-w-xl mx-auto text-lg text-black/60 font-medium tracking-wide leading-relaxed">
            An editorial showcase of the visionaries defining the next generation of digital infrastructure.
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
  )
}

function ExpertChapter({ member, index }: { member: any; index: number }) {
  const containerRef = useRef(null)
  const isEven = index % 2 === 0

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  return (
    <section
      ref={containerRef}
      className={`relative min-h-[110vh] py-32 flex items-center overflow-hidden ${index !== teamMembers.length - 1 ? 'border-b border-black/5' : ''}`}
      style={{
        backgroundColor: index % 2 === 1 ? `${member.color}05` : 'transparent'
      }}
    >
      {/* Background decoration for odd sections */}
      {index % 2 === 1 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full opacity-30" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full opacity-20" />
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-32`}>

          {/* Visual Side */}
          <motion.div
            className="w-full lg:w-1/2 aspect-[3/4] relative overflow-hidden rounded-[2.5rem] bg-black/[0.02] border border-black/5"
            style={{ opacity }}
          >
            <motion.img
              src={member.image}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
              style={{ y: imageY }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />

            {/* Design elements */}
            <div className="absolute top-12 left-12">
              <span className="text-[140px] font-black text-black/[0.03] leading-none select-none">{index + 1}</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="w-full lg:w-1/2 space-y-12"
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border border-black/5"
                  style={{ backgroundColor: `${member.color}10` }}
                >
                  <Briefcase className="w-6 h-6" style={{ color: member.color }} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Collective Assignment</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-black uppercase italic leading-none mb-4">
                {member.name}
              </h2>
              <p className="text-xl font-black uppercase tracking-[0.3em]" style={{ color: member.color }}>
                {member.designation}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 border-y border-black/5 py-10">
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-black/40 block mb-3">Specialty</span>
                <span className="text-xl font-bold text-black leading-tight">{member.specialty}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-black/40 block mb-3">Experience</span>
                <span className="text-xl font-bold text-black">{member.experience}</span>
              </div>
            </div>

            <div className="relative">
              <Quote className="absolute -top-6 -left-6 w-16 h-16 opacity-[0.08]" style={{ color: member.color }} />
              <p className="text-xl lg:text-3xl text-black/80 font-medium leading-relaxed italic pl-10 border-l-4" style={{ borderColor: `${member.color}40` }}>
                "{member.description}"
              </p>
            </div>

            <div className="space-y-10">
              {member.tools && (
                <div>
                  <span className="text-[10px] uppercase font-black tracking-widest text-black/40 block mb-5">Infrastructure & Tools</span>
                  <div className="flex flex-wrap gap-3">
                    {member.tools.map((tool: string) => (
                      <span key={tool} className="px-5 py-2.5 rounded-xl bg-black/[0.03] border border-black/5 text-[10px] font-bold text-black/60 uppercase tracking-widest hover:bg-black/[0.06] transition-colors">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-8 pt-10 border-t border-black/5">
                <button className="flex items-center gap-3 text-black hover:text-primary transition-colors group">
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Connect</span>
                </button>
                <button className="flex items-center gap-3 text-black hover:text-[#0077B5] transition-colors group">
                  <Linkedin className="w-5 h-5 text-[#0077B5] group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest">LinkedIn</span>
                </button>
                {member.languages && (
                  <div className="ml-auto flex items-center gap-3 px-5 py-2.5 bg-black/[0.03] rounded-full border border-black/5">
                    <Globe className="w-4 h-4 text-black/30" />
                    <span className="text-[10px] font-bold text-black/40 truncate max-w-[150px]">
                      {member.languages.join(" • ")}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function PhilosophySection() {
  return (
    <section className="relative py-48 overflow-hidden bg-[#F4B400]">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="phi-dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#phi-dots)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-12">
            Collective <span className="text-white/20 italic">Intelligence.</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl text-white/80 font-medium leading-[1.4] italic">
              We don't just hire specialists; we curate architects of change. Our Collective is built on the belief that peak technical mastery combined with absolute transparency creates bulletproof digital ecosystems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
