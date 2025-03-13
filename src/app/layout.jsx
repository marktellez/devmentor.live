
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/shared/components/header'
import Footer from '@/shared/components/footer'
import { ToastProvider } from '@/shared/components/toast'
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata = baseGenerateMetadata({
  title: 'Web Development & AI Mentorship',
  description: 'Expert web development mentorship and AI integration services from a senior developer with 26+ years of experience.',
  path: '/'
})

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