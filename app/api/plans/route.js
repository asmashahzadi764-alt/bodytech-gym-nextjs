import { NextResponse } from "next/server";

const PLANS = [
  {
    id: "monthly",
    num: "01",
    name: "Monthly Pass",
    price: "8,500",
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
    num: "02",
    name: "Quarterly Pass",
    price: "22,500",
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
    num: "03",
    name: "Annual Pass",
    price: "78,000",
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

export async function GET() {
  return NextResponse.json({ plans: PLANS });
}
