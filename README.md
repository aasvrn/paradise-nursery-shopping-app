# Paradise Nursery – Shopping Cart App

A front‑end shopping cart for a houseplant store. Built with React + Vite, using Redux Toolkit for cart state and React Router for navigation. The project follows the 50‑point (19 tasks) rubric and is deployable on GitHub Pages.

- Demo: `https://aasvrn.github.io/paradise-nursery-shopping-app/`
- Repository: `https://github.com/aasvrn/paradise-nursery-shopping-app`

## Features

- Landing page with background image, company name, description paragraph, and a “Get Started” button linking to the product listing.
- Header on products and cart pages with navigation and a `🛒` icon showing the total items (from Redux).
- Product listing shows 6 unique plants grouped into 3 categories: Aromatic, Medicinal, and Succulents.
- Each product card includes thumbnail, name, price, and an Add to Cart button.
  - After clicking: button becomes disabled, item is added to the cart, and the cart icon count updates.
- Shopping cart shows total plant count, total cost, and a card per plant type (thumbnail, name, unit price, per‑type total) plus `+`, `-`, `Delete`, `Checkout (Coming Soon)`, and `Continue Shopping`.

## Tech Stack

- `React` 19 + `Vite` 7
- `React Router` 7 (with `basename` for GitHub Pages subpath)
- `Redux Toolkit` + `React Redux`
- Local catalog images (`public/plants/*.svg`) for fast and stable loading

## Project Structure

```
src/
  components/       # Header, ProductCard, CartItem
  pages/            # Landing, Products, Cart
  store/            # cartSlice + store
  data/             # plants.js (catalog data)
  utils/            # image utils (assetUrl, isRemote, etc.)
public/
  plants/           # local image assets
```

## Getting Started

- Prerequisites: Node.js 18+ and npm.
- Install: `npm install`
- Dev server: `npm run dev`
  - Because Vite uses a `base`, local URL is typically `http://localhost:5173/paradise-nursery-shopping-app/`.

## Build & Deploy (GitHub Pages)

Deployment is preconfigured.

- Build: `npm run build`
- Deploy: `npm run deploy` (publishes `dist` with `gh-pages`)
- `vite.config.js` sets `base: '/paradise-nursery-shopping-app/'`.
- `BrowserRouter` uses `basename` from `import.meta.env.BASE_URL`.
- `public/404.html` redirects deep links to `index.html?redirect=...`, and `index.html` restores the path so refreshing URLs like `/products` doesn’t return 404.

## Troubleshooting

- 404 on refresh at GitHub Pages:
  - Ensure Pages is configured to serve from the `gh-pages` branch (folder `/root`).
  - Wait 1–2 minutes for propagation after deploy.
  - As an alternative, switch to `HashRouter` so URLs become `/#/products` which always survive refresh. This project uses `BrowserRouter` + 404 fallback to keep clean URLs.

## Grading Rubric Mapping

- GitHub: public repo + proper Redux structure.
- Landing: background, paragraph, company name, Get Started button.
- Products: 6 plants (thumbnail, name, price), 3 categories, Add to Cart behavior that updates cart icon and disables button.
- Header: present on products & cart, dynamic cart count, page navigation.
- Cart: total plants, total cost, per‑type card (thumbnail, name, unit price), `+`/`-`/`Delete`, `Checkout` (Coming Soon), `Continue Shopping`.

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you’d like to change.

## Image Assets

Catalog images are lightweight local SVGs in `public/plants/`. If you prefer real photos, add JPG/PNG files there and update `src/data/plants.js`.
