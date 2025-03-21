import WebDevMentorshipContent from './web-dev-mentorship-content'
import { sharedData } from '@/lib/data'

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

// Generate metadata at build time
export const metadata = {
  title: 'Hire a Senior Developer & AI Expert | DevmentorLive',
  description: 'Get results-driven technical leadership and advanced AI integration from a revenue-centric entrepreneur with 26+ years of experience in web development, systems programming, and custom AI solutions.',
  keywords: 'senior developer for hire, AI consultant, hire an AI expert, web development and AI solutions, custom AI model development, LLM expert, AI-powered automation, AI consultant for startups, custom AI model development for business, senior full-stack developer for AI projects'
}

// This data will be used at build time
const data = {
  stats: {
    yearsExperience: sharedData.stats.yearsExperience,
    sessions: sharedData.stats.sessions,
    rating: sharedData.stats.rating,
    reviews: sharedData.stats.reviews
  },
  intro: {
    title: "Hire a Senior Developer & AI Expert",
    subtitle: "Bringing unparalleled web development, systems programming, and AI innovation to companies of every size.",
    description: [
      `With ${sharedData.stats.yearsExperience}+ years of hands-on experience in web and systems programming, I provide architecture design and implementation tailored for modern business needs.`,
      "Unlike typical developers, I focus on revenue-driven decision-making, ensuring code quality and technical strategies that accelerate business growth while delivering results on time."
    ]
  },
  expertise: {
    technical: {
      title: 'Technical Leadership',
      description: `With ${sharedData.stats.yearsExperience}+ years of hands-on experience in web and systems programming, I provide architecture design and implementation tailored for modern business needs. Unlike typical developers, I focus on revenue-driven decision-making, ensuring code quality and technical strategies that accelerate business growth while delivering results on time.`,
      points: [
        'Architecture design & implementation',
        'Team mentorship & growth',
        'Code quality & best practices',
        'Technical decision making'
      ]
    },
    ai: {
      title: 'AI Expertise',
      description: 'I specialize in cutting-edge AI solutions, including AI-powered automation, LLM implementation, and custom AI model development. My AI innovations have fooled professionals, won awards, and placed in top-tier competitions. Whether integrating AI into existing systems or developing models from scratch, I ensure businesses get AI solutions that actually work.',
      points: [
        'AI integration strategies',
        'Custom AI model development',
        'LLM implementation',
        'AI-powered automation'
      ]
    },
    fullstack: {
      title: 'Full-Stack Development',
      description: 'Expert in modern web technologies and systems programming, delivering scalable solutions that drive business growth.',
      points: [
        'React & Next.js applications',
        'Node.js & Python backends',
        'Cloud architecture & DevOps',
        'Performance optimization'
      ]
    },
    systems: {
      title: 'Systems Programming',
      description: 'Deep expertise in building robust, high-performance systems that scale.',
      points: [
        'Distributed systems design',
        'Microservices architecture',
        'Real-time processing systems',
        'High-performance computing'
      ]
    }
  },
  achievements: {
    title: "Key Achievements",
    items: [
      {
        title: "Award-Winning AI Innovations",
        description: "Developed an award-winning text-to-speech model that fooled BossLade (Snoop Dogg's wife) by generating audio indistinguishable from the real thing."
      },
      {
        title: "Global AI Agent Contest",
        description: "Placed 8th worldwide out of 5,000+ participants in an AI agent contest, building a Harry Potter-style battle agent using a small neural network and a genetic algorithm."
      },
      {
        title: "Zooly AI Integration",
        description: "Developed an AI-powered agent for Zooly, capable of using tools, retrieving company data via RAG, and replacing traditional form-heavy UIs with natural language interactions."
      }
    ]
  },
  technologies: {
    frontend: {
      title: 'Frontend Technologies',
      list: 'React, Next.js, TypeScript, Tailwind CSS, Web Components'
    },
    backend: {
      title: 'Backend Stack',
      list: 'Node.js, Python, PostgreSQL, Redis, GraphQL'
    },
    ai: {
      title: 'AI Development Tools',
      list: 'OpenAI GPT-4, GitHub Copilot, LangChain, Vector DBs, RAG Systems'
    },
    devops: {
      title: 'Cloud & DevOps',
      list: 'AWS, Docker, Kubernetes, CI/CD, Monitoring'
    }
  },
  process: {
    title: "How I Work With Clients",
    steps: [
      {
        title: "Initial Consultation",
        description: "Meet virtually with the client to understand requirements and wishlist."
      },
      {
        title: "Research & Planning",
        description: "Perform deep technical research and project planning."
      },
      {
        title: "Client Review",
        description: "Present the plan to ensure alignment before execution."
      },
      {
        title: "Development Begins",
        description: "Execute work in iterative cycles with weekly updates."
      },
      {
        title: "Weekly Progress Reviews",
        description: "Demo progress to maintain client alignment."
      },
      {
        title: "Refinement & Testing",
        description: "Fine-tune, optimize, and validate final results."
      },
      {
        title: "Final Deliverables",
        description: "Work is released progressively upon each payment."
      }
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    questions: [
      {
        question: "What industries do you work with?",
        answer: "I work with a wide range of industries, including SaaS, AI startups, enterprise tech, and automation-heavy businesses."
      },
      {
        question: "Do you only work with AI projects?",
        answer: "No, I also specialize in full-stack development, systems programming, and web applications."
      },
      {
        question: "How long does a typical project take?",
        answer: "It depends on scope, but I prioritize speed and efficiency while maintaining quality. Expect initial results within weeks, not months."
      },
      {
        question: "What's your approach to technical leadership?",
        answer: `With ${sharedData.stats.yearsExperience}+ years of experience, I focus on revenue-driven decision-making and ensuring code quality that accelerates business growth. I provide clear technical direction while mentoring team members.`
      },
      {
        question: "How do you handle project communication?",
        answer: "I maintain transparent communication through weekly demos, progress updates, and regular check-ins. You'll always know exactly where your project stands."
      },
      {
        question: "What makes your AI solutions different?",
        answer: "My AI solutions are built for real-world business impact. I've developed award-winning models and placed in global competitions, bringing that expertise to every AI project."
      }
    ]
  },
  testimonials: [
    {
      name: "Adam Stockland",
      role: "Senior Developer",
      company: "7+ Years Experience",
      quote: "I've used Mark a couple times. He is awesome! I've been using Rails, etc for 7+ years but I still get hung up once in a while...Mark knows his $h!. I won't search for mentors anymore...I'll just use Mark.",
      rating: 5
    },
    {
      name: "Isabella Martinez",
      role: "Student Developer",
      company: "Web Development",
      quote: "Mark is a great mentor! He's super knowledgable and as a student I appreciate his ability to explain concepts clearly. I can tell he really cares about my learning and progress. He is fair and makes sure I'm getting value from my sessions.",
      rating: 5
    }
  ],
  cta: {
    primary: "Work With Me",
    secondary: "Book a Consultation",
    consultation: {
      title: "Ready to Build Something Amazing?",
      description: "Book a consultation to discuss your project and see how we can work together"
    }
  }
}

// Add schema markup for FAQ
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: data.faq.questions.map(q => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: q.answer
    }
  }))
}

export default function WebDevMentorshipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WebDevMentorshipContent data={data} />
    </>
  )
} 