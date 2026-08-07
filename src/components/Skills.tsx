import { motion } from 'framer-motion'
import { skillGroups } from '../data/portfolioData'
import { SectionEyebrow } from './About'

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <SectionEyebrow label="MODULES // SKILLS" />
      <h2 className="font-display font-bold text-3xl mt-4 mb-10 text-(--text-primary)">
        Technical toolkit
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="blueprint-corners bg-(--bg-panel)/60 border border-(--border-soft) rounded-sm p-5"
          >
            <p className="font-mono-label text-xs text-(--accent-blue) tracking-widest mb-3">
              {group.label.toUpperCase()}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 bg-(--bg-panel-alt) rounded-sm text-(--text-primary)"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
