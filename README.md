# BodyTech Gym & Fitness Center — Website

Next.js website for BodyTech Gym & Fitness Center, Gulgasht Colony, Multan.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000


## What's inside

- `app/page.js` — the single-page site (Hero, About, Plans, Trainers, Gallery, Reviews, Schedule, Contact)
- `app/components/` — one component per section
- `app/api/trial-booking/route.js` — **POST** endpoint that saves trial booking form submissions to `data/trial-bookings.json`. You can check submissions any time by visiting `/api/trial-booking` in your browser (GET request).
- `app/api/schedule/route.js` — **GET** endpoint returning the weekly class schedule as JSON
- `app/api/reviews/route.js` — **GET** endpoint returning extra member reviews, loaded when someone clicks "View more reviews"

## Notes

- Fully responsive: tested layout logic for mobile, tablet, and desktop breakpoints (Tailwind `sm:`, `lg:`).
- The Google Map embed is styled with a CSS filter to match the dark theme (see `.map-frame` in `app/globals.css`).
- Trial booking data is stored in a local JSON file for now — fine for a class assignment/demo. For a real production site, swap `app/api/trial-booking/route.js` to write to a real database instead of the JSON file.
