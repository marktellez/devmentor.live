import Image from 'next/image'
import { FACTS } from '@/lib/config'
import Stats from '@/shared/components/stats'

export default function AboutContent() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
          About Me
        </h1>
        <div className="text-white/70 text-lg sm:text-xl space-y-4">
          <p>
            Senior full-stack developer and tech mentor with over 26 years of experience, specializing in AI integration, modern web development, and transforming developers' careers through personalized mentorship.
          </p>
        </div>
      </div>
      <div className="w-48 h-48 md:w-64 md:h-64 relative shrink-0 rounded-full overflow-hidden mx-auto md:mx-0">
        <Image
          src="/mark.jpg"
          alt="Mark Tellez"
          fill
          sizes="(max-width: 768px) 192px, 256px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
} 