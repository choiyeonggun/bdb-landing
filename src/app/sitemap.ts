import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bdbagent.kr',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://bdb-estate.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://bdb-estate.com/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // 추가 페이지들...
  ]
} 