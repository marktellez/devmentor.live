import { getMusing } from '@/data/musings'

export async function generateMetadata({ params }) {
  const article = getMusing(params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.'
    }
  }

  const publishedTime = article.date.toISOString()
  const modifiedTime = article.updated ? article.updated.toISOString() : publishedTime

  return {
    title: `${article.title} | Mark Tellez`,
    description: article.excerpt,
    keywords: [...(article.tags || []), 'Software Development', 'AI Development', 'Programming'],
    authors: [{ name: 'Mark Tellez', url: 'https://devmentor.live' }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: ['Mark Tellez'],
      url: `https://devmentor.live/musings/${params.slug}`,
      images: [
        {
          url: article.image || '/musings.webp',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@agenticmark',
      creator: '@agenticmark',
      title: article.title,
      description: article.excerpt,
      images: [article.image || '/musings.webp'],
    },
    alternates: {
      canonical: `https://devmentor.live/musings/${params.slug}`,
    }
  }
}
