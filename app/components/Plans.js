"use client";

import { useState } from "react";

const PLANS = [
  {
    id: "monthly",
    name: "Monthly",
    price: "PKR 8,500",
    period: "/ month",
    features: [
      "Full gym floor & functional area access",
      "Locker & shower facility",
      "Baseline fitness assessment",
    ],
    details:
      "Includes one free body composition scan and a guided orientation session with a coach in your first week.",
    popular: false,
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: "PKR 22,500",
    period: "/ 3 months",
    features: [
      "Everything in Monthly",
      "Personalised progress tracking",
      "2 guest passes per month",
    ],
    details:
      "Best value for consistent training — includes a monthly check-in with your coach to adjust your program.",
    popular: true,
  },
  {
    id: "annual",
    name: "Annual",
    price: "PKR 78,000",
    period: "/ year",
    features: [
      "Everything in Quarterly",
      "4 personal training sessions",
      "Priority class booking",
    ],
    details:
      "Our best-value plan for serious, long-term training — includes quarterly body composition scans.",
    popular: false,
  },
];

export default function Plans() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="plans" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="text-accent text-xs uppercase tracking-widest font-semibold">
            Membership
          </span>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-text">
            Simple, transparent pricing
          </h2>
          <p className="text-muted">No hidden registration charges, ever.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLANS.map((plan) => {
            const isOpen = openId === plan.id;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl bg-surface border p-6 flex flex-col gap-4 ${
                  plan.popular ? "border-accent" : "border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-accent text-base text-xs font-semibold uppercase tracking-wide">
                    Most popular
                  </span>
                )}
                <div>
                  <h3 className="font-display font-semibold text-xl text-text">
                    {plan.name}
                  </h3>
                  <p className="mt-1">
                    <span className="text-accent font-display font-semibold text-2xl">
                      {plan.price}
                    </span>
                    <span className="text-muted text-sm"> {plan.period}</span>
                  </p>
                </div>

                <ul className="flex flex-col gap-2 text-sm text-muted">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg
                        className="text-accent shrink-0 mt-0.5"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {isOpen && (
                  <p className="text-sm text-muted bg-surfaceHigh rounded-lg p-3">
                    {plan.details}
                  </p>
                )}

                <div className="flex items-center gap-3 mt-auto pt-2">
                  <button
                    onClick={() => setOpenId(isOpen ? null : plan.id)}
                    className="flex-1 rounded-lg border border-border text-sm text-text px-3 py-2 hover:bg-surfaceHigh transition-colors"
                  >
                    {isOpen ? "View less" : "View details"}
                  </button>
                  <a
                    href="#contact"
                    className="rounded-lg bg-accent hover:bg-accentDark text-base text-sm font-semibold px-4 py-2 transition-colors"
                  >
                    Select
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
