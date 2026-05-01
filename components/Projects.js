import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const projects = [
  {
    id: '01',
    title: 'Hybrid DoS/DDoS Attack IDS/IPS',
    subtitle: 'AI-Powered Intrusion Detection System',
    description: 'Engineered a two-stage detection pipeline using Machine Learning models (Random Forest, XGBoost) combined with live signature analysis. Integrated Zeek for network flow extraction and Suricata for fallback signature inspection, achieving minimal false positives.',
    tech: ['Python', 'Random Forest', 'XGBoost', 'Zeek', 'Suricata', 'Adaptive Firewall'],
    tags: ['ML Security', 'IDS/IPS', 'Network Defense'],
    status: 'Completed',
    highlight: 'Primary Project',
    github: 'https://github.com/Pavanxploit',
    color: '#C9A84C',
    metrics: [
      { label: 'Detection Accuracy', value: '97%' },
      { label: 'False Positive Rate', value: '<3%' },
    ]
  },
  {
    id: '02',
    title: 'VulnHawk',
    subtitle: 'Modular Network Vulnerability Assessment CLI',
    description: 'Built a comprehensive Python CLI framework for network vulnerability assessment with multi-threaded port scanning, SSL analysis, CVE matching, HTTP auditing, DNS recon, and automated HTML/JSON reporting. Successfully tested against Metasploitable 2 detecting CVE-2011-2523.',
    tech: ['Python', 'Nmap', 'CVE DB', 'Multi-threading', 'HTML Reports', 'pytest'],
    tags: ['Penetration Testing', 'CVE Research', 'CLI Tool'],
    status: 'Completed',
    highlight: 'Open Source',
    github: 'https://github.com/Pavanxploit',
    color: '#ff4444',
    metrics: [
      { label: 'CVEs Detected', value: 'CRITICAL' },
      { label: 'Scan Speed', value: 'Multi-thread' },
    ]
  },
  {
    id: '03',
    title: 'TrackMate — GPS Vehicle Tracker',
    subtitle: 'Commercial IoT Product for 2-Wheelers',
    description: 'End-to-end commercial GPS tracking device for bikes, built with ESP32 + GSM + GPS hardware stack, Node.js/MongoDB backend, and a PWA frontend. Designed for sales through bike showrooms in Mysuru, with complete business planning including GST, Udyam registration, and WPC compliance.',
    tech: ['ESP32', 'GSM/GPS', 'Node.js', 'MongoDB', 'PWA', 'REST API'],
    tags: ['IoT', 'Hardware', 'Commercial Product'],
    status: 'In Production',
    highlight: 'Commercial Launch',
    github: 'https://github.com/Pavanxploit',
    color: '#44ff88',
    metrics: [
      { label: 'Hardware Stack', value: 'ESP32+GSM' },
      { label: 'Target Market', value: 'Mysuru Showrooms' },
    ]
  },
  {
    id: '04',
    title: 'Smart Hotel Management System',
    subtitle: 'IoT-Integrated Hospitality Automation',
    description: 'Designed an integrated IoT system leveraging smart sensors to automate hospitality workflows and enhance facility security. Implemented automated environmental controls and real-time facility monitoring.',
    tech: ['IoT Sensors', 'Automation', 'Security Systems', 'Cloud Integration'],
    tags: ['IoT', 'Smart Systems', 'Security'],
    status: 'Completed',
    highlight: 'Academic Project',
    github: 'https://github.com/Pavanxploit',
    color: '#aa44ff',
    metrics: [
      { label: 'Sensor Network', value: 'Multi-zone' },
      { label: 'Automation', value: 'Full Stack' },
    ]
  },
]

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
      className="group relative gold-border card-hover p-8"
      style={{ background: 'rgba(17,17,17,0.9)', backdropFilter: 'blur(10px)' }}
    >
      {/* Top bar */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <span className="font-mono text-3xl font-light"
            style={{ color: `${project.color}30` }}>
            {project.id}
          </span>
          <div>
            <span className="font-mono text-xs tracking-widest uppercase px-2 py-0.5 rounded-sm"
              style={{ color: project.color, background: `${project.color}15`, border: `1px solid ${project.color}30` }}>
              {project.highlight}
            </span>
          </div>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: project.color }} />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5"
              style={{ background: project.color }} />
          </span>
          <span className="font-mono text-xs text-white/30">{project.status}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl font-light text-white/90 mb-1">{project.title}</h3>
      <p className="font-mono text-xs text-gold/50 mb-4">{project.subtitle}</p>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed mb-6">{project.description}</p>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {project.metrics.map((m) => (
          <div key={m.label} className="p-3 rounded-sm"
            style={{ background: `${project.color}08`, border: `1px solid ${project.color}20` }}>
            <div className="font-mono text-sm font-medium" style={{ color: project.color }}>{m.value}</div>
            <div className="font-mono text-xs text-white/30 mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-xs px-2 py-1 text-white/40"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            {t}
          </span>
        ))}
      </div>

      {/* Bottom actions */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <div className="flex gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs text-white/25"># {tag}</span>
          ))}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-widest uppercase animated-underline"
          style={{ color: project.color }}
        >
          View →
        </a>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm"
        style={{ background: `radial-gradient(ellipse at top left, ${project.color}06, transparent 60%)` }}
      />
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-dark-2" ref={ref}>
      <div className="absolute inset-0 hex-pattern opacity-30" />

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
            <span className="font-mono text-xs tracking-[0.3em] text-gold/60 uppercase">04 / Projects</span>
          </div>
          <h2 className="section-title text-white/90">
            Built &amp; <span className="gold-text">Deployed</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl font-body">
            From AI-powered security tools to commercial IoT products — real solutions solving real problems.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Pavanxploit"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn inline-block"
          >
            View All on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
