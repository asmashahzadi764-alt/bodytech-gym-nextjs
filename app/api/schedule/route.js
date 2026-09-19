import { NextResponse } from "next/server";

const SCHEDULE = [
  { day: "Mon / Wed / Fri", time: "6:30 AM", name: "Morning Strength Club" },
  { day: "Tue / Thu / Sat", time: "6:00 PM", name: "Conditioning & HIIT" },
  { day: "Mon – Sat", time: "8:00 AM – 8:00 PM", name: "Open Gym Floor" },
  { day: "Sat", time: "11:00 AM", name: "Women's Fitness Session" },
];

export async function GET() {
  return NextResponse.json({ schedule: SCHEDULE });
}
