import { motion } from 'framer-motion'
import { profile } from '../data/portfolioData'
// 📸 รูปโปรไฟล์ — วางไฟล์ไว้ที่ src/image/me.jpg
import profilePhoto from '../image/yuro 1.png'
const stats = [
  { label: 'GPAX', value: profile.gpax },
  { label: 'GRAD', value: profile.graduation },
  { label: 'UNIV', value: 'Kasetsart' },
  { label: 'FOCUS', value: 'AI · IoT' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* ambient schematic backdrop */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.07]"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="var(--accent-blue)" strokeWidth="1" fill="none">
          <path d="M0 120 H260 L300 160 V320 L340 360 H800" />
          <path d="M0 420 H180 L220 380 V220 L260 180 H600 L640 220 V500 H800" />
          <path d="M120 0 V80 L160 120" />
          <path d="M700 0 V140 L660 180 H500" />
        </g>
        <g fill="var(--accent-gold)">
          <circle cx="260" cy="160" r="4" />
          <circle cx="340" cy="360" r="4" />
          <circle cx="220" cy="380" r="4" />
          <circle cx="660" cy="180" r="4" />
        </g>
      </svg>

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="font-mono-label text-sm text-(--accent-gold) tracking-widest mb-4">
            {profile.faculty.toUpperCase()} · {profile.major.toUpperCase()}
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-(--text-primary)">
            {profile.fullName}
          </h1>
          <p className="mt-5 text-lg text-(--text-muted) max-w-xl">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-(--accent-gold) text-[#0a0f1f] font-semibold rounded-sm hover:bg-(--accent-gold-dim) transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-(--border-blue) text-(--text-primary) rounded-sm hover:border-(--accent-gold) transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="blueprint-corners border border-(--border-soft) bg-(--bg-panel)/60 rounded-sm p-6"
        >
          <p className="font-mono-label text-xs text-(--text-muted) mb-4 tracking-widest">
            STUDENT PROFILE
          </p>

          {/* 📸 รูปโปรไฟล์ */}
          <img
            src={profilePhoto}
            alt={profile.fullName}
            className="w-full aspect-square object-cover rounded-sm border border-(--border-soft) mb-5"
          />

          <div className="grid grid-cols-2 gap-y-5">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-mono-label text-xs text-(--accent-blue)">{s.label}</p>
                <p className="font-display font-semibold text-lg text-(--text-primary)">{s.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}