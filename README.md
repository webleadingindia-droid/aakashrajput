# Actor & Model Portfolio — Next.js

A multi-page personal portfolio: Home, About, Modeling, Acting, Showreel, Projects, Gallery, Casting Profile, Contact and a custom 404.
Stack: Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide icons. No backend, database or API keys.

## Run locally

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck    # TypeScript check
npm run build        # production build
npm start            # serve the production build
```

## Update your content (one file)

Edit **`src/data/portfolio.ts`**. Every name, bio, contact detail, photo, video and project lives there.
All current values are **placeholders**: none of them are real credits, videos or photographs.

| To change | Edit |
|---|---|
| Name, tagline, domain, hero image | `site` |
| Bio, age, height, languages, skills, journey, portraits | `profile` |
| Email, phone, WhatsApp, Instagram, Facebook, YouTube | `contact` |
| Modeling photographs and categories | `modeling`, `modelingCategories` |
| Acting videos | `actingVideos` |
| Main reel and other video sections | `showreelMain`, `showreelSections` |
| Projects and credits | `projects` |
| Gallery photographs | `gallery` |

### Replace photographs
1. Put your image in the matching folder: `public/images/{hero,portraits,modeling,acting,projects,gallery}/`. Use descriptive names, e.g. `fashion-studio-black-suit.jpg`.
2. In `portfolio.ts`, change the `src` (for helper calls, the file name) to your file, e.g. `"/images/modeling/fashion-studio-black-suit.jpg"`.
3. Write a real `alt` description. Set `orientation` to `portrait` (4:5), `landscape` (3:2) or `square` so the layout reserves the right space.
4. Delete the `.svg` placeholders once replaced.

### Add videos
Paste a YouTube or Vimeo link into the `url` field (e.g. `https://www.youtube.com/watch?v=XXXXXXXXXXX`). With an empty `url`, a "Video coming soon" placeholder is shown instead of a broken player. Add `uploadDate: "YYYY-MM-DD"` to also output VideoObject SEO data (only emitted for real videos).

### Real credits
Each project has `isSample: true`. Remove it (or set `false`) for real entries. To hide all "Sample" tags: `site.showSampleBadges = false`.

## Contact form
There is no server. The form validates input, then opens the visitor's email app with a pre-filled message to `contact.email` (mailto). It does not claim to have sent anything. WhatsApp and Instagram links come from `contact`.

## Casting profile PDF
`/profile` has a **Download profile PDF** button. It opens the browser print dialog; choose **Save as PDF**. The PDF uses the same data as the page.

## SEO checklist
- Set `site.url` to your real domain (used for canonical URLs, sitemap, robots, structured data).
- Replace `public/images/hero/og-image.svg` with a **1200×630 JPG or PNG** and update `site.ogImage` (most social networks do not display SVG previews).
- Sitemap: `/sitemap.xml`. Robots: `/robots.txt`.
- Structured data: Person (all pages), ProfilePage (`/profile`), VideoObject (only for real videos with an `uploadDate`).

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New → Project**, import the repository (framework is auto-detected as Next.js) and click **Deploy**.
3. Add your domain under **Settings → Domains**, then set the same domain in `site.url` and redeploy.

## Structure
```
src/app/            pages, layout, template (page fade), sitemap, robots, not-found
src/components/     layout, home, gallery (filter + lightbox), video, forms, portfolio, ui
src/data/portfolio.ts   ALL editable content
src/lib/            utils, seo, video (YouTube/Vimeo parsing)
public/images/      hero, portraits, modeling, acting, projects, gallery
```

## Visual effects (v2)
Preloader (once per session), Lenis smooth scrolling (`lenis` package), parallax hero, scroll-lit intro text, horizontal-scroll modeling showcase, marquee strips, custom cursor (mouse devices only), magnetic buttons and film grain. All motion is disabled under `prefers-reduced-motion`.
To remove the grain, delete `className="grain"` from `<body>` in `src/app/layout.tsx`. To remove the cursor, delete `<Cursor />` there.
