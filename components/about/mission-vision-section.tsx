"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { Target, Eye } from "lucide-react"

export function MissionVisionSection() {
    const { ref, isInView } = useInView(0.1)

    return (
        <section
            ref={ref}
            className="relative py-28 overflow-hidden bg-white"
        >
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { icon: Target, title: "Our Mission", color: "#DB4437", text: "To empower businesses with innovative, reliable, and scalable digital solutions that drive sustainable growth. We strive to be the bridge between ambitious ideas and successful digital realities, making cutting-edge technology accessible to all." },
                        { icon: Eye, title: "Our Vision", color: "#0F9D58", text: "To become the most trusted IT partner for businesses worldwide, known for transforming industries through technology, creativity, and relentless dedication to client success. We envision a future where every business thrives in the digital landscape." },
                    ].map((item, idx) => {
                        const MIcon = item.icon
                        return (
                            <motion.div
                                key={item.title}
                                className="rounded-[2.5rem] p-12 magnetic-hover relative overflow-hidden group"
                                style={{ backgroundColor: item.color }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="absolute inset-0 pointer-events-none opacity-10">
                                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                        <pattern id={`mission-dots-${idx}`} width="10" height="10" patternUnits="userSpaceOnUse">
                                            <circle cx="1" cy="1" r="0.5" fill="white" />
                                        </pattern>
                                        <rect width="100%" height="100%" fill={`url(#mission-dots-${idx})`} />
                                    </svg>
                                </div>

                                <motion.div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-white/20 backdrop-blur-sm border border-white/20"
                                    whileHover={{ scale: 1.15, rotate: 10 }}
                                >
                                    <MIcon className="w-8 h-8 text-white" />
                                </motion.div>
                                <h3 className="text-3xl font-black tracking-tighter text-white uppercase italic mb-6">
                                    {item.title}
                                </h3>
                                <p className="text-lg leading-relaxed text-white/80 font-medium italic">
                                    {item.text}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
