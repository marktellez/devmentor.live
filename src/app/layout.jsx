
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/shared/components/header'
import Footer from '@/shared/components/footer'
import { ToastProvider } from '@/shared/components/toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://devmentor.live'),
  title: {
    template: '%s | DevmentorLive',
    default: 'Expert Web Development & AI Mentorship | DevmentorLive ',
  },
  description: 'Expert web development and AI mentorship services with 26+ years of experience.',
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