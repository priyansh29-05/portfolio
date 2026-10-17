# Priyansh Soni — Freelance Developer Portfolio

> **“Web experiences built with clarity and purpose.”**  
> A premium, client-focused portfolio website for **Priyansh Soni**, Freelance React & Full-Stack Developer.

---

## 🌟 Overview & Positioning

This portfolio is engineered specifically to attract international clients (founders, startups, small businesses, and digital agencies) as well as Indian clients. Built around the **Warm Editorial Atelier** design system designed in Google Stitch, it balances modern typographic authority, high whitespace discipline, and real engineering proof.

### ✨ Key Features

- **Warm Editorial Atelier Visual Identity:** Warm off-white canvas (`#FAF9F6`), crisp near-black typography (`#121212`), refined hairline dividers (`#E5E4DE`), and zero noisy clutter.
- **Light & Dark Themes:** Built-in theme engine with persistent local storage, smooth transitions, and default light mode.
- **Verified Engineering Case Studies:**
  1. **ItzFizz Scroll-Driven Landing Page:** 3D WebGL metallic torus knot animation with React Three Fiber, scroll-linked camera movements, and responsive capability cards.
  2. **ARISE Career Recommendation System:** AI-powered guidance platform integrating Google Gemini AI, visual learning roadmaps, JWT authentication, and resilient MongoDB architecture.
  3. **Mini ERP/CRM Operations Portal:** Full-stack enterprise business operations management for customers, inventory, and sales challans with role-based access control and Prisma ORM.
- **Interactive Case Study Modals:** In-depth architectural breakdowns, individual contribution clarifications, and live demonstration links.
- **Responsive Navigation:** Accessible sticky header with desktop navigation, theme toggle, and mobile slide-out drawer menu.
- **Conversion-Optimized Inquiry Form:** Direct developer communication channels, project classification selectors, and budget scope options.

---

## 🛠️ Tech Stack & Tooling

| Domain | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 19 + Vite 8 |
| **Styling Architecture** | Pure Modular CSS with Design Tokens (`variables.css`) |
| **Icons & Media** | Lucide React + Custom Verified SVGs |
| **Typography** | Playfair Display (Serif display headlines) & Plus Jakarta Sans (Clean body) |
| **Design System** | Google Stitch Warm Editorial Atelier (`projects/10039206750096168561`) |
| **Deployment Targets** | Netlify, Vercel, or GitHub Pages |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── _redirects              # Netlify SPA redirect rule
│   └── projects/               # High-resolution screenshots of real projects
│       ├── itzfizz.png         # ItzFizz 3D scroll landing page
│       ├── arise.png           # ARISE AI recommendation system
│       └── mini-erp.png        # Mini ERP/CRM operations portal
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── CaseStudyModal.jsx  # Interactive case study deep dive modal
│   │   ├── ContactForm.jsx     # Client inquiry form with validation
│   │   ├── Icons.jsx           # Crisp SVG brand & platform icons
│   │   ├── Navbar.jsx          # Sticky header + accessible mobile drawer
│   │   ├── ProjectCard.jsx     # Verified case study presentation cards
│   │   ├── ServiceCard.jsx     # Client service offering cards
│   │   ├── TechBadge.jsx       # Verified technology tag pill chips
│   │   └── ThemeToggle.jsx     # Light / Dark theme switcher
│   ├── data/
│   │   └── portfolioData.js    # Centralized, verified developer data
│   ├── sections/               # Page sections
│   │   ├── AboutSection.jsx    # Professional positioning & philosophy
│   │   ├── ContactSection.jsx  # Consultation drawer & direct channels
│   │   ├── Footer.jsx          # Back-to-top & colophon
│   │   ├── HeroSection.jsx     # Primary value proposition & CTAs
│   │   ├── ProcessSection.jsx  # 4-step onboarding pipeline & FAQs
│   │   ├── ProjectsSection.jsx # Flagship work showcase
│   │   └── ServicesSection.jsx # Core service offerings
│   ├── styles/                 # Global styles and design tokens
│   │   ├── about.css
│   │   ├── contact.css
│   │   ├── footer.css
│   │   ├── global.css
│   │   ├── hero.css
│   │   ├── modal.css
│   │   ├── navbar.css
│   │   ├── process.css
│   │   ├── projects.css
│   │   ├── services.css
│   │   └── variables.css
│   ├── App.jsx                 # Main application layout
│   └── main.jsx                # DOM mounting entry point
├── index.html                  # SEO metadata, Google Fonts, theme preload
├── netlify.toml                # Netlify automated build & SPA routing configuration
├── package.json
└── vite.config.js
```

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v18 or higher recommended; tested on v22.14.0)
- npm (v9 or higher; tested on 10.9.2)

### 1. Clone & Install Dependencies
```bash
cd portfolio
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build & Local Preview
```bash
npm run build
npm run preview
```

---

## 🌐 Deployment Instructions

The production build generates standard static HTML/CSS/JS in the `dist/` directory.

### Option A: Netlify (Recommended)
1. Push this repository to your GitHub account (`https://github.com/priyansh29-05/portfolio`).
2. Log into [Netlify](https://app.netlify.com/) and click **Add new site > Import an existing project**.
3. Select your GitHub repository. Netlify will automatically detect settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy Site**.

*Manual drag-and-drop:* Run `npm run build`, then drag the `dist` folder directly onto Netlify Drop.

### Option B: Vercel
1. Install Vercel CLI or import via [Vercel Dashboard](https://vercel.com/):
   ```bash
   npx vercel
   ```
2. Set Framework Preset to **Vite**, build command to `npm run build`, and output directory to `dist`.

### Option C: GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
2. Add `"deploy": "gh-pages -d dist"` to `package.json` scripts.
3. In `vite.config.js`, set `base: '/portfolio/'` (or your repository name).
4. Run `npm run build && npm run deploy`.

---

## 👤 Author & Inquiries

- **Developer:** Priyansh Soni
- **Title:** Freelance React & Full-Stack Developer
- **GitHub:** [github.com/priyansh29-05](https://github.com/priyansh29-05)
- **LinkedIn:** [linkedin.com/in/priyansh-soni-489617211](https://www.linkedin.com/in/priyansh-soni-489617211/)
- **Direct Email:** priyanshsoni2905@gmail.com
- **Working Mode:** India • Available Worldwide (Remote)
