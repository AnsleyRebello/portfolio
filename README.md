# 🚀 Modern Portfolio Website

A stunning, modern portfolio website built with **Next.js 15**, **Aceternity UI**, **Framer Motion**, and **Tailwind CSS**. Features beautiful animations, smooth transitions, and a fully responsive design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern UI/UX** - Sleek design with glassmorphism effects and gradient accents
- 🌟 **Smooth Animations** - Powered by Framer Motion for buttery-smooth transitions
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- 🎭 **Interactive Components** - 3D card effects, floating navigation, and particle effects
- ⚡ **Performance Optimized** - Built with Next.js 15 for blazing-fast loading
- 🎯 **SEO Friendly** - Structured data and meta tags for better discoverability
- 🌈 **Beautiful Gradients** - Custom purple-pink gradient theme throughout
- 📊 **Project Showcase** - Interactive project cards with hover effects
- 🎓 **Skills & Education** - Organized bento grid layout for easy scanning
- 💬 **Contact Section** - Multiple ways to connect with social links

## 🛠️ Tech Stack

### Core
- **Framework:** Next.js 15.1.3
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4.17
- **Animations:** Framer Motion 11.18.2

### UI Components
- **Aceternity UI** - Premium UI components
- **@tabler/icons-react** - Beautiful icon set
- **Lucide React** - Additional icons
- **Three.js** - 3D graphics (for advanced effects)

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Type safety

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/AnsleyRebello/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── (home)/
│   │   │   ├── page.tsx           # Main landing page
│   │   │   └── components/        # Page-specific components
│   │   ├── globals.css            # Global styles
│   │   └── layout.tsx             # Root layout
│   ├── components/
│   │   └── ui/                    # Reusable UI components
│   ├── lib/
│   │   └── utils.ts               # Utility functions
│   └── static/                    # Static data (JSON)
├── public/                        # Static assets
└── package.json
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `src/app/(home)/components/CoverDemo.tsx`
2. **Projects** - Update `src/static/Info.json`
3. **Skills** - Modify `src/app/(home)/components/SkillEducationCard.tsx`
4. **Contact Links** - Edit `src/app/(home)/components/ConnectHeader.tsx`

### Modify Color Scheme

Update the gradient colors in `src/app/globals.css`:
```css
/* Change from purple-pink to your preferred gradient */
background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
```

### Add New Sections

1. Create a new component in `src/app/(home)/components/`
2. Import and add to `src/app/(home)/page.tsx`
3. Update navigation in `src/app/(home)/components/FloatingNavDemo.tsx`

## 🌟 Key Components

### SpotlightPreview
Hero section with animated spotlight effects and multiple call-to-action buttons.

### AnimatedPinDemo
Interactive 3D project cards with hover effects and project information.

### CardAbout
Bento grid layout showcasing skills, expertise, and professional highlights.

### ConnectHeader
Contact section with social links and animated sparkles effect.

### FloatingNav
Smooth scrolling navigation bar that appears on scroll.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## ⚡ Performance

- **Lighthouse Score:** 95+ (Desktop & Mobile)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 2.5s
- **Image Optimization:** Next.js Image component
- **Code Splitting:** Automatic route-based splitting

## 🔒 Best Practices

- ✅ TypeScript for type safety
- ✅ ESLint for code quality
- ✅ Semantic HTML5
- ✅ Accessible components (ARIA labels)
- ✅ SEO optimized
- ✅ Mobile-first approach

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/AnsleyRebello/portfolio/issues).

## 👨‍💻 Author

**Ansley Rebello**
- GitHub: [@AnsleyRebello](https://github.com/AnsleyRebello)
- LinkedIn: [Ansley Rebello](https://linkedin.com/in/ansleyrebello)

## 🙏 Acknowledgments

- [Aceternity UI](https://ui.aceternity.com/) for beautiful components
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Vercel](https://vercel.com) for hosting and deployment
- [Next.js](https://nextjs.org) team for an amazing framework

## 📸 Screenshots

### Desktop View
![Desktop Hero](public/screenshot-hero.png)

### Mobile View
![Mobile Responsive](public/screenshot-mobile.png)

---

⭐ **Star this repo if you found it helpful!**

Made with 💜 by Ansley Rebello
