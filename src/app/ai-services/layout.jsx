import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import Script from 'next/script'
import reviews from '@/data/reviews.json'
import featuredReviews from '@/data/featured.json'
import { generateAIServicesSchema } from '@/lib/schema'

export const metadata = baseGenerateMetadata({
  title: "Custom AI Development & Integration Services – Enterprise AI Solutions",
  description: "Accelerate your business growth with my custom AI development and integration services. Get expert guidance on building custom AI models, voice AI, and intelligent process automation to drive real results.",
  keywords: "AI development services, custom AI solutions, AI integration, enterprise AI, voice AI development, process automation",
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
  
  const faqSchema = {
    "@context": "http://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is custom AI development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custom AI development involves creating tailored AI models and applications designed to meet the unique needs of your business, ensuring better performance and scalability."
      }
    }, {
      "@type": "Question",
      "name": "How does enterprise AI integration work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprise AI integration seamlessly incorporates AI capabilities into your existing systems and workflows, enhancing efficiency and driving measurable business outcomes."
      }
    }, {
      "@type": "Question",
      "name": "What benefits can my business expect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "My AI services deliver strategic implementation, custom solutions, and intelligent automation that improve customer interactions, streamline operations, and support long-term growth."
      }
    }]
  }

  return (
    <>
      <Script
        id="ai-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="ai-services-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}