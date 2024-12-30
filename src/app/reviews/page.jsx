'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import reviews from '@/data/reviews.json'
import featuredReviews from '@/data/featured.json'
import { MENTORING_SESSIONS, FIVE_STAR_REVIEWS } from '@/lib/config'

const ITEMS_PER_PAGE = 10

export default function ReviewsPage() {
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE)
  const averageRating = reviews.reduce((acc, review) => acc + (review.rating || 5), 0) / reviews.length
  const totalReviews = reviews.length

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1000) {
        setDisplayCount(prev => Math.min(prev + ITEMS_PER_PAGE, reviews.length))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Client Reviews</h1>
          <p className="text-zinc-400 text-lg">
            Over {new Date().getFullYear() - 1999} years of helping developers solve their toughest challenges.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24"
        >
          <motion.div variants={item}>
            <div className="text-5xl font-light text-[#ff3333] mb-2">{averageRating.toFixed(1)}</div>
            <div className="text-zinc-500">Average Rating</div>
          </motion.div>
          <motion.div variants={item}>
            <div className="text-5xl font-light text-[#ff3333] mb-2">{totalReviews}</div>
            <div className="text-zinc-500">Total Reviews</div>
          </motion.div>
          <motion.div variants={item}>
            <div className="text-5xl font-light text-[#ff3333] mb-2">{FIVE_STAR_REVIEWS}</div>
            <div className="text-zinc-500">5-Star Reviews</div>
          </motion.div>
          <motion.div variants={item}>
            <div className="text-5xl font-light text-[#ff3333] mb-2">{MENTORING_SESSIONS}</div>
            <div className="text-zinc-500">Jobs Completed</div>
          </motion.div>
        </motion.div>

        {/* Featured Reviews */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-24"
        >
          <h2 className="text-2xl font-bold text-white mb-12">Featured Reviews</h2>
          <div className="space-y-16">
            {featuredReviews.map((review, index) => (
              <motion.div
                key={index}
                variants={item}
                className="border-l-2 border-[#ff3333] pl-8"
              >
                <blockquote className="text-xl text-zinc-300 mb-6">
                  {review.content}
                </blockquote>
                <div className="flex items-center gap-4">
                  {review.writer.avatar_url && (
                    <img
                      src={review.writer.avatar_url}
                      alt={review.writer.name}
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                  <div>
                    <div className="text-white font-medium">{review.writer.name}</div>
                    <div className="text-zinc-500">
                      {new Date(review.created_at * 1000).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Reviews */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <h2 className="text-2xl font-bold text-white mb-12">All Reviews</h2>
          <div className="space-y-12">
            {reviews.slice(0, displayCount).map((review, index) => (
              <motion.div
                key={index}
                variants={item}
                className="border-l border-zinc-800 pl-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  {review.writer.avatar_url && (
                    <img
                      src={review.writer.avatar_url}
                      alt={review.writer.name}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  <div>
                    <div className="text-white">{review.writer.name}</div>
                    <div className="text-zinc-500 text-sm">
                      {new Date(review.created_at * 1000).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </div>
                  </div>
                </div>
                <p className="text-zinc-300">{review.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 