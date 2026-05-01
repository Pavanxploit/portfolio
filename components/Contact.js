import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:pavankumar177667@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.name + '\nEmail: ' + form.email)}`
    window.open(mailtoLink)
    setStatus('Opening your email client...')
    setTimeout(() => setStatus(''), 3000)
  }

  const contactInfo = [
    { label: 'Email', value: 'pavankumar177667@gmail.com', href: 'mailto:pavankumar177667@gmail.com', icon: '✉' },
    { label: 'Phone', value: '+91 9980751210', href: 'tel:+919980751210', icon: '◈' },
    { label: 'Location', value: 'Mysuru, Karnataka, India', href: '#', icon: '◎' },
    { label: 'LinkedIn', value: 'pavan-kumar-747600374', href: 'https://www.linkedin.com/in/pavan-kumar-747600374/', icon: '⬡' },
    { label: 'GitHub', value: '@Pavanxploit', href: 'https://github.com/Pavanxploit', icon: '⚙' },
  ]

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-dark-2" ref={ref}>
      <div className="absolute inset-0 hex-pattern opacity-40" />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(201, 168, 76, 0.05) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="line-decoration" style={{ transform: 'scaleX(-1)' }} />
            <span className="font-mono text-xs tracking-[0.3em] text-gold/60 uppercase">06 / Contact</span>
            <div className="line-decoration" />
          </div>
          <h2 className="section-title text-white/90 mb-4">
            Let's <span className="gold-text">Connect</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto font-body">
            Open to internships, collaborations, and cybersecurity opportunities. Let's build something secure together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-10">
              <p className="font-mono text-xs tracking-[0.2em] text-gold/50 uppercase mb-2">Current Status</p>
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                <span className="font-display text-lg text-white/80">Available for Internships & Collaborations</span>
              </div>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 gold-border card-hover group block"
                  style={{ background: 'rgba(17,17,17,0.6)' }}
                >
                  <div className="w-8 h-8 flex items-center justify-center text-gold/60 flex-shrink-0 group-hover:text-gold transition-colors">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-white/30 tracking-wider uppercase">{item.label}</p>
                    <p className="font-mono text-sm text-white/70 group-hover:text-gold/80 transition-colors truncate">{item.value}</p>
                  </div>
                  <span className="ml-auto text-gold/30 group-hover:text-gold/60 transition-colors text-xs">→</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="gold-border p-8" style={{ background: 'rgba(17,17,17,0.8)' }}>
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
                <span className="ml-2 font-mono text-xs text-white/20">contact.send()</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {['name', 'email', 'message'].map((field) => (
                  <div key={field}>
                    <label className="block font-mono text-xs text-gold/50 tracking-widest uppercase mb-2">
                      {field === 'message' ? '// message' : `// ${field}`}
                    </label>
                    {field === 'message' ? (
                      <textarea
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        rows={5}
                        className="w-full bg-dark/60 text-white/70 font-mono text-sm p-3 outline-none resize-none transition-all duration-300"
                        style={{ border: '1px solid rgba(201,168,76,0.15)' }}
                        placeholder="Your message here..."
                        onFocus={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.4)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.15)'}
                        required
                      />
                    ) : (
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        className="w-full bg-dark/60 text-white/70 font-mono text-sm p-3 outline-none transition-all duration-300"
                        style={{ border: '1px solid rgba(201,168,76,0.15)' }}
                        placeholder={`Enter your ${field}`}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.4)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.15)'}
                        required
                      />
                    )}
                  </div>
                ))}

                <button type="submit" className="neon-btn w-full text-center">
                  {status || 'Send Message →'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
