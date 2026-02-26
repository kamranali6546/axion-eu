"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { Globe, Users, Award, Clock } from "lucide-react"

const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -8 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    }),
}

export function AboutStatsSection() {
    const { ref, isInView } = useInView(0.1)
    const stats = [
        { icon: Globe, label: "Countries Served", value: "15+", color: "#4285F4" },
        { icon: Users, label: "Satisfied Clients", value: "200+", color: "#DB4437" },
        { icon: Award, label: "Projects Completed", value: "500+", color: "#F4B400" },
        { icon: Clock, label: "Years of Experience", value: "7+", color: "#0F9D58" },
    ]

    return (
        <section ref={ref} className="py-28">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => {
                        const SIcon = stat.icon
                        return (
                            <motion.div
                                key={stat.label}
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
                                className="frost-card rounded-2xl p-8 text-center magnetic-hover"
                            >
                                <motion.div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                                    style={{ backgroundColor: `${stat.color}10` }}
                                    whileHover={{ scale: 1.15, rotate: 10 }}
                                >
                                    <SIcon className="w-6 h-6" style={{ color: stat.color }} />
                                </motion.div>
                                <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: stat.color }}>
                                    {stat.value}
                                </div>
                                <div className="text-xs font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
