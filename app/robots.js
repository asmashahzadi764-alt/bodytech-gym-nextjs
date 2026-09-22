export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://bodytech-gym-nextjs.vercel.app/sitemap.xml",
  };
}
