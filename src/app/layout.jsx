import './globals.css'
import Header from '@/shared/components/header'
import Footer from '@/shared/components/footer'

export const metadata = {
  metadataBase: new URL('https://devmentor.live'),
  title: 'DevmentorLive Archive - Learn Modern Web Development with Mark Tellez',
  description: 'Archive of DevmentorLive (2020-2023) - Expert mentorship in React, JavaScript, and modern web development from Mark Tellez, with over 3000+ mentoring sessions and 500+ five-star reviews.',
  keywords: ['web development', 'React', 'JavaScript', 'mentorship', 'coding', 'programming', 'software development', 'AI', 'machine learning'],
  authors: [{ name: 'Mark Tellez', url: 'https://marktellez.com' }],
  creator: 'Mark Tellez',
  publisher: 'DevmentorLive',
  openGraph: {
    type: 'website',
    title: 'DevmentorLive Archive - Learn Modern Web Development',
    description: 'Expert mentorship in React, JavaScript, and modern web development. Over 3000+ successful mentoring sessions and 500+ five-star reviews.',
    url: 'https://devmentor.live',
    siteName: 'DevmentorLive Archive',
    images: [
      {
        url: '/marktellez.webp',
        width: 800,
        height: 800,
        alt: 'Mark Tellez - Web Development Mentor'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@agenticmark',
    creator: '@agenticmark',
    title: 'DevmentorLive Archive - Learn Modern Web Development',
    description: 'Expert mentorship in React, JavaScript, and modern web development. Over 3000+ successful mentoring sessions and 500+ five-star reviews.',
    images: ['/marktellez.webp']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://devmentor.live" />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured data for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "DevmentorLive Archive",
            "description": "Archive of DevmentorLive (2020-2023) - Expert mentorship in React, JavaScript, and modern web development.",
            "url": "https://devmentor.live",
            "author": {
              "@type": "Person",
              "name": "Mark Tellez",
              "url": "https://marktellez.com",
              "sameAs": [
                "https://github.com/marktellez",
                "https://x.com/agenticmark",
                "https://www.codementor.io/@marktellez"
              ]
            }
          })}
        </script>
      </head>
      <body className="min-h-screen bg-black text-foreground">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
} 