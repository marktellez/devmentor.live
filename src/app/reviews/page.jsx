'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import reviews from '@/data/reviews.json'
import featuredReviews from '@/data/featured.json'
import { MENTORING_SESSIONS, FIVE_STAR_REVIEWS } from '@/lib/config'

const ITEMS_PER_PAGE = 10

export default function ReviewsPage() {
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const averageRating = reviews.reduce((acc, review) => acc + (review.rating || 5), 0) / reviews.length
  const totalReviews = reviews.length

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1000) {
        setDisplayCount(prev => Math.min(prev + ITEMS_PER_PAGE, reviews.length))
      }
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16"
        >
          <motion.div variants={item} className="text-center">
            <div className="text-4xl font-light text-accent mb-2">{MENTORING_SESSIONS}</div>
            <div className="text-zinc-500 text-sm">MENTORING SESSIONS</div>
          </motion.div>
          <motion.div variants={item} className="text-center">
            <div className="text-4xl font-light text-accent mb-2">{FIVE_STAR_REVIEWS}</div>
            <div className="text-zinc-500 text-sm">5★ REVIEWS ON CODEMENTOR</div>
          </motion.div>
          <motion.div variants={item} className="text-center">
            <div className="text-4xl font-light text-accent mb-2">{averageRating.toFixed(1)}</div>
            <div className="text-zinc-500 text-sm">AVERAGE RATING</div>
          </motion.div>
        </motion.div>

        {/* Featured Reviews */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-12">Featured Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredReviews.map((review, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-accent/5 border border-accent/10 rounded-lg p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-semibold">
                      {review.writer.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{review.writer.name}</h3>
                    <p className="text-accent/80 text-sm">
                      {new Date(review.created_at * 1000).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </p>
                  </div>
                </div>
                <p className="text-white/70">{review.content}</p>
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
                className="border-l border-accent/20 pl-6"
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

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent hover:bg-accent-dark text-white flex items-center justify-center shadow-lg transition-colors"
            aria-label="Scroll to top"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
} 