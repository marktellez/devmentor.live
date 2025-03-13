'use client'

import { useEffect } from 'react'

export default function TableOfContents({ content }) {
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .replace(/\s+/g, '-')
  }

  const scrollToHeader = (e, slug) => {
    e.preventDefault()
    const element = document.getElementById(slug)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      window.history.pushState({}, '', `#${slug}`)
    }
  }

  useEffect(() => {
    if (window.location.hash) {
      const slug = window.location.hash.slice(1)
      const element = document.getElementById(slug)
      if (element) {
        setTimeout(() => {
          const headerOffset = 100
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }, 100)
      }
    }
  }, [])

  return (
    <div className="sticky top-24">
      <div className="bg-zinc-900 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
        <nav className="space-y-2">
          {content
            .split('\n')
            .filter(line => line.startsWith('## '))
            .map((heading, index) => {
              const text = heading.replace(/^## /, '')
              const slug = generateSlug(text)
              return (
                <a
                  key={index}
                  href={`#${slug}`}
                  onClick={(e) => scrollToHeader(e, slug)}
                  className="block text-sm text-zinc-200 hover:text-purple-400 transition-colors"
                >
                  {text}
                </a>
              )
            })}
          <div className="pt-4 mt-4 border-t border-zinc-800">
            <a
              href="#top"
              onClick={scrollToTop}
              className="block text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              ↑ Back to top
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}