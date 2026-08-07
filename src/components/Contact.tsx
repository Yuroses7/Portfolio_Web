import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { profile } from '../data/portfolioData'
import { SectionEyebrow } from './About'

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <SectionEyebrow label="CONTACT" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mt-6 blueprint-corners bg-(--bg-panel)/60 border border-(--border-soft) rounded-sm p-10 flex flex-col items-start"
      >
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-(--text-primary) max-w-lg">
          Let's build something worth shipping.
        </h2>
        <p className="text-(--text-muted) mt-4 max-w-lg">
          Open to internship and junior developer roles across AI, IoT, and full-stack development.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-(--accent-gold) text-[#0a0f1f] font-semibold rounded-sm hover:bg-(--accent-gold-dim) transition-colors"
          >
            <FaEnvelope /> Email me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-(--border-blue) rounded-sm text-(--text-primary) hover:border-(--accent-gold) transition-colors"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-(--border-blue) rounded-sm text-(--text-primary) hover:border-(--accent-gold) transition-colors"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  )
}
