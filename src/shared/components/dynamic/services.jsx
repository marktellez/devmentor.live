'use client'

export default function DynamicServices() {
  const services = [
    {
      title: 'Expert Web Development',
      description: '26+ years of experience in JavaScript, TypeScript, React, and Node.js. Learn to write clean, functional, and maintainable code that scales.'
    },
    {
      title: 'AI-Powered Development',
      description: 'Master modern AI tools and learn how to use them for 70% of your development work. From coding assistance to automation, become an AI-first developer.'
    },
    {
      title: '1-on-1 Mentorship',
      description: 'Personalized guidance through live coding sessions, code reviews, and pair programming. Get immediate feedback and learn best practices in real-time.'
    },
    {
      title: 'Modern Stack Mastery',
      description: 'Expert guidance in Next.js, TailwindCSS, MongoDB, and modern web development tools. Build production-ready applications from scratch.'
    },
    {
      title: 'Machine Learning & AI',
      description: 'Learn AI development from a top-ranked AI programmer. From basic ML concepts to advanced AI implementations in production systems.'
    },
    {
      title: 'Flexible Learning Path',
      description: 'Custom-tailored mentorship to match your goals and schedule. Book sessions when you need them, with recorded sessions for later review.'
    },
    {
      title: 'Code Review & Architecture',
      description: 'Get expert feedback on your code and learn how to structure large applications. Master clean architecture and SOLID principles.'
    },
    {
      title: 'Career Development',
      description: 'Guidance on career growth, interview preparation, and building a strong portfolio. Learn from real-world industry experience.'
    }
  ]

  return (
    <section className="pb-24 sm:pb-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Comprehensive Mentorship Services
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From web development fundamentals to advanced AI integration, get personalized guidance
            from an industry expert with over 1000 successful mentoring sessions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="border border-white/10 p-8 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-200"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
