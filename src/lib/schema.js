// Base schema generators
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mark Tellez',
    jobTitle: 'Senior Developer & AI Expert',
    description: 'Senior developer with 26+ years of experience in web development and AI integration',
    url: process.env.NEXT_PUBLIC_URL,
    image: `${process.env.NEXT_PUBLIC_URL}/profile.png`,
    sameAs: [
      'https://github.com/marktellez',
      'https://linkedin.com/in/marktellez'
    ]
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Devmentor Live',
    url: process.env.NEXT_PUBLIC_URL,
    logo: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
    image: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
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

// Helper functions for schema generation
function generateProductIdentifier(sku, mpn) {
  return {
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'sku',
      value: sku
    },
    additionalProperty: [{
      '@type': 'PropertyValue',
      propertyID: 'mpn',
      value: mpn
    }]
  };
}

function generateOffer({ name, description, price, url }) {
  return {
    '@type': 'Offer',
    name,
    description,
    image: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
    price,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    priceValidUntil: '2025-12-31',
    url: `${process.env.NEXT_PUBLIC_URL}${url}`,
    itemCondition: 'https://schema.org/NewCondition',
    seller: {
      '@type': 'Organization',
      name: 'Devmentor Live',
      image: `${process.env.NEXT_PUBLIC_URL}/logo.png`
    }
  };
}

function generateAggregateRating(rating, count) {
  return {
    '@type': 'AggregateRating',
    ratingValue: rating.toFixed(1),
    reviewCount: count,
    bestRating: '5',
    worstRating: '1'
  };
}

function generateReviews(reviews) {
  return reviews.slice(0, 5).map(review => ({
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating || 5,
      bestRating: '5',
      worstRating: '1'
    },
    author: {
      '@type': 'Person',
      name: review.writer.name
    },
    datePublished: new Date(review.created_at * 1000).toISOString(),
    reviewBody: review.content,
    publisher: {
      '@type': 'Organization',
      name: 'Devmentor Live'
    }
  }));
}

// Service-specific schema generators
export function generateInterviewPrepSchema(reviews = []) {
  const averageRating = reviews.length > 0 
    ? reviews.reduce((acc, review) => acc + (review.rating || 5), 0) / reviews.length
    : 5.0;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Technical Interview Preparation',
    description: 'Expert technical interview preparation service focusing on algorithms, system design, and real-world problem-solving skills.',
    image: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
    ...generateProductIdentifier('DML-TIP', 'DEVMENTOR-TIP-2025'),
    brand: {
      '@type': 'Brand',
      name: 'Devmentor Live'
    },
    offers: [generateOffer({
      name: 'Technical Interview Preparation',
      description: 'One-on-one interview preparation to help you succeed in technical interviews',
      price: '300.00',
      url: '/interview-preparation'
    })],
    category: 'Professional Development Services',
    aggregateRating: generateAggregateRating(averageRating, reviews.length || 100),
    review: reviews.length > 0 ? generateReviews(reviews) : undefined
  };
}

export function generateSeniorDevSchema(reviews = []) {
  const averageRating = reviews.length > 0 
    ? reviews.reduce((acc, review) => acc + (review.rating || 5), 0) / reviews.length
    : 5.0;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Senior Developer Services',
    description: 'Hire a senior developer with 26+ years of experience in web development and AI integration. Expert technical leadership and implementation.',
    image: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
    ...generateProductIdentifier('DML-SDS', 'DEVMENTOR-SDS-2025'),
    brand: {
      '@type': 'Brand',
      name: 'Devmentor Live'
    },
    offers: [generateOffer({
      name: 'Senior Developer Services',
      description: 'Expert technical leadership and implementation services',
      price: '200.00',
      url: '/hire-senior-developer'
    })],
    category: 'Professional Services',
    aggregateRating: generateAggregateRating(averageRating, reviews.length || 100),
    review: reviews.length > 0 ? generateReviews(reviews) : undefined
  };
}

export function generateAIAutomationSchema(reviews = []) {
  const averageRating = reviews.length > 0 
    ? reviews.reduce((acc, review) => acc + (review.rating || 5), 0) / reviews.length
    : 5.0;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'AI Process Automation',
    description: 'Transform your business operations with intelligent automation solutions. From document processing to workflow automation.',
    image: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
    ...generateProductIdentifier('DML-AIA', 'DEVMENTOR-AIA-2025'),
    brand: {
      '@type': 'Brand',
      name: 'Devmentor Live'
    },
    offers: [generateOffer({
      name: 'AI Process Automation',
      description: 'Custom AI automation solutions for your business processes',
      price: '1000.00',
      url: '/ai-services/automation'
    })],
    category: 'AI Services',
    aggregateRating: generateAggregateRating(averageRating, reviews.length || 100),
    review: reviews.length > 0 ? generateReviews(reviews) : undefined
  };
}

