import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const musings = [
  {
    id: 'vibe-coding-when-intuition-becomes-your-downfall',
    excerpt: 'When I began coding in 1997, we didn\'t have trendy buzzwords like "vibe coding"—we simply called it cowboy coding. Today, this reckless approach is dressed up as a liberating, innovative method...',
    // Add SEO-friendly fields
    canonicalUrl: `${process.env.NEXT_PUBLIC_URL}/musings/vibe-coding-when-intuition-becomes-your-downfall`,
    keywords: ['software development', 'coding practices', 'development methodology'],
  }
];

export async function getAllMusings() {
  const musingsData = await Promise.all(musings.map(async musing => {
    try {
      const filePath = path.join(process.cwd(), 'src/data/musings', `${musing.id}.md`)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)

      return {
        ...musing,
        title: data.title,
        date: new Date(data.date),
        updated: data.updated ? new Date(data.updated) : null,
        image: data.image,
        author: {
          name: data.author || 'Mark Tellez',
          avatar: '/mark.jpg',
          url: `${process.env.NEXT_PUBLIC_URL}/about`
        },
        tags: data.tags || [],
        canonicalUrl: data.canonicalUrl || `${process.env.NEXT_PUBLIC_URL}/musings/${musing.id}`,
        keywords: data.keywords || musing.keywords || []
      }
    } catch (error) {
      console.error(`Failed to load content for ${musing.id}:`, error)
      return {
        ...musing,
        title: musing.id,
        date: new Date(),
        updated: new Date(),
        tags: [],
        author: {
          name: 'Mark Tellez',
          avatar: '/mark.jpg',
          url: `${process.env.NEXT_PUBLIC_URL}/about`
        }
      }
    }
  }))

  return musingsData
}

export async function getMusing(id) {
  try {
    const filePath = path.join(process.cwd(), 'src/data/musings', `${id}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)

    return {
      id,
      content,
      title: data.title,
      date: new Date(data.date),
      updated: data.updated ? new Date(data.updated) : null,
      image: data.image,
      excerpt: data.excerpt,
      author: {
        name: data.author || 'Mark Tellez',
        avatar: '/mark.jpg',
        url: `${process.env.NEXT_PUBLIC_URL}/about`
      },
      tags: data.tags || [],
      canonicalUrl: data.canonicalUrl || `${process.env.NEXT_PUBLIC_URL}/musings/${id}`,
      keywords: data.keywords || []
    }
  } catch (error) {
    console.error(`Failed to load content for ${id}:`, error)
    return null
  }
}

