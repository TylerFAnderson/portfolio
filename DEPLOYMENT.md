# Deployment Guide

## 🚀 Quick Deploy to Vercel (Recommended)

### Prerequisites
1. A GitHub account
2. A Vercel account (free) - [Sign up here](https://vercel.com/signup)

### Steps

#### 1. Push to GitHub

First, create a new repository on GitHub:
- Go to [github.com/new](https://github.com/new)
- Name it: `portfolio` (or whatever you like)
- Make it **Public** or **Private**
- **DO NOT** initialize with README (we already have one)
- Click "Create repository"

Then push your code:

```bash
# Add remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

#### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js - no configuration needed!
5. Click "Deploy"

That's it! ✅ Your site will be live in ~2 minutes at: `your-project.vercel.app`

### 3. Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Follow Vercel's instructions to update your DNS records
4. SSL is automatically configured!

## 📝 Before Deploying - Checklist

### Update Your Information

- [ ] `src/config/site.ts` - Update all your personal info, URLs
- [ ] `src/lib/data/projects.ts` - Add your actual projects
- [ ] `src/lib/data/experience.ts` - Update work experience
- [ ] `src/lib/data/skills.ts` - Update your skills
- [ ] `src/lib/data/social.ts` - Add your social media links
- [ ] `src/app/about/page.tsx` - Customize your about text
- [ ] Add project images to `public/images/projects/`
- [ ] Update `README.md` with your GitHub username

### Test Locally

```bash
# Run development server
npm run dev

# Test production build
npm run build
npm start
```

Visit `http://localhost:3000` and test:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Dark/Light mode toggle works
- [ ] Contact form submission works
- [ ] Mobile responsive design
- [ ] All links work

## 🎨 Adding Project Images

1. Add images to `public/images/projects/`
2. Update image paths in `src/lib/data/projects.ts`
3. Commit and push:

```bash
git add .
git commit -m "Add project images"
git push
```

Vercel will automatically redeploy!

## ⚡ Environment Variables

If you add email functionality or analytics later, set them in Vercel:

1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your variables
3. Redeploy

## 📊 Analytics (Optional)

Enable Vercel Analytics (free):
1. Vercel Dashboard → Your Project → Analytics
2. Click "Enable"

Add Vercel Speed Insights:
```bash
npm install @vercel/speed-insights
```

Then add to `src/app/layout.tsx`:
```tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

// In the return statement, add:
<SpeedInsights />
```

## 🔧 Troubleshooting

### Build Fails
- Check the Vercel build logs
- Make sure `npm run build` works locally
- Check for TypeScript errors

### Site Not Updating
- Vercel redeploys automatically on git push
- Check the "Deployments" tab in Vercel dashboard
- Force redeploy: Deployments → ⋯ → Redeploy

### Images Not Loading
- Images must be in `public/` directory
- Use `/images/...` paths (starting with /)
- Check image file names match exactly (case-sensitive)

## 📚 Next Steps

1. **Add Real Content**: Replace sample projects with your work
2. **Add Images**: High-quality project screenshots
3. **Customize Design**: Adjust colors, fonts in Tailwind config
4. **Add More Features**: 
   - Blog section
   - Case study pages
   - Resume download
   - Email integration for contact form
5. **SEO**: Add Open Graph images, update meta descriptions

## 🎯 Continuous Deployment

Every time you push to GitHub, Vercel automatically:
- Builds your site
- Runs tests
- Deploys if successful
- Updates your live site

Just code and push! 🚀

## 💡 Tips

- Use branch previews for testing changes
- Create a `develop` branch for work-in-progress
- Main branch = production = live site
- Vercel gives you preview URLs for every PR/commit

