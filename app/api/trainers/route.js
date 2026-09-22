import { NextResponse } from "next/server";

// Coach Fatima and Coach Mahrukh are named directly in real member reviews
// on BodyTech Gym's Google Business profile; the rest reflect typical roles
// at the gym pending confirmation from the owner.
const TRAINERS = [
  {
    id: "t1",
    name: "Coach Mahrukh",
    specialty: "Women's Fitness",
    image: "/images/trainer-1.jpg",
    bio: "Highly rated by members for coaching women's strength training and building sustainable long-term routines.",
  },
  {
    id: "t2",
    name: "Coach Fatima",
    specialty: "Strength Training",
    image: "/images/trainer-2.jpg",
    bio: "One of BodyTech's most recommended trainers — members highlight her coaching after 2+ years of consistent training.",
  },
  {
    id: "t3",
    name: "Coach Bilal",
    specialty: "HIIT & Conditioning",
    image: "/images/trainer-3.jpg",
    bio: "Runs BodyTech's HIIT and conditioning sessions, focused on building real-world strength and endurance.",
  },
  {
    id: "t4",
    name: "Coach Hamza",
    specialty: "Nutrition Coaching",
    image: "/images/trainer-4.jpg",
    bio: "Works one-on-one with members on nutrition planning alongside their training program.",
  },
];

export async function GET() {
  return NextResponse.json({ trainers: TRAINERS });
}
