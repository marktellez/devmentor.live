import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import Script from 'next/script'
import reviews from '@/data/reviews.json'
import { generateAIAutomationSchema } from '@/lib/schema'

export const metadata = baseGenerateMetadata({
  title: "AI-Powered Process Automation Services",
  description: "Transform your business operations with intelligent automation solutions. From document processing to workflow automation, optimize your processes with AI.",
  path: '/ai-services/automation'
})

export default function AutomationLayout({ children }) {
  const automationReviews = reviews.filter(review => 
    review.content.toLowerCase().includes('automation') ||
    review.content.toLowerCase().includes('process') ||
    review.content.toLowerCase().includes('workflow')
  )

  const serviceSchema = generateAIAutomationSchema(automationReviews)

  return (
    <>
      <Script
        id="ai-automation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  )
}