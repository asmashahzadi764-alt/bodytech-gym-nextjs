import { NextResponse } from "next/server";

// Paraphrased from real Google reviews for BodyTech Gym & Fitness Center,
// Multan (public Google Business profile) — rewritten in our own words
// rather than quoted, and shown without invented reviewer names since the
// original authors' names weren't part of the data we pulled.
const REVIEWS = [
  {
    name: "Google Review",
    meta: "Verified member",
    text: "My personal trainer plans every session carefully and even reviews my meals to keep my diet plan on track — genuinely invested in my progress.",
  },
  {
    name: "Google Review",
    meta: "Verified member · 1 year",
    text: "Best gym in Multan. Trainers are cooperative, help correct your form on the machines, and I've stayed consistent here for a full year.",
  },
  {
    name: "Google Review",
    meta: "Verified member",
    text: "Trainers are knowledgeable and supportive, and the gym floor is always clean and well organised.",
  },
  {
    name: "Google Review",
    meta: "Verified member",
    text: "Professional staff, strong hygiene standards, and a motivating atmosphere for every fitness level.",
  },
  {
    name: "Google Review",
    meta: "Verified member · 2 years",
    text: "Training here for two years now — Coach Fatima and Coach Mahrukh are fantastic, easily some of the best trainers in the city.",
  },
];

export async function GET() {
  return NextResponse.json({ reviews: REVIEWS });
}
