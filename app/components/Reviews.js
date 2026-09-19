"use client";

import { useState } from "react";

const INITIAL_REVIEWS = [
  {
    name: "Muhammad Kashif",
    meta: "Member since 2023 · Gulgasht",
    text: "Cleanest and most disciplined gym I've trained at in Multan. Equipment is well maintained and the trainers actually correct your form.",
  },
  {
    name: "Dr. Rabia Farooq",
    meta: "Member · 18 months",
    text: "Coach Ayesha helped me rebuild proper posture after a long recovery. Clean facility, respectful crowd, great scheduling.",
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  async function handleViewMore() {
    if (loaded) return;
    setLoading(true);
    try {
      const res = await fetch("/api/reviews");
      const data = await res.json();
      setReviews((prev) => [...prev, ...data.reviews]);
      setLoaded(true);
    } catch (e) {
      // Fail quietly — initial reviews still show
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="reviews" className="py-16 px-4 sm:px-6 bg-surface">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-accent text-xs uppercase tracking-widest font-semibold">
              Reviews
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-text mt-1">
              What our members say
            </h2>
          </div>
          <span className="text-accent font-display font-semibold text-lg">4.9★ · 141 reviews</span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="min-w-[280px] sm:min-w-[320px] snap-start rounded-2xl bg-base border border-border p-5 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-surfaceHigh flex items-center justify-center text-xs font-semibold text-accent">
                  {r.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-text">{r.name}</p>
                  <p className="text-xs text-muted">{r.meta}</p>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>

        {!loaded && (
          <button
            onClick={handleViewMore}
            disabled={loading}
            className="self-start text-sm text-accent hover:text-accentDark font-medium disabled:opacity-50"
          >
            {loading ? "Loading..." : "View more reviews"}
          </button>
        )}
      </div>
    </section>
  );
}
