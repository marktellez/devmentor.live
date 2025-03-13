'use client'

import { motion } from 'framer-motion'

export default function PageLayout({
  children,
  className = "",
  badge,
  title,
  subtitle,
}) {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 px-4">
        <motion.div className="container mx-auto max-w-4xl">
          {(badge || title || subtitle) && (
            <div className="text-center">
              {badge && (
                <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
                  {badge}
                </span>
              )}

              {title && (
                <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white mt-8">
                  {title}
                </h1>
              )}

              {subtitle && (
                <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          <div className={className}>
            {children}
          </div>
        </motion.div>
      </section>
    </div>
  )
}