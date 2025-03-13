import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'

export const metadata = baseGenerateMetadata({
  title: "AI-Powered Process Automation Services",
  description: "Transform your business operations with intelligent automation solutions. From document processing to workflow automation, optimize your processes with AI.",
  path: '/ai-services/automation'
})

export default function AutomationLayout({ children }) {
  return children
}