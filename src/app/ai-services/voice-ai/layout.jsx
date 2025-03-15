import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import Script from 'next/script'
import reviews from '@/data/reviews.json'
import { generateVoiceAISchema } from '@/lib/schema'

export const metadata = baseGenerateMetadata({
  title: "Voice AI Development & Integration Services",
  description: "Create natural, engaging voice experiences with custom voice models and AI integration. From text-to-speech to voice-enabled applications, build the perfect voice solution.",
  path: '/ai-services/voice-ai'
})

export default function VoiceAILayout({ children }) {
  const voiceReviews = reviews.filter(review => 
    review.content.toLowerCase().includes('voice') ||
    review.content.toLowerCase().includes('speech') ||
    review.content.toLowerCase().includes('audio') ||
    review.content.toLowerCase().includes('conversation')
  )

  const serviceSchema = generateVoiceAISchema(voiceReviews)

  return (
    <>
      <Script
        id="voice-ai-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  )
}