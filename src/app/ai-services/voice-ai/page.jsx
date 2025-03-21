import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import { sharedData } from '@/lib/data'
import VoiceAIContent from './voice-ai-content'

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

// Generate metadata at build time
export const metadata = baseGenerateMetadata({
  title: "Voice AI Development & Integration | Custom Voice Solutions",
  description: "Create natural, engaging voice experiences with custom voice models and seamless AI integration. From voice cloning to complete voice-enabled applications.",
  path: '/ai-services/voice-ai'
})

// This data will be used at build time
const data = {
  stats: {
    yearsExperience: sharedData.stats.yearsExperience,
    sessions: sharedData.stats.sessions,
    rating: sharedData.stats.rating,
    reviews: sharedData.stats.reviews
  },
  capabilities: [
    {
      title: "Custom Voice Models",
      description: "Create unique, branded voices for your applications with my advanced voice cloning technology. Perfect for maintaining brand consistency across all voice interactions."
    },
    {
      title: "Text-to-Speech Integration",
      description: "Implement natural-sounding text-to-speech capabilities using either custom voice models or my integration with ElevenLabs' premium voices."
    },
    {
      title: "Voice-Enabled Agents",
      description: "Build intelligent voice agents that can engage in natural conversations, handle complex interactions, and integrate with your existing systems."
    },
    {
      title: "Voice Application Development",
      description: "Develop complete voice-enabled applications with features like voice commands, dictation, and interactive voice response systems."
    }
  ],
  technologies: [
    {
      title: "Voxbird AI",
      description: "My proprietary voice AI platform for creating custom voice models and natural-sounding speech synthesis."
    },
    {
      title: "ElevenLabs Integration",
      description: "Seamless integration with ElevenLabs' advanced text-to-speech technology for premium voice quality."
    },
    {
      title: "Custom Integration",
      description: "Flexible API development and integration capabilities to connect voice AI with your existing systems."
    }
  ]
}

export default function VoiceAIPage() {
  return <VoiceAIContent data={data} />
} 