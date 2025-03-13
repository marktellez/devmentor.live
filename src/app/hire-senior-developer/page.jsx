import { START_YEAR } from '@/lib/config'
import PageContent from './page-content'

const title = "Hire Senior Developer & AI Expert | 26+ Years Experience"
const description = "Looking for a technical leader who combines deep development expertise with cutting-edge AI knowledge? Senior developer with 26+ years experience available for hire."
const ogImage = `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: 'https://devmentor.live/hire-senior-developer',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Hire Senior Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  }
}

export const dynamic = 'force-static'
export const revalidate = false

export default function HireDeveloperPage() {
  const yearsExperience = new Date().getFullYear() - START_YEAR
  return <PageContent yearsExperience={yearsExperience} />
}
