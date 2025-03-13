import { START_YEAR } from '@/lib/config'
import PageContent from './page-content'
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'

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
  const yearsExperience = new Date().getFullYear() - START_YEAR
  return <PageContent yearsExperience={yearsExperience} />
}
