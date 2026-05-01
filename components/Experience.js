import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const experiences = [
  {
    type: 'work',
    title: 'Cyber Security Trainee',
    org: 'Ethnotech',
    period: 'Ongoing · 150-Hour Program',
    color: '#C9A84C',
    icon: '⚙',
    points: [
      'Mastered OSI/TCP-IP models with deep packet analysis using Wireshark and Nmap',
      'Deployed IDS/IPS using Snort, configured firewalls in pfSense, cracked WPA2 in controlled labs',
      'Managed IAM roles and security groups in AWS/Azure; exploited OWASP Top 10 vulnerabilities via DVWA',
      'Configured SIEM dashboards in Splunk/ELK Stack; performed digital forensics on memory and disk images',
    ]
  },
  {
    type: 'work',
    title: 'Cyber Security Analyst',
    org: 'Deloitte — Virtual Job Simulation',
    period: 'Completed',
    color: '#4488ff',
    icon: '◈',
    points: [
      'Executed simulated threat hunting and vulnerability management workflows',
      'Analyzed security logs to identify Indicators of Compromise (IoCs)',
      'Applied real-world SOC methodologies in a professional simulation environment',
    ]
  },
  {
    type: 'education',
    title: 'B.E — Cybersecurity & Blockchain Technology',
    org: 'Maharaja Institute of Technology (MIT), Mysuru',
    period: '2023 – Present · 3rd Year · 6th Semester',
    color: '#44ff88',
    icon: '⬡',
    points: [
      'Intensive curriculum bridging traditional network security with decentralized ledger technology',
      'Advanced coursework in Network Security protocols, Blockchain for Financial Services, and Cloud Infrastructure',
      'Extensive hands-on experience in IoT Lab and Kali Linux environments for threat simulation',
    ]
  },
]

function TimelineItem({ item, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.23, 1, 0.32, 1] }}
      className="relative flex gap-8 mb-12"
    >
      {/* Timeline line + icon */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-10 h-10 rounded-sm flex items-center justify-center text-sm z-10 gold-border"
          style={{ background: `rgba(201, 168, 76, 0.08)`, color: item.color, border: `1px solid ${item.color}40` }}
        >
          {item.icon}
        </div>
        {index < experiences.length - 1 && (
          <div className="w-px flex-1 mt-2"
            style={{ background: `linear-gradient(to bottom, ${item.color}40, transparent)`, minHeight: '60px' }}
          />
        )}
      </div>

      {/* Content */}
      <div
        className="flex-1 p-6 rounded-sm card-hover mb-4"
        style={{
          background: 'rgba(17,17,17,0.8)',
          border: `1px solid rgba(201,168,76,0.1)`,
          backdropFilter: 'blur(10px)'
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <span className="font-mono text-xs tracking-widest uppercase"
              style={{ color: item.color, opacity: 0.7 }}>
              {item.type === 'work' ? '// Experience' : '// Education'}
            </span>
            <h3 className="font-display text-xl font-light text-white/90 mt-1">{item.title}</h3>
            <p className="font-mono text-sm text-gold/60 mt-1">{item.org}</p>
          </div>
          <span className="font-mono text-xs text-white/30 bg-white/5 px-3 py-1 rounded-sm whitespace-nowrap">
            {item.period}
          </span>
        </div>

        <ul className="space-y-2">
          {item.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm text-white/50 leading-relaxed">
              <span className="text-gold/40 mt-0.5 flex-shrink-0">▸</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute left-0 top-0 w-1/2 h-full opacity-5"
        style={{ background: 'radial-gradient(ellipse at left, #4488ff 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="line-decoration" />
            <span className="font-mono text-xs tracking-[0.3em] text-gold/60 uppercase">03 / Journey</span>
          </div>
          <h2 className="section-title text-white/90">
            Experience &amp;<br /><span className="gold-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div>
          {experiences.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
