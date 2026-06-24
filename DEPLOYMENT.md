# Deployment Guide - Vercel

## Prerequisites

1. GitHub account
2. Vercel account (sign up at [vercel.com](https://vercel.com) using GitHub)
3. Project pushed to GitHub repository

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/nbhan21/portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (or `portfolio` if nested)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. **Add Environment Variables** (optional, for contact form)
   - Click "Environment Variables"
   - Add:
     - `RESEND_API_KEY` = `re_xxxxxxxxxxxx`
     - `CONTACT_EMAIL` = `naufalbhanu21@gmail.com`
     - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.vercel.app`

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~1-2 minutes)
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - Project name? `portfolio`
   - Directory? `./`
   - Override settings? `N`

5. **Deploy to production**
   ```bash
   vercel --prod
   ```

## Custom Domain Setup

1. Go to your project on Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `naufalbhanu.dev`)
4. Follow DNS configuration instructions
5. SSL certificate will be auto-provisioned

## Auto-Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy every push to `main` branch (production)
- Create preview deployments for pull requests
- Run builds and show status checks

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for contact form | Optional |
| `CONTACT_EMAIL` | Email to receive contact submissions | Optional |
| `NEXT_PUBLIC_SITE_URL` | Production URL for SEO | Optional |

## Troubleshooting

### Build Fails
- Check build logs in Vercel Dashboard
- Run `npm run build` locally to verify
- Ensure all dependencies are in `package.json`

### Environment Variables Not Working
- Make sure to add them in Vercel Dashboard (Settings → Environment Variables)
- Redeploy after adding variables
- Client-side vars must start with `NEXT_PUBLIC_`

### API Routes Not Working
- Ensure you're on a paid plan (Vercel free tier supports API routes)
- Check function logs in Vercel Dashboard

## Useful Commands

```bash
# Local development
npm run dev

# Build locally
npm run build

# Run tests
npm test

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```
