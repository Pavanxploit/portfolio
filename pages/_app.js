import '../styles/globals.css'
import { useEffect } from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const trail = document.querySelector('.cursor-trail')

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX - 6 + 'px'
        cursor.style.top = e.clientY - 6 + 'px'
      }
      if (trail) {
        setTimeout(() => {
          trail.style.left = e.clientX - 16 + 'px'
          trail.style.top = e.clientY - 16 + 'px'
        }, 80)
      }
    }

    document.addEventListener('mousemove', moveCursor)
    return () => document.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      <Head>
        <title>Pavan Kumar | Cybersecurity Professional</title>
        <meta name="description" content="Pavan Kumar - Offensive Security | Ethical Hacker | IoT Security | Mysuru, India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="cursor" />
      <div className="cursor-trail" />
      <Component {...pageProps} />
    </>
  )
}
