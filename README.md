# Tyler Anderson - Portfolio Website

A modern, performant portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui + Radix UI
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Theme:** next-themes (Dark/Light mode)
- **Deployment:** Vercel

## ✨ Features

- 🎨 Pixel-perfect, responsive design
- 🌗 Dark mode support
- ⚡ Optimized performance (Server Components, code splitting)
- 🎭 Smooth animations and transitions
- ♿ Accessibility-first (WCAG 2.1 AA)
- 📱 Mobile-friendly
- 🔍 SEO optimized
- 📝 Type-safe with TypeScript
- 🎯 Contact form with validation

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── layout/      # Header, Footer, etc.
│   │   ├── sections/    # Page sections
│   │   └── animations/  # Animation wrappers
│   ├── lib/
│   │   ├── actions/     # Server Actions
│   │   ├── data/        # Data files
│   │   ├── hooks/       # Custom hooks
│   │   └── utils.ts     # Utility functions
│   ├── types/           # TypeScript types
│   └── config/          # Configuration files
├── public/              # Static assets
└── ...config files
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Update Your Information

1. **Site Config** (`src/config/site.ts`)
   - Update name, title, description
   - Add your social media links

2. **Projects** (`src/lib/data/projects.ts`)
   - Add your actual projects
   - Update project images (place in `public/images/projects/`)

3. **Experience** (`src/lib/data/experience.ts`)
   - Update work experience

4. **Skills** (`src/lib/data/skills.ts`)
   - Update your skills

5. **Social Links** (`src/lib/data/social.ts`)
   - Add your social media profiles

### Add Project Images

Place project images in `public/images/projects/` and update the image paths in `projects.ts`.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure your custom domain (optional)
4. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

Built with modern best practices and inspired by the design community.
