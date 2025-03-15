import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import Script from 'next/script'
import reviews from '@/data/reviews.json'
import { generateInterviewPrepSchema } from '@/lib/schema'

export const metadata = baseGenerateMetadata({
  title: "Technical Interview Preparation | AI & Traditional Development",
  description: "Master both traditional and AI-focused technical interviews with personalized preparation from a senior developer with FAANG interview experience. 90% success rate.",
  path: '/tech-interview-prep'
})

export default function TechInterviewPrepLayout({ children }) {
  const techInterviewReviews = reviews.filter(review => 
    review.content.toLowerCase().includes('interview') ||
    review.content.toLowerCase().includes('technical') ||
    review.content.toLowerCase().includes('coding') ||
    review.content.toLowerCase().includes('algorithm')
  )

  const serviceSchema = generateInterviewPrepSchema(techInterviewReviews)

  return (
    <>
      <Script
        id="tech-interview-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  )
}