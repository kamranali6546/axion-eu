"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"

export function StorySection() {
    const { ref, isInView } = useInView(0.1)
    const timeline = [
        { year: "2018", title: "Founded", desc: "Exion Technologies launched as a web development studio.", color: "#4285F4" },
        { year: "2019", title: "Marketing Wing", desc: "Expanded to offer digital marketing services.", color: "#DB4437" },
        { year: "2021", title: "Branding Division", desc: "Added brand identity and design services.", color: "#F4B400" },
        { year: "2023", title: "E-Commerce Hub", desc: "Launched dedicated e-commerce solutions.", color: "#0F9D58" },
        { year: "2025", title: "Global Reach", desc: "Serving 200+ clients across 15 countries.", color: "#4285F4" },
    ]

    return (
        <section ref={ref} className="py-28">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.span
                            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-5 py-2 rounded-full frost"
                            style={{ color: "#4285F4" }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Our Story
                        </motion.span>
                        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-balance" style={{ color: "hsl(var(--foreground))" }}>
                            From a Bold Idea to a Leading IT Partner
                        </h2>
                        <div className="flex flex-col gap-4">
                            {[
                                "Founded in Lahore, Pakistan, Exion Technologies started with a simple mission: make world-class digital solutions accessible to businesses of all sizes. What began as a small development studio has grown into a full-service IT company serving clients across the globe.",
                                "Today, we combine cutting-edge technology with creative excellence to deliver solutions that don't just meet expectations -- they redefine them.",
                                "We believe in building lasting partnerships, not just completing projects. Every line of code, every campaign strategy, and every brand element we create is crafted with your long-term success in mind.",
                            ].map((text, i) => (
                                <motion.p
                                    key={i}
                                    className="text-sm leading-relaxed"
                                    style={{ color: "hsl(var(--muted-foreground))" }}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                >
                                    {text}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex flex-col gap-6">
                            {timeline.map((item, idx) => (
                                <motion.div
                                    key={item.year}
                                    className="flex items-start gap-4"
                                    initial={{ opacity: 0, x: 15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                                >
                                    <div className="flex flex-col items-center">
                                        <motion.div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold text-white"
                                            style={{ backgroundColor: item.color }}
                                            whileHover={{ scale: 1.15, rotate: 5 }}
                                        >
                                            {item.year.slice(2)}
                                        </motion.div>
                                        {idx < timeline.length - 1 && (
                                            <motion.div
                                                className="w-px h-8 mt-2"
                                                style={{ backgroundColor: `${item.color}30` }}
                                                initial={{ scaleY: 0 }}
                                                whileInView={{ scaleY: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.6 + idx * 0.1, duration: 0.4 }}
                                            />
                                        )}
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="text-sm font-bold" style={{ color: "hsl(var(--foreground))" }}>
                                            {item.title}
                                        </h4>
                                        <p className="text-xs mt-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
