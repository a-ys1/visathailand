import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://visathailand.de';
  
  const visasDir = path.join(process.cwd(), 'data', 'visas');
  const files = fs.readdirSync(visasDir);
  const visaSlugs = files
    .filter(file => file.endsWith('.json') && file !== 'OFFICIAL_LINKS.md')
    .map(file => file.replace('.json', ''));

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  // Visa pages
  visaSlugs.forEach(slug => {
    routes.push({
      url: `${baseUrl}/visa/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  return routes;
}

