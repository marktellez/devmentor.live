'use client'

import { useRef } from 'react'
import CTAWrapper from '@/shared/components/contact-form-wrapper'
import PageHero from '@/shared/components/page-hero'
import CTAButton from '@/shared/components/cta-button'
import Pill from '@/shared/components/pill'
import Testimonials from '@/shared/components/testimonials'
import {
  AcademicCapIcon,
  ChartBarIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  DocumentCheckIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  FolderIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const iconMap = {
  AcademicCapIcon,
  ChartBarIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  DocumentCheckIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  FolderIcon
}

export default function WebDevMentorshipContent({ data }) {
  const ctaRef = useRef(null)

  const scrollToContact = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const getIcon = (iconName) => {
    const Icon = iconMap[iconName]
    return Icon ? <Icon className="w-8 h-8 text-purple-400" /> : null
  }

  return (
    <main className="min-h-screen pt-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24 mb-32">
          <div className="max-w-[720px]">
            <Pill color="green-500">
              5.0/5.0 Rating • 450+ Reviews
            </Pill>

            <h1 className="text-5xl lg:text-7xl font-bold mt-12 mb-8 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Web<br />
              Development<br />
              & AI<br />
              Mentorship
            </h1>

            <p className="text-xl text-white/70 mb-16 max-w-xl">
              With 28+ years of hands-on experience in web development and AI, I provide personalized mentorship to help you master modern development skills.
            </p>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">JavaScript</div>
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">TypeScript</div>
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">React</div>
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">Node.js</div>
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">Next.js</div>
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">AI Integration</div>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">1-on-1 Sessions</div>
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">Code Reviews</div>
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">Pair Programming</div>
                <div className="px-4 py-2 bg-[#121212] rounded-lg border border-white/10 text-sm text-white/70">AI Tools Training</div>
              </div>
            </div>
          </div>

          <div className="lg:w-[500px] flex flex-col items-center text-center">
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-2 border-white/10">
              <Image
                src="/mark.jpg"
                alt="Mark Tellez - Web Development Mentor"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-white/70 mt-8 text-lg">
              AI Researcher and Sr. Software Engineer with 28+ years of experience. Ranked 8th globally in AI programming contests. Let's build something amazing together.
            </p>
          </div>
        </div>

        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            {/* Main Content Sections */}
            <div className="space-y-32">
              {/* Benefits Section */}
              <div>
                <div className="flex flex-col sm:flex-row items-start gap-12 mb-12">

                  <div>
                    <h3 className="text-3xl font-bold flex items-center gap-2 mb-6">
                      <AcademicCapIcon className="w-8 h-8 text-purple-400" />
                      Why Choose Me as Your Mentor
                    </h3>
                    <p className="text-lg text-white/80 leading-relaxed mb-8">
                      With {data.stats.yearsExperience}+ years of experience, I provide comprehensive mentorship that combines technical expertise with practical guidance.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  <div className="bg-[#0A0A0A] p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <AcademicCapIcon className="w-6 h-6 text-purple-400" />
                      <h4 className="text-purple-400 font-medium">26+ Years Experience</h4>
                    </div>
                    <p className="text-white/70 text-sm">Learn from someone who has been in the industry for over two decades, working with cutting-edge technologies and solving complex problems.</p>
                  </div>

                  <div className="bg-[#0A0A0A] p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <ChartBarIcon className="w-6 h-6 text-purple-400" />
                      <h4 className="text-purple-400 font-medium">Personalized Learning Path</h4>
                    </div>
                    <p className="text-white/70 text-sm">Get a custom learning plan that matches your goals, experience level, and learning style. No one-size-fits-all approach.</p>
                  </div>

                  <div className="bg-[#0A0A0A] p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <CodeBracketIcon className="w-6 h-6 text-purple-400" />
                      <h4 className="text-purple-400 font-medium">Real-World Projects</h4>
                    </div>
                    <p className="text-white/70 text-sm">Work on actual projects that you can add to your portfolio. Learn by doing, not just by watching.</p>
                  </div>

                  <div className="bg-[#0A0A0A] p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <RocketLaunchIcon className="w-6 h-6 text-purple-400" />
                      <h4 className="text-purple-400 font-medium">Career Guidance</h4>
                    </div>
                    <p className="text-white/70 text-sm">Get insights into industry trends, job opportunities, and how to stand out in the tech industry.</p>
                  </div>
                </div>

                <div className="bg-[#0F0F1A] p-8 rounded-2xl">
                  <blockquote className="text-lg text-white/80 italic mb-6">
                    "Mark has a wealth of knowledge and expertise that is hard to find. Perfect mentor in many ways: clear and concise communication, reliable and a great teacher. I highly recommend working with him if you need help."
                    <div className="mt-4 text-sm text-white/60">
                      - Jelena Grimshaw
                    </div>
                  </blockquote>
                  <div className="flex justify-center mt-8">
                    <a
                      href="#contact-form"
                      className="inline-flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg text-white font-medium"
                    >
                      Start Your Journey →
                    </a>
                  </div>
                </div>
              </div>

              {/* Success Stories Section */}
              <div>
                <h3 className="text-3xl font-bold flex items-center gap-2 mb-6">
                  <RocketLaunchIcon className="w-8 h-8 text-green-400" />
                  Success Stories
                </h3>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  See how other developers have transformed their careers through our mentorship program.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {data.success?.items?.map((item, index) => (
                    <div key={index} className="bg-[#0A0A0A] p-6 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        {getIcon(item.icon)}
                        <h4 className="text-green-400 font-medium">{item.title}</h4>
                      </div>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#0F0F1A] p-8 rounded-2xl">
                  <blockquote className="text-lg text-white/80 italic mb-6">
                    "Mark is great, very helpful and knowledgeable. We looked at React and Javascript problems which Mark was able to solve."
                    <div className="mt-4 text-sm text-white/60">
                      - Matt Jennings
                    </div>
                  </blockquote>
                </div>
              </div>

              {/* Expertise Section */}
              <section className="mb-32">
                <h2 className="text-3xl font-bold mb-16 text-center">Areas of Expertise</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-900/50 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">{data.expertise.webdev.title}</h3>
                    <p className="text-white/70 mb-6">{data.expertise.webdev.description}</p>
                    <ul className="space-y-2">
                      {data.expertise.webdev.points.map((point, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                          <span className="text-white/70">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">{data.expertise.ai.title}</h3>
                    <p className="text-white/70 mb-6">{data.expertise.ai.description}</p>
                    <ul className="space-y-2">
                      {data.expertise.ai.points.map((point, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                          <span className="text-white/70">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Mentorship Programs Section */}
              <section className="mb-32">
                <h2 className="text-3xl font-bold mb-16 text-center">Mentorship Programs</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {data.mentorship.programs.map((program, index) => (
                    <div key={index} className="bg-gray-900/50 p-8 rounded-xl">
                      <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                      <p className="text-white/70 mb-6">{program.description}</p>
                      <ul className="space-y-2">
                        {program.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                            <span className="text-white/70">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Learning Paths Section */}
              <div>
                <h3 className="text-3xl font-bold flex items-center gap-2 mb-6">
                  <ChartBarIcon className="w-8 h-8 text-purple-400" />
                  Learning Paths
                </h3>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  Structured learning paths to help you achieve your goals efficiently.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {data.learning?.paths?.map((path, index) => (
                    <div key={index} className="bg-[#0A0A0A] p-6 rounded-lg">
                      <h4 className="text-purple-400 font-medium mb-3">{path.title}</h4>
                      <p className="text-white/70 mb-4">{path.description}</p>
                      <ul className="space-y-2">
                        {path.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                            <span className="text-white/70">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="bg-[#0F0F1A] p-8 rounded-2xl">
                  <blockquote className="text-lg text-white/80 italic mb-6">
                    "Mark is a great mentor! He's super knowledgable and as a student I appreciate his ability to explain concepts clearly. I can tell he really cares about my learning and progress."
                    <div className="mt-4 text-sm text-white/60">
                      - Isabella Martinez
                    </div>
                  </blockquote>
                  <div className="flex justify-center mt-8">
                    <a href="#contact-form" className="inline-flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg text-white font-medium">
                      Start Your Learning Journey →
                    </a>
                  </div>
                </div>
              </div>

              {/* Process Section */}
              <div>
                <h3 className="text-3xl font-bold flex items-center gap-2 mb-6">
                  <DocumentCheckIcon className="w-8 h-8 text-green-400" />
                  Mentorship Process
                </h3>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  A structured approach to ensure your success.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {data.process?.steps?.map((step, index) => (
                    <div key={index} className="bg-[#0A0A0A] p-6 rounded-lg flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-400/20 flex-shrink-0 flex items-center justify-center border border-green-400/30">
                        <span className="text-green-400 font-medium">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                        <p className="text-white/70">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#0F0F1A] p-8 rounded-2xl">
                  <blockquote className="text-lg text-white/80 italic mb-6">
                    "Mark is great, very helpful and knowledgeable. We looked at React and Javascript problems which Mark was able to solve."
                    <div className="mt-4 text-sm text-white/60">
                      - Matt Jennings
                    </div>
                  </blockquote>
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h3 className="text-3xl font-bold flex items-center gap-2 mb-6">
                  <ClockIcon className="w-8 h-8 text-purple-400" />
                  Frequently Asked Questions
                </h3>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  Common questions about our mentorship program.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {data.faq?.questions?.map((item, index) => (
                    <div key={index} className="bg-[#0A0A0A] p-6 rounded-lg">
                      <h4 className="text-purple-400 font-medium mb-3">{item.question}</h4>
                      <p className="text-white/70">{item.answer}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#0F0F1A] p-8 rounded-2xl">
                  <blockquote className="text-lg text-white/80 italic mb-6">
                    "Mark is a great mentor! He's super knowledgable and as a student I appreciate his ability to explain concepts clearly. I can tell he really cares about my learning and progress."
                    <div className="mt-4 text-sm text-white/60">
                      - Isabella Martinez
                    </div>
                  </blockquote>
                  <div className="flex justify-center mt-8">
                    <a href="#contact-form" className="inline-flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg text-white font-medium">
                      Get Your Questions Answered →
                    </a>
                  </div>
                </div>
              </div>

              <Testimonials />
            </div>
          </div>
        </section>

        <div ref={ctaRef} className="mt-32">
          <CTAWrapper context="hire" />
        </div>
      </div>
    </main>
  )
} 