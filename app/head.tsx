import React from "react";

export default function Head() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://raymartleyson-2026.vercel.app";
  const title = "Freelance Full Stack Developer — Cebu | Raymart Leyson";
  const description = "Cebu-based freelance full stack developer (Next.js, React, TypeScript). Available for remote/international projects — contact to build performant web apps and POS systems.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="freelance full stack developer, Next.js developer, React developer, Cebu developer, remote developer" />
      <meta name="author" content="Raymart Leyson" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="Raymart Leyson — RNLStudio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
