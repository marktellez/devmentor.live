export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mark Tellez',
    jobTitle: 'Senior Developer & AI Expert',
    description: 'Senior developer with 26+ years of experience in web development and AI integration',
    url: process.env.NEXT_PUBLIC_URL,
    sameAs: [
      'https://github.com/marktellez',
      'https://linkedin.com/in/marktellez'
    ]
  };
}

export function generateServiceSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: generatePersonSchema(),
    url: `${process.env.NEXT_PUBLIC_URL}${url}`
  };
}

export function generateArticleSchema({ title, description, publishDate, url, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: publishDate,
    author: generatePersonSchema(),
    image: image || `${process.env.NEXT_PUBLIC_URL}/api/og?title=${encodeURIComponent(title)}`,
    url: `${process.env.NEXT_PUBLIC_URL}${url}`
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DevMentor Live',
    description: 'Expert web development mentorship and AI integration services',
    url: process.env.NEXT_PUBLIC_URL,
    author: generatePersonSchema(),
    potentialAction: {
      '@type': 'SearchAction',
      target: `${process.env.NEXT_PUBLIC_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}
