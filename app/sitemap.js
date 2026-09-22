export default function sitemap() {
  const base = "https://bodytech-gym-nextjs.vercel.app";
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
