import { START_YEAR } from '@/lib/config'
import PageContent from './page-content'

export const metadata = {
  title: "Hire Senior Developer & AI Expert | 26+ Years Experience",
  description: "Looking for a technical leader who combines deep development expertise with cutting-edge AI knowledge? Senior developer with 26+ years experience available for hire.",
  openGraph: {
    title: "Hire Senior Developer & AI Expert | 26+ Years Experience",
    description: "Looking for a technical leader who combines deep development expertise with cutting-edge AI knowledge? Senior developer with 26+ years experience available for hire.",
    type: 'website',
    url: 'https://devmentor.live/hire-senior-developer',
    images: [
      {
        url: '/web-dev.webp',
        width: 1200,
        height: 630,
        alt: 'Hire Senior Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hire Senior Developer & AI Expert | 26+ Years Experience",
    description: "Looking for a technical leader who combines deep development expertise with cutting-edge AI knowledge? Senior developer with 26+ years experience available for hire.",
    images: ['/web-dev.webp'],
  }
}

export const dynamic = 'force-static'
export const revalidate = false

export default function HireDeveloperPage() {
  const yearsExperience = new Date().getFullYear() - START_YEAR
  return <PageContent yearsExperience={yearsExperience} />
}
