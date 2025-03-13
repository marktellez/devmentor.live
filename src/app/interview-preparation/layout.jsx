import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'

export const metadata = baseGenerateMetadata({
  title: 'Technical Interview Preparation | Expert Guidance',
  description: 'Turn interview anxiety into confidence with personalized technical interview preparation from a senior developer with 26+ years of experience.',
  path: '/interview-preparation'
})

export default function InterviewPreparationLayout({ children }) {
  return children
}