import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-(--border-soft) py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-(--text-muted) font-mono-label">
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
        <span>{profile.university} · {profile.major}</span>
      </div>
    </footer>
  )
}
