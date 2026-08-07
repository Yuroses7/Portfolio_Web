import { motion } from 'framer-motion'
import { FaMedal } from 'react-icons/fa'
import { awards, experience, languages } from '../data/portfolioData'
import { SectionEyebrow } from './About'

export default function Awards() {
  return (
    <section id="awards" className="max-w-6xl mx-auto px-6 py-24">
      <SectionEyebrow label="RECOGNITION" />

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {awards.map((a, i) => (
          <motion.div
            key={a.title + a.org}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="blueprint-corners bg-(--bg-panel)/60 border border-(--border-soft) rounded-sm p-6"
          >
            {/* 📸 รูปประกอบรางวัล (ถ้ามี) */}
            {a.image && (
              <img
                src={a.image}
                alt={a.title}
                className="w-full aspect-video object-cover rounded-sm border border-(--border-soft) mb-4"
              />
            )}
            <FaMedal className="text-(--accent-gold) text-2xl mb-3" />
            <p className="font-display font-semibold text-lg text-(--text-primary)">{a.title}</p>
            <p className="text-sm text-(--text-muted) mt-1">{a.org}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono-label text-xs text-(--accent-blue) tracking-widest mb-4">
            WORK EXPERIENCE
          </p>
          {experience.map((e) => (
            <div key={e.title} className="mb-4">
              {/* 📸 รูปประกอบงาน (ถ้ามี) */}
              {e.image && (
                <img
                  src={e.image}
                  alt={e.title}
                  className="w-full aspect-video object-cover rounded-sm border border-(--border-soft) mb-3"
                />
              )}
              <p className="font-display font-semibold text-(--text-primary)">{e.title}</p>
              <p className="text-sm text-(--text-muted)">
                {e.org} · {e.duration}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {e.points.map((p) => (
                  <span
                    key={p}
                    className="text-xs px-2.5 py-1 bg-(--bg-panel-alt) rounded-sm text-(--text-primary)"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="font-mono-label text-xs text-(--accent-blue) tracking-widest mb-4">LANGUAGES</p>
          {languages.map((l) => (
            <div key={l.name} className="flex justify-between border-b border-(--border-soft) py-3">
              <span className="text-(--text-primary)">{l.name}</span>
              <span className="text-sm text-(--text-muted)">{l.level}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}