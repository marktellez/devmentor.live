import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import Script from 'next/script'
import reviews from '@/data/reviews.json'
import { FIVE_STAR_REVIEWS } from '@/lib/config'

export const metadata = baseGenerateMetadata({
  title: "Client Reviews & Success Stories",
  description: "Read authentic reviews from developers who've transformed their careers through our mentorship. Over 1000+ five-star reviews and success stories.",
  path: '/reviews'
})

export default function ReviewsLayout({ children }) {
  // Calculate aggregate rating
  const totalReviews = reviews.length
  const averageRating = reviews.reduce((acc, review) => acc + (review.rating || 5), 0) / totalReviews

  // Create review schema
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevMentor Live',
    url: process.env.NEXT_PUBLIC_URL,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toFixed(1),
      reviewCount: FIVE_STAR_REVIEWS,
      bestRating: '5',
      worstRating: '1'
    },
    review: reviews.slice(0, 10).map(review => ({
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
    })),
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Web Development Mentorship',
        description: 'One-on-one web development mentorship to accelerate your career growth'
      },
      {
        '@type': 'Offer',
        name: 'AI Development Services',
        description: 'Expert AI integration and development services for modern applications'
      }
    ]
  }

  return (
    <>
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      {children}
    </>
  )
}