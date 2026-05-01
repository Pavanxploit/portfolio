# Pavan Kumar — Cybersecurity Portfolio

A premium, Dubai-luxury-inspired cybersecurity portfolio built with **Next.js 14**, **Framer Motion**, and **Tailwind CSS**.

## ✨ Features

- 🎬 **Loading screen** with animated security-themed progress bar
- ☕ **Matrix rain** canvas background on hero
- 🖱️ **Custom gold cursor** with trailing effect
- ✍️ **Typewriter** animation for roles
- 📜 **Smooth scroll** with active nav highlighting
- 💫 **Framer Motion** reveal animations on scroll
- 📊 **Animated skill bars** with percentage display
- 🏷️ **Project cards** with live status indicators
- 🎓 **Certifications** grid with color-coded badges
- 📬 **Contact form** (opens mailto)
- 📱 **Fully responsive** mobile-first design
- ⚡ **Custom cursor** hidden on mobile

## 🚀 Deploy to Vercel

### Step 1: Install dependencies
```bash
npm install
```

### Step 2: Add your resume
Place your resume PDF as:
```
public/resume.pdf
```

### Step 3: Test locally
```bash
npm run dev
```
Open http://localhost:3000

### Step 4: Deploy to Vercel

**Option A — Vercel CLI:**
```bash
npm install -g vercel
vercel
```

**Option B — GitHub + Vercel Dashboard:**
1. Push this folder to a GitHub repo
2. Go to https://vercel.com → New Project
3. Import your GitHub repo
4. Click Deploy ✅

## 🎨 Customization

### Update your info in these files:
- `components/Hero.js` — Name, tagline, social links
- `components/About.js` — Bio text, stats
- `components/Skills.js` — Skill levels
- `components/Experience.js` — Work/education entries
- `components/Projects.js` — Project details & GitHub links
- `components/Certifications.js` — Cert details & verify links
- `components/Contact.js` — Email, phone, social
- `components/Footer.js` — Social links

### Add your photo:
1. Add `public/profile.jpg`
2. In `components/About.js`, replace the PK initials div with:
```jsx
import Image from 'next/image'
<Image src="/profile.jpg" alt="Pavan Kumar" fill className="object-cover" />
```

### Colors (globals.css):
```css
--gold: #C9A84C;        /* Primary gold */
--gold-light: #E8C96C;  /* Lighter gold */
--dark: #080808;        /* Background */
```

## 📁 Project Structure

```
portfolio/
├── components/
│   ├── Navbar.js          # Sticky nav with mobile menu
│   ├── Hero.js            # Matrix rain + typewriter hero
│   ├── About.js           # Bio + stats + code block
│   ├── Skills.js          # Skill bars + tools cloud
│   ├── Experience.js      # Timeline (work + education)
│   ├── Projects.js        # Project cards grid
│   ├── Certifications.js  # Certs + active platforms
│   ├── Contact.js         # Contact form + info
│   └── Footer.js          # Footer links
├── pages/
│   ├── _app.js            # Global cursor + fonts
│   └── index.js           # Loading screen + page assembly
├── styles/
│   └── globals.css        # All custom CSS + animations
├── public/
│   └── resume.pdf         # ← ADD YOUR RESUME HERE
├── package.json
├── next.config.js
└── tailwind.config.js
```

## 🛠️ Built With
- Next.js 14
- Framer Motion 11
- Tailwind CSS 3
- React Type Animation
- React Intersection Observer
- Cormorant Garamond + JetBrains Mono + Outfit (Google Fonts)
