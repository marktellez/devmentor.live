
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/shared/components/header'
import Footer from '@/shared/components/footer'
import { ToastProvider } from '@/shared/components/toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://devmentor.live'),
  title: {
    default: 'Web Development & AI Mentorship',
    template: '%s | DevmentorLive'
  },
  description: 'Expert web development mentorship and AI integration services from a senior developer with 26+ years of experience.',
  openGraph: {
    title: {
      default: 'Web Development & AI Mentorship',
      template: '%s | DevmentorLive'
    },
    description: 'Expert web development mentorship and AI integration services from a senior developer with 26+ years of experience.',
    type: 'website',
    siteName: 'DevmentorLive',
    locale: 'en_US',
    images: [{
      url: '/api/og',
      width: 1200,
      height: 630,
      alt: 'DevmentorLive'
    }],
  },
  other: {
    'twitter:card': 'summary_large_image',
    'twitter:image': 'https://devmentor.live/api/og?title=Web%20Development%20%26%20AI%20Mentorship&description=Expert%20web%20development%20mentorship%20and%20AI%20integration%20services%20from%20a%20senior%20developer%20with%2026%2B%20years%20of%20experience.',
    'twitter:title': 'Web Development & AI Mentorship',
    'twitter:description': 'Expert web development mentorship and AI integration services from a senior developer with 26+ years of experience.'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  )
} 