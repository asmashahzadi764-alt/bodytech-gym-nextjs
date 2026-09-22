"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setPhotos(data.photos || []);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-2 mx-auto">
          <span className="text-accent text-xs uppercase tracking-widest font-semibold">
            Gallery
          </span>
          <h2 className="font-display uppercase text-4xl sm:text-5xl text-text">
            Inside <span className="text-accent">BodyTech</span> Gym
          </h2>
          <p className="text-muted text-sm max-w-md mt-1">
            A real look at the training floor, equipment, and coaching sessions.
          </p>
        </div>

        {loading ? (
          <p className="text-sm text-muted text-center">Loading gallery…</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border hover:border-accent transition-colors group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-base/10 to-transparent" />
                <p className="absolute bottom-0 left-0 right-0 p-4 font-display uppercase text-sm sm:text-base text-text tracking-wide">
                  {photo.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
