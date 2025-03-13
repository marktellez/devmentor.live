import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'

export const metadata = baseGenerateMetadata({
  title: "Voice AI Development & Integration Services",
  description: "Create natural, engaging voice experiences with custom voice models and AI integration. From text-to-speech to voice-enabled applications, build the perfect voice solution.",
  path: '/ai-services/voice-ai'
})

export default function VoiceAILayout({ children }) {
  return children
}