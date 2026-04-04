# Claude Code Prompt — Build "Futurly" Website

## Instructions

You are building **Futurly** — a premium mentorship marketplace and career counselling platform for students and professionals in Uzbekistan. The website should be production-grade, visually stunning, and ready to deploy on Vercel.

Push all code to: `https://github.com/divyanshmaurya/CounsellingPortal`

---

## Tech Stack

- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Styling**: Tailwind CSS v4 + custom CSS for animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Use distinctive Google Fonts — avoid Inter/Roboto/Arial. Suggested: `Instrument Serif` for display headings + `DM Sans` or `Outfit` for body text. Make the typography feel premium and editorial.
- **Deployment**: Vercel-ready (no special server dependencies)
- **Package Manager**: npm

Do NOT use any backend, database, or authentication for now. This is a **landing page + multi-page marketing website** with static/mock data. All content is hardcoded. No API calls needed.

---

## Brand Identity

- **Name**: Futurly
- **Tagline**: "Your Future, Guided by Those Who've Been There"
- **Brand Personality**: Warm, trustworthy, modern, ambitious. Think: the confidence of a top consulting firm meets the warmth of a local elder giving you career advice.
- **Color Palette**:
  - Primary: Deep teal `#0D9488` (trust, growth)
  - Secondary: Warm amber/gold `#F59E0B` (ambition, energy)
  - Dark: Rich charcoal `#1E293B`
  - Light background: Soft warm white `#FAFAF9`
  - Accent: Soft coral `#FB7185` for CTAs and highlights
  - Use gradients tastefully — e.g., teal-to-dark-teal for hero sections
- **Logo**: Text-based logo "Futurly" with a subtle upward arrow or path motif integrated into the "F" or the dot of the "y". Create this as an SVG component.
- **Design Vibe**: Clean but not cold. Generous whitespace. Subtle grain/noise texture on hero backgrounds. Soft shadows. Rounded corners (12–16px). Smooth scroll animations. Think Linear.app meets Masterclass.com — editorial, premium, but approachable.

---

## Site Structure (Pages to Build)

### 1. Homepage (`/`)

This is the most important page. It should be long-scrolling with these sections:

**Hero Section**
- Bold headline: "Your Future, Guided by Those Who've Been There"
- Subtitle: "Connect with mentors at top universities and companies worldwide. Get personalized guidance for admissions, career growth, and life decisions."
- Two CTAs: "Find a Mentor" (primary, teal) and "Become a Mentor" (secondary, outlined)
- Background: Subtle animated gradient mesh or soft geometric shapes. Add light grain texture.
- Show a floating card UI mockup of a mentor profile (photo, name, university, rating, "Book Session" button) as a visual element beside the text. Use mock data.
- Language selector in top-right: 🇺🇿 O'zbek | 🇷🇺 Русский | 🇬🇧 English (non-functional, just UI)

**"How It Works" Section**
- 3-step visual flow with icons and brief descriptions:
  1. "Tell us your goals" — describe your dream career, target university, or skill gap
  2. "Get matched with mentors" — AI pairs you with someone who's walked your exact path
  3. "Grow with guidance" — book sessions, get feedback, track your progress
- Use a horizontal stepper/timeline layout on desktop, vertical on mobile
- Animate each step in on scroll

**User Segments Section**
- 4 cards showing who Futurly is for:
  1. **🎓 High School Students** — "Choosing a university? Talk to someone already studying there."
  2. **📚 College Students** — "Get semester-long mentorship from seniors and young professionals."
  3. **💼 Job Seekers** — "Prepare for interviews and get referred by insiders at your dream company."
  4. **🔄 Career Switchers** — "Thinking of a new path? Learn from someone who made the same switch."
- Each card should have a subtle illustration or icon, a short description, and a "Learn More →" link
- Hover effect: gentle lift + shadow increase

**Featured Mentors Section**
- Heading: "Learn from the Best"
- Horizontal scrollable row of 6–8 mentor cards
- Each card: profile photo (use placeholder images from `https://i.pravatar.cc/300?img=X`), name, role/university, country flag emoji, rating (stars), session price, and a "View Profile" button
- Mock data examples:
  - "Aziza K." — CS Student, MIT 🇺🇸 — ⭐ 4.9 — $8/session
  - "Rustam T." — Software Engineer, Google 🇺🇸 — ⭐ 4.8 — $15/session
  - "Nodira S." — Medical Student, UCL 🇬🇧 — ⭐ 5.0 — $10/session
  - "Jamshid M." — Finance Analyst, Deloitte 🇦🇪 — ⭐ 4.7 — $12/session
  - "Malika R." — PhD Researcher, KAIST 🇰🇷 — ⭐ 4.9 — $10/session
  - "Bobur A." — Data Scientist, Yandex 🇷🇺 — ⭐ 4.6 — $7/session

