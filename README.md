# 🕌 Al-Qibla Travel - Landing Page Umrah

Landing page modern untuk Travel Umrah & Haji yang dibangun dengan **Astro v4+**, **React**, **Tailwind CSS**, dan **Framer Motion**.

## ✨ Features

- 🎨 **Islamic Modern Design** - Desain elegan dengan color palette hijau emerald dan gold
- ⚡ **Fast Performance** - Static Site Generation dengan Astro untuk loading super cepat
- 📱 **Fully Responsive** - Mobile-first design yang sempurna di semua perangkat
- 🎭 **Smooth Animations** - Framer Motion untuk animasi yang halus dan profesional
- 🔍 **SEO Optimized** - Meta tags lengkap dan struktur semantic HTML
- ♿ **Accessible** - Mengikuti best practices accessibility
- 📦 **Component-Based** - Arsitektur modular yang mudah di-maintain

## 🛠️ Tech Stack

- **[Astro v4+](https://astro.build)** - Static Site Generator
- **[React 19](https://react.dev)** - UI Library untuk komponen interaktif
- **[Tailwind CSS v4](https://tailwindcss.com)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev)** - Beautiful icon library
- **TypeScript** - Type safety

## 📂 Project Structure

```
umrah-web/
├── src/
│   ├── components/
│   │   ├── Navbar.astro           # Sticky navigation dengan glassmorphism
│   │   ├── Hero.astro             # Hero section dengan dual CTA
│   │   ├── PackageSection.tsx     # Package cards dengan tab filter (React)
│   │   ├── FeatureGrid.astro      # Grid keunggulan 4 kolom
│   │   ├── Testimonials.tsx       # Testimonial cards (React)
│   │   ├── FaqSection.tsx         # FAQ accordion (React + Framer Motion)
│   │   └── Footer.astro           # Footer dengan info kontak
│   ├── data/
│   │   └── packages.ts            # Mock data untuk paket, testimoni, FAQ
│   ├── layouts/
│   │   └── Layout.astro           # Main layout dengan SEO meta tags
│   ├── pages/
│   │   └── index.astro            # Homepage
│   └── styles/
│       └── global.css             # Global styles & custom utilities
├── public/                        # Static assets
├── astro.config.mjs              # Astro configuration
├── tailwind.config.mjs           # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm atau yarn

### Installation

1. Clone repository (jika dari Git):
```bash
git clone <repository-url>
cd umrah-web
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser di `http://localhost:4321`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 🎨 Design System

### Color Palette

- **Primary (Emerald)**: Hijau Islamic untuk brand identity
  - `emerald-50` hingga `emerald-900`
- **Secondary (Slate)**: Abu-abu untuk text dan backgrounds
  - `slate-700` hingga `slate-900`
- **Accent (Amber/Gold)**: Emas untuk highlight dan premium badges
  - `amber-400` hingga `amber-600`

### Typography

- **Font Family**: Plus Jakarta Sans (Google Fonts)
- **Headings**: Bold/Extrabold (text-4xl hingga text-7xl)
- **Body**: Regular/Medium (text-base hingga text-lg)

### Effects

- Glassmorphism pada navbar
- Hover scale & shadow effects pada cards
- Smooth fade-in animations
- Accordion transitions dengan Framer Motion

## 📦 Components Overview

### Astro Components (Static)
- **Navbar** - Sticky navigation dengan mobile menu
- **Hero** - Full-height hero dengan background image
- **FeatureGrid** - 4 keunggulan dalam grid layout
- **Footer** - Company info dan links

### React Components (Interactive)
- **PackageSection** - Tab filter untuk kategori paket
- **Testimonials** - Grid testimonial dengan rating
- **FaqSection** - Accordion FAQ dengan smooth animation

## 🌐 Deployment

### Build untuk Production

```bash
npm run build
```

Output akan ada di folder `dist/`

### Deploy ke GitHub Pages

1. Update `astro.config.mjs` dengan site URL:
```js
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repository-name',
  // ...
});
```

2. Build project:
```bash
npm run build
```

3. Deploy folder `dist/` ke GitHub Pages

### Deploy ke Vercel/Netlify

Kedua platform support Astro secara native:
- Push code ke Git repository
- Connect ke Vercel/Netlify
- Auto-deploy setiap kali push

## 📝 Customization

### Mengubah Konten

Edit file `src/data/packages.ts` untuk mengubah:
- Paket umrah
- Testimonial
- FAQ
- Itinerary (jika ditambahkan)

### Mengubah Nomor WhatsApp

Cari dan replace `6281234567890` dengan nomor WhatsApp Anda di semua file.

### Mengubah Warna Brand

Edit `tailwind.config.mjs` untuk custom color palette.

## 🤝 Contributing

Contributions, issues, dan feature requests sangat diterima!

## 📄 License

MIT License - feel free to use this project for your business.

## 👨‍💻 Developer

Built with ❤️ using Astro + React + Tailwind CSS

---

**Happy Coding! 🚀**
