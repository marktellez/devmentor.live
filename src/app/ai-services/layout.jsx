import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import Script from 'next/script'
import reviews from '@/data/reviews.json'
import featuredReviews from '@/data/featured.json'

export const metadata = baseGenerateMetadata({
  title: "AI Development & Integration Services",
  description: "Expert AI development and integration services for enterprise digital transformation. Custom solutions, seamless implementation.",
  path: '/ai-services'
})

export default function AIServicesLayout({ children }) {
  // Filter reviews related to AI services
  const aiReviews = reviews.filter(review => 
    review.content.toLowerCase().includes('ai') ||
    review.content.toLowerCase().includes('machine learning') ||
    review.content.toLowerCase().includes('automation') ||
    review.content.toLowerCase().includes('model') ||
    review.content.toLowerCase().includes('integration')
  )

  const averageRating = aiReviews.reduce((acc, review) => acc + (review.rating || 5), 0) / aiReviews.length

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'AI Development & Integration Services',
    description: 'Expert AI development and integration services for enterprise digital transformation, including custom model development, voice AI, and automation solutions.',
    brand: {
      '@type': 'Brand',
      name: 'DevMentor Live'
    },
    provider: {
      '@type': 'Organization',
      name: 'DevMentor Live',
      url: process.env.NEXT_PUBLIC_URL,
      sameAs: [
        'https://github.com/marktellez',
        'https://linkedin.com/in/marktellez'
      ]
    },
    category: 'AI Development Services',
    offers: [
      {
        '@type': 'Offer',
        name: 'Custom AI Models',
        description: 'Development of custom AI models tailored to your business needs',
        price: '500.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
        url: process.env.NEXT_PUBLIC_URL + '/ai-services/custom-models'
      },
      {
        '@type': 'Offer',
        name: 'Voice AI Solutions',
        description: 'Integration of voice AI capabilities into your applications',
        price: '750.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
        url: process.env.NEXT_PUBLIC_URL + '/ai-services/voice-ai'
      },
      {
        '@type': 'Offer',
        name: 'AI Automation',
        description: 'Business process automation using AI technologies',
        price: '1000.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
        url: process.env.NEXT_PUBLIC_URL + '/ai-services/automation'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toFixed(1),
      reviewCount: aiReviews.length,
      bestRating: '5',
      worstRating: '1'
    },
    review: aiReviews.slice(0, 5).map(review => ({
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
        name: 'DevMentor Live'
      }
    }))
  }

  return (
    <>
      <Script
        id="ai-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  )
}