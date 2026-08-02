# Arbaz Shoes — React E-commerce Website

A footwear e-commerce site for men, women & kids, built with **React + Vite + Tailwind CSS**.
Layout and flow are inspired by popular Pakistani shoe brand sites (category rails, cart,
WhatsApp checkout, testimonials, newsletter) but with fully original branding, copy, and a
new visual identity — not a copy of any real brand's name, logo, or photography.

## Pages
- **Home** — hero, category tiles (Men/Women/Kids), new-in product rails, testimonials, newsletter
- **Shop** (`/shop`, `/shop?cat=Men|Women|Kids`) — filterable product grid (category, type, sort)
- **Product Detail** (`/product/:id`) — gallery, color/qty picker, add to cart, related products
- **Cart** (`/cart`) — line items, quantity edit, WhatsApp checkout link
- **About** (`/about`) — brand story + stats
- **Contact** (`/contact`) — contact form (opens email client) + WhatsApp + business info
- **Login / Sign Up** (`/login`) — demo auth UI (client-side only, no backend)
- **404** — fallback page

## Tech
- React 19 + Vite
- React Router v6
- Tailwind CSS (custom brand tokens: colors, Fraunces/Work Sans/IBM Plex Mono fonts)
- Framer Motion (hero entrance animation)
- React Context + useReducer for cart state
- lucide-react for UI icons; small custom SVGs for social/brand icons (Facebook, Instagram,
  LinkedIn, GitHub) since newer lucide-react versions dropped brand logos

## Content & Data
Everything lives in `src/data/products.js`:
- `products` — all product info (name, price, images, colors, description)
- `testimonials` — customer review cards
- `siteInfo` — brand name, contact info, social links, **developer credit links**
  (LinkedIn / GitHub / Portfolio — shown in the footer)

Edit that one file to change products, prices, contact details, or your own links.

## Images
Product/hero images are hotlinked from Unsplash (free-to-use) as placeholders so the site
looks real out of the box. **Before publishing this publicly, replace them with your own
product photography** — just swap the `image` / `gallery` URLs in `products.js`, or point
them at local files in `/public/images/...`.

## Run locally
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Deploy
- **Vercel**: import the folder as a project, framework preset "Vite" — it auto-detects
  `npm run build` and the `dist` output folder.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **Any static host** (Hostinger, cPanel, GitHub Pages): run `npm run build` and upload the
  contents of `dist/` to your web root. Since routing uses React Router, add a rewrite rule
  so all paths fall back to `index.html` (e.g. Netlify `_redirects`: `/* /index.html 200`).

## Notes
- Checkout is a WhatsApp hand-off (no payment gateway wired up) — matches how many small
  Pakistani D2C stores operate today. Swap in a real payment/checkout flow when ready.
- Login/Signup is a UI-only demo; wire it to a real auth backend (e.g. Firebase, Supabase,
  or your own Node/Express API) before using in production.
