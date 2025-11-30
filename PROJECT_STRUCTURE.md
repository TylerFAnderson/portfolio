# Project Structure Guide 🗂️

**A friendly guide to what every file and folder does in your portfolio**

---

## 📁 Root Level Files (Top of the project)

### Documentation Files (For You to Read)
- **`README.md`** - Project overview, how to get started
- **`PLAN.md`** - The blueprint we followed to build this
- **`STATUS.md`** - Current progress, what's done, what's next
- **`DEPLOYMENT.md`** - How to deploy (already done!)
- **`NEXT_STEPS.md`** - Customization guide, learning resources
- **`PROJECT_STRUCTURE.md`** - This file! 👋

### Configuration Files (Don't Touch Unless You Know Why)
- **`package.json`** - Lists all the libraries/packages we're using
- **`package-lock.json`** - Locks package versions (auto-generated, ignore)
- **`tsconfig.json`** - TypeScript configuration
- **`next.config.ts`** - Next.js configuration
- **`tailwind.config.ts`** - Tailwind CSS theme (colors, fonts, etc.)
- **`postcss.config.mjs`** - CSS processing (auto-generated)
- **`components.json`** - shadcn/ui configuration
- **`.prettierrc`** - Code formatting rules
- **`eslint.config.mjs`** - Code quality rules
- **`.gitignore`** - Tells git which files to ignore
- **`.env.local`** - Your secret API keys (NOT in git, that's good!)

---

## 📂 Main Folders

### `src/` - All Your Code Lives Here!

This is where you'll spend 99% of your time. Everything important is in here.

#### `src/app/` - Your Pages (Next.js Routes)

**How it works:** Each folder = a page on your website

```
app/
├── layout.tsx           ← Wraps ALL pages (header, footer, theme)
├── page.tsx            ← Home page (/)
├── globals.css         ← Global styles (CSS variables, Tailwind setup)
├── not-found.tsx       ← 404 page
├── sitemap.ts          ← Auto-generates sitemap for Google
├── about/
│   └── page.tsx        ← About page (/about)
├── projects/
│   ├── page.tsx        ← Projects list (/projects)
│   └── [slug]/
│       └── page.tsx    ← Individual project (/projects/design-system)
└── contact/
    └── page.tsx        ← Contact page (/contact)
```

**What to edit:**
- ✏️ Page content? Edit the `page.tsx` files
- ✏️ Colors/fonts? Edit `globals.css` and `tailwind.config.ts`
- ✏️ Header/Footer? Edit `layout.tsx`

---

#### `src/components/` - Reusable UI Pieces

**Think of these like LEGO blocks - you combine them to build pages**

```
components/
├── ui/                     ← shadcn components (pre-built, rarely edit)
│   ├── button.tsx         ← <Button> component
│   ├── card.tsx           ← <Card> component
│   ├── input.tsx          ← <Input> for forms
│   └── ...                ← All the UI primitives
│
├── layout/                 ← Things that appear on every page
│   ├── header.tsx         ← Navigation bar at top
│   ├── footer.tsx         ← Footer at bottom
│   └── theme-toggle.tsx   ← Dark/Light mode button
│
├── sections/               ← Big chunks of pages (YOUR CONTENT!)
│   ├── hero-section.tsx            ← Home page hero
│   ├── featured-projects.tsx       ← Home page project showcase
│   ├── experience-timeline.tsx     ← About page timeline
│   ├── skills-grid.tsx             ← About page skills
│   └── contact-form.tsx            ← Contact page form
│
├── animations/             ← Animation wrappers
│   ├── fade-in.tsx        ← Makes things fade in on scroll
│   └── stagger-children.tsx ← Makes things animate one by one
│
└── providers/              ← App-wide settings
    └── theme-provider.tsx ← Makes dark mode work
```

**What to edit:**
- ✏️ **Most often**: `sections/` - this is your actual content
- 🔧 **Sometimes**: `layout/` - header, footer changes
- 🚫 **Rarely**: `ui/` - these are pre-built, working components
- 🎨 **For fun**: `animations/` - tweak animation timings

---

#### `src/lib/` - Behind-the-Scenes Logic

**Where all the smart stuff happens**

```
lib/
├── data/                   ← YOUR CONTENT LIVES HERE! ⭐
│   ├── projects.ts        ← All your projects (EDIT THIS!)
│   ├── experience.ts      ← Your work history (EDIT THIS!)
│   ├── skills.ts          ← Your skills (EDIT THIS!)
│   └── social.ts          ← Your social links (EDIT THIS!)
│
├── actions/                ← Server-side functions
│   └── contact.ts         ← Handles contact form submission
│
├── schemas/                ← Form validation rules
│   └── contact.ts         ← Contact form validation
│
└── utils.ts               ← Helper functions (cn, etc.)
```

**What to edit:**
- ✏️ **Most important**: `data/` folder - this is ALL your content!
- 🔧 **If adding email features**: `actions/contact.ts`
- 🚫 **Don't touch**: `utils.ts` unless you know what you're doing

---

#### `src/config/` - Site-Wide Settings

```
config/
├── site.ts           ← Your name, email, description, URLs
└── navigation.ts     ← What pages are in the navigation menu
```

**What to edit:**
- ✏️ **Update your info**: `site.ts` (YOUR PERSONAL INFO!)
- ✏️ **Add/remove nav items**: `navigation.ts`

---

#### `src/types/` - TypeScript Definitions

```
types/
└── index.ts          ← Defines what a "Project", "Skill", etc. looks like
```

**What to edit:**
- 🔧 **Only if adding new fields**: Like adding "video" to projects
- 🚫 **Don't touch**: Unless you're comfortable with TypeScript

---

### `public/` - Static Files (Images, etc.)

```
public/
├── images/
│   └── projects/         ← PUT YOUR PROJECT IMAGES HERE!
│       ├── design-system.jpg
│       └── mobile-banking.jpg
├── robots.txt           ← Tells Google how to crawl your site
└── (default Next.js SVGs - can delete these)
```

**What to edit:**
- ✏️ **Add images here!** Then reference them in `lib/data/projects.ts`

---

### `node_modules/` - Installed Packages

**NEVER TOUCH THIS!** Auto-generated when you run `npm install`

---

### `.next/` - Build Output

**NEVER TOUCH THIS!** Auto-generated when you run `npm run build`

---

## 🎯 Quick Reference: "I Want To..."

### Change My Personal Info
→ Edit `src/config/site.ts`

### Add/Edit Projects
→ Edit `src/lib/data/projects.ts`  
→ Add images to `public/images/projects/`

### Update My Work History
→ Edit `src/lib/data/experience.ts`

### Change Colors/Fonts
→ Edit `src/app/globals.css` (CSS variables)  
→ Edit `tailwind.config.ts` (theme)

### Edit Page Content
→ Go to `src/app/[page-name]/page.tsx`

### Change Header/Footer
→ Edit `src/components/layout/header.tsx` or `footer.tsx`

### Tweak Animations
→ Edit files in `src/components/animations/`

### Change Hero Section
→ Edit `src/components/sections/hero-section.tsx`

---

## 🚫 Files to NEVER Edit (Unless You Really Know)

- `package-lock.json` - Auto-generated
- `node_modules/` - Auto-generated
- `.next/` - Auto-generated
- `.env.local` - Has your API keys, don't share!
- Most config files - Only edit if you know why

---

## ✏️ Files You'll Edit MOST

**Start here when customizing:**

1. **`src/lib/data/projects.ts`** - Your projects
2. **`src/lib/data/experience.ts`** - Your work history
3. **`src/lib/data/skills.ts`** - Your skills
4. **`src/config/site.ts`** - Your personal info
5. **`src/components/sections/`** - Page sections when redesigning
6. **`src/app/globals.css`** - Colors and styles

---

## 🎨 When You Redesign from Figma

You'll mostly edit:
- `src/components/sections/` - Rebuild sections
- `src/app/globals.css` - New color scheme
- `tailwind.config.ts` - Theme updates
- Individual `page.tsx` files - Layout changes

**The rest stays the same!** That's the beauty of good architecture.

---

## 💡 Pro Tips

1. **Search by filename** - Use Cmd+P in Cursor to quickly find files
2. **Not sure what a file does?** Don't edit it yet - ask first!
3. **Made a mistake?** `git checkout .` undoes uncommitted changes
4. **Want to see what changed?** `git status` shows modified files

---

## 🆘 Still Confused?

**That's totally normal!** This is a professional-level project structure. You don't need to understand everything right now.

**For customization, just focus on:**
- `src/lib/data/` - Your content
- `src/config/` - Your settings
- `src/components/sections/` - Visual sections

**Everything else is working perfectly - you can ignore it!** 🎯

---

**Last updated:** November 29, 2024  
**Status:** Production-ready, live at tyleranderson.me

