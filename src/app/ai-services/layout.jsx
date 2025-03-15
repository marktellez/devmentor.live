import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import Script from 'next/script'
import reviews from '@/data/reviews.json'
import featuredReviews from '@/data/featured.json'
import { generateAIServicesSchema } from '@/lib/schema'

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

  const serviceSchema = generateAIServicesSchema(aiReviews)

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