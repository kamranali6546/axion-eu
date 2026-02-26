"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { Zap, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { services } from "@/lib/services-data"

const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -8 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    }),
}

export function WhatWeDoSection() {
    const { ref, isInView } = useInView(0.1)

    return (
        <section
            ref={ref}
            className="relative py-28 overflow-hidden bg-[#DB4437]"
        >
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="wwd-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#wwd-grid)" />
                </svg>
            </div>
            <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase text-white">
                        What We <span className="text-white/20 italic">Do.</span>
                    </h2>
                    <p className="mt-6 text-xl max-w-2xl mx-auto text-white/70 font-medium italic" >
                        Four pillars of expertise working together to deliver complete digital transformation.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.slug}
                            custom={idx}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: (i: number) => ({
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                                }),
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-10%" }}
                        >
                            <Link
                                href={`/services/${service.slug}`}
                                className="group block bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 h-full transition-all hover:bg-white/10"
                            >
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/10 border border-white/10">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-black tracking-tighter uppercase italic mb-4 text-white">
                                    {service.title}
                                </h3>
                                <p className="text-sm leading-relaxed mb-6 text-white/60 font-medium">
                                    {service.description}
                                </p>
                                <ul className="flex flex-col gap-2 mb-8">
                                    {service.subServices.slice(0, 3).map((sub) => (
                                        <li key={sub.slug} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-white" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-white/50">{sub.title}</span>
                                        </li>
                                    ))}
                                </ul>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3 text-white transition-all group-hover:gap-4">
                                    Initiate <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
