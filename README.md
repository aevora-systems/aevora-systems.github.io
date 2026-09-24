# AEVORA Website — v0.6.0 (Astro static + first-party SEO/GEO knowledge cluster)

Official deployment target: **https://aevora-systems.github.io/**. GitHub organization: https://github.com/aevora-systems.

## Purpose

A production-oriented migration of v0.4.2 into Astro. It preserves the biological Canvas organism, scroll evolution, starfield, visual theme and public company copy. Pages now share Header, Footer, BaseLayout and SEOHead; static page bodies live in `src/content/pages/` so no unnecessary React runtime is shipped. The animation remains the original isolated browser JavaScript (`public/site.js`) rather than being silently rewritten.

## Local development

Requires Node.js 22.12+ (GitHub workflow uses Node.js 24).

```sh
npm install
npm run check:source
npm run dev
npm run build
node scripts/validate-built.mjs
npm run preview
```

The first successful `npm install` will create `package-lock.json`. **Commit it** and then change the workflow to `npm ci` for reproducible deployments. Do not invent a lockfile by hand.

## GitHub Pages deployment

The workflow explicitly grants the `pages: write` and `id-token: write` permissions required by `actions/deploy-pages`.

1. In the **AEVORA** organization, create the **public** repository named exactly `aevora-systems.github.io`.
2. Upload or push **the contents of this project folder** to the repository root (not the outer ZIP folder).
3. Push to `main`.
4. In repository **Settings → Pages**, set build/deployment source to **GitHub Actions**.
5. Watch **Actions → Publish AEVORA website**. A successful run should publish at https://aevora-systems.github.io/.
6. Confirm canonical links and sitemap use this origin. GitHub Pages may take time to become publicly available.

Do not create a CNAME until an actual domain is purchased and configured. To move to a custom domain later, configure Pages/DNS, add `public/CNAME`, and set `PUBLIC_SITE_URL` in the build environment to the verified HTTPS origin.

## SEO / GEO foundation

- Unique title and description for each page; canonical absolute URLs.
- Open Graph / Twitter metadata with the existing brand asset.
- JSON-LD Organization, WebSite, WebPage, Person relationship and carefully scoped DefinedTerm entities.
- Static sitemap and robots.txt (including OAI-SearchBot); diagnostics and 404 excluded from sitemap.
- Human-readable definitions under `/knowledge/`, not mass-produced keyword content.
- Founder explicitly named: Jeremiah Wong Zhi Qi. No fabricated email, postal address, legal registration, partners, metrics, or launch claims.
- Future research archive: publish only real, dated and evidence-backed research; this release creates no imaginary results.

## Known limits before public launch

- Public pilot form remains disconnected; it **does not submit**.
- No official domain or company email yet; the temporary GitHub Pages URL is canonical until a custom domain is configured.
- Site is public on GitHub Pages; do not put private business/organism code, credentials, internal research, or confidential documents in the repository.
- Runtime animations run in-browser. Keep the visitor's Reduce Motion option. Source animation JS is preserved from v0.4.2 and remains a next-stage TypeScript migration candidate.
- Hosting/deployment for GitHub Pages must be completed and confirmed in the owner's GitHub account; packaging a repo is not deployment.

## Why no Electron or backend?

GitHub Pages serves prerendered HTML/CSS/JS. Astro produces exactly that. The future customer organism console and backend should be separately hosted when needed.

## v0.6 release notes

Five original explanation pages are linked under `/knowledge/`; three were added in v0.6. The JSON-LD graph describes only public, visible facts. The build audit checks canonical coverage, unique titles/descriptions, H1, JSON-LD validity, internal links, sitemap parity and supporting assets. See `docs/SEO_GEO_STRATEGY.md` for content boundaries and `docs/SEARCH_CONSOLE_SETUP.md` for the owner-only verification steps. No claim is made about ranking, indexing, AI citations, customer deployments or experimental results.
