import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'

export const metadata = baseGenerateMetadata({
  title: "Custom AI Model Development Services",
  description: "Expert development of custom AI models for your specific business needs. From data preparation to deployment, get tailored AI solutions that deliver results.",
  path: '/ai-services/custom-models'
})

export default function CustomModelsLayout({ children }) {
  return children
}