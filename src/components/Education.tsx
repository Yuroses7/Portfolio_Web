import { motion } from 'framer-motion'
import { coursework, profile } from '../data/portfolioData'
import { SectionEyebrow } from './About'

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-24">
      <SectionEyebrow label="EDUCATION" />

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display font-semibold text-2xl text-(--text-primary)">
            {profile.university}
          </h3>
          <p className="text-(--text-muted) mt-1">
            {profile.faculty} · {profile.major}
          </p>
          <p className="text-(--text-muted) mt-1">{profile.status} · Expected {profile.graduation}</p>

          <div className="mt-6 flex gap-8">
            <div>
              <p className="font-mono-label text-xs text-(--accent-blue) tracking-widest">GPAX</p>
              <p className="font-display font-semibold text-2xl text-(--accent-gold)">{profile.gpax}</p>
            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="blueprint-corners bg-(--bg-panel)/60 border border-(--border-soft) rounded-sm p-6"
        >
          <p className="font-mono-label text-xs text-(--accent-blue) tracking-widest mb-4">
            RELEVANT COURSEWORK
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {coursework.map((c, i) => (
              <li key={c} className="flex gap-3 text-sm text-(--text-primary)">
                <span className="font-mono-label text-(--text-muted) w-5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
