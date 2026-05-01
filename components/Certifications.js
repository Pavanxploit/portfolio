import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const certifications = [
  {
    title: 'Ethical Hacking',
    issuer: 'IIT Kharagpur — NPTEL',
    badge: 'ELITE',
    description: 'Advanced ethical hacking concepts including vulnerability analysis, exploitation techniques, and defensive strategies.',
    color: '#C9A84C',
    icon: '⚔',
    year: '2024',
    link: '#',
  },
  {
    title: 'Introduction to Blockchain for Financial Services',
    issuer: 'INSEAD — Coursera',
    badge: 'VERIFIED',
    description: 'Blockchain fundamentals applied to financial services, DeFi concepts, and distributed ledger technology.',
    color: '#4488ff',
    icon: '⬡',
    year: '2024',
    link: '#',
  },
  {
    title: 'Cloud Computing Applications',
    issuer: 'University of Illinois — Coursera',
    badge: 'VERIFIED',
    description: 'Systems and Infrastructure — cloud computing principles, deployment models, and cloud-native security.',
    color: '#44ff88',
    icon: '◎',
    year: '2024',
    link: '#',
  },
  {
    title: 'Generative AI for Everyone',
    issuer: 'DeepLearning.AI — Coursera',
    badge: 'VERIFIED',
    description: 'Practical understanding of generative AI systems, LLMs, and responsible AI deployment.',
    color: '#ff44aa',
    icon: '◈',
    year: '2024',
    link: '#',
  },
  {
    title: 'Network Security Certification',
    issuer: 'IEEE',
    badge: 'CERTIFIED',
    description: 'Comprehensive network security fundamentals, protocols, and defense mechanisms.',
    color: '#aa44ff',
    icon: '◉',
    year: '2024',
    link: '#',
  },
  {
    title: 'Cybersecurity Essentials & Computer Networking',
    issuer: 'Cisco Networking Academy',
    badge: 'CERTIFIED',
    description: 'Core cybersecurity principles, network fundamentals, and enterprise security practices.',
    color: '#ffaa44',
    icon: '⚙',
    year: '2024',
    link: '#',
  },
]

const activePlatforms = [
  { name: 'TryHackMe', value: '21+ Rooms', icon: '🎯', desc: 'Offensive security paths, 7-day strike rate' },
  { name: 'PortSwigger Academy', value: 'Server-Side Path', icon: '🕷', desc: 'Mastered server-side vulnerability exploitation' },
  { name: 'Hack The Box', value: 'Active', icon: '📦', desc: 'Machine exploitation & CTF challenges' },
  { name: 'Cybrary', value: 'Advanced Modules', icon: '📡', desc: 'Penetration testing & system administration' },
]

export default function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="certifications" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5"
        style={{ background: 'radial-gradient(ellipse at right, #aa44ff 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="line-decoration" />
            <span className="font-mono text-xs tracking-[0.3em] text-gold/60 uppercase">05 / Credentials</span>
          </div>
          <h2 className="section-title text-white/90">
            Certified &amp; <span className="gold-text">Verified</span>
          </h2>
        </motion.div>

        {/* Certifications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group gold-border card-hover p-6"
              style={{ background: 'rgba(17,17,17,0.8)' }}
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 flex items-center justify-center text-xl rounded-sm"
                  style={{ background: `${cert.color}12`, border: `1px solid ${cert.color}30`, color: cert.color }}>
                  {cert.icon}
                </div>
                <span className="font-mono text-xs px-2 py-0.5 rounded-sm tracking-widest"
                  style={{ color: cert.color, background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}>
                  {cert.badge}
                </span>
              </div>

              <h3 className="font-display text-lg font-light text-white/90 mb-1 leading-tight">{cert.title}</h3>
              <p className="font-mono text-xs mb-3" style={{ color: cert.color, opacity: 0.7 }}>{cert.issuer}</p>
              <p className="text-white/40 text-xs leading-relaxed mb-4">{cert.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="font-mono text-xs text-white/25">{cert.year}</span>
                <a href={cert.link} className="font-mono text-xs animated-underline"
                  style={{ color: cert.color, opacity: 0.7 }}>
                  Verify →
                </a>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top, ${cert.color}06, transparent 70%)` }} />
            </motion.div>
          ))}
        </div>

        {/* Hands-on platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="line-decoration" />
            <span className="font-mono text-xs tracking-[0.3em] text-gold/40 uppercase">Active Platforms</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activePlatforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="p-5 gold-border card-hover text-center"
                style={{ background: 'rgba(17,17,17,0.6)' }}
              >
                <div className="text-2xl mb-2">{platform.icon}</div>
                <h4 className="font-mono text-xs text-gold/80 mb-1 tracking-wider">{platform.name}</h4>
                <p className="font-display text-sm text-white/70 mb-2">{platform.value}</p>
                <p className="font-mono text-xs text-white/30 leading-relaxed">{platform.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
