import { motion } from 'framer-motion'

const SIZE = 220

export default function SkillPetals({ skills }) {
  const cx = SIZE / 2
  const cy = SIZE / 2
  const maxRadius = SIZE * 0.38
  const petalCount = skills.length
  const angleStep = (2 * Math.PI) / petalCount

  function petalPath(index, length) {
    const midAngle = index * angleStep - Math.PI / 2
    const spread = angleStep * 0.35
    const r = maxRadius * (length / 100)
    const inner = maxRadius * 0.12

    const tipX = cx + Math.cos(midAngle) * r
    const tipY = cy + Math.sin(midAngle) * r
    const leftX = cx + Math.cos(midAngle - spread) * inner
    const leftY = cy + Math.sin(midAngle - spread) * inner
    const rightX = cx + Math.cos(midAngle + spread) * inner
    const rightY = cy + Math.sin(midAngle + spread) * inner

    return `M ${cx} ${cy} Q ${leftX} ${leftY} ${tipX} ${tipY} Q ${rightX} ${rightY} ${cx} ${cy}`
  }

  return (
    <div className="mx-auto w-full max-w-xs sm:max-w-sm">
      <div className="relative mx-auto aspect-square w-full max-w-[220px] sm:max-w-[240px]">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="h-full w-full">
          {[25, 50, 75, 100].map((ring) => (
            <circle
              key={ring}
              cx={cx}
              cy={cy}
              r={(maxRadius * ring) / 100}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="0.5"
              strokeDasharray="3 4"
            />
          ))}
          {skills.map((skill, i) => (
            <motion.path
              key={skill.name}
              d={petalPath(i, 100)}
              fill={skill.color}
              fillOpacity="0.15"
              stroke={skill.color}
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.08 }}
            />
          ))}
          {skills.map((skill, i) => (
            <motion.path
              key={`${skill.name}-fill`}
              d={petalPath(i, skill.value)}
              fill={skill.color}
              fillOpacity="0.55"
              initial={{ scale: 0, transformOrigin: `${cx}px ${cy}px` }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 120 }}
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="font-display text-xl font-bold text-slate-900 sm:text-2xl">76</p>
          <p className="text-[10px] font-medium text-slate-500">Skill Score</p>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 sm:grid-cols-3 sm:gap-x-4">
        {skills.map((s) => (
          <div key={s.name} className="flex min-w-0 items-center gap-1.5 text-[10px]">
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: s.color }} />
            <span className="truncate text-slate-600">{s.name}</span>
            <span className="ml-auto shrink-0 font-bold text-slate-800">{s.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
