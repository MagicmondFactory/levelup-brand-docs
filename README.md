# LevelUp Media — Static Brand Documentation Manual

A pure static reference manual (HTML5, CSS3, vanilla JavaScript) built for designers, developers, agencies, and partners building LevelUp Media communications.

---

## 🎯 Architecture & Design Philosophy

This site is built as a **reference manual for people who have to build things**, not a marketing landing page. Inspired by top-tier brand documentation systems:

- **Dropbox (`brand.dropbox.com`)**: Multi-page real routes (`/logo`, `/color`, `/typography`), quiet directory homepage, palette split into named categories with contrast rules & click-to-copy, large tight display typography.
- **IBM (`ibm.com/design/language`)**: IBM-style left tree navigation with persistent route highlighting, mobile drawer, versioning footer (`v1.0 · Last updated September 2026`).
- **Spotify (`developer.spotify.com/documentation/design`)**: Unambiguous rule statements, side-by-side Do / Don't visual comparison matrices, inline download badges next to rules.
- **Mailchimp (`mailchimp.com/about/brand-assets`)**: Plain, human sentences, named colors with personality, explicit "Please do / Please don't" rules.

---

## 📁 Directory Structure

```
e:\levelup-brand-docs/
├── index.html                   Overview — Documentation Index
├── foundation/
│   └── index.html               01 / Story, Mission, Vision, 7 Positioning Pillars
├── voice/
│   └── index.html               02 / Tone of Voice, 5 Principles, Say/Don't Say Matrix
├── logo/
│   └── index.html               03 / Wordmark, U Symbol, Clearspace, Misuse (Do/Don't)
├── color/
│   └── index.html               04 / Blue Orchid, Electric Green ramps, Greys, Contrast Matrix
├── typography/
│   └── index.html               05 / Radio Canada Big, Geist, Space Grotesk, Type Scale
├── audience/
│   └── index.html               06 / Stakeholders, Buyers vs. Influencers, Markets
├── applications/
│   └── index.html               07 / Digital UI, Social Cards, Stationery, Email Signatures
├── downloads/
│   └── index.html               08 / Complete Asset Index Table & Drive Links
├── css/
│   └── style.css                Core CSS Design System & Hairline Layout
├── js/
│   ├── main.js                  Navigation, Mobile Drawer, Clipboard Toast, Search Modal
│   └── search-index.js          Static Instant Search Dataset
├── assets/
│   └── logos/
│       ├── LEVELUP.svg          Primary Vector Wordmark
│       ├── U.svg                Standalone U Icon Mark
│       └── UP.svg               Secondary Badge Mark
└── README.md                    Local setup & Netlify deployment instructions
```

---

## 💻 Local Usage

No build step, framework, or dependencies required!

### Option 1: Direct File Opening
Simply open `e:\levelup-brand-docs\index.html` in any modern Web Browser (Chrome, Edge, Safari, Firefox).

### Option 2: Local HTTP Server
Run any simple static server in the root directory:

```bash
# Using Node.js npx serve
npx serve e:\levelup-brand-docs -p 8080

# Or Python 3
cd e:\levelup-brand-docs
python -m http.server 8080
```
Then visit `http://localhost:8080/`.

---

## 🚀 Deployment (Netlify / Vercel / GitHub Pages)

### Drag-and-Drop to Netlify
1. Log in to [Netlify](https://app.netlify.com/).
2. Drag the entire `e:\levelup-brand-docs` folder directly into Netlify's **"Deploys"** zone.
3. Your site will instantly deploy with zero build configuration!

---

## 📝 Updating Guidelines & Search Index

1. **Adding / Modifying Content**: Edit the corresponding `index.html` file inside the topic subfolder (e.g. `color/index.html`).
2. **Updating Search Engine**: When adding new topics or keywords, update the dataset inside `js/search-index.js`.
3. **Updating Assets**: Place new vector files inside `assets/logos/` and update `downloads/index.html`.
