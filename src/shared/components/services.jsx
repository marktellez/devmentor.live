'use client'

import dynamic from 'next/dynamic'

const DynamicServices = dynamic(
  () => import('./dynamic/services'),
  {
    loading: () => (
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 w-96 bg-white/10 rounded mb-8 mx-auto"></div>
            <div className="h-4 w-64 bg-white/10 rounded mb-16 mx-auto"></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border border-white/10 p-8 rounded-lg bg-white/[0.02]">
                  <div className="h-6 w-32 bg-white/10 rounded mb-4"></div>
                  <div className="h-20 w-full bg-white/10 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    ),
    ssr: true
  }
)

export default function Services() {
  return <DynamicServices />
} 