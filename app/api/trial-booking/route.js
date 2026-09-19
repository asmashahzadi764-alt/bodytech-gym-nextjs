import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "trial-bookings.json");

async function readBookings() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function POST(request) {
  const body = await request.json();

  if (!body?.name || !body?.phone) {
    return NextResponse.json(
      { error: "Name and phone number are required." },
      { status: 400 }
    );
  }

  const bookings = await readBookings();
  bookings.push({
    name: body.name,
    phone: body.phone,
    time: body.time || "",
    submittedAt: new Date().toISOString(),
  });

  await fs.writeFile(DATA_FILE, JSON.stringify(bookings, null, 2), "utf-8");

  return NextResponse.json({ success: true });
}

export async function GET() {
  // Lets the gym owner check submitted trial requests, e.g. by visiting /api/trial-booking
  const bookings = await readBookings();
  return NextResponse.json({ bookings });
}
