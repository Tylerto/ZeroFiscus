# ZeroFiscus - No Cure, No Pay Belastingadvies

A Next.js application for the ZeroFiscus tax advisory platform. Dutch-language website offering "no cure, no pay" tax consultation services.

## 🎯 Project Overview

ZeroFiscus helps Dutch taxpayers discover potential tax savings with zero upfront costs. Users complete an assessment form, and our fiscal experts review their situation to identify savings opportunities.

**Business Model**: Clients only pay if we find tax savings ("No cure, no pay").

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Environment Setup

Create a `.env.local` file in the root directory:

```env
# N8N Integration
N8N_WEBHOOK_URL=https://tylert.app.n8n.cloud/webhook/ncnp-lead-capture
N8N_WEBHOOK_SECRET=

# App Config
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=ZeroFiscus
```

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

**For mobile testing**: Access via network IP at `http://192.168.178.128:3000`

## 📱 Features

### Current (MVP)
- ✅ Landing page with hero, features, testimonials, FAQ
- ✅ Multi-step assessment form (5 steps)
- ✅ Form validation with Zod
- ✅ N8N webhook integration
- ✅ Mobile-responsive design (optimized for 390x844)
- ✅ Smooth scroll navigation
- ✅ Animated impact metrics
- ✅ Success screen with user-controlled navigation

### Planned (Phase 2)
- User authentication (Supabase)
- Document upload functionality
- AI-powered tax analysis
- Fiscalist review workflow
- User portal dashboard
- Payment integration

## 🛠 Tech Stack

- **Framework**: [Next.js 15.5.4](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Automation**: N8N Cloud (webhook integration)
- **Deployment**: Vercel

## 📂 Project Structure

```
webapp/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── page.tsx             # Landing page
│   │   ├── assessment/          # Assessment form page
│   │   ├── layout.tsx           # Root layout
│   │   └── api/
│   │       └── assessment/
│   │           └── submit/      # API route for form submission
│   ├── components/
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── navbar.tsx
│   │   │   ├── hero-with-image-text-and-two-buttons.tsx
│   │   │   ├── how-it-works.tsx
│   │   │   ├── testimonials-with-marquee.tsx
│   │   │   ├── feature-with-advantages.tsx
│   │   │   ├── impact-metrics.tsx
│   │   │   ├── faq-accordion.tsx
│   │   │   └── footer-section.tsx
│   │   └── AssessmentForm.tsx   # Multi-step form component
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/
│   ├── logo.png                 # ZeroFiscus logo
│   ├── Lenny Jelsma.png        # Team avatar
│   └── Leon Bloemenheuvel.png  # Team avatar
└── .env.local                   # Environment variables
```

## 🎨 Design System

### Colors
- **Primary**: Black (`#000000`) for CTAs
- **Background**: White (`#FFFFFF`)
- **Accent**: Grey shades for secondary elements
- **Section BG**: Beige (`#FAF9F7`) for alternating sections

### Typography
- **Headings**: Bold, tracking-tight
- **Body**: Base size 16px on mobile, responsive scaling
- **Mobile-first**: All text readable without zoom

### Components
- **Buttons**: Minimum 44px touch target height
- **Forms**: Full-width on mobile, responsive on desktop
- **Navigation**: Smooth scroll to sections
- **Animations**: Subtle entrance animations, number counters

## 🧪 Testing

### Manual Testing Checklist
- [ ] Landing page loads correctly
- [ ] Navigation smooth scrolling works
- [ ] Assessment form validation
- [ ] Form submission to N8N webhook
- [ ] Success screen displays correctly
- [ ] Mobile responsive (390x844)
- [ ] Cross-browser compatibility
- [ ] All Dutch text displays correctly

### Test URLs
- Landing: `http://localhost:3000`
- Assessment: `http://localhost:3000/assessment`

## 📝 API Routes

### POST `/api/assessment/submit`

Receives form submission and forwards to N8N webhook.

**Request Body**:
```typescript
{
  userType: "Particulier" | "Ondernemer",
  incomeRange: string,
  taxYear: string,
  fullName: string,
  email: string,
  phone: string,
  additionalNotes?: string,
  submittedAt: string,
  source: "website"
}
```

**Response**:
```typescript
{ success: boolean }
```

## 🚀 Deployment

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

Set these in Vercel dashboard:
- `N8N_WEBHOOK_URL`
- `N8N_WEBHOOK_SECRET`
- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_SITE_NAME`

## 📊 Current Status

**MVP Progress**: ~95% Complete

**Last Updated**: October 17, 2025

**Ready For**: Final QA and Production Launch

## 🔗 Related Documentation

- [PROGRESS_UPDATE_2025-10-17.md](../PROGRESS_UPDATE_2025-10-17.md) - Latest progress
- [MVP_CHECKLIST.md](../MVP_CHECKLIST.md) - Development checklist
- [CLAUDE.md](../CLAUDE.md) - AI assistant guide
- [PROJECT_OVERVIEW.md](../PROJECT_OVERVIEW.md) - Full platform specs

## 👥 Team

- **Fiscaal Adviseurs**: Lenny Jelsma, Leon Bloemenheuvel
- **Contact**: info@zerofiscus.nl

## 📄 License

Proprietary - All rights reserved © 2025 ZeroFiscus

---

**Note**: This is an MVP implementation. Full platform features (authentication, document processing, AI analysis) will be added in Phase 2 after market validation.
