# Debanjan Mukherjee — Portfolio

A modern, responsive developer portfolio built with **React (Vite)** and **Tailwind CSS**.

## Tech stack
- React 18 (functional components + hooks)
- Vite (fast dev server + build)
- Tailwind CSS (utility-first styling)
- Deployed via GitHub Pages

## Project structure
```
Portfolio/
├─ public/                # Static assets (place CV PDF, images here)
├─ src/
│  ├─ components/         # Reusable UI components
│  │  ├─ Navbar.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Section.jsx
│  │  ├─ About.jsx
│  │  ├─ Skills.jsx
│  │  ├─ Experience.jsx
│  │  ├─ Projects.jsx
│  │  ├─ Education.jsx
│  │  ├─ Achievements.jsx
│  │  ├─ Contact.jsx
│  │  └─ Footer.jsx
│  ├─ data/portfolio.js   # All resume content (single source of truth)
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
└─ package.json
```

## Getting started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the dev server
```bash
npm run dev
```
Open the URL printed in the terminal (typically http://localhost:5173).

### 3. Build for production
```bash
npm run build
```
The optimized output is generated in `dist/`.

### 4. Preview the production build
```bash
npm run preview
```

## Tailwind CSS setup (already wired up)
This project already includes:
- `tailwind.config.js` with `content` paths covering `index.html` and `src/**/*.{js,jsx}`.
- `postcss.config.js` loading `tailwindcss` and `autoprefixer`.
- `src/index.css` with the three Tailwind directives (`@tailwind base/components/utilities`).

If you ever start a fresh project, install Tailwind with:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Editing your content
All resume data lives in [src/data/portfolio.js](src/data/portfolio.js). Update name, links, skills, experience, projects, education, and achievements there — no need to touch component files.

To replace the CV link, drop your `cv.pdf` into `public/` and update `profile.cvUrl` in `src/data/portfolio.js` to `'/cv.pdf'`.

## Deploy to GitHub Pages

### Option A — Using `gh-pages` (recommended, already configured)

1. Create a new GitHub repository (e.g., `portfolio`).
2. Initialize git and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. Update `package.json`:
   - Set `"homepage": "https://<your-username>.github.io/<your-repo>"`.
4. Update `vite.config.js`:
   - For a **project site** (`username.github.io/repo`), set `base: '/<your-repo>/'`.
   - For a **user site** (`username.github.io`), set `base: '/'`.
5. Deploy:
   ```bash
   npm run deploy
   ```
   This builds the site and pushes `dist/` to the `gh-pages` branch.
6. In GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `gh-pages` / `(root)`**. Save.
7. Visit `https://<your-username>.github.io/<your-repo>/`.

### Option B — GitHub Actions
Create `.github/workflows/deploy.yml` with a workflow that runs `npm ci && npm run build` and publishes `dist/` using `actions/deploy-pages`. Then in **Settings → Pages**, choose **GitHub Actions** as the source.

## Notes
- Smooth scrolling is enabled via `html { scroll-behavior: smooth; }` in `index.css`.
- Animations (`fade-in`, `fade-up`) are defined in `tailwind.config.js`.
- Replace placeholder email, LinkedIn, and GitHub URLs in `src/data/portfolio.js`.
