import type { MetadataRoute } from "next";
import { noticias } from "@/content/noticias";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amidmisiones.com";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/noticias`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/nosotros`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/curriculums`, lastModified: new Date(), priority: 0.7 },
  ];

  const noticiasPages = noticias.map((n) => ({
    url: `${baseUrl}/noticias/${n.slug}`,
    lastModified: new Date(n.date),
    priority: 0.6,
  }));

  return [...staticPages, ...noticiasPages];
}
