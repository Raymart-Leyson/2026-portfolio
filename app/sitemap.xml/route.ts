import { projectsData } from "@/lib/projectsData";
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://raymartleyson-2026.vercel.app";

  const urls = [
    { url: `${baseUrl}/`, priority: 1.0 },
    { url: `${baseUrl}/projects`, priority: 0.8 },
  ];

  // Add all project links
  projectsData.forEach((p) => {
    if (p.link) urls.push({ url: p.link, priority: 0.6 });
    else urls.push({ url: `${baseUrl}/projects#${p.id}`, priority: 0.5 });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => {
      return `  <url>\n    <loc>${u.url}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`;
    })
    .join("\n")}\n</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
