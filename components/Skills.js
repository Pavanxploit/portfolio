import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    id: 'offensive',
    label: 'Offensive Security',
    icon: '⚔',
    color: '#ff4444',
    skills: [
      { name: 'Metasploit', level: 85 },
      { name: 'Burp Suite Pro', level: 88 },
      { name: 'Nmap / Scanning', level: 92 },
      { name: 'SQLmap', level: 80 },
      { name: 'Gobuster / Nikto', level: 82 },
      { name: 'OWASP Top 10', level: 90 },
    ]
  },
  {
    id: 'network',
    label: 'Network & Analysis',
    icon: '◎',
    color: '#4488ff',
    skills: [
      { name: 'Wireshark', level: 88 },
      { name: 'Zeek (Bro)', level: 75 },
      { name: 'Suricata IDS', level: 80 },
      { name: 'tcpdump', level: 82 },
      { name: 'pfSense', level: 72 },
      { name: 'Network Protocols', level: 90 },
    ]
  },
  {
    id: 'soc',
    label: 'SOC / Defense',
    icon: '◉',
    color: '#44ff88',
    skills: [
      { name: 'Splunk SIEM', level: 78 },
      { name: 'ELK Stack', level: 75 },
      { name: 'Snort IDS/IPS', level: 80 },
      { name: 'Digital Forensics', level: 72 },
      { name: 'Incident Response', level: 76 },
      { name: 'Threat Analysis', level: 80 },
    ]
  },
  {
    id: 'infra',
    label: 'Infrastructure & Cloud',
    icon: '⬡',
    color: '#ffaa44',
    skills: [
      { name: 'Docker', level: 75 },
      { name: 'AWS Security', level: 72 },
      { name: 'Nessus Scanner', level: 78 },
      { name: 'Linux (Kali/Ubuntu)', level: 92 },
      { name: 'IAM & Security Groups', level: 70 },
      { name: 'Python Scripting', level: 82 },
    ]
  },
]

function SkillBar({ name, level, delay, color, inView }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-mono text-xs text-white/70">{name}</span>
        <span className="font-mono text-xs" style={{ color: 'rgba(201,168,76,0.6)' }}>{level}%</span>
      </div>
      <div className="h-px bg-white/5 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.23, 1, 0.32, 1] }}
          className="absolute top-0 left-0 h-full"
          style={{ background: `linear-gradient(to right, #C9A84C, ${color})` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const tools = [
    'Kali Linux', 'Parrot OS', 'Windows', 'macOS',
    'Python', 'Bash', 'JavaScript', 'Node.js',
    'MongoDB', 'Express.js', 'Git', 'GitHub',
    'VirtualBox', 'VMware', 'Docker', 'AWS CLI',
    'Blockchain', 'Smart Contracts', 'MITRE ATT&CK', 'CVE Research',
  ]

  return (
    <section id="skills" className="relative py-32 overflow-hidden bg-dark-2" ref={ref}>
      <div className="absolute inset-0 hex-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="line-decoration" />
            <span className="font-mono text-xs tracking-[0.3em] text-gold/60 uppercase">02 / Arsenal</span>
          </div>
          <h2 className="section-title text-white/90">
            Security <span className="gold-text">Toolkit</span><br />&amp; Expertise
          </h2>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: catIdx * 0.15 }}
              className="gold-border bg-dark/50 p-8 card-hover backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl" style={{ color: cat.color }}>{cat.icon}</span>
                <div>
                  <h3 className="font-display text-lg font-light text-white/90">{cat.label}</h3>
                  <div className="line-decoration mt-1" />
                </div>
              </div>
              {cat.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  color={cat.color}
                  delay={0.3 + catIdx * 0.1 + i * 0.08}
                  inView={inView}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tools cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-gold/40 uppercase mb-6">Full Stack of Technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.04 }}
                className="skill-tag cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
