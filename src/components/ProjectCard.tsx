import { motion } from 'framer-motion'
import { FaMedal, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import type { Project } from '../data/portfolioData'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.1 }}
      className={`blueprint-corners bg-(--bg-panel)/60 border rounded-sm p-6 flex flex-col gap-4 ${
        project.featured ? 'border-(--accent-gold)/40 md:col-span-2' : 'border-(--border-soft)'
      }`}
    >
      {/* 📸 รูป cover ของโปรเจกต์ — มาจาก project.image ใน portfolioData.ts
          เช่น image: projectSmartGlasses (import จาก src/assets/projects/smart-glasses.jpg) */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-cover rounded-sm border border-(--border-soft)"
        />
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono-label text-xs text-(--accent-blue) tracking-widest mb-1">
            {project.role ?? 'PROJECT'}
          </p>
          <h3 className="font-display font-semibold text-xl text-(--text-primary)">{project.title}</h3>
        </div>
        {project.featured && (
          <span className="shrink-0 text-xs font-mono-label px-2 py-1 border border-(--accent-gold) text-(--accent-gold) rounded-sm">
            FLAGSHIP
          </span>
        )}
      </div>

      <p className="text-(--text-muted) leading-relaxed">{project.overview}</p>

      <div>
        <p className="font-mono-label text-xs text-(--accent-blue) tracking-widest mb-2">RESPONSIBILITIES</p>
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-(--text-primary)">
          {project.responsibilities.map((r) => (
            <li key={r} className="flex gap-2">
              <span className="text-(--accent-gold)">–</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 mt-1">
        {project.technologies.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 bg-(--bg-panel-alt) rounded-sm text-(--text-primary)"
          >
            {t}
          </span>
        ))}
      </div>

      {project.achievements && project.achievements.length > 0 && (
        <div className="pt-3 border-t border-(--border-soft) flex flex-col gap-1.5">
          {project.achievements.map((a) => (
            <div key={a} className="flex items-center gap-2 text-sm text-(--accent-gold)">
              <FaMedal className="shrink-0" />
              <span>{a}</span>
            </div>
          ))}
        </div>
      )}

      {/* 🔗 ลิงก์ GitHub / Live demo (ถ้ามี) */}
      {(project.githubUrl || project.demoUrl) && (
        <div className="flex flex-wrap gap-3 pt-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 border border-(--border-blue) rounded-sm text-(--text-primary) hover:border-(--accent-gold) transition-colors"
            >
              <FaGithub /> Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 bg-(--accent-gold) text-[#0a0f1f] font-semibold rounded-sm hover:bg-(--accent-gold-dim) transition-colors"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      )}
    </motion.article>
  )
}