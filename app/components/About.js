"use client";

import { useState } from "react";
import Image from "next/image";

const STATS = [
  { value: "500+", label: "Members Trained" },
  { value: "10+", label: "Certified Coaches" },
  { value: "4.9★", label: "Average Rating" },
];

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-surface">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-border order-2 md:order-1">
          <Image
            src="/images/about-trainer.jpg"
            alt="Coach at BodyTech Gym Multan"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 order-1 md:order-2">
          <span className="text-accent text-xs uppercase tracking-widest font-semibold">
            About BodyTech
          </span>
          <h2 className="font-display uppercase text-3xl sm:text-4xl leading-tight text-text">
            Pushing your <span className="text-accent">limits</span> further
          </h2>
          <p className="text-muted leading-relaxed">
            BodyTech Gym & Fitness Center was built for people who take their training
            seriously — clean equipment, certified coaches, and a floor plan designed
            around real workouts, not just Instagram corners.
          </p>

          {expanded && (
            <p className="text-muted leading-relaxed">
              Since opening, BodyTech has grown into one of Gulgasht Colony&apos;s most
              trusted training spaces, offering strength training, functional fitness,
              and dedicated coaching for both beginners and experienced lifters. Every
              session is backed by proper form correction, progress tracking, and a
              clean, well-ventilated training floor.
            </p>
          )}

          <button
            onClick={() => setExpanded((v) => !v)}
            className="self-start inline-flex items-center gap-1.5 text-sm text-accent hover:text-accentDark font-medium"
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

          <div className="grid grid-cols-3 gap-3 pt-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-base border-l-2 border-accent p-4"
              >
                <p className="font-display text-2xl text-accent">{s.value}</p>
                <p className="text-xs text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
