import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import Script from 'next/script'
import reviews from '@/data/reviews.json'
import featuredReviews from '@/data/featured.json'
import { generateWebDevMentorshipSchema } from '@/lib/schema'

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

  const serviceSchema = generateWebDevMentorshipSchema(webDevReviews)

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