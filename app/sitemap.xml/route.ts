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
    // Prefer internal project urls. If the project has an external link (different domain),
    // omit it from the sitemap and link to the projects index anchor instead.
    try {
      if (p.link) {
        const link = p.link as string;
        // Treat as internal if it starts with baseUrl or is a relative path
        if (link.startsWith(baseUrl) || link.startsWith("/")) {
          const resolved = link.startsWith("/") ? `${baseUrl}${link}` : link;
          urls.push({ url: resolved, priority: 0.6 });
          return;
        }
      }
    } catch (e) {
      // ignore and fall back to index anchor
    }

    // Fallback: point to the projects index with an anchor for the project id
    urls.push({ url: `${baseUrl}/projects#${p.id}`, priority: 0.5 });
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
