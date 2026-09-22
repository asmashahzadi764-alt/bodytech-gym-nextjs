"use client";

import { useEffect, useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function loadReviews() {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        if (!cancelled) setReviews(data.reviews || []);
      } catch (e) {
        // Leave reviews empty on failure — section still renders gracefully
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    loadReviews();
    return () => {
      cancelled = true;
    };
  }, []);

  const visible = showAll ? reviews : reviews.slice(0, 2);

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 bg-surface">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-accent text-xs uppercase tracking-widest font-semibold">
              Reviews
            </span>
            <h2 className="font-display uppercase text-3xl sm:text-4xl text-text mt-1">
              What Our Members Say
            </h2>
          </div>
          <span className="text-accent font-display text-lg">4.9★ · 141 reviews</span>
        </div>

        {loading ? (
          <p className="text-sm text-muted">Loading reviews…</p>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
            {visible.map((r, i) => (
              <div
                key={i}
                className="min-w-[280px] sm:min-w-[320px] snap-start rounded-2xl bg-base border border-border p-5 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-surfaceHigh flex items-center justify-center text-accent">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.6L22 9.3l-5 4.9 1.2 7-6.2-3.6-6.2 3.6 1.2-7-5-4.9 7.1-.7z" />
                    </svg>
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
        )}

        {!loading && !showAll && reviews.length > 2 && (
          <button
            onClick={() => setShowAll(true)}
            className="self-start text-sm text-accent hover:text-accentDark font-medium"
          >
            View more reviews
          </button>
        )}
      </div>
    </section>
  );
}
