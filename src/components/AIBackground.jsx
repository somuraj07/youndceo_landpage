import { motion } from 'framer-motion'

const orbs = [
  { size: 480, x: '-5%', y: '-5%', color: 'rgba(147, 197, 253, 0.55)', delay: 0 },
  { size: 400, x: '70%', y: '5%', color: 'rgba(134, 239, 172, 0.4)', delay: 2 },
  { size: 360, x: '40%', y: '60%', color: 'rgba(253, 224, 71, 0.28)', delay: 4 },
  { size: 320, x: '85%', y: '55%', color: 'rgba(191, 219, 254, 0.5)', delay: 1 },
  { size: 280, x: '10%', y: '70%', color: 'rgba(167, 243, 208, 0.35)', delay: 3 },
]

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: `${(i * 17 + 7) % 100}%`,
  y: `${(i * 23 + 11) % 100}%`,
  size: 2 + (i % 2),
  duration: 4 + (i % 6),
  delay: (i % 8) * 0.5,
  color: i % 3 === 0 ? '#93c5fd' : i % 3 === 1 ? '#86efac' : '#fde047',
}))

export default function AIBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#f0f7ff]" />
      <div className="ai-mesh absolute inset-0" />
      <div className="ai-grid absolute inset-0 opacity-60" />

      <svg
        className="absolute inset-0 h-full w-full opacity-100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#86efac" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[5, 17, 29, 41, 53, 65, 77, 89].map((x, i) => (
          <line
            key={i}
            x1={`${x}%`}
            y1="0%"
            x2={`${100 - x + 5}%`}
            y2="100%"
            stroke="url(#lineGrad)"
            strokeWidth="0.8"
            className="ai-line"
            style={{ animationDelay: `${i * 0.6}s` }}
          />
        ))}
      </svg>

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 40, -25, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 16 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: 0.5,
          }}
          animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.4, 1] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="ai-aurora absolute inset-x-0 top-0 h-[55vh]" />
    </div>
  )
}
