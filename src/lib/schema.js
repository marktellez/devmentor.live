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

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevMentor Live',
    url: process.env.NEXT_PUBLIC_URL,
    logo: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
    description: 'Expert web development mentorship and AI integration services',
    founder: generatePersonSchema(),
    sameAs: [
      'https://github.com/marktellez',
      'https://linkedin.com/in/marktellez'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    }
  };
}

export function generateWebSiteSchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'DevMentor Live',
      description: 'Expert web development mentorship and AI integration services',
      url: process.env.NEXT_PUBLIC_URL,
      publisher: generateOrganizationSchema(),
      potentialAction: {
        '@type': 'SearchAction',
        target: `${process.env.NEXT_PUBLIC_URL}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'DevMentor Live Services',
      description: 'Professional web development mentorship and AI integration services',
      brand: {
        '@type': 'Brand',
        name: 'DevMentor Live'
      },
      provider: generateOrganizationSchema(),
      offers: [
        {
          '@type': 'Offer',
          name: 'Web Development Mentorship',
          description: 'One-on-one web development mentorship to accelerate your career growth',
          price: '250.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `${process.env.NEXT_PUBLIC_URL}/web-dev-mentorship`
        },
        {
          '@type': 'Offer',
          name: 'AI Development Services',
          description: 'Custom AI development and integration services',
          price: '500.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `${process.env.NEXT_PUBLIC_URL}/ai-services`
        }
      ]
    }
  ];
}
