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

  const entry = {
    name: body.name,
    phone: body.phone,
    time: body.time || "",
    submittedAt: new Date().toISOString(),
  };

  // Best-effort local log, mainly useful during development. The actual
  // notification to the gym owner happens client-side via a mailto link
  // (see ScheduleContact.js) so it works with zero setup after deployment.
  try {
    const bookings = await readBookings();
    bookings.push(entry);
    await fs.writeFile(DATA_FILE, JSON.stringify(bookings, null, 2), "utf-8");
  } catch {
    // Ignore in read-only production environments.
  }

  return NextResponse.json({ success: true });
}

export async function GET() {
  // View locally saved trial requests during development, e.g. by visiting
  // /api/trial-booking. Not reliable after deployment — the mailto link is
  // what actually delivers each booking to the gym owner's inbox.
  const bookings = await readBookings();
  return NextResponse.json({ bookings });
}
