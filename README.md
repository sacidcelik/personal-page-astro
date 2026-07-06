# personal website — sacidcelik.de

My personal website: [www.sacidcelik.de](https://www.sacidcelik.de)

## Stack

Astro 7 (static output) + Tailwind CSS 4 (CSS-first config in `src/styles/global.css`) + astro-icon. Node 22 (`.nvmrc`).

## Develop & build

```sh
npm install
npm run dev      # local dev server
npm run build    # astro check + static build to dist/
npm run preview  # serve the build locally
```

## Deployment

Pushes to `main` deploy automatically via the Vercel GitHub integration (configured in the Vercel dashboard, no config in this repo). The domain is registered at lima-city with DNS pointing to Vercel; the apex redirects to `https://www.sacidcelik.de`.

The OG image (`public/og-image.png`) is generated with a one-off sharp script — regenerate manually if the portrait or tagline changes.
