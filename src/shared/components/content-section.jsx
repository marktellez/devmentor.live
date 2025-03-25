import { CodeBracketIcon, RocketLaunchIcon, AcademicCapIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function ContentSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* Hero Content Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Transform Your Development Career
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Join hundreds of developers who have accelerated their careers through personalized mentorship.
            With over 26 years of experience and a perfect 5.0/5.0 rating, I'll help you master both traditional
            and AI-powered development techniques.
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-32">
          {/* Web Development Mastery */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold flex items-center gap-2"><CodeBracketIcon className="w-8 h-8 text-purple-400" /> Web Development Mastery</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Since 1997, I've been crafting web applications and mentoring developers in the art of clean,
                functional programming. My expertise spans the entire modern web stack:
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js', 'TailwindCSS'].map((tech) => (
                  <li key={tech} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span className="text-white/70">{tech}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a href="#contact-form" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  Start Your Journey
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:ml-auto">
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
                <blockquote className="text-lg text-white/80 italic flex items-center gap-2">
                  <Image
                    src="/mark.jpg"
                    alt="Mark - AI Developer and Mentor"
                    width={192}
                    height={192}
                    className="w-48 h-48 rounded-full object-cover border-2 border-purple-400/20"
                  />
                  Whether you're building a simple web app or a complex enterprise system,
                  I'll help you write better code using modern best practices and industry-proven patterns.
                </blockquote>
              </div>
            </div>
          </div>

          {/* AI-Powered Development */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">AI Programming Achievement</h4>
                    <p className="text-white/70">
                      <a
                        href="https://www.codingame.com/multiplayer/bot-programming/fantastic-bits/leaderboard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition-colors"
                      >
                        Ranked 8th in CodeGame's Fantastic Bits AI Competition
                      </a>
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <RocketLaunchIcon className="w-5 h-5 text-green-400" />
                    <span className="text-white/80">70% productivity increase with AI tools</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RocketLaunchIcon className="w-5 h-5 text-green-400" />
                    <span className="text-white/80">Built a Text To Speech voice model that can replicate just about any voice</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RocketLaunchIcon className="w-5 h-5 text-green-400" />
                    <span className="text-white/80">Built multiple chatbots with tool use and RAG abilities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RocketLaunchIcon className="w-5 h-5 text-green-400" />
                    <span className="text-white/80">Completely Integrated my coding with AI (VibeCoding)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl font-bold flex items-center gap-2"><RocketLaunchIcon className="w-8 h-8 text-green-400" /> AI-Powered Development Revolution</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                As an AI researcher and top-ranked programmer, I'll teach you how to leverage AI to transform
                your development workflow. Learn to use cutting-edge AI tools to:
              </p>
              <ul className="space-y-3">
                {[
                  'Automate repetitive coding tasks',
                  'Generate and debug code efficiently',
                  'Build AI-powered applications',
                  'Implement machine learning solutions'
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/70">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Personalized Learning */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold flex items-center gap-2"><UserGroupIcon className="w-8 h-8 text-purple-400" /> Personalized Learning Journey</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                My mentorship approach is tailored to your goals and learning style. Get hands-on guidance through:
              </p>
              <div className="grid gap-6">
                {[
                  {
                    title: '1-on-1 Live Sessions',
                    description: 'Interactive coding and real-time problem solving'
                  },
                  {
                    title: 'Code Reviews',
                    description: 'Detailed feedback on your code and architecture'
                  },
                  {
                    title: 'Recorded Sessions',
                    description: 'Review and reinforce your learning anytime'
                  }
                ].map((item) => (
                  <div key={item.title} className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10">
                <blockquote className="text-xl text-white/80 italic mb-6 flex items-center gap-2">
                  <Image
                    src="/mark.jpg"
                    alt="Mark - AI Developer and Mentor"
                    width={192}
                    height={192}
                    className="w-48 h-48 rounded-full object-cover border-2 border-purple-400/20"
                  /> 450+ satisfied developers have transformed their careers through my mentorship program.
                </blockquote>
                <div className="flex justify-center">
                  <a
                    href="#contact-form"
                    className="inline-flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg text-white font-medium"
                  >
                    Book Your First Session
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Me as a Web Development Mentor */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold flex items-center gap-2">
                <AcademicCapIcon className="w-8 h-8 text-purple-400" /> 
                Why Choose Me as a Web Development Mentor
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                With 26+ years of hands-on development experience, I provide comprehensive mentorship in modern web development. 
                My approach combines practical coding with industry best practices:
              </p>
              <ul className="space-y-3">
                {[
                  'Hands-on coding sessions with real-world projects',
                  'Deep expertise in React, Next.js, and modern JavaScript',
                  'Focus on clean code and scalable architecture',
                  'Integration of cutting-edge AI development tools'
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/70">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a href="#contact-form" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  Start Your Mentorship Journey
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:ml-auto">
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
                <blockquote className="text-lg text-white/80 italic mb-6">
                  "Mark has a wealth of knowledge and expertise that is hard to find. Perfect mentor in many ways: clear and concise communication, reliable and a great teacher. I highly recommend working with him if you need help."
                  <div className="mt-4 text-sm text-white/60">
                    - Jelena Grimshaw
                  </div>
                </blockquote>
              </div>
            </div>
          </div>

          {/* JavaScript and TypeScript Tutoring */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
                <blockquote className="text-lg text-white/80 italic mb-6">
                  "Mark is great, very helpful and knowledgeable. We looked at React and Javascript problems which Mark was able to solve."
                  <div className="mt-4 text-sm text-white/60">
                    - Matt Jennings
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl font-bold flex items-center gap-2">
                <CodeBracketIcon className="w-8 h-8 text-green-400" /> 
                Expert JavaScript & TypeScript Tutor
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Learn JavaScript and TypeScript from an industry veteran. My tutoring approach focuses on practical skills 
                and real-world applications, helping you master:
              </p>
              <ul className="space-y-3">
                {[
                  'Modern JavaScript features and best practices',
                  'TypeScript type system and advanced patterns',
                  'Building production-ready applications',
                  'Testing and debugging strategies'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a href="#contact-form" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors">
                  Book a Tutoring Session
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Hire Senior Developer Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold flex items-center gap-2">
                <RocketLaunchIcon className="w-8 h-8 text-purple-400" /> 
                Hire a Senior Full Stack Developer
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Looking for a senior developer who can deliver high-quality, scalable solutions? With extensive experience 
                in both frontend and backend development, I offer:
              </p>
              <div className="grid gap-6">
                {[
                  {
                    title: 'Full Stack Expertise',
                    description: 'End-to-end development with modern technologies'
                  },
                  {
                    title: 'AI Integration',
                    description: 'Cutting-edge AI solutions and automation'
                  },
                  {
                    title: 'Architecture Design',
                    description: 'Scalable and maintainable system design'
                  }
                ].map((item) => (
                  <div key={item.title} className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <a href="#contact-form" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  Discuss Your Project
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:ml-auto">
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
                <blockquote className="text-lg text-white/80 italic mb-6">
                  "Mark knocked it out of the park for us filling in for a lost developer. His code was excellent and he always confirmed we understood his work for the handoff."
                  <div className="mt-4 text-sm text-white/60">
                    - Jeff Carroll
                  </div>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Next.js and React Development */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold flex items-center gap-2">
                <CodeBracketIcon className="w-8 h-8 text-purple-400" /> 
                Next.js & React Development Expert
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Specialized in building modern web applications with Next.js and React. Whether you're learning or hiring,
                I provide comprehensive expertise in:
              </p>
              <ul className="space-y-3">
                {[
                  'Server-side rendering and static site generation',
                  'React hooks and modern patterns',
                  'Next.js app router and server components',
                  'Performance optimization and SEO'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a href="#contact-form" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:ml-auto">
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
                <blockquote className="text-lg text-white/80 italic mb-6">
                  "I've known about Mark for a while through his React courses. He was awesome! I got answers to a lot of the areas of this project that I was unfamiliar with and we planned out a way to get the project going."
                  <div className="mt-4 text-sm text-white/60">
                    - Michael Thompson
                  </div>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Node.js and TypeScript Development */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
                <blockquote className="text-lg text-white/80 italic mb-6">
                  "Mark is an excellent communicator, and he provides the info and the value you want in a mentor. He has a clear road map for teaching long-term mentees."
                  <div className="mt-4 text-sm text-white/60">
                    - Carlos Rodriguez
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl font-bold flex items-center gap-2">
                <CodeBracketIcon className="w-8 h-8 text-green-400" /> 
                Node.js & TypeScript Development
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Master backend development with Node.js and TypeScript. Learn to build scalable, type-safe applications
                with industry best practices:
              </p>
              <ul className="space-y-3">
                {[
                  'TypeScript type system and advanced patterns',
                  'Node.js architecture and performance',
                  'API design and microservices',
                  'Database integration and optimization'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a href="#contact-form" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors">
                  Start Learning
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* AI Development Expertise */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold flex items-center gap-2">
                <RocketLaunchIcon className="w-8 h-8 text-purple-400" /> 
                AI Development & Integration
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Leverage the power of AI in your development workflow. Learn to integrate cutting-edge AI tools
                and build AI-powered applications:
              </p>
              <div className="grid gap-6">
                {[
                  {
                    title: 'AI Development',
                    description: 'Build and integrate AI models into applications'
                  },
                  {
                    title: 'AI Mentoring',
                    description: 'Learn to use AI tools effectively in development'
                  },
                  {
                    title: 'AI Solutions',
                    description: 'Custom AI solutions for business needs'
                  }
                ].map((item) => (
                  <div key={item.title} className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <a href="#contact-form" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  Explore AI Development
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:ml-auto">
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
                <blockquote className="text-lg text-white/80 italic mb-6">
                  "Mark worked on freelance projects for us. He was flexible and communicated well. His coding was excellent and he made sure we understood what he was doing."
                  <div className="mt-4 text-sm text-white/60">
                    - Jeff Carroll
                  </div>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Level Up Your Development Career?</h3>
            <p className="text-lg text-white/80 mb-8">
              Join the ranks of successful developers who have transformed their careers through expert mentorship.
              Whether you're looking to master web development, integrate AI into your workflow, or accelerate your
              career growth, I'm here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center px-8 py-4 bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg text-white font-medium"
              >
                Start Your Journey
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 