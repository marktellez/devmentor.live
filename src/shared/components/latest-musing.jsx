'use client'

import Link from 'next/link'

export default function LatestMusing({ data }) {
  return (
    <div className="my-32">
      <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-y border-white/10 w-full flex items-center justify-center py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Latest Musing</h2>
          <Link 
            href={`/musings/${data.slug}`}
            className="group block w-full hover:bg-white/5 rounded-2xl transition-colors duration-200 p-6"
          >
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-purple-500/10">
                  <img
                    src={`/musings/${data.slug}.webp`}
                    alt={data.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-3 flex flex-col">
                <time className="text-sm text-white/50 mb-2">
                  {data.date}
                </time>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-200">
                  {data.title}
                </h3>
                <p className="text-white/70 text-lg">
                  {data.description}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
