import { projects } from '../data/portfolioData'
import { SectionEyebrow } from './About'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <SectionEyebrow label="BUILD LOG // PROJECTS" />
      <h2 className="font-display font-bold text-3xl mt-4 mb-10 text-(--text-primary)">
        Selected projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
