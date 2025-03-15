import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import Script from 'next/script'
import reviews from '@/data/reviews.json'
import { generateInterviewPrepSchema } from '@/lib/schema'

export const metadata = baseGenerateMetadata({
  title: 'Technical Interview Preparation | Expert Guidance',
  description: 'Turn interview anxiety into confidence with personalized technical interview preparation from a senior developer with 26+ years of experience.',
  path: '/interview-preparation'
})

export default function InterviewPreparationLayout({ children }) {
  const interviewReviews = reviews.filter(review => 
    review.content.toLowerCase().includes('interview') ||
    review.content.toLowerCase().includes('preparation') ||
    review.content.toLowerCase().includes('practice')
  )

  const serviceSchema = generateInterviewPrepSchema(interviewReviews)

  return (
    <>
      <Script
        id="interview-prep-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  )
}