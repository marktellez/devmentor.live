export async function generateMetadata() {
  const title = "Hire Senior Developer & AI Expert | 26+ Years Experience"
  const description = "Looking for a technical leader who combines deep development expertise with cutting-edge AI knowledge? Senior developer with 26+ years experience available for hire."
  const ogImage = `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

  return {
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
}

export default function HireDeveloperLayout({ children }) {
  return children
}