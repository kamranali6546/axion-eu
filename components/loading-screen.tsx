"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 400)
          return 100
        }
        return prev + 2
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #f0faf4 100%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Animated background orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-64 h-64 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #4285F4, transparent)", top: "10%", left: "15%" }}
              animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-48 h-48 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #DB4437, transparent)", bottom: "15%", right: "10%" }}
              animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-40 h-40 rounded-full opacity-15"
              style={{ background: "radial-gradient(circle, #F4B400, transparent)", top: "50%", right: "30%" }}
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-56 h-56 rounded-full opacity-15"
              style={{ background: "radial-gradient(circle, #0F9D58, transparent)", bottom: "30%", left: "20%" }}
              animate={{ scale: [1.1, 0.9, 1.1], y: [0, -30, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Favicon animation */}
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Pulse rings */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: "2px solid #4285F4" }}
              animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: "2px solid #0F9D58" }}
              animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            />

            <motion.img
              src="/favicon.png"
              alt="Exion favicon"
              className="w-20 h-20 object-contain relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Logo */}
          <motion.img
            src="/logo.png"
            alt="Exion.pk"
            className="h-12 object-contain mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />

          {/* Progress bar */}
          <motion.div
            className="w-48 h-1.5 rounded-full overflow-hidden frost"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #4285F4, #DB4437, #F4B400, #0F9D58)",
                width: `${progress}%`,
              }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            className="mt-4 text-sm tracking-widest uppercase"
            style={{ color: "#6b7280" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Loading Experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
