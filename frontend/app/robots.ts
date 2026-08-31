import type { MetadataRoute } from "next";
import { BUSINESS_CONFIG } from "@/config/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin",
    },
    sitemap: `${BUSINESS_CONFIG.website}/sitemap.xml`,
  };
}
