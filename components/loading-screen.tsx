"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Instead of 50 state updates per second, we just wait 800ms and hide it.
    // The CPU stays completely idle during this critical boot phase.
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #f0faf4 100%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Static background to save CPU during boot */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute w-64 h-64 rounded-full blur-3xl opacity-50" style={{ background: "#4285F4", top: "10%", left: "15%" }} />
            <div className="absolute w-48 h-48 rounded-full blur-3xl opacity-50" style={{ background: "#DB4437", bottom: "15%", right: "10%" }} />
            <div className="absolute w-40 h-40 rounded-full blur-3xl opacity-50" style={{ background: "#F4B400", top: "50%", right: "30%" }} />
          </div>

          {/* Logo - Simple fade up without infinite pulse rings */}
          <motion.div
            className="relative mb-8 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/favicon.png"
              alt="Exion favicon"
              className="w-16 h-16 object-contain mb-4 filter drop-shadow-md"
            />
            <img
              src="/logo.png"
              alt="Exion Technologies"
              className="h-8 object-contain"
            />
          </motion.div>

          {/* Progress bar - GPU Accelerated via Framer Motion */}
          <div className="w-48 h-1.5 rounded-full overflow-hidden frost bg-black/5">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #4285F4, #DB4437, #F4B400, #0F9D58)",
                transformOrigin: "left"
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.75, ease: "linear" }}
            />
          </div>

          <p className="mt-4 text-xs font-bold tracking-[0.2em] uppercase text-gray-500/80">
            Initializing Engine
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