**Services Section**
- Grid layout showing key services:
  1. **1-on-1 Mentorship Sessions** — Book 30/60 min video calls with verified mentors
  2. **SOP & Essay Review** — Get your application documents reviewed by someone who got into the same program
  3. **Mock Interviews** — Practice with professionals from your target company
  4. **University Reviews** — Read honest reviews from real students, not rankings websites
  5. **Scholarship Finder** — Browse scholarships available for Uzbek students with mentor guidance
  6. **Career Path Explorer** — AI-powered tool that maps your interests to career paths
- Use a bento-grid layout (varying card sizes, some 1x1, some 2x1) for visual interest

**Stats/Social Proof Section**
- Animated counter numbers on scroll:
  - "500+ Mentors"
  - "3,000+ Sessions Completed"
  - "50+ Universities Represented"
  - "98% Satisfaction Rate"
- Below stats: 3 testimonial cards with student photos, quotes, names, and which university/company they got into

**University Partners Section**
- Heading: "Our Mentors Come From"
- Logo ticker/marquee of university and company names (use text placeholders styled as pills/badges):
  MIT, Stanford, UCL, Oxford, KAIST, Yonsei, Moscow State, Inha University Tashkent, Westminster International University Tashkent, Google, Microsoft, Deloitte, Samsung, Yandex
- Auto-scrolling horizontal marquee animation

**CTA Section**
- Split into two columns:
  - Left: "Ready to shape your future?" → "Find a Mentor" button
  - Right: "Have experience to share?" → "Become a Mentor" button
- Warm gradient background (teal to dark)

**Footer**
- Logo + tagline
- Column links: Platform (How it Works, Find Mentors, Become a Mentor, Pricing), Company (About, Blog, Careers, Contact), Legal (Terms, Privacy), Support (FAQ, Help Center)
- Social icons: Instagram, Telegram, LinkedIn, YouTube
- Payment methods text: "We accept Payme, Click, Uzum, Visa, Mastercard"
- Language selector
- "© 2026 Futurly. All rights reserved. Made in Uzbekistan 🇺🇿"

---

### 2. Find Mentors Page (`/mentors`)

- Search bar at top with filters:
  - Category dropdown: University Admissions | Career Guidance | Skill Development | Interview Prep
  - University/Company text search
  - Price range slider
  - Language: English, Uzbek, Russian
  - Country filter
  - Rating filter
- Grid of mentor cards (use same card design as homepage, but in a 3-column grid)
- Show 12 mentor cards with varied mock data
- Each card links to `/mentors/[slug]` (just show the card, no need to build individual pages)
- Sidebar filter on desktop, bottom sheet filter on mobile

---

### 3. Pricing Page (`/pricing`)

- Heading: "Simple, Transparent Pricing"
- 3 pricing tiers displayed as cards:

**Free**
- Price: 0 UZS/month
- Features: Browse mentors, 1 free intro session/month, Community access, University reviews
- CTA: "Get Started"

**Student Pro**
- Price: 49,000 UZS/month (~$4)
- Features: Everything in Free + Unlimited messaging, Priority booking, SOP/Essay review (2/month), Group sessions, Progress dashboard
- CTA: "Start Free Trial" (highlighted as "Most Popular")

**Career Plus**
- Price: 149,000 UZS/month (~$12)
- Features: Everything in Pro + Unlimited document reviews, Mock interviews (4/month), Career path AI explorer, Dedicated mentor matching, Priority support
- CTA: "Start Free Trial"

- Below pricing cards: "All session fees are separate and set by individual mentors (avg. $3–$15 per session)"
- FAQ accordion below:
  - "Can I switch plans anytime?"
  - "What payment methods do you accept?"
  - "Is there a refund policy?"
  - "Do mentors set their own prices?"
  - "Can I use Futurly for free?"

---

### 4. About Page (`/about`)

- Hero: "We believe every student in Uzbekistan deserves access to world-class guidance"
- Mission statement section
- The Problem: "Students in remote areas of Uzbekistan have no access to reliable information about admissions, careers, and life after university. Decisions worth millions of soum are made based on rumors and outdated advice."
- The Solution: "Futurly connects you with real people who've walked the path you want to take — from top university students to senior professionals at global companies."
- Team section with 3–4 placeholder team member cards (Founder, CTO, Head of Mentors, Head of Growth)
- Values section: Accessibility, Honesty, Community, Impact
- "Backed by" section mentioning partnership with Youth Affairs Agency (placeholder)

