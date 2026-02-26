"use client"

import { motion } from "framer-motion"

export function DevelopmentSVG({ size = 280, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 280 280" fill="none" className={className}>
      {/* Monitor */}
      <motion.rect
        x="40" y="30" width="200" height="140" rx="12"
        stroke="#4285F4" strokeWidth="3" fill="rgba(66,133,244,0.06)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      {/* Screen glow */}
      <rect
        x="52" y="42" width="176" height="110" rx="6"
        fill="rgba(66,133,244,0.04)"
      />
      {/* Code lines - Static to save CPU */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.rect
          key={i}
          x={65 + (i % 2) * 15}
          y={55 + i * 16}
          width={80 + (i % 3) * 30}
          height="4"
          rx="2"
          fill={i % 2 === 0 ? "#4285F4" : i % 3 === 0 ? "#0F9D58" : "#DB4437"}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.8 }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          style={{ transformOrigin: "left" }}
        />
      ))}
      {/* Monitor stand */}
      <motion.path
        d="M120 170 L140 195 L160 170"
        stroke="#4285F4" strokeWidth="3" fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <rect
        x="110" y="195" width="60" height="6" rx="3"
        fill="#4285F4" opacity="0.3"
      />
      {/* Floating element - CSS animation */}
      <circle
        cx="240" cy="60" r="8"
        fill="rgba(66,133,244,0.2)" stroke="#4285F4" strokeWidth="1.5"
        className="animate-bounce"
        style={{ animationDuration: '3s' }}
      />
      {/* Gear - Static entrance */}
      <motion.g
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ transformOrigin: "35px 240px" }}
      >
        <circle cx="35" cy="240" r="14" stroke="#4285F4" strokeWidth="2" fill="none" opacity="0.5" />
        <circle cx="35" cy="240" r="5" fill="#4285F4" opacity="0.3" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect
            key={angle}
            x="33" y="222"
            width="4" height="8" rx="2"
            fill="#4285F4" opacity="0.4"
            transform={`rotate(${angle} 35 240)`}
          />
        ))}
      </motion.g>
    </svg>
  )
}

