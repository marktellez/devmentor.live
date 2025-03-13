export async function generateMetadata() {
  const title = "Web Development Mentorship Programs"
  const description = "Accelerate your web development career with personalized mentorship. Learn modern frameworks, best practices, and real-world development skills."
  const ogImage = `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://devmentor.live/web-dev-mentorship',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'Web Development Mentorship',
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

export default function WebDevMentorshipLayout({ children }) {
  return children
}