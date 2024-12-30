"use client"
import Stats from '@/shared/components/stats'
import Hero from '@/shared/components/hero'
import Services from '@/shared/components/services'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Stats />
      <Services />
    </div>
  )
} 