import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const stats = [
  { value: '21+', label: 'TryHackMe\nRooms' },
  { value: '150h', label: 'Security\nTraining' },
  { value: '6+', label: 'Industry\nCertifications' },
  { value: '3+', label: 'Major\nProjects' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5"
        style={{ background: 'radial-gradient(ellipse at right, #C9A84C 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="line-decoration" />
            <span className="font-mono text-xs tracking-[0.3em] text-gold/60 uppercase">01 / About</span>
          </div>
          <h2 className="section-title text-white/90">
            The <span className="gold-text">Mind</span> Behind<br />The Machine
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Code block style */}
            <div className="gold-border rounded-sm p-6 mb-8 bg-dark-2 font-mono text-sm"
              style={{ borderLeft: '3px solid #C9A84C' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
                <span className="ml-2 text-white/20 text-xs">pavan.profile.json</span>
              </div>
              <div className="text-white/50 space-y-1">
                <p><span className="text-gold/70">{'{'}</span></p>
                <p className="pl-4"><span className="text-blue-400/70">"role"</span>: <span className="text-green-400/70">"Cybersecurity Student & Ethical Hacker"</span>,</p>
                <p className="pl-4"><span className="text-blue-400/70">"focus"</span>: <span className="text-green-400/70">"Offensive Security & Infrastructure Protection"</span>,</p>
                <p className="pl-4"><span className="text-blue-400/70">"location"</span>: <span className="text-green-400/70">"Mysuru, Karnataka, India"</span>,</p>
                <p className="pl-4"><span className="text-blue-400/70">"status"</span>: <span className="text-gold/70">"Open to Opportunities"</span>,</p>
                <p className="pl-4"><span className="text-blue-400/70">"passion"</span>: <span className="text-green-400/70">"Breaking things ethically to build them stronger"</span></p>
                <p><span className="text-gold/70">{'}'}</span></p>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed mb-6 font-body text-base">
              I'm a technically astute Cybersecurity professional in my final semester at{' '}
              <span className="text-gold/80">Maharaja Institute of Technology, Mysuru</span>, pursuing B.E in
              Cybersecurity & Blockchain Technology. My expertise lies in offensive security, penetration testing,
              and building secure systems that stand the test of modern threats.
            </p>
            <p className="text-white/60 leading-relaxed mb-8 font-body text-base">
              Beyond academics, I've built real tools — from{' '}
              <span className="text-gold/80">hybrid AI-powered IDS/IPS systems</span> to{' '}
              <span className="text-gold/80">commercial IoT GPS tracking devices</span>.
              My philosophy is simple: <em className="text-white/80 not-italic">build things that matter, break things ethically</em>.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['Penetration Testing', 'OWASP Top 10', 'Network Security', 'SOC Operations', 'Blockchain', 'IoT Security', 'Cloud Security', 'Malware Analysis'].map(tag => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Portrait placeholder with hex frame */}
            <div className="relative mb-10">
              <div className="relative mx-auto w-64 h-64">
                <div className="absolute inset-0 border border-gold/20 rotate-45 scale-110"
                  style={{ animation: 'spin 20s linear infinite' }}
                />
                <div className="absolute inset-4 border border-gold/10 rotate-[30deg]"
                  style={{ animation: 'spin 15s linear infinite reverse' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-52 h-52 rounded-sm overflow-hidden gold-border">
                    <div className="w-full h-full bg-gradient-to-br from-dark-3 to-dark-2 flex items-center justify-center">
                      {/* Avatar initials */}
                      <div className="text-center">
                        <div className="font-display text-7xl font-light gold-text">PK</div>
                        <div className="font-mono text-xs text-gold/40 tracking-widest mt-2">PAVAN KUMAR</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="gold-border bg-dark-2 p-6 text-center card-hover"
                >
                  <div className="stat-number">{stat.value}</div>
                  <div className="font-mono text-xs text-white/40 tracking-wider mt-2 whitespace-pre-line">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
      `}</style>
    </section>
  )
}
