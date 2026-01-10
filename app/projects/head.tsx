import React from "react";

export default function Head() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://raymartleyson-2026.vercel.app";
  const title = "Projects — Portfolio of Next.js & Full-Stack Work | Raymart Leyson";
  const description = "Browse RNLStudio projects and case studies: Next.js, e‑commerce, POS, and SaaS apps. Available for freelance and remote international work.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Next.js projects, web developer portfolio, RNLStudio projects, freelance developer" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}/projects`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
