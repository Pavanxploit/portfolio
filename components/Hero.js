import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

function MatrixCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモ∅∆∇⊕⊗ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;<>?,./`~'
    const fontSize = 13
    const cols = Math.floor(canvas.width / fontSize)
    const drops = Array(cols).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(8, 8, 8, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const gradient = i / drops.length
        const alpha = 0.3 + Math.random() * 0.5

        if (drops[i] * fontSize > canvas.height * 0.6) {
          ctx.fillStyle = `rgba(201, 168, 76, ${alpha * 0.3})`
        } else {
          ctx.fillStyle = `rgba(201, 168, 76, ${alpha})`
        }

        ctx.font = `${fontSize}px JetBrains Mono`
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 45)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-25"
      style={{ zIndex: 0 }}
    />
  )
}

export default function Hero() {
  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hex-pattern"
    >
      {/* Matrix rain */}
      <MatrixCanvas />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gold pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201, 168, 76, 0.04) 0%, transparent 70%)',
          zIndex: 1
        }}
      />

      {/* Horizontal scan line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)',
          zIndex: 2,
          animation: 'scan 8s linear infinite',
          top: 0
        }}
      />

      {/* Corner decorations */}
      {['top-8 left-8', 'top-8 right-8', 'bottom-8 left-8', 'bottom-8 right-8'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-12 h-12 pointer-events-none`} style={{ zIndex: 2 }}>
          <div className={`absolute ${i === 0 || i === 2 ? 'left-0' : 'right-0'} ${i < 2 ? 'top-0' : 'bottom-0'} w-full h-px bg-gold/30`} />
          <div className={`absolute ${i === 0 || i === 2 ? 'left-0' : 'right-0'} ${i < 2 ? 'top-0' : 'bottom-0'} w-px h-full bg-gold/30`} />
        </div>
      ))}

      {/* Main content */}
      <div className="relative text-center px-6 max-w-5xl mx-auto" style={{ zIndex: 3 }}>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
          </span>
          <span className="font-mono text-xs tracking-[0.3em] text-gold/70 uppercase">
            Available for Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="mb-4"
        >
          <h1
            className="font-display font-light gold-text glitch"
            data-text="Pavan Kumar"
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            Pavan Kumar
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-32 h-px mx-auto mb-6"
          style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
        />

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mb-8"
        >
          <span className="font-mono text-base md:text-xl tracking-widest text-white/60">
            <span className="text-gold/50">&gt; </span>
            <TypeAnimation
              sequence={[
                'Offensive Security Specialist', 2000,
                'Ethical Hacker', 2000,
                'Network Security Analyst', 2000,
                'IoT Security Engineer', 2000,
                'Blockchain Security Expert', 2000,
                'Penetration Tester', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gold/90"
            />
            <span className="animate-pulse text-gold">_</span>
          </span>
        </motion.div>

        {/* Location + Details row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-12 font-mono text-xs text-white/40 tracking-wider"
        >
          <span>📍 Mysuru, Karnataka</span>
          <span className="w-px h-4 bg-white/20" />
          <span>🎓 MIT Mysuru — B.E Cybersecurity</span>
          <span className="w-px h-4 bg-white/20" />
          <span>🛡️ NPTEL Elite · eJPT In Progress</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="neon-btn">
            Get In Touch
          </a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-white/40 hover:text-white/80 transition-colors duration-300 flex items-center gap-2 animated-underline"
          >
            View Projects <span>→</span>
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { label: 'GitHub', href: 'https://github.com/Pavanxploit', icon: '⌥' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pavan-kumar-747600374/', icon: '◈' },
            { label: 'TryHackMe', href: 'https://tryhackme.com', icon: '⬡' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-white/30 hover:text-gold/80 transition-all duration-300 group"
            >
              <span className="text-gold/50 group-hover:text-gold transition-colors">{social.icon}</span>
              {social.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer"
        style={{ zIndex: 3 }}
      >
        <span className="font-mono text-xs tracking-widest text-white/25 group-hover:text-gold/50 transition-colors">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </motion.button>
    </section>
  )
}
