import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raymart Leyson | Software Engineer at Accenture | Full Stack Developer",
  description: "Raymart Leyson — Full-stack developer (Next.js, ASP.NET Core, Java) building AI tools, payment systems, and production APIs. Available for freelance and enterprise work.",
  keywords: ["Raymart Leyson", "Software Engineer", "Full Stack Developer", "Next.js", "React", "ASP.NET Core", "Java", "SEO", "Web Performance", "AI", "Payment Integration"],
  authors: [{ name: "Raymart Leyson" }],
  openGraph: {
    title: "Raymart Leyson - Full Stack Developer (Next.js, ASP.NET, AI)",
    description: "Portfolio of AI-powered learning apps, payment platforms, and enterprise APIs. Specializes in performance and SEO-friendly web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden transition-colors duration-300`}
      >
        {/* JSON-LD structured data for SEO: Website + Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://raymartleyson-2026.vercel.app"}/#person`,
                  "name": "Raymart Leyson",
                  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://raymartleyson-2026.vercel.app",
                  "sameAs": [
                    "https://github.com/Raymart-Leyson",
                    "https://www.linkedin.com/in/raymart-leyson"
                  ],
                  "jobTitle": "Full Stack Developer",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "RNLStudio"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://raymartleyson-2026.vercel.app"}/#website`,
                  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://raymartleyson-2026.vercel.app",
                  "name": "Raymart Leyson Portfolio",
                  "inLanguage": "en-US",
                  "publisher": {
                    "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://raymartleyson-2026.vercel.app"}/#person`
                  }
                }
              ]
            }),
          }}
        />
        <PageLoader />
        <AnimatedBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
