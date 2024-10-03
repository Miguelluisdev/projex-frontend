import { Metadata, MetadataRoute } from "next"
// ;("trocar as urls quando hospedar")
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "http://localhost:3000",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "http://localhost:3000/sign-in",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
