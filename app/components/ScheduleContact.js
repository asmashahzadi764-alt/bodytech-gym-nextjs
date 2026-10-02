"use client";

import { useEffect, useState } from "react";

// Change this to whichever email should receive trial-booking requests.
const GYM_CONTACT_EMAIL = "your-email@gmail.com";

export default function ScheduleContact() {
  const [schedule, setSchedule] = useState([]);
  const [businessHours, setBusinessHours] = useState(null);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", time: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  useEffect(() => {
    let cancelled = false;
    fetch("/api/schedule")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          setSchedule(data.schedule || []);
          setBusinessHours(data.businessHours || null);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function buildMailtoLink() {
    const subject = `New trial booking: ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Phone / WhatsApp: ${form.phone}`,
      `Preferred workout window: ${form.time || "Not specified"}`,
    ].join("\n");

    return `mailto:${GYM_CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      // Best-effort local log — see app/api/trial-booking/route.js
      await fetch("/api/trial-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (err) {
      // Ignore — the mailto link below is what actually delivers the request.
    }

    // Opens the visitor's own email app with a pre-filled message to the gym.
    window.location.href = buildMailtoLink();

    setStatus("sent");
    setForm({ name: "", phone: "", time: "" });
  }

  return (
    <section id="schedule" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Schedule */}
        <div className="flex flex-col gap-4">
          <span className="text-accent text-xs uppercase tracking-widest font-semibold">
            Weekly Schedule
          </span>
          <h2 className="font-display uppercase text-3xl sm:text-4xl text-text">
            Coaching Sessions This Week
          </h2>
          {businessHours && (
            <p className="text-xs text-muted -mt-2">
              Open {businessHours.weekdayRange}, {businessHours.weekdays} · Closed {businessHours.closed}
            </p>
          )}

          <button
            onClick={() => setScheduleOpen((v) => !v)}
            className="self-start text-sm text-accent hover:text-accentDark font-medium"
          >
            {scheduleOpen ? "View less" : "View full schedule"}
          </button>

          {scheduleOpen && (
            <div className="flex flex-col gap-2 mt-2">
              {schedule.map((s) => (
                <div
                  key={s.name}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 rounded-lg bg-surface border border-border px-4 py-3"
                >
                  <span className="text-sm text-text font-medium">{s.name}</span>
                  <span className="text-xs text-muted">
                    {s.day} · {s.time}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Map */}
          <div className="map-frame mt-4 rounded-xl overflow-hidden border border-border h-64">
            <iframe
              title="BodyTech Gym location on Google Maps"
              src="https://www.google.com/maps?q=30.2238152,71.4739092&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-1 text-sm text-muted">
            <span className="text-text font-medium">Gulgasht Colony, Multan</span>
            <a href="tel:+923000404070" className="text-accent hover:text-accentDark w-fit">
              +92 300 0404070
            </a>
          </div>
        </div>

        {/* Contact form */}
        <div id="contact" className="rounded-2xl bg-surface border border-border p-6 sm:p-8 flex flex-col gap-4 h-fit">
          <h3 className="font-display uppercase text-2xl text-text">Book Your Free Trial</h3>
          <p className="text-sm text-muted">
            Fill this in and our team will confirm your slot by WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm text-text">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Asad Raza"
                className="rounded-lg bg-surfaceHigh border border-border text-text placeholder:text-muted px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-sm text-text">
                WhatsApp / Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+92 300 0000000"
                className="rounded-lg bg-surfaceHigh border border-border text-text placeholder:text-muted px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="time" className="text-sm text-text">
                Preferred Workout Window
              </label>
              <input
                id="time"
                name="time"
                type="text"
                value={form.time}
                onChange={handleChange}
                placeholder="e.g. Evenings after 6 PM"
                className="rounded-lg bg-surfaceHigh border border-border text-text placeholder:text-muted px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 rounded-full bg-accent hover:bg-accentDark text-white font-display uppercase tracking-wide text-sm px-6 py-3.5 disabled:opacity-60"
            >
              {status === "sending" ? "Booking..." : "Book your trial"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-accent">
                Trial request received — we&apos;ll WhatsApp you shortly to confirm.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please call us directly at +92 300 0404070.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
