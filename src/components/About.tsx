import { motion } from 'framer-motion'
import { about, careerInterests, profile } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <SectionEyebrow label="ABOUT" />
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 mt-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-(--text-muted) text-lg leading-relaxed"
        >
          {about}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="font-mono-label text-xs text-(--accent-blue) tracking-widest mb-3">
            CAREER INTERESTS
          </p>
          <div className="flex flex-wrap gap-2">
            {careerInterests.map((c) => (
              <span
                key={c}
                className="text-sm px-3 py-1.5 border border-(--border-soft) rounded-sm text-(--text-primary)"
              >
                {c}
              </span>
            ))}
          </div>

          <p className="font-mono-label text-xs text-(--accent-blue) tracking-widest mt-8 mb-3">
            LOCATION
          </p>
          <p className="text-(--text-primary)">{profile.location}</p>
        </motion.div>
      </div>
    </section>
  )
}

export function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-2 h-2 bg-(--accent-gold) rounded-full" />
      <p className="font-mono-label text-xs text-(--accent-gold) tracking-[0.3em]">{label}</p>
      <span className="flex-1 h-px bg-(--border-blue)" />
    </div>
  )
}
