import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://gameshabibi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/catalog",
    "/how-it-works",
    "/about",
    "/contact",
    "/cart",
    "/orders",
    "/privacy",
    "/terms",
    "/shipping",
    "/cancellation",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/catalog" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/catalog" ? 0.9 : 0.7,
  }));
}

