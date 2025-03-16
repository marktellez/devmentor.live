'use client'

import dynamic from 'next/dynamic'

const DynamicCTA = dynamic(
  () => import('./dynamic/cta'),
  {
    loading: () => (
      <section className="py-24 sm:py-32 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 w-96 bg-white/10 rounded mb-8 mx-auto"></div>
            <div className="h-4 w-64 bg-white/10 rounded mb-16 mx-auto"></div>
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <div>
                  <div className="h-4 w-32 bg-white/10 rounded mb-2"></div>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-12 bg-white/5 rounded-lg border border-white/10"></div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="h-4 w-32 bg-white/10 rounded mb-2"></div>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-12 bg-white/5 rounded-lg border border-white/10"></div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="h-4 w-32 bg-white/10 rounded mb-2"></div>
                  <div className="h-32 bg-white/5 rounded-lg border border-white/10"></div>
                </div>
                <div>
                  <div className="h-4 w-32 bg-white/10 rounded mb-2"></div>
                  <div className="h-12 bg-white/5 rounded-lg border border-white/10"></div>
                </div>
                <div className="h-12 bg-blue-500/50 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    ssr: true
  }
)

export default function CTA({
  title = "Let's Find Your Path to AI-Powered Development",
  context = '', // e.g., 'custom-models', 'voice-ai', etc.
  id = 'cta'
}) {
  return <DynamicCTA title={title} context={context} id={id} />
}