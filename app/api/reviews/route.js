import { NextResponse } from "next/server";

const MORE_REVIEWS = [
  {
    name: "Sana Malik",
    meta: "Member since 2024 · Gulgasht",
    text: "Great coaching for beginners. The trainers actually explain why you're doing an exercise, not just counting reps.",
  },
  {
    name: "Hamid Raza",
    meta: "Member · 1 year",
    text: "Best equipment quality in Multan. Never had to wait long for machines even during peak hours.",
  },
  {
    name: "Ayesha Noor",
    meta: "Member · 6 months",
    text: "Loved the women's fitness sessions on Saturdays. Very supportive environment.",
  },
];

export async function GET() {
  return NextResponse.json({ reviews: MORE_REVIEWS });
}
