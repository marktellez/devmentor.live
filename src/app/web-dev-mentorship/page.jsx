import WebDevMentorshipContent from './web-dev-mentorship-content'

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

// Generate metadata at build time
export const metadata = {
  title: 'Web Development Mentorship | Learn Modern Development & AI Integration',
  description: 'Master modern web development and AI integration with personalized mentorship. Learn from an experienced developer with 25+ years of expertise in both traditional and AI-powered development.',
}

// This data will be used at build time
const data = {
  stats: {
    yearsExperience: 25,
    sessions: 500,
    rating: 5.0,
    reviews: 100
  },
  expertise: {
    frontend: {
      title: 'Frontend Development',
      description: 'Modern React, Next.js, TypeScript, and advanced UI/UX patterns'
    },
    backend: {
      title: 'Backend Development',
      description: 'Node.js, Python, cloud architecture, and scalable systems'
    },
    ai: {
      title: 'AI Integration',
      description: 'LLM integration, AI tooling, and automation workflows'
    },
    architecture: {
      title: 'System Architecture',
      description: 'Microservices, cloud-native design, and scalable infrastructure'
    }
  },
  technologies: {
    frontend: {
      title: 'Frontend Stack',
      list: 'React, Next.js, TypeScript, Tailwind CSS, Web Components'
    },
    backend: {
      title: 'Backend Stack',
      list: 'Node.js, Python, PostgreSQL, Redis, GraphQL'
    },
    ai: {
      title: 'AI Tools',
      list: 'OpenAI, Anthropic, LangChain, Vector DBs, RAG'
    },
    devops: {
      title: 'DevOps & Cloud',
      list: 'AWS, Docker, Kubernetes, CI/CD, Monitoring'
    }
  }
}

export default function WebDevMentorshipPage() {
  return <WebDevMentorshipContent data={data} />
} 