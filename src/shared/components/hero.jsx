'use client'

import dynamic from 'next/dynamic'

const DynamicHero = dynamic(
  () => import('./dynamic/hero'),
  {
    loading: () => (
      <div className="min-h-screen w-full flex items-start py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-white/10 rounded mb-6"></div>
            <div className="h-24 w-96 bg-white/10 rounded mb-8"></div>
            <div className="h-16 w-64 bg-white/10 rounded"></div>
          </div>
        </div>
      </div>
    ),
    ssr: true
  }
)

export default function Hero() {
  return <DynamicHero />
} 