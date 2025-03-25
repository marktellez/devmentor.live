import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import { sharedData } from '@/lib/data'
import AIServicesContent from './ai-services-content'

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

// Generate metadata at build time
export const metadata = {
  title: 'Professional AI Development & Integration Services | DevmentorLive',
  description: 'Custom AI development, integration, and consulting services from an experienced AI researcher. Specializing in LLMs, ChatGPT integration, and enterprise AI solutions.',
  keywords: [
    'ai development services',
    'ai integration specialist',
    'custom ai solutions',
    'enterprise ai consulting',
    'ai automation services',
    'machine learning expert',
    'chatgpt integration',
    'llm development',
    'ai workflow automation',
    'ai system architecture',
    'ai tools development',
    'ai project consulting',
    'ai implementation expert',
    'ai development mentor',
    'machine learning services'
  ]
}

// This data will be used at build time
const data = {
  stats: {
    yearsExperience: sharedData.stats.yearsExperience,
    sessions: sharedData.stats.sessions,
    rating: sharedData.stats.rating,
    reviews: sharedData.stats.reviews
  },
  benefits: [
    {
      title: "Strategic AI Implementation",
      description: "Get expert guidance on where and how to implement AI for maximum business impact. Avoid costly mistakes and ensure your AI initiatives deliver real value."
    },
    {
      title: "Custom Solutions",
      description: "Develop AI solutions tailored to your specific needs, from custom models to complete AI-powered applications and workflows."
    },
    {
      title: "Seamless Integration",
      description: "Integrate AI capabilities into your existing systems and workflows without disrupting your operations or requiring major infrastructure changes."
    },
    {
      title: "Future-Proof Solutions",
      description: "Build scalable, maintainable AI solutions that can grow with your business and adapt to changing requirements and technologies."
    }
  ],
  services: [
    {
      title: "Voice AI Development",
      description: "Create natural, engaging voice experiences with custom voice models and seamless AI integration.",
      href: "/ai-services/voice-ai"
    },
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows with intelligent AI-powered solutions.",
      href: "/ai-services/automation"
    },
    {
      title: "Custom AI Model Development",
      description: "Tailored AI models for classification, sentiment analysis, and specific business needs.",
      href: "/ai-services/custom-models"
    }
  ]
}

export default function AIServicesPage() {
  return <AIServicesContent data={data} />
} 