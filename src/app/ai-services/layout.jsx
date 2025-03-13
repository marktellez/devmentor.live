import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'

export const metadata = baseGenerateMetadata({
  title: "AI Development & Integration Services",
  description: "Expert AI development and integration services for enterprise digital transformation. Custom solutions, seamless implementation.",
  path: '/ai-services'
})

export default function AIServicesLayout({ children }) {
  return children
}