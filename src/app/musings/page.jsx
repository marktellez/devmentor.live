import { getAllMusings } from '@/data/musings'
import ArticleCard from '@/shared/components/article-card'
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import PageHero from '@/shared/components/page-hero'

export const metadata = baseGenerateMetadata({
  title: 'Musings on AI & Development',
  description: 'Thoughts, insights, and lessons learned from over two decades of software development and AI integration.',
  path: '/musings'
})

export const dynamic = 'force-static'
export const revalidate = false

export default async function MusingsPage() {
  const musings = await getAllMusings()

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-5xl mx-auto">
        <PageHero>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Musings on AI & Development
          </h1>
          <div className="text-white/70 text-lg sm:text-xl space-y-4">
            <p>
              Thoughts, insights, and lessons learned from over two decades of software development
              and AI integration.
            </p>
          </div>
        </PageHero>

        <section className="px-4">
          <div className="grid gap-8">
            {musings.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}