export function generateCustomModelsSchema(reviews = []) {
  const averageRating = reviews.length > 0 
    ? reviews.reduce((acc, review) => acc + (review.rating || 5), 0) / reviews.length
    : 5.0;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Custom AI Models Development',
    description: 'Custom AI model development tailored to your specific business needs. From data preparation to deployment.',
    image: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
    ...generateProductIdentifier('DML-AIM', 'DEVMENTOR-AIM-2025'),
    brand: {
      '@type': 'Brand',
      name: 'Devmentor Live'
    },
    offers: [generateOffer({
      name: 'Custom AI Models',
      description: 'Development of custom AI models tailored to your business needs',
      price: '500.00',
      url: '/ai-services/custom-models'
    })],
    category: 'AI Services',
    aggregateRating: generateAggregateRating(averageRating, reviews.length || 100),
    review: reviews.length > 0 ? generateReviews(reviews) : undefined
  };
}

export function generateVoiceAISchema(reviews = []) {
  const averageRating = reviews.length > 0 
    ? reviews.reduce((acc, review) => acc + (review.rating || 5), 0) / reviews.length
    : 5.0;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Voice AI Solutions',
    description: 'Integrate advanced voice AI capabilities into your applications. Natural language processing and voice interaction.',
    image: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
    ...generateProductIdentifier('DML-VAI', 'DEVMENTOR-VAI-2025'),
    brand: {
      '@type': 'Brand',
      name: 'Devmentor Live'
    },
    offers: [generateOffer({
      name: 'Voice AI Integration',
      description: 'Integration of voice AI capabilities into your applications',
      price: '750.00',
      url: '/ai-services/voice-ai'
    })],
    category: 'AI Services',
    aggregateRating: generateAggregateRating(averageRating, reviews.length || 100),
    review: reviews.length > 0 ? generateReviews(reviews) : undefined
  };
}

// Main schema generators
export function generateWebDevMentorshipSchema(reviews) {
  const averageRating = reviews.reduce((acc, review) => acc + (review.rating || 5), 0) / reviews.length;
  const person = generatePersonSchema();

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Development Mentorship',
    description: 'Expert web development mentorship program focusing on modern frameworks, best practices, and real-world development skills.',
    image: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
    provider: {
      '@type': 'Person',
      name: person.name,
      url: person.url,
      image: person.image
    },
    offers: [generateOffer({
      name: 'Web Development Mentorship',
      description: 'One-on-one web development mentorship to accelerate your career growth',
      price: '250.00',
      url: '/web-dev-mentorship'
    })],
    serviceType: 'Professional Development Services',
    aggregateRating: generateAggregateRating(averageRating, reviews.length),
    review: generateReviews(reviews)
  };
}

export function generateAIServicesSchema(reviews) {
  const averageRating = reviews.reduce((acc, review) => acc + (review.rating || 5), 0) / reviews.length;
  const person = generatePersonSchema();

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Development & Integration Services',
    description: 'Expert AI development and integration services for enterprise digital transformation, including custom model development, voice AI, and automation solutions.',
    image: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
    provider: {
      '@type': 'Person',
      name: person.name,
      url: person.url,
      image: person.image
    },
    offers: [
      generateOffer({
        name: 'Custom AI Models',
        description: 'Development of custom AI models tailored to your business needs',
        price: '500.00',
        url: '/ai-services/custom-models'
      }),
      generateOffer({
        name: 'Voice AI Solutions',
        description: 'Integration of voice AI capabilities into your applications',
        price: '750.00',
        url: '/ai-services/voice-ai'
      }),
      generateOffer({
        name: 'AI Automation',
        description: 'Business process automation using AI technologies',
        price: '1000.00',
        url: '/ai-services/automation'
      })
    ],
    serviceType: 'AI Development Services',
    aggregateRating: generateAggregateRating(averageRating, reviews.length),
    review: generateReviews(reviews)
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
  const organization = generateOrganizationSchema();
  const person = generatePersonSchema();
  
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Devmentor Live',
      description: 'Expert web development mentorship and AI integration services',
      url: process.env.NEXT_PUBLIC_URL,
      publisher: organization,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${process.env.NEXT_PUBLIC_URL}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Devmentor Live Services',
      description: 'Professional web development mentorship and AI integration services',
      image: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
      provider: {
        '@type': 'Person',
        name: person.name,
        url: person.url,
        image: person.image
      },
      offers: [
        generateOffer({
          name: 'Web Development Mentorship',
          description: 'One-on-one web development mentorship to accelerate your career growth',
          price: '250.00',
          url: '/web-dev-mentorship'
        }),
        generateOffer({
          name: 'AI Development Services',
          description: 'Custom AI development and integration services',
          price: '500.00',
          url: '/ai-services'
        })
      ],
      serviceType: 'Professional Services',
      aggregateRating: generateAggregateRating(5.0, 1000)
    }
  ];
}
