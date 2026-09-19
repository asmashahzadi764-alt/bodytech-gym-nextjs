"use client";

import { useState } from "react";
import Image from "next/image";

const TRAINERS = [
  {
    id: "t1",
    name: "Coach Ayesha",
    specialty: "Women's fitness & posture correction",
    image: "/images/trainer-1.jpg",
    bio: "8+ years coaching women's strength training and post-injury posture recovery programs.",
  },
  {
    id: "t2",
    name: "Coach Fatima",
    specialty: "Strength training",
    image: "/images/trainer-2.jpg",
    bio: "Certified strength coach specialising in progressive overload programs for beginners to advanced lifters.",
  },
  {
    id: "t3",
    name: "Coach Bilal",
    specialty: "Functional fitness & conditioning",
    image: "/images/trainer-3.jpg",
    bio: "Runs BodyTech's HIIT and conditioning sessions, focused on building real-world strength and endurance.",
  },
  {
    id: "t4",
    name: "Coach Hamza",
    specialty: "Nutrition & body composition",
    image: "/images/trainer-4.jpg",
    bio: "Works one-on-one with members on nutrition planning alongside their training program.",
  },
];

export default function Trainers() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="trainers" className="py-16 px-4 sm:px-6 bg-surface">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="text-accent text-xs uppercase tracking-widest font-semibold">
            Our Team
          </span>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-text">
            Certified trainers, real results
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((t) => {
            const isOpen = openId === t.id;
            return (
              <div key={t.id} className="rounded-2xl bg-base border border-border overflow-hidden flex flex-col">
                <div className="relative w-full aspect-square">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <h3 className="font-display font-semibold text-text">{t.name}</h3>
                  <p className="text-xs text-accent">{t.specialty}</p>
                  {isOpen && <p className="text-sm text-muted mt-1">{t.bio}</p>}
                  <button
                    onClick={() => setOpenId(isOpen ? null : t.id)}
                    className="mt-auto pt-2 text-sm text-accent hover:text-accentDark font-medium self-start"
                  >
                    {isOpen ? "View less" : "View profile"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
