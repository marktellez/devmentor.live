'use client'

import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { formatDate, getReadingTime } from '@/lib/utils'
import CTAWrapper from '@/shared/components/contact-form-wrapper'
import TableOfContents from '@/shared/components/table-of-contents'
import matter from 'gray-matter'
import Image from 'next/image'

export default function ArticleContent({
  content,
  title,
  date,
  updated,
  author,
  authorUrl,
  authorAvatar,
  tags,
  image
}) {
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
          <article className="min-w-0">
            {image && (
              <div className="mb-8 aspect-[21/9] overflow-hidden rounded-xl">
                <Image
                  src={image}
                  alt={title}
                  width={1200}
                  height={514}
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
              <h1 className="text-4xl font-bold mb-4">{title}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={authorAvatar}
                    alt={author}
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full"
                  />
                  <a href={authorUrl} className="text-sm text-zinc-400 hover:text-white">
                    {author}
                  </a>
                </div>
                <span className="text-sm text-zinc-500">•</span>
                <time className="text-sm text-zinc-400">
                  {formatDate(date)}
                </time>
                <span className="text-sm text-zinc-500">•</span>
                <span className="text-sm text-zinc-400">
                  {readingTime} min read
                </span>
                {updated && (
                  <>
                    <span className="text-sm text-zinc-500">•</span>
                    <time className="text-sm text-zinc-400">
                      Updated {formatDate(updated)}
                    </time>
                  </>
                )}
              </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none overflow-hidden">
              <ReactMarkdown components={components}>{parsedContent}</ReactMarkdown>
            </div>

            <div className="mt-16 -mx-6 sm:mx-0 pt-8 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Don't let these challenges slow down your team
              </h3>
              <p className="text-white/70 mb-6">
                Let's discuss how to:
              </p>
              <ul className="list-disc list-inside text-white/70 mb-6">
                <li>Establish effective AI coding guidelines</li>
                <li>Create sustainable development practices</li>
                <li>Build reliable, maintainable systems</li>
                <li>Leverage AI without accumulating technical debt</li>
              </ul>
              <p className="text-white/70 mb-8">
                <a href="#cta" onClick={(e) => {
                  e.preventDefault()
                  const ctaElement = document.getElementById('cta')
                  if (ctaElement) {
                    const elementPosition = ctaElement.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - 100
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    })
                  }
                }} className="hover:text-white transition-colors">
                  Contact me
                </a> to develop a strategy that ensures your AI tools enhance, rather than undermine,
                your engineering practices. I work with teams of all sizes. My goal is to have AI improve
                my lives, not replace us or destroy my human value.
              </p>
              <div className="mt-16 p-8 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-white/10 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 text-center">Let's Build Better Systems Together</h2>
                <CTAWrapper context="article" />
              </div>
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-32 ">
              <TableOfContents content={parsedContent} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
