import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import { sharedData } from '@/lib/data'
import TechInterviewContent from './tech-interview-content'

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

// Generate metadata at build time
export const metadata = baseGenerateMetadata({
  title: "Technical Interview Preparation | AI & Traditional Development",
  description: `Master both traditional and AI-focused technical interviews with personalized preparation from a senior developer with ${sharedData.stats.yearsExperience}+ years experience. 90% success rate.`,
  path: '/tech-interview-prep'
})

// This data will be used at build time
const data = {
  stats: {
    yearsExperience: sharedData.stats.yearsExperience,
    successRate: 90,
    aiRank: 8,
    productivityBoost: 90
  },
  traditionalTopics: [
    "Data structures & algorithms",
    "System design principles",
    "JavaScript/TypeScript deep dives",
    "React & modern frameworks",
    "Mock interviews & feedback"
  ],
  aiTopics: [
    "AI integration patterns",
    "LLM implementation strategies",
    "AI tools & frameworks",
    "ML basics for developers",
    "AI system architecture"
  ]
}

export default function TechInterviewPrepPage() {
  return <TechInterviewContent data={data} />
}