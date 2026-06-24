# Pagistry — Marketing Site

The marketing landing page for **Pagistry**, a no-code page/site builder with a
built-in CMS and an AI that generates sections, components, and entire pages.

A bold, indigo-forward single page that walks visitors from the headline pitch
through the product, the workflow, FAQs, and a contact form — plus standalone
legal pages.

## Highlights

- **Hero** — oversized display headline, gradient-free indigo band with floating
  UI cards.
- **Product showcase** — an animated, skeleton-state mock of the Pagistry editor
  (toolbar, block library, canvas) that overlaps the hero.
- **Bento feature grid**, **3-step "how it works"**, **two-column FAQ**, and a
  final call-to-action band.
- **Contact form** with inline validation and a success state.
- **Legal pages** — Privacy, Terms, and GDPR.
- **Motion** — scroll-reveal animations, native (zero-JS, same-origin) view
  transitions between pages, and a branded overlay when navigating to the app.
- **Responsive** down to mobile, with an animated slide-out menu.
- Fully respects `prefers-reduced-motion`.

## Tech stack

- [Astro](https://astro.build) (static output, multi-page)
- SCSS design system (tokens, base, buttons, motion partials)
- Vanilla TypeScript for the small bits of interactivity — no UI framework

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:4321)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  components/   # Hero, Nav, Features, EditorMock, Faq, Contact, Footer, …
  layouts/      # Layout (base) and Legal (privacy/terms/gdpr wrapper)
  pages/        # index, privacy, terms, gdpr
  styles/       # global.scss + _tokens / _base / _buttons / _motion / _variables
  config.ts     # SIGNUP_URL — where every "Start free" CTA points
public/         # static assets (favicon, …)
```

## Configuration

Every "Start free" / "Start building free" call-to-action points at the value of
`SIGNUP_URL` in `src/config.ts`. Change it in one place to update them all.
