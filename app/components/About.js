"use client";

import { useState } from "react";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-16 px-4 sm:px-6 bg-surface">
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        <span className="text-accent text-xs uppercase tracking-widest font-semibold">
          About BodyTech
        </span>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-text">
          Fitness done properly, in the heart of Gulgasht Colony
        </h2>
        <p className="text-muted leading-relaxed">
          BodyTech Gym & Fitness Center was built for people who take their training
          seriously — clean equipment, certified coaches, and a floor plan designed
          around real workouts, not just Instagram corners.
        </p>

        {expanded && (
          <div className="flex flex-col gap-4 pt-2">
            <p className="text-muted leading-relaxed">
              Since opening, BodyTech has grown into one of Gulgasht Colony&apos;s most
              trusted training spaces, offering strength training, functional fitness,
              and dedicated coaching for both beginners and experienced lifters. Every
              session is backed by proper form correction, progress tracking, and a
              clean, well-ventilated training floor.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-surfaceHigh p-4">
                <p className="font-display font-semibold text-2xl text-accent">4.9★</p>
                <p className="text-xs text-muted mt-1">Average member rating</p>
              </div>
              <div className="rounded-xl bg-surfaceHigh p-4">
                <p className="font-display font-semibold text-2xl text-accent">5AM–11:30PM</p>
                <p className="text-xs text-muted mt-1">Daily, Mon–Sat</p>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setExpanded((v) => !v)}
          className="self-start mt-2 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accentDark font-medium"
        >
          {expanded ? "View less" : "View more"}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
