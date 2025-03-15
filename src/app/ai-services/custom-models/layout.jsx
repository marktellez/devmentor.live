import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import Script from 'next/script'
import reviews from '@/data/reviews.json'
import { generateCustomModelsSchema } from '@/lib/schema'

export const metadata = baseGenerateMetadata({
  title: "Custom AI Model Development Services",
  description: "Expert development of custom AI models for your specific business needs. From data preparation to deployment, get tailored AI solutions that deliver results.",
  path: '/ai-services/custom-models'
})

export default function CustomModelsLayout({ children }) {
  const modelReviews = reviews.filter(review => 
    review.content.toLowerCase().includes('model') ||
    review.content.toLowerCase().includes('custom') ||
    review.content.toLowerCase().includes('ml') ||
    review.content.toLowerCase().includes('machine learning')
  )

  const serviceSchema = generateCustomModelsSchema(modelReviews)

  return (
    <>
      <Script
        id="custom-models-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  )
}