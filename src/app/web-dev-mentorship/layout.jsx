export async function generateMetadata() {
  return {
    title: "Web Development Mentorship Programs",
    description: "Accelerate your web development career with personalized mentorship. Learn modern frameworks, best practices, and real-world development skills.",
    openGraph: {
      title: "Web Development Mentorship Programs",
      description: "Accelerate your web development career with personalized mentorship. Learn modern frameworks, best practices, and real-world development skills.",
      type: 'website',
      url: 'https://devmentor.live/web-dev-mentorship',
      images: [
        {
          url: '/web-dev.webp',
          width: 1200,
          height: 630,
          alt: 'Web Development Mentorship',
        },
      ],
    },
  }
}

export default function WebDevMentorshipLayout({ children }) {
  return children
}