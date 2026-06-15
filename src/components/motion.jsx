import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function FadeIn({ children, className = '', delay = 0, direction = 'up' }) {
  const offset = direction === 'up' ? 32 : direction === 'down' ? -32 : 0
  const x = direction === 'left' ? 32 : direction === 'right' ? -32 : 0

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: direction === 'up' || direction === 'down' ? offset : 0, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className = '', stagger = 0.1 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  )
}

export function HoverCard({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { type: 'spring', stiffness: 400, damping: 25 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}

export function HoverButton({ children, className = '', href, onClick, type }) {
  const Tag = href ? motion.a : motion.button

  return (
    <Tag
      href={href}
      type={type}
      onClick={onClick}
      className={className}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    >
      {children}
    </Tag>
  )
}

export function ScaleIn({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
