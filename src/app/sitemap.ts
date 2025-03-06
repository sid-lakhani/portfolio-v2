import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sidlakhani.tech";

  const pages = [
    "/",
    "/about",
    "/projects",
    "/skills",
    "/contact",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
