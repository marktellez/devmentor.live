'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const PageHeroContent = ({ children }) => {
  return (
    <section className="pb-16 px-4">
      <motion.header 
        className="my-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.header>
    </section>
  )
}

export default dynamic(() => Promise.resolve(PageHeroContent), {
  ssr: false
}) 