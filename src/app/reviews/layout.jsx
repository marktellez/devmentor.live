import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'

export const metadata = baseGenerateMetadata({
  title: "Client Reviews & Success Stories",
  description: "Read authentic reviews from developers who've transformed their careers through our mentorship. Over 1000+ five-star reviews and success stories.",
  path: '/reviews'
})

export default function ReviewsLayout({ children }) {
  return children
}