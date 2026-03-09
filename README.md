# ThinkMindLabs — Next.js Website

A complete Next.js website for ThinkMindLabs AI SaaS Platform, built on the Nitro Framer theme.

## Pages

- `/` — Home (hero, products showcase, features, CTA)
- `/products` — Products (MindOS, AquaFlow, Snackify, AgentForge, VectorDB + Pricing)
- `/ai-stack` — AI Stack (foundation models, inference, data, MLOps, cloud layers)
- `/about` — About (mission, team, values, milestones)
- `/notes` — Notes/Blog (filterable posts, newsletter signup)
- `/contact` — Contact (contact form, office info, socials)

## Tech Stack

- **Framework**: Next.js 14 (App Router compatible, static export)
- **Styling**: Pure CSS with CSS variables (no Tailwind needed)
- **Fonts**: Lanecar Headline (display), Manrope (body), DM Mono (code)
- **Theme**: Dark, Nitro Framer-inspired with grain overlay, floating cards, orange accent

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Build for Production

```bash
npm run build
```

This generates a static `out/` directory ready for deployment.

## 🚀 Deploying to Hostinger

### Option 1: Static Export (Recommended for Hostinger Shared Hosting)

1. Run `npm run build` locally
2. Upload the entire contents of the `out/` folder to your Hostinger `public_html` directory via FTP or File Manager
3. The `.htaccess` file in `public/` will be copied to `out/` automatically — ensure it's present for routing

### Option 2: Hostinger VPS / Node.js Hosting

1. Upload entire project to your VPS
2. SSH into your server:
   ```bash
   npm install
   npm run build
   npm start
   ```
3. Use PM2 for process management:
   ```bash
   npm install -g pm2
   pm2 start npm --name "thinkmindlabs" -- start
   pm2 save
   pm2 startup
   ```
4. Point your domain `thinkmindlabs.com` to port 3000 via Nginx reverse proxy

### Option 3: Hostinger Node.js App

1. Go to Hostinger hPanel → Node.js Apps
2. Create new app, set entry point to `node_modules/.bin/next`
3. Set startup command: `npm run start`
4. Upload files via Git or File Manager

## Custom Domain Setup (Hostinger)

1. In hPanel → Domains → point `thinkmindlabs.com` to your hosting
2. Enable SSL/HTTPS via hPanel → SSL → Let's Encrypt
3. Update `next.config.js` if using a base path

## Environment Variables

No environment variables required for the basic website.

For contact form functionality, add:
```
NEXT_PUBLIC_CONTACT_EMAIL=hello@thinkmindlabs.com
```

## Customization

- **Colors**: Edit CSS variables in `styles/globals.css` under `:root`
- **Content**: Edit page files in `pages/`
- **Navigation**: Edit `components/Layout.js`
- **Fonts**: Already loaded from Google Fonts + Framer CDN in `pages/_document.js`
