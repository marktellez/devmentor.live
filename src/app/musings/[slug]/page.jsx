
import { notFound } from 'next/navigation'
import { getMusing, getAllMusings } from '@/data/musings'
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'
import ArticleContent from './article-content'
import Script from 'next/script'
import { getFullUrl } from '@/lib/utils'

export async function generateMetadata(props) {
  const params = await props.params
  const article = await getMusing(params.slug)

  if (!article) {
    return baseGenerateMetadata({
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
      path: `/musings/${params.slug}`
    })
  }

  return baseGenerateMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/musings/${params.slug}`,
    type: 'article'
  })
}

export async function generateStaticParams() {
  const musings = await getAllMusings()
  return musings.map((musing) => ({
    slug: musing.id,
  }))
}

export default async function MusingPage(props) {
  const params = await props.params
  const article = await getMusing(params.slug)

  if (!article) {
    notFound()
  }

  // Prepare structured data for the article
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: article.image || `/api/og?title=${encodeURIComponent(article.title)}&description=${encodeURIComponent(article.excerpt)}`,
    datePublished: article.date.toISOString(),
    author: {
      '@type': 'Person',
      name: 'Mark Tellez',
      url: getFullUrl('/about')
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
              authorUrl={article.author.url}
              authorAvatar={article.author.avatar}
              tags={article.tags}
              image={article.image}
            />
          </div>
        </div>
      </div>
    </>
  )
}