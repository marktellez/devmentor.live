'use client'

import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { formatDate, getReadingTime } from '@/lib/utils'
import ArticleCTA from '@/shared/components/article-cta'
import TableOfContents from '@/shared/components/table-of-contents'
import matter from 'gray-matter'

export default function ArticleContent({ content, title, date, updated, author, tags, image }) {
  const { content: parsedContent } = matter(content)
  const readingTime = getReadingTime(parsedContent)

  // Custom components for ReactMarkdown
  const components = {
    h2: ({ children }) => {
      const id = children
        .toString()
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/\s+/g, '-')

      return (
        <h2 id={id} className="scroll-mt-24">
          {children}
        </h2>
      )
    }
  }

  return (
    <div className="relative w-full px-4">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_250px] gap-8">
          <article className="min-w-0"> {/* Add min-w-0 to prevent flex child overflow */}
            {image && (
              <div className="mb-8 aspect-[21/9] overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <header className="mb-12 border-b border-zinc-800 pb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {tags?.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center justify-center text-xs text-green-400 bg-green-500/10 px-3 py-1.5 rounded-full whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 break-words">{title}</h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <img
                    src="/mark.jpg"
                    alt={author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{author}</span>
                </div>
                <span>•</span>
                {updated ? (
                  <time dateTime={updated} className="text-zinc-400">
                    Updated {formatDate(new Date(updated))}
                  </time>
                ) : (
                  <time dateTime={date}>
                    {formatDate(new Date(date))}
                  </time>
                )}
                <span>•</span>
                <span>{readingTime} min read</span>
              </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none overflow-hidden">
              <ReactMarkdown components={components}>{parsedContent}</ReactMarkdown>
            </div>

            <div className="mt-16">
              <ArticleCTA />
            </div>
          </article>

          <aside className="min-w-0"> {/* Add min-w-0 to prevent flex child overflow */}
            <TableOfContents content={parsedContent} />
          </aside>
        </div>
      </div>
    </div>
  )
}
