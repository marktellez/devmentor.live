import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Static excerpts for articles that need them
const MANUAL_EXCERPTS = {
  'vibe-coding-when-intuition-becomes-your-downfall': 'When I began coding in 1997, we didn\'t have trendy buzzwords like "vibe coding"—we simply called it cowboy coding. Today, this reckless approach is dressed up as a liberating, innovative method...'
}

export async function getAllMusings() {
  try {
    // Read all files from the musings directory
    const musingsDir = path.join(process.cwd(), 'src/data/musings')
    const files = fs.readdirSync(musingsDir)
    
    // Filter for markdown files and process each one
    const musingsData = await Promise.all(
      files
        .filter(filename => filename.endsWith('.md'))
        .map(async filename => {
          try {
            const id = filename.replace(/\.md$/, '')
            const filePath = path.join(musingsDir, filename)
            const fileContent = fs.readFileSync(filePath, 'utf8')
            const { data } = matter(fileContent)

            // Parse date strings into Date objects, ensuring UTC consistency
            const date = new Date(data.date)
            const updated = data.updated ? new Date(data.updated) : null

            // Use manual excerpt if available, otherwise use frontmatter excerpt
            const excerpt = MANUAL_EXCERPTS[id] || data.excerpt

            return {
              id,
              title: data.title,
              date,
              updated,
              image: data.image,
              excerpt,
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
            console.error(`Failed to process musing ${filename}:`, error)
            return null
          }
        })
    )

    // Filter out any failed processing and sort by date
    const sortedMusings = musingsData
      .filter(musing => musing !== null)
      .sort((a, b) => {
        // Ensure we're comparing actual dates
        const dateA = a.date instanceof Date ? a.date : new Date(a.date)
        const dateB = b.date instanceof Date ? b.date : new Date(b.date)
        // Reverse the comparison to get newest first
        return dateA.getTime() - dateB.getTime()
      })

    // Debug log the sorting
    console.log('Sorted musings:', sortedMusings.map(m => ({
      title: m.title,
      date: m.date.toISOString()
    })))

    return sortedMusings
  } catch (error) {
    console.error('Failed to read musings directory:', error)
    return []
  }
}

export async function getMusing(id) {
  try {
    const filePath = path.join(process.cwd(), 'src/data/musings', `${id}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)

    // Use manual excerpt if available, otherwise use frontmatter excerpt
    const excerpt = MANUAL_EXCERPTS[id] || data.excerpt

    return {
      id,
      content,
      title: data.title,
      date: new Date(data.date),
      updated: data.updated ? new Date(data.updated) : null,
      image: data.image,
      excerpt,
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

