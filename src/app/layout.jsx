import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/shared/components/header'
import Footer from '@/shared/components/footer'
import { ToastProvider } from '@/shared/components/toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://devmentor.live'),
  title: 'Mark Tellez - Expert Web Development & AI Mentor | 26+ Years Experience',
  description: 'Transform your development career with personalized mentorship from an industry expert. Master JavaScript, React, Node.js, and AI-powered development. 5.0/5.0 rating from 450+ reviews.',
  keywords: ['web development mentor', 'JavaScript mentor', 'AI programming', 'React.js', 'Node.js', 'TypeScript', 'NextJS', 'machine learning', 'coding mentor', 'AI development', 'software engineering', 'career coaching'],
  authors: [{ name: 'Mark Tellez', url: 'https://devmentor.live' }],
  creator: 'Mark Tellez',
  publisher: 'DevmentorLive',
  openGraph: {
    type: 'website',
    title: 'Mark Tellez - Expert Web Development & AI Mentor',
    description: 'Master modern web development and AI-powered programming with personalized mentorship from an industry expert with 26+ years of experience.',
    url: 'https://devmentor.live',
    siteName: 'DevmentorLive',
    images: [
      {
        url: '/mark.jpg',
        width: 800,
        height: 800,
        alt: 'Mark Tellez - Web Development & AI Mentor'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@agenticmark',
    creator: '@agenticmark',
    title: 'Mark Tellez - Web Development & AI Mentor',
    description: 'Learn AI-powered development from an expert with 26+ years of experience. 5.0/5.0 rating from 450+ reviews.',
    images: ['/mark.jpg']
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  alternates: {
    canonical: 'https://devmentor.live'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Devmentor.live - Mark Tellez",
    "description": "Expert web development and AI mentorship services with 26+ years of experience. Offering personalized guidance in JavaScript, React, Node.js, and AI-powered development.",
    "founder": {
      "@type": "Person",
      "name": "Mark Tellez",
      "jobTitle": "AI Researcher and Sr. Software Engineer",
      "sameAs": [
        "https://www.codementor.io/@marktellez",
        "https://mentorcruise.com/mentor/MarkTellez/"
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "450"
    },
    "areaServed": "Worldwide",
    "serviceType": ["Web Development Mentorship", "AI Programming Training", "Career Coaching"]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-background text-foreground">
        <ToastProvider>
          <div className="relative flex min-h-screen flex-col bg-gradient-glow">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ToastProvider>
      </body>
    </html>
  )
} 