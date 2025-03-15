'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ArticleCard from './article-card'

export default function LatestMusing() {
  const [latestMusing, setLatestMusing] = useState(null)

  useEffect(() => {
    async function fetchMusing() {
      const response = await fetch('/api/latest-musing')
      const data = await response.json()
      // Convert date strings back to Date objects
      setLatestMusing({
        ...data,
        date: new Date(data.date),
        updated: data.updated ? new Date(data.updated) : null
      })
    }
    fetchMusing()
  }, [])

  if (!latestMusing) return null

  return (
    <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-y border-white/10 w-full flex items-center justify-center mt-16 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center w-full">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-12">Latest Musing</h2>
          <div className="w-full max-w-2xl">
            <ArticleCard article={latestMusing} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
