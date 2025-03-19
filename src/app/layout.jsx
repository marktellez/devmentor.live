import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/shared/components/header'
import Footer from '@/shared/components/footer'
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import { generateWebSiteSchema } from '@/lib/schema'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = baseGenerateMetadata({
  title: 'Web Development & AI Mentorship',
  description: 'Expert web development mentorship and AI integration services from a senior developer with 26+ years of experience.',
  path: '/'
})

export default function RootLayout({ children }) {
  const schemaItems = generateWebSiteSchema();

  return (
    <html lang="en">
      <head>
        {schemaItems.map((schema, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <Footer />
        <Analytics />
      </body>
    </html>
  )
} 