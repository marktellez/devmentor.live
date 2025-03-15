'use client'

import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

export default function ArticleCard({ article }) {
  return (
    <Link href={`/musings/${article.id}`} className="block group">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="relative w-full sm:w-48 aspect-[16/9] sm:aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 640px) 100vw, 192px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500">
            {article.title}
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <div className="relative w-6 h-6 rounded-full overflow-hidden">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                sizes="24px"
                className="object-cover"
              />
            </div>
            <span>{article.author.name}</span>
            <span>•</span>
            <time dateTime={article.date.toISOString()}>
              {formatDate(article.date)}
            </time>
          </div>
          <p className="text-gray-600">
            {article.excerpt}
          </p>
        </div>
      </div>
    </Link>
  )
}