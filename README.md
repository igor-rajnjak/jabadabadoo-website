# Jabadabadoo Rođendaonica Website

Modern, SEO-optimized website for Jabadabadoo Rođendaonica in Novi Sad, Serbia.

## 🚀 Tech Stack

- **Next.js 16** (React framework)
- **TypeScript** (type safety)
- **Tailwind CSS v4** (styling)
- **EmailJS** (email integration)

## 📁 Project Structure

```
website/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main homepage
│   ├── globals.css         # Global styles and Tailwind config
│   ├── sitemap.ts          # Sitemap generation
│   └── robots.ts            # Robots.txt generation
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section (above the fold)
│   ├── WhyUs.tsx           # Why choose us section
│   ├── Gallery.tsx         # Image gallery with lightbox
│   ├── Pricing.tsx         # Pricing packages
│   ├── Reviews.tsx         # Customer reviews
│   ├── FAQ.tsx             # FAQ accordion
│   ├── Contact.tsx         # Contact and reservation form
│   ├── ReservationForm.tsx # Reservation form component
│   ├── Footer.tsx           # Footer with links
│   └── StickyCall.tsx      # Sticky call button (mobile)
├── lib/
│   └── constants.ts        # All constants (contact, SEO, content)
└── public/
    └── images/             # Optimized images
```

## 🎨 Design

- **Style:** Playful, Colorful (from Jabadabadoo logo)
- **Colors:** Red (#ff6b6b), Teal (#4ecdc4), Yellow (#ffe66d), Pink, Purple, Blue
- **Font:** Comic Sans MS (playful, child-friendly)
- **Animations:** Modern, subtle hover effects (no 90s-style animations)

## 📱 Responsive

- **Mobile:** up to 767px (1 column layout)
- **Desktop:** 768px+ (4 columns for features/pricing)
- **Tablet:** Uses desktop layout (skipped separate view)

## 🔍 SEO & AEO (AI pretraga)

- ✅ Meta tags (title, description, OG tags)
- ✅ Structured data (Schema.org – LocalBusiness, FAQ, Service, HowTo, …)
- ✅ Sitemap.xml · Robots.txt (uklj. AI crawleri)
- ✅ **llms.txt** (`public/llms.txt`) – za AI čitače
- 📄 **Master mapa AEO:** `../docs/30_AEO_MASTER_MAP.md`
- 📄 **Off-site checklist (GBP, citacije):** `../docs/31_OFF_SITE_AEO_CHECKLIST.md`
- 📄 **NAP copy/paste:** `../docs/32_NAP_COPY_PASTE.md`
- 📄 **Blog naslovi (AEO):** `../docs/33_BLOG_IDEAS_AEO.md`
- 📄 **Tehnički audit:** `../docs/24_AI_SEARCH_OPTIMIZATION_AUDIT.md`
- ✅ Alt tags for all images
- ✅ Semantic HTML
- ✅ Optimized URLs

## 📧 Email Integration

Currently uses `mailto:` fallback. To set up EmailJS:

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Set up email service
3. Update `components/ReservationForm.tsx` with your EmailJS credentials
4. Replace mailto fallback with EmailJS.send()

## 🚀 Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

## 📊 Performance

- Image optimization with Next.js Image component
- Lazy loading for images below fold
- Code splitting
- Static generation where possible

## 🔧 Environment Variables

Create `.env.local` for production:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📝 Content

All content is managed in `lib/constants.ts`:
- Contact information
- SEO metadata
- Pricing packages
- Reviews
- FAQ
- Gallery images

## 🎯 Key Features

- ✅ Hero section with SEO-optimized content
- ✅ Trust signals (4.6/5 rating, 145+ reviews)
- ✅ 4 pricing packages with "Pozovi" buttons
- ✅ Customer reviews section
- ✅ FAQ accordion (10 questions)
- ✅ Reservation form
- ✅ Google Maps embed
- ✅ Social media links
- ✅ Sticky call button (mobile)
- ✅ Responsive design

## 📞 Contact

- **Phone:** 066286555
- **Email:** jabadabadoo.ns@gmail.com
- **Address:** Somborska 17, 21000 Novi Sad, Serbia
- **Hours:** Svaki dan 10:00 - 21:00

## 🚀 Deployment

Recommended: **Vercel**

1. Push to GitHub
2. Import project in Vercel
3. Configure domain
4. Deploy

SSL certificate is automatically configured by Vercel.

---

**Status:** ✅ Ready for deployment
