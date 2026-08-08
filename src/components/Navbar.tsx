import { useEffect, useState } from 'react'
import { profile } from '../data/portfolioData'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrollTop = h.scrollTop
      const scrollHeight = h.scrollHeight - h.clientHeight
      setProgress(scrollHeight > 0 ? scrollTop / scrollHeight : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0f1f]/80 border-b border-(--border-blue)">
      <div
        className="scroll-progress h-[2px]"
        style={{ width: `${progress * 100}%`, transition: 'width 80ms linear' }}
      />
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display font-bold text-lg tracking-tight text-(--text-primary)">
          Chayanan<span className="text-(--accent-gold)">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono-label text-sm text-(--text-muted)">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-(--accent-gold) transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden md:inline-block text-sm font-mono-label px-4 py-2 border border-(--accent-gold)/40 text-(--accent-gold) rounded-sm hover:bg-(--accent-gold) hover:text-[#0a0f1f] transition-colors"
        >
          Say hello
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-(--text-primary) w-8 h-8 flex flex-col justify-center gap-1.5"
        >
          <span className="block h-[2px] bg-current" />
          <span className="block h-[2px] bg-current" />
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 font-mono-label text-sm text-(--text-muted)">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-2">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}