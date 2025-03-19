import dynamic from 'next/dynamic'

// Dynamically import the client-side CTA with no SSR
const DynamicCTA = dynamic(
  () => import('./dynamic/cta'),
  { ssr: false }
)

export default function StaticCTA({ title, context, id }) {
  return (
    <section id={id} className="py-24 sm:py-32 bg-gradient-to-b from-transparent to-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-white/70 text-lg">
            Book a free consultation to discuss your goals and create a personalized learning path.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <DynamicCTA title={title} context={context} id={id} />
        </div>
      </div>
    </section>
  )
} 