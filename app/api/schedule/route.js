import { NextResponse } from "next/server";

// Business hours below match BodyTech Gym's real Google Business profile
// (Mon–Sat 5:00 AM–11:30 PM, closed Sundays). Individual class slots are
// indicative and can be updated once the gym confirms its class calendar.
const SCHEDULE = [
  { day: "Mon / Wed / Fri", time: "6:30 AM", name: "Morning Strength Club" },
  { day: "Tue / Thu / Sat", time: "6:00 PM", name: "Conditioning & HIIT" },
  { day: "Mon – Sat", time: "8:00 AM – 8:00 PM", name: "Open Gym Floor" },
  { day: "Sat", time: "11:00 AM", name: "Women's Fitness Session" },
];

const BUSINESS_HOURS = {
  weekdays: "5:00 AM – 11:30 PM",
  weekdayRange: "Monday – Saturday",
  closed: "Sunday",
};

export async function GET() {
  return NextResponse.json({ schedule: SCHEDULE, businessHours: BUSINESS_HOURS });
}
