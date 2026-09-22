import "./globals.css";

export const metadata = {
  title: "BodyTech Gym & Fitness Center | Gulgasht Colony, Multan",
  description:
    "Multan's premium fitness center in Gulgasht Colony. Certified trainers, modern equipment, and flexible membership plans. Book your free trial today.",
};

// Structured data matching BodyTech Gym's real Google Business profile —
// update "url" once the site is deployed so Google can match this listing
// to the live page (needed for Rich Results / Search Console verification).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "BodyTech Gym & Fitness Center",
  image: "https://your-deployed-domain.vercel.app/images/hero-main.jpg",
  url: "https://your-deployed-domain.vercel.app",
  telephone: "+92-300-0404070",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gulgasht Ave, near Toys Mall, C Block Gulgasht Colony",
    addressLocality: "Multan",
    postalCode: "60000",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.2238152,
    longitude: 71.4739092,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
      ],
      opens: "05:00",
      closes: "23:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "141",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Anton&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
