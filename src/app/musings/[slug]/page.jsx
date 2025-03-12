import { notFound } from 'next/navigation'
import { getMusing, getAllMusings } from '@/data/musings'
import ArticleContent from './article-content'
import Script from 'next/script'

// Generate static paths at build time
export async function generateStaticParams() {
  const musings = getAllMusings()
  return musings.map((musing) => ({
    slug: musing.id,
  }))
}

export const dynamic = 'force-static'
export const revalidate = false

export default async function MusingPage({ params }) {
  const resolvedParams = await params
  const article = getMusing(resolvedParams.slug)

  if (!article) {
    notFound()
  }

  // Prepare structured data for the article
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: article.image || 'https://devmentor.live/musings.webp',
    datePublished: article.date.toISOString(),
    author: {
      '@type': 'Person',
      name: 'Mark Tellez',
      url: 'https://devmentor.live/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'DevmentorLive',
      logo: {
        '@type': 'ImageObject',
        url: 'https://devmentor.live/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://devmentor.live/musings/${params.slug}`
    },
    keywords: article.tags?.join(', '),
  }

  // Only add dateModified if article.updated is a valid Date
  if (article.updated instanceof Date) {
    structuredData.dateModified = article.updated.toISOString()
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <div className="mt-8">
            <ArticleContent
              content={article.content}
              title={article.title}
              date={article.date}
              updated={article.updated}
              author={article.author.name}
              tags={article.tags}
              image={article.image}
            />
          </div>
        </div>
      </div>
    </>
  )
}