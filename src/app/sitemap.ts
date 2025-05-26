import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sidlakhani.in";

  const pages = [
    "/",
    "/about",
    "/blogs",
    "/projects",
    "/skills",
    "/contact",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
