# Habesh Table Website

A modern, mobile-first restaurant site for an Ethiopian/Eritrean cuisine concept built with **Next.js + TypeScript**.

## Features

- Responsive pages: Home, Menu, About, Locations/Hours, Reservations
- Sticky navigation and footer
- SEO metadata + OpenGraph tags
- Accessible forms and keyboard-focus styles
- Menu data sourced from JSON categories (Appetizers, Entrees, Drinks)
- Reservation form posting to a placeholder API endpoint with success/error UI
- Contact details with embedded map placeholder

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Production build

```bash
npm run build
npm run start
```

## Deploy

### Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Keep defaults for Next.js settings and deploy.

### Deploy to another platform

- Ensure Node.js 18.17+ is available.
- Run `npm run build` to generate optimized output.
- Start with `npm run start` and expose port `3000`.
