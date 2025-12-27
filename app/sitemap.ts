import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://visathailand.de';
  
  const visasDir = path.join(process.cwd(), 'data', 'visas');
  const visaFiles = fs.readdirSync(visasDir);
  const visaSlugs = visaFiles
    .filter(file => file.endsWith('.json') && file !== 'OFFICIAL_LINKS.md')
    .map(file => file.replace('.json', ''));

  const postsDir = path.join(process.cwd(), 'data', 'posts');
  const postFiles = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : [];
  const postSlugs = postFiles
    .filter(file => file.endsWith('.json'))
    .map(file => file.replace('.json', ''));

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
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

  // Post pages
  postSlugs.forEach(slug => {
    routes.push({
      url: `${baseUrl}/posts/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return routes;
}

