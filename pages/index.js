import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)
  const phases = [
    'Initializing security protocols...',
    'Loading encrypted assets...',
    'Authenticating credentials...',
    'Establishing secure connection...',
    'Access Granted.',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 8 + 2
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 600)
          return 100
        }
        setPhase(Math.floor((next / 100) * (phases.length - 1)))
        return next
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center"
    >
      {/* Hex grid bg */}
      <div className="absolute inset-0 hex-pattern opacity-50" />

      <div className="relative text-center">
        {/* Logo */}
        <div className="relative w-20 h-20 mx-auto mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 border border-gold/30 rotate-45"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-3 border border-gold/15"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-3xl gold-text">P</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="font-display text-2xl font-light gold-text mb-2">Pavan Kumar</h1>
        <p className="font-mono text-xs text-white/30 tracking-widest mb-10">CYBERSECURITY PROFESSIONAL</p>

        {/* Progress */}
        <div className="w-64 mx-auto">
          <div className="h-px bg-white/5 mb-3 overflow-hidden">
            <motion.div
              className="h-full"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(to right, #C9A84C, #E8C96C)',
                transition: 'width 0.1s ease'
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="font-mono text-xs text-white/20">{phases[phase]}</span>
            <span className="font-mono text-xs text-gold/60">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="min-h-screen bg-dark noise">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  )
}
