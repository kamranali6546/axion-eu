"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function WhatsAppFloating() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 2
            }}
            className="fixed bottom-8 right-8 z-[100]"
        >
            <motion.a
                href="https://whatsapp.com/channel/0029VbC7PUZ72WTpHOiD5W41"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-shadow"
            >
                <MessageCircle className="w-8 h-8" />

                {/* Pulsing Ring */}
                <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />

                {/* Tooltip */}
                <div className="absolute right-full mr-4 px-4 py-2 bg-foreground text-background text-xs font-black uppercase tracking-widest rounded-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
                    Chat with Us
                    <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-foreground" />
                </div>
            </motion.a>
        </motion.div>
    )
}
