import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tiandry.dev',
      lastModified: new Date('2026-10-29'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
