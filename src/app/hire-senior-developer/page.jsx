import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import HireDeveloperContent from './hire-developer-content'

const title = "Hire Senior Developer & AI Expert | 26+ Years Experience"
const description = "Looking for a technical leader who combines deep development expertise with cutting-edge AI knowledge? Senior developer with 26+ years experience available for hire."

export const metadata = baseGenerateMetadata({
  title,
  description,
  path: '/hire-senior-developer'
})

export const dynamic = 'force-static'
export const revalidate = false

export default function HireDeveloperPage() {
  return <HireDeveloperContent />
}
