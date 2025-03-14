'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { formatDate, getReadingTime } from '@/lib/utils'

export default function ArticleLayout({ children, title, date, content }) {
  const readingTime = getReadingTime(content);

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-8 py-24">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg prose-invert"
        >
          <Link href="/musings" className="text-purple-400 hover:text-purple-300 no-underline mb-8 block">
            ← Back to Musings
          </Link>

          <div className="flex items-center gap-4 text-white/50 mb-8">
            <time dateTime={date.toISOString()}>{formatDate(date)}</time>
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>

          {children}

          <div className="mt-16 pt-8 border-t border-white/10">
            <h3>Ready to level up your development skills?</h3>
            <p>
              Get personalized mentorship and guidance to help you build better software.
              Let's work together to turn these insights into practical improvements in your code.
            </p>
            <Link
              href="/developer-mentorship"
              className="inline-block px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors no-underline"
            >
              Explore Mentorship Options
            </Link>
          </div>
        </motion.article>
      </div>
    </div>
  )
}