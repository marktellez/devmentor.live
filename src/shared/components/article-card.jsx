'use client'

import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

export default function ArticleCard({ article }) {
  return (
    <Link href={`/musings/${article.id}`} className="block group">
      <div className="relative aspect-[16/9] mb-4 rounded-lg overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
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
    </Link>
  )
}