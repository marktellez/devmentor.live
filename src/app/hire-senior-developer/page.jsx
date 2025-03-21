import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import HireDeveloperContent from './hire-developer-content'

const title = "Hire a Senior Developer & AI Expert | DevmentorLive"
const description = "Get results-driven technical leadership and advanced AI integration from a revenue-centric entrepreneur with 26+ years of experience in web development, systems programming, and custom AI solutions."

export const metadata = baseGenerateMetadata({
  title,
  description,
  path: '/hire-senior-developer',
  keywords: "senior developer for hire, AI consultant, hire an AI expert, web development and AI solutions, custom AI model development, LLM expert, AI-powered automation, AI consultant for startups, custom AI model development for business, senior full-stack developer for AI projects"
})

export const dynamic = 'force-static'
export const revalidate = false

export default function HireDeveloperPage() {
  return <HireDeveloperContent />
}
