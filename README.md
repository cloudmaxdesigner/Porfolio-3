# Mugen — design studio site

A React + TypeScript + Vite rebuild of the Mugen Framer project's home page.

```sh
npm install
npm run dev       # http://localhost:5173
npm run build     # typecheck + production build
```

## Structure

| Path | What's there |
| --- | --- |
| `src/styles/tokens.css` | Framer colour styles and text-style sizes as CSS custom properties, including the responsive breakpoints (≥1200 desktop, 768–1199 tablet, <768 phone). |
| `src/styles/typography.css` | One `.t-*` class per text style, used through `<Text variant="…">`. |
| `src/styles/fonts.css` | Inter Display 600, self-hosted from the `inter-ui` package. |
| `src/components/` | One component per Framer component (Primary Link, Pricing Card, Testimonial Slider, …), each with a CSS module. |
| `src/sections/` | The home page sections, in page order. |
| `src/data/content.ts` | All copy and the sample CMS collections (projects, articles, FAQs). |
| `src/data/placeholders.ts` | Local SVG placeholders for the image assets that weren't in the export. |

Framer variants are React state: hover variants use `useHover`; the menu, toggles, accordions,
testimonial slider, email menu and team card are stateful components. Third-party Framer
modules are replaced with `@number-flow/react` (Number Flow / Animated Number Counter), `lenis`
(smooth scroll) and `@phosphor-icons/react` (icons). The rest are reimplemented in
`src/components` (ticker, parallax image, accordion, local-time location, copy-to-clipboard).

## Still to do

- **Assets**: portraits, project thumbnails, client logos and the hero video poster are
  generated placeholders. Drop real files into `public/` and update `src/data/content.ts`.
  The hero video still points at its Cloudinary URL.
- **Nav & Footer**: the Framer layout template wasn't in the export; `SiteHeader` and
  `SiteFooter` are minimal reconstructions from the Overlay menu's contents.
- **Not built** (not used on the home page): Contact Form / Book call (Cal.com embed,
  phone input), Newsletter, Studio Image Slider, Big Testimonial, More Project Nav Item,
  Client Logo, Project Page Info, Approach number, Text Cycle.
- The FAQ copy and CMS entries in `content.ts` are drafts to replace with real content.