---

### 5. Become a Mentor Page (`/become-mentor`)

- Hero: "Share Your Journey. Earn While You Guide."
- Why become a mentor section:
  - Set your own rates and schedule
  - Earn $100–$500+/month mentoring part-time
  - Build your personal brand
  - Give back to the Uzbek community
- How it works (3 steps): Apply → Get Verified → Start Mentoring
- Requirements: Currently enrolled at or graduated from a recognized university, OR working professional with 1+ years of experience
- Mentor earnings calculator: Interactive slider — "If you do X sessions/week at $Y/session, you'll earn $Z/month"
- Application form (non-functional, just UI):
  - Full name, Email, University/Company, LinkedIn profile, Areas of expertise (checkboxes), Brief bio, "Apply Now" button
- Testimonial from a current mentor (mock)

---

### 6. Contact Page (`/contact`)

- Simple contact form: Name, Email, Subject dropdown (General, Partnership, Support, Press), Message, Submit button
- Office address (mock): "Futurly HQ, 15 Amir Temur Avenue, Tashkent, Uzbekistan 100000"
- Email: hello@futurly.uz
- Telegram: @futurly_uz
- Instagram: @futurly.uz
- Embedded map placeholder (a styled div showing Tashkent)

---

## Global Components

### Navbar
- Fixed top, transparent on hero → solid white with shadow on scroll
- Logo (left), Nav links (center): Home, Find Mentors, Pricing, About, Become a Mentor
- Right side: Language selector, "Sign In" (text button), "Get Started" (primary button)
- Mobile: Hamburger menu with slide-in drawer

### Mobile Responsiveness
- Every page must be fully responsive
- Mobile-first approach
- Smooth transitions between breakpoints
- Touch-friendly tap targets (min 44px)

### Animations (Framer Motion)
- Page load: Staggered fade-up for hero elements
- Scroll: Elements animate in as they enter viewport (fade-up with slight delay stagger)
- Hover: Cards lift with shadow, buttons scale slightly
- Number counters: Animate from 0 to final value on scroll
- Marquee: Smooth infinite horizontal scroll for university logos
- Page transitions: Subtle fade between routes

### SEO
- Proper meta tags on every page (title, description, og:image)
- Semantic HTML (proper heading hierarchy, landmarks)
- Alt text on all images
- Sitemap-friendly URL structure

---

## File Structure

```
CounsellingPortal/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Homepage
│   ├── mentors/
│   │   └── page.tsx        # Find Mentors page
│   ├── pricing/
│   │   └── page.tsx        # Pricing page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── become-mentor/
│   │   └── page.tsx        # Become a Mentor page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── UserSegments.tsx
│   │   ├── FeaturedMentors.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   ├── UniversityMarquee.tsx
│   │   └── CTASection.tsx
│   ├── ui/
│   │   ├── MentorCard.tsx
│   │   ├── PricingCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── Button.tsx
│   └── shared/
│       └── AnimateOnScroll.tsx
├── lib/
│   └── data.ts             # All mock data (mentors, testimonials, etc.)
├── public/
│   └── (any static assets)
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## Deployment Instructions

After building:

1. Initialize git repo if not already: `git init`
2. Add remote: `git remote add origin https://github.com/divyanshmaurya/CounsellingPortal.git`
3. Make sure `.gitignore` includes `node_modules`, `.next`, `.env*`
4. Create a clean `README.md` with:
   - Project name and description
   - Tech stack
   - How to run locally (`npm install` → `npm run dev`)
   - How to deploy on Vercel
5. Commit and push: `git add . && git commit -m "Initial commit: Futurly landing website" && git push -u origin main`

Make sure:
- `next.config.js` has `output: 'standalone'` removed (Vercel handles this automatically)
- No hardcoded `localhost` URLs anywhere
- All images use `next/image` with proper `width`/`height` or `fill` prop
- Build passes with zero errors: run `npm run build` before pushing

---

## Quality Checklist Before Pushing

- [ ] All 6 pages render without errors
- [ ] Mobile responsive on all pages (test at 375px, 768px, 1024px, 1440px)
- [ ] Animations are smooth and don't cause layout shifts
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] All links between pages work (use Next.js `<Link>`)
- [ ] Lighthouse score > 90 for Performance and Accessibility
- [ ] Dark text on light backgrounds, proper contrast ratios
- [ ] Build succeeds: `npm run build` completes without errors
- [ ] Code is pushed to `https://github.com/divyanshmaurya/CounsellingPortal`
