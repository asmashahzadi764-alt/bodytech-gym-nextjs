import { NextResponse } from "next/server";

const PHOTOS = [
  { src: "/images/gallery-1.jpg", alt: "Gym training floor at BodyTech Gym Multan", label: "Training Floor" },
  { src: "/images/gallery-2.jpg", alt: "Free weights and dumbbell rack", label: "Free Weights" },
  { src: "/images/gallery-3.jpg", alt: "Member during a strength training session", label: "Strength Training" },
  { src: "/images/gallery-4.jpg", alt: "Functional fitness and conditioning area", label: "Conditioning Zone" },
  { src: "/images/gallery-5.jpg", alt: "Cardio equipment area", label: "Cardio Area" },
  { src: "/images/gallery-6.jpg", alt: "Personal training session with a coach", label: "Personal Coaching" },
];

export async function GET() {
  return NextResponse.json({ photos: PHOTOS });
}
