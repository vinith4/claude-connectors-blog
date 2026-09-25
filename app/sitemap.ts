import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://claude-connectors-blog.vercel.app";
  const routes = ["", "/connectors", "/github", "/vercel", "/workflow", "/tutorial", "/about"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
