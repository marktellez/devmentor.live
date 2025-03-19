import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function generateExcerpt(content, maxLength = 300) {
  // Remove frontmatter if present (gray-matter should handle this but just in case)
  const cleanContent = content.replace(/^---[\s\S]*?---/, '').trim()
  
  // Get first paragraph - look for first chunk of text that's not empty
  const firstParagraph = cleanContent
    .split('\n\n')
    .map(p => p.trim())
    .find(p => p && !p.startsWith('#'))
    
  if (!firstParagraph) return ''
  
  // Clean up markdown syntax
  const cleaned = firstParagraph
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace links with just text
    .replace(/[_*`]/g, '') // Remove emphasis markers
    
  // Truncate to maxLength if needed
  if (cleaned.length <= maxLength) return cleaned
  
  // Try to cut at last complete sentence within limit
  const truncated = cleaned.substring(0, maxLength)
  const lastPeriod = truncated.lastIndexOf('.')
  return lastPeriod > 0 ? truncated.substring(0, lastPeriod + 1) : truncated + '...'
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
            const { data, content } = matter(fileContent)

            // Parse date strings into Date objects, ensuring UTC consistency
            const date = new Date(data.date)
            const updated = data.updated ? new Date(data.updated) : null

            // Use frontmatter excerpt or generate one from content
            const excerpt = data.excerpt || generateExcerpt(content)

            return {
              id,
              title: data.title,
              date,
              updated,
              image: `/musings/${id}.webp`,
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
        return dateB.getTime() - dateA.getTime() // Changed to sort newest first
      })

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

    // Use frontmatter excerpt or generate one from content
    const excerpt = data.excerpt || generateExcerpt(content)

    return {
      id,
      content,
      title: data.title,
      date: new Date(data.date),
      updated: data.updated ? new Date(data.updated) : null,
      image: `/musings/${id}.webp`,
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

