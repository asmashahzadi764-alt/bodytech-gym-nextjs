"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Trainers() {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/trainers")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setTrainers(data.trainers || []);
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
    <section id="trainers" className="py-20 px-4 sm:px-6 bg-surface">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col items-center text-center gap-2 mx-auto">
          <span className="text-accent text-xs uppercase tracking-widest font-semibold">
            Our Team
          </span>
          <h2 className="font-display uppercase text-3xl sm:text-4xl text-text">
            Certified Trainers, Real Results
          </h2>
        </div>

        {loading ? (
          <p className="text-sm text-muted text-center">Loading trainers…</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trainers.map((t) => {
              const isOpen = openId === t.id;
              return (
                <div
                  key={t.id}
                  className="relative rounded-2xl overflow-hidden border border-border aspect-[3/4] group"
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col gap-1">
                    <h3 className="font-display uppercase text-lg text-text leading-none">
                      {t.name}
                    </h3>
                    <p className="text-xs text-accent font-semibold uppercase tracking-wide">
                      {t.specialty}
                    </p>
                    {isOpen && (
                      <p className="text-xs text-muted mt-2 leading-relaxed">{t.bio}</p>
                    )}
                    <button
                      onClick={() => setOpenId(isOpen ? null : t.id)}
                      className="mt-2 self-start text-xs text-white/90 hover:text-accent font-medium underline underline-offset-2"
                    >
                      {isOpen ? "View less" : "View profile"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