export function MarketingSVG({ size = 280, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 280 280" fill="none" className={className}>
      {/* Megaphone body */}
      <motion.path
        d="M60 120 L140 80 L140 200 L60 160 Z"
        stroke="#DB4437" strokeWidth="3" fill="rgba(219,68,55,0.08)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      <rect
        x="40" y="115" width="25" height="50" rx="6"
        stroke="#DB4437" strokeWidth="2.5" fill="rgba(219,68,55,0.06)"
      />
      {/* Sound waves - Static entrance */}
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M148 ${130 - i * 15} Q${170 + i * 20} 140, 148 ${150 + i * 15}`}
          stroke="#DB4437" strokeWidth="2" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
        />
      ))}
      {/* Analytics chart */}
      <motion.path
        d="M160 240 L180 210 L200 225 L220 190 L240 200 L260 170"
        stroke="#DB4437" strokeWidth="2.5" fill="none" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      {/* Chart dots */}
      {[[180, 210], [200, 225], [220, 190], [240, 200], [260, 170]].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx} cy={cy} r="4"
          fill="#DB4437"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
        />
      ))}
      {/* Target */}
      <g style={{ transformOrigin: "230px 70px" }}>
        <circle cx="230" cy="70" r="28" stroke="#DB4437" strokeWidth="2" fill="none" opacity="0.3" />
        <circle cx="230" cy="70" r="18" stroke="#DB4437" strokeWidth="2" fill="none" opacity="0.5" />
        <circle cx="230" cy="70" r="8" fill="#DB4437" opacity="0.6" />
      </g>
      {/* Arrow hitting target */}
      <motion.line
        x1="190" y1="95" x2="226" y2="73"
        stroke="#DB4437" strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      />
      {/* Percentage rise */}
      <motion.text
        x="170" y="160" fill="#DB4437" fontSize="16" fontWeight="bold" opacity="0.4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {"+"} 247%
      </motion.text>
    </svg>
  )
}

export function BrandingSVG({ size = 280, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 280 280" fill="none" className={className}>
      {/* Pen/Brush */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <path
          d="M70 200 L90 80 L110 200 Z"
          stroke="#F4B400" strokeWidth="2.5" fill="rgba(244,180,0,0.08)"
        />
        <rect x="82" y="72" width="16" height="30" rx="3" fill="rgba(244,180,0,0.3)" />
        <line
          x1="90" y1="200" x2="90" y2="220"
          stroke="#F4B400" strokeWidth="3" strokeLinecap="round"
        />
      </motion.g>
      {/* Color palette circle */}
      <motion.g
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ transformOrigin: "200px 100px" }}
      >
        <circle cx="200" cy="100" r="40" stroke="#F4B400" strokeWidth="2" fill="none" opacity="0.3" />
        <circle cx="200" cy="60" r="10" fill="#4285F4" opacity="0.7" />
        <circle cx="240" cy="100" r="10" fill="#DB4437" opacity="0.7" />
        <circle cx="200" cy="140" r="10" fill="#F4B400" opacity="0.7" />
        <circle cx="160" cy="100" r="10" fill="#0F9D58" opacity="0.7" />
      </motion.g>
      {/* Typography */}
      <motion.text
        x="150" y="200" fill="#F4B400" fontSize="40" fontWeight="bold" fontFamily="serif" opacity="0.15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Aa
      </motion.text>
      {/* Grid lines */}
      {[0, 1, 2, 3].map((i) => (
        <motion.line
          key={i}
          x1={130 + i * 30} y1="230" x2={130 + i * 30} y2="270"
          stroke="#F4B400" strokeWidth="1" opacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: i * 0.1 }}
        />
      ))}
      {[0, 1].map((i) => (
        <motion.line
          key={`h-${i}`}
          x1="130" y1={240 + i * 20} x2="220" y2={240 + i * 20}
          stroke="#F4B400" strokeWidth="1" opacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4 + i * 0.1 }}
        />
      ))}
    </svg>
  )
}

export function EcommerceSVG({ size = 280, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 280 280" fill="none" className={className}>
      {/* Shopping cart */}
      <motion.path
        d="M40 60 L60 60 L90 180 L220 180"
        stroke="#0F9D58" strokeWidth="3" fill="none" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.path
        d="M70 90 L240 90 L220 180 L90 180 Z"
        stroke="#0F9D58" strokeWidth="2.5" fill="rgba(15,157,88,0.06)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      {/* Cart wheels */}
      <circle cx="110" cy="200" r="12" stroke="#0F9D58" strokeWidth="2.5" fill="none" />
      <circle cx="200" cy="200" r="12" stroke="#0F9D58" strokeWidth="2.5" fill="none" />
      <circle cx="110" cy="200" r="3" fill="#0F9D58" opacity="0.5" />
      <circle cx="200" cy="200" r="3" fill="#0F9D58" opacity="0.5" />
      {/* Products in cart */}
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x={100 + i * 40} y={105} width="25" height="60" rx="4"
          fill="#0F9D58"
          opacity={0.1 + i * 0.08}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 105, opacity: 0.5 }}
          transition={{ duration: 0.8, delay: 1 + i * 0.2 }}
        />
      ))}
      {/* Price tag */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <circle cx="50" cy="30" r="16" fill="rgba(15,157,88,0.1)" stroke="#0F9D58" strokeWidth="1.5" />
        <text x="42" y="35" fill="#0F9D58" fontSize="12" fontWeight="bold">{"$"}</text>
      </motion.g>
      {/* Growth arrow */}
      <motion.path
        d="M230 250 L250 230 L260 240"
        stroke="#0F9D58" strokeWidth="2.5" fill="none" strokeLinecap="round"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 0.8, pathLength: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
    </svg>
  )
}

export function ServiceSVGBySlug({ slug, size = 280, className = "" }: { slug: string; size?: number; className?: string }) {
  switch (slug) {
    case "development": return <DevelopmentSVG size={size} className={className} />
    case "marketing": return <MarketingSVG size={size} className={className} />
    case "branding": return <BrandingSVG size={size} className={className} />
    case "e-commerce": return <EcommerceSVG size={size} className={className} />
    default: return <DevelopmentSVG size={size} className={className} />
  }
}
