import WebDevMentorshipContent from './web-dev-mentorship-content'
import { sharedData } from '@/lib/data'

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

// Generate metadata at build time
export const metadata = {
  title: 'Web Development & AI Mentorship Programs | DevmentorLive',
  description: 'Accelerate your development career with personalized mentorship from a 26+ year industry veteran. Expert guidance in web development, JavaScript, React, Next.js, and AI development.',
  keywords: 'web development mentor, web dev mentor, javascript mentor, typescript mentor, react mentor, nextjs mentor, ai development mentor, coding mentor, web development tutor, javascript tutor, typescript tutor, react tutor, nextjs tutor, ai development tutor, coding tutor, web development coaching, career mentor, coding career coach, software development mentor, web developer mentor, tech mentor, learn web development with mentor, one on one coding mentor, private web development tutor, online web development mentor, project based web development mentor, ai integration mentor, machine learning mentor, llm development mentor'
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
    title: "Web Development & AI Mentorship",
    subtitle: "Accelerate your development career with personalized mentorship from a 26+ year industry veteran.",
    description: [
      `With ${sharedData.stats.yearsExperience}+ years of hands-on experience in web development and AI, I provide personalized mentorship to help you master modern development skills.`,
      "Whether you're just starting out or looking to advance your career, I offer tailored guidance to help you achieve your goals."
    ]
  },
  expertise: {
    webdev: {
      title: 'Web Development Mentorship',
      description: 'Master modern web development with personalized guidance. Learn industry best practices, architecture patterns, and advanced techniques from an experienced mentor.',
      points: [
        'JavaScript & TypeScript mastery',
        'React & Next.js development',
        'Web architecture & patterns',
        'Performance optimization'
      ]
    },
    ai: {
      title: 'AI Development Mentorship',
      description: 'Learn to build and integrate AI solutions into your applications. From basic concepts to advanced implementations, get expert guidance in AI development.',
      points: [
        'AI integration strategies',
        'LLM implementation',
        'Machine learning basics',
        'AI best practices'
      ]
    },
    career: {
      title: 'Career Development',
      description: 'Get guidance on building a successful development career. Learn about industry trends, job opportunities, and how to stand out in the tech industry.',
      points: [
        'Career path planning',
        'Portfolio development',
        'Interview preparation',
        'Industry networking'
      ]
    },
    projects: {
      title: 'Project-Based Learning',
      description: 'Learn by doing with real-world projects. Get hands-on experience and detailed code reviews to improve your skills.',
      points: [
        'Real-world projects',
        'Code review sessions',
        'Best practices',
        'Problem-solving skills'
      ]
    }
  },
  mentorship: {
    title: "Mentorship Programs",
    programs: [
      {
        title: "One-on-One Mentorship",
        description: "Personalized guidance tailored to your goals and learning style. Regular sessions with focused attention on your development journey.",
        features: [
          "Weekly 1:1 sessions",
          "Personalized learning plan",
          "Code reviews",
          "Career guidance"
        ]
      },
      {
        title: "Group Mentorship",
        description: "Learn alongside peers in a collaborative environment. Share experiences and learn from others while getting expert guidance.",
        features: [
          "Small group sessions",
          "Peer learning",
          "Group projects",
          "Community support"
        ]
      },
      {
        title: "Code Review Sessions",
        description: "Get detailed feedback on your code and learn best practices. Improve your coding skills with expert guidance.",
        features: [
          "Detailed code reviews",
          "Best practices",
          "Performance optimization",
          "Security considerations"
        ]
      }
    ]
  },
  learning: {
    title: "Learning Paths",
    paths: [
      {
        title: "Web Development Fundamentals",
        description: "Master the basics of web development with a structured learning path.",
        topics: [
          "HTML & CSS",
          "JavaScript basics",
          "Web fundamentals",
          "Development tools"
        ]
      },
      {
        title: "Advanced JavaScript/TypeScript",
        description: "Deep dive into modern JavaScript and TypeScript development.",
        topics: [
          "ES6+ features",
          "TypeScript mastery",
          "Design patterns",
          "Testing"
        ]
      },
      {
        title: "React & Next.js",
        description: "Learn modern frontend development with React and Next.js.",
        topics: [
          "React fundamentals",
          "Next.js features",
          "State management",
          "Performance"
        ]
      },
      {
        title: "AI Development",
        description: "Master AI development and integration into web applications.",
        topics: [
          "AI basics",
          "LLM integration",
          "Machine learning",
          "AI tools"
        ]
      }
    ]
  },
  process: {
    title: "Mentorship Process",
    steps: [
      {
        title: "Initial Assessment",
        description: "We'll discuss your goals, current skills, and learning style to create a personalized plan."
      },
      {
        title: "Learning Plan Creation",
        description: "Develop a structured learning path tailored to your goals and timeline."
      },
      {
        title: "Regular Sessions",
        description: "Weekly sessions with focused learning, code reviews, and progress tracking."
      },
      {
        title: "Project Work",
        description: "Apply your learning through real-world projects and exercises."
      },
      {
        title: "Progress Tracking",
        description: "Regular assessments and adjustments to ensure you're meeting your goals."
      }
    ]
  },
  benefits: {
    title: "Why Choose Me as Your Mentor",
    items: [
      {
        title: "26+ Years Experience",
        description: "Learn from someone who has been in the industry for over two decades, working with cutting-edge technologies and solving complex problems.",
        icon: "AcademicCapIcon"
      },
      {
        title: "Personalized Learning Path",
        description: "Get a custom learning plan that matches your goals, experience level, and learning style. No one-size-fits-all approach.",
        icon: "ChartBarIcon"
      },
      {
        title: "Real-World Projects",
        description: "Work on actual projects that you can add to your portfolio. Learn by doing, not just by watching.",
        icon: "CodeBracketIcon"
      },
      {
        title: "Career Guidance",
        description: "Get insights into industry trends, job opportunities, and how to stand out in the tech industry.",
        icon: "RocketLaunchIcon"
      },
      {
        title: "Code Reviews & Feedback",
        description: "Receive detailed feedback on your code, helping you improve your skills and learn best practices.",
        icon: "DocumentCheckIcon"
      },
      {
        title: "Flexible Learning Schedule",
        description: "Learn at your own pace with flexible scheduling. Sessions are conducted online, making it convenient for you.",
        icon: "ClockIcon"
      }
    ]
  },
  success: {
    title: "Success Stories",
    items: [
      {
        title: "From Beginner to Professional",
        description: "Many of my mentees have gone from learning the basics to landing their first development jobs.",
        icon: "UserGroupIcon"
      },
      {
        title: "Career Advancement",
        description: "Developers have advanced their careers, moving from junior to senior positions with my guidance.",
        icon: "ArrowTrendingUpIcon"
      },
      {
        title: "Portfolio Development",
        description: "Build a strong portfolio of projects that showcase your skills to potential employers.",
        icon: "FolderIcon"
      }
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    questions: [
      {
        question: "What experience level is required?",
        answer: "I mentor developers of all experience levels, from beginners to advanced practitioners. We'll create a plan that matches your current skills and goals."
      },
      {
        question: "How long is the mentorship program?",
        answer: "Programs are flexible and can range from a few months to ongoing mentorship. We'll discuss your goals and create a timeline that works for you."
      },
      {
        question: "What topics can I learn?",
        answer: "I cover web development, JavaScript/TypeScript, React/Next.js, AI development, and career guidance. We'll focus on the topics most relevant to your goals."
      },
      {
        question: "How do sessions work?",
        answer: "Sessions are conducted online via video call. We'll have regular meetings, code reviews, and project work between sessions."
      },
      {
        question: "What's your teaching style?",
        answer: "I believe in hands-on learning with real-world projects. You'll learn by doing, with guidance and feedback to help you improve."
      },
      {
        question: "Do you offer group mentorship?",
        answer: "Yes, I offer both one-on-one and group mentorship programs. Group sessions provide additional benefits of peer learning and collaboration."
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
    primary: "Start Your Journey",
    secondary: "Book a Consultation",
    consultation: {
      title: "Ready to Accelerate Your Development Career?",
      description: "Book a consultation to discuss your goals and see how we can work together"
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