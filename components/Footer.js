import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Brand */}
          <div className="flex items-center gap-4">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 border border-gold/40 rotate-45" />
              <span className="absolute inset-0 flex items-center justify-center font-mono text-gold text-sm">P</span>
            </div>
            <div>
              <p className="font-display text-white/70 text-sm">Pavan Kumar</p>
              <p className="font-mono text-xs text-white/30">Cybersecurity Professional</p>
            </div>
          </div>

          {/* Center: Links */}
          <div className="flex items-center gap-8">
            {[
              { label: 'GitHub', href: 'https://github.com/Pavanxploit' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pavan-kumar-747600374/' },
              { label: 'TryHackMe', href: 'https://tryhackme.com' },
              { label: 'Resume', href: '/resume.pdf' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-white/30 hover:text-gold/70 transition-colors duration-300 animated-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Copyright */}
          <p className="font-mono text-xs text-white/20">
            © {year} · Crafted with passion in Mysuru
          </p>
        </div>

        {/* Bottom scan line */}
        <div className="mt-8 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)' }}
        />
        <p className="text-center font-mono text-xs text-white/10 mt-4 tracking-widest">
          [ SYSTEM SECURE · DEFENSES ACTIVE · THREATS NEUTRALIZED ]
        </p>
      </div>
    </footer>
  )
}
