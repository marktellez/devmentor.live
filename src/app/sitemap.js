import { getAllMusings } from '@/data/musings'

const SITE_URL = 'https://devmentor.live'

// Static routes with their configurations
const staticRoutes = [
  {
    url: SITE_URL,
    changefreq: 'monthly',
    priority: 1.0,
  },
  {
    url: `${SITE_URL}/interview-preparation`,
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    url: `${SITE_URL}/web-dev-mentorship`,
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    url: `${SITE_URL}/ai-services`,
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    url: `${SITE_URL}/about`,
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/reviews`,
    changefreq: 'weekly',
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/privacy`,
    changefreq: 'yearly',
    priority: 0.3,
  },
  {
    url: `${SITE_URL}/terms`,
    changefreq: 'yearly',
    priority: 0.3,
  },
  {
    url: `${SITE_URL}/cookies`,
    changefreq: 'yearly',
    priority: 0.3,
  },
  {
    url: `${SITE_URL}/web-dev-mentorship`,
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    url: `${SITE_URL}/hire-senior-developer`,
    changefreq: 'weekly',
    priority: 0.9,
  }
]

export default async function sitemap() {
  // Get all musings
  const musings = await getAllMusings()

  // Create sitemap entries for musings
  const musingsRoutes = musings.map(musing => ({
    url: `${SITE_URL}/musings/${musing.id}`,
    lastModified: musing.updated || musing.date,
    changefreq: 'monthly',
    priority: 0.7,
  }))

  // Add the musings index page
  const musingsIndexRoute = {
    url: `${SITE_URL}/musings`,
    lastModified: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
  }

  // Combine all routes
  const allRoutes = [
    ...staticRoutes.map(route => ({
      ...route,
      lastModified: new Date().toISOString(),
    })),
    musingsIndexRoute,
    ...musingsRoutes,
  ]

  return allRoutes
} 
