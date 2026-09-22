"use client";

import { useEffect, useState } from "react";

export default function Plans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/plans")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setPlans(data.plans || []);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="plans" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="flex flex-col gap-2 max-w-md">
            <span className="text-accent text-xs uppercase tracking-widest font-semibold">
              Membership
            </span>
            <h2 className="font-display uppercase text-3xl sm:text-4xl text-text">
              Membership Rates
            </h2>
          </div>
          <p className="text-muted text-sm max-w-sm">
            Explore our affordable membership rates for unlimited access to
            coaching sessions and the full training floor.
          </p>
        </div>

        {loading ? (
          <p className="text-sm text-muted">Loading plans…</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const isOpen = openId === plan.id;
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl bg-surface border p-6 flex flex-col gap-4 ${
                    plan.popular ? "border-accent" : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold uppercase tracking-wide">
                      Most popular
                    </span>
                  )}

                  <span className="font-display text-3xl text-accent/40">{plan.num}</span>

                  <div>
                    <h3 className="font-display uppercase text-xl text-text">
                      {plan.name}
                    </h3>
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

                  <button
                    onClick={() => setOpenId(isOpen ? null : plan.id)}
                    className="self-start text-sm text-accent hover:text-accentDark font-medium"
                  >
                    {isOpen ? "View less" : "View details"}
                  </button>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <p>
                      <span className="text-text font-display text-2xl">
                        {plan.price}$
                      </span>
                      <span className="text-muted text-xs"> {plan.period}</span>
                    </p>
                    <a
                      href="#contact"
                      className="rounded-full bg-accent hover:bg-accentDark text-white text-sm font-semibold px-5 py-2.5 transition-colors"
                    >
                      Buy
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
