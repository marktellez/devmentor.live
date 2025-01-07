import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/shared/components/header'
import Footer from '@/shared/components/footer'
import { ToastProvider } from '@/shared/components/toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://devmentor.live'),
  title: 'DevmentorLive - Learn Modern Web Development with Mark Tellez',
  description: 'Expert mentorship in React, JavaScript, and modern web development from Mark Tellez, with over 3000+ mentoring sessions and 500+ five-star reviews.',
  keywords: ['web development', 'React', 'JavaScript', 'mentorship', 'coding', 'programming', 'software development', 'AI', 'machine learning'],
  authors: [{ name: 'Mark Tellez', url: 'https://marktellez.com' }],
  creator: 'Mark Tellez',
  publisher: 'DevmentorLive',
  openGraph: {
    type: 'website',
    title: 'DevmentorLive - Learn Modern Web Development',
    description: 'Expert mentorship in React, JavaScript, and modern web development. Over 3000+ successful mentoring sessions and 500+ five-star reviews.',
    url: 'https://devmentor.live',
    siteName: 'DevmentorLive',
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
    title: 'DevmentorLive - Learn Modern Web Development',
    description: 'Expert mentorship in React, JavaScript, and modern web development. Over 3000+ successful mentoring sessions and 500+ five-star reviews.',
    images: ['/marktellez.webp']
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-background text-foreground">
        <ToastProvider>
          <div className="relative flex min-h-screen flex-col bg-gradient-glow">
            <Header />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </ToastProvider>
      </body>
    </html>
  )
} 