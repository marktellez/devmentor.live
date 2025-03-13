export function generateMetadata({ 
  title, 
  description, 
  path = '', 
  type = 'website',
  images = null
}) {
  const baseUrl = process.env.NEXT_PUBLIC_URL
  const fullUrl = `${baseUrl}${path}`
  const defaultImage = `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`
  
  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      type,
      url: fullUrl,
      images: images || [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images?.length ? images : [defaultImage],
    }
  }
}