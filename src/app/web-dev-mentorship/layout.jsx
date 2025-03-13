import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'

export const metadata = baseGenerateMetadata({
  title: "Web Development Mentorship Programs",
  description: "Accelerate your web development career with personalized mentorship. Learn modern frameworks, best practices, and real-world development skills.",
  path: '/web-dev-mentorship'
})

export default function WebDevMentorshipLayout({ children }) {
  return children
}