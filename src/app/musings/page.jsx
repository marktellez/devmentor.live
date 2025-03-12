import { motion } from 'framer-motion'
import { getAllMusings } from '@/data/musings'
import ArticleCard from '@/shared/components/article-card'

export const dynamic = 'force-static'
export const revalidate = false

export default function MusingsPage() {
  const musings = getAllMusings();

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Musings on AI & Development
          </h1>
          <p className="text-lg sm:text-xl text-white/70 mb-8">
            Thoughts, insights, and lessons learned from over two decades of software development
            and AI integration.
          </p>
        </div>

        <div className="grid gap-8">
          {musings.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}