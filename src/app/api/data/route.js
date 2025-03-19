export async function GET() {
  // Example data - replace with your actual data
  const data = {
    stats: {
      yearsExperience: 26,
      sessions: 1000,
      rating: 5.0
    },
    latestMusing: {
      title: "Latest Blog Post",
      excerpt: "Sample excerpt from the latest blog post"
    }
  }

  return Response.json(data)
} 