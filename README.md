# Settle Panama — Vite + Tailwind

This is a Vite + React + Tailwind version of the Settle Panama landing SPA.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Asset placement

Put/replace your production assets here:

```text
public/assets/logo.svg
public/assets/images/hero.webp
public/assets/images/living.jpg
```

The app references them through `src/lib/assets.js`, using `import.meta.env.BASE_URL` so they work on GitHub Pages project URLs.

Recommended image names:

- `hero.webp` — homepage hero background. Large landscape image, around 1600×1000 or larger.
- `living.jpg` — “Already in Panama” split-section image. Landscape image, around 1400×900 or larger.
- `logo.svg` — Settle Panama logo with transparent background.

If you use different filenames, update `src/lib/assets.js`.

## GitHub Pages deployment

A GitHub Actions workflow is included at:

```text
.github/workflows/deploy.yml
```

Steps:

1. Push this project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main`; the workflow will build and deploy.

The Vite `base` is automatically set to `/<repo-name>/` when deployed through GitHub Actions. For a custom domain or user/organization page, set the build env var `VITE_BASE=/` or edit `vite.config.js`.

## Notes

- The contact floating widget is implemented in React state, so it opens/closes without the previous missing-script issue.
- Internal landing anchors and SPA pages are separated:
  - Pages: `#landing`, `#about`, `#pricing`, `#contact`, `#templates`
  - Landing sections: `#location`, `#living`, `#relocate`, `#consultation`


## Required image assets

Place or replace the production assets here:

```text
public/assets/logo.svg
public/assets/images/hero.webp
public/assets/images/living.jpg
public/assets/images/map-card.jpg
```

The React app references these through `src/lib/assets.js`.
