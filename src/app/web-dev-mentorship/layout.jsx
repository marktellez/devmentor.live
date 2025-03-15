import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import Script from 'next/script'
import reviews from '@/data/reviews.json'
import featuredReviews from '@/data/featured.json'

export const metadata = baseGenerateMetadata({
  title: "Web Development Mentorship Programs",
  description: "Accelerate your web development career with personalized mentorship. Learn modern frameworks, best practices, and real-world development skills.",
  path: '/web-dev-mentorship'
})

export default function WebDevMentorshipLayout({ children }) {
  // Filter reviews related to web development mentorship
  const webDevReviews = reviews.filter(review => 
    review.content.toLowerCase().includes('react') ||
    review.content.toLowerCase().includes('javascript') ||
    review.content.toLowerCase().includes('web') ||
    review.content.toLowerCase().includes('code') ||
    review.content.toLowerCase().includes('development')
  )

  const averageRating = webDevReviews.reduce((acc, review) => acc + (review.rating || 5), 0) / webDevReviews.length

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Development Mentorship',
    description: 'Expert web development mentorship program focusing on modern frameworks, best practices, and real-world development skills.',
    provider: {
      '@type': 'Person',
      name: 'Mark Tellez',
      description: 'Senior developer with 26+ years of experience in web development',
      url: process.env.NEXT_PUBLIC_URL + '/about'
    },
    offers: {
      '@type': 'Offer',
      price: '250',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2025-12-31'
    },
    serviceType: 'Professional Development',
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide'
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Web Developers'
    },
    termsOfService: process.env.NEXT_PUBLIC_URL + '/terms',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toFixed(1),
      reviewCount: webDevReviews.length,
      bestRating: '5',
      worstRating: '1'
    },
    review: webDevReviews.slice(0, 5).map(review => ({
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
      reviewBody: review.content
    }))
  }

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  )
}