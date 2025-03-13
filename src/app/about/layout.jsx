import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'

export const metadata = baseGenerateMetadata({
  title: "About Me | Senior Developer & AI Expert",
  description: "Full-stack developer with 26+ years of experience specializing in AI integration, modern web development, and technical mentorship.",
  path: '/about'
})

export default function AboutLayout({ children }) {
  return children
}