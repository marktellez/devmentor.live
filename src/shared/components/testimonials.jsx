import featuredReviews from '@/data/featured.json'
import allReviews from '@/data/reviews.json'
import { useState, useEffect } from 'react'

const MIN_REVIEW_LENGTH = 60

export default function Testimonials() {
  const [randomReviews, setRandomReviews] = useState([])
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    // Handle responsive layout detection
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640) // sm breakpoint in Tailwind
    }
    
    // Initial check
    handleResize()
    
    // Add listener
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Combine all reviews and filter out short ones
    const allAvailableReviews = [...featuredReviews, ...allReviews]
      .filter(review => review.content.length >= MIN_REVIEW_LENGTH)
    
    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
      }
      return array
    }
    
    // Get random reviews
    const shuffledReviews = shuffleArray([...allAvailableReviews])
    const selectedReviews = shuffledReviews
      .slice(0, isMobile ? 3 : 4)
      .map(review => ({
        name: review.writer.name,
        role: review.writer.username,
        quote: review.content,
        rating: review.rating || 5,
        avatar: review.writer.avatar_url
      }))
    
    setRandomReviews(selectedReviews)
  }, [isMobile]) // Re-run when screen size changes between mobile/desktop

  return (
    <div className="my-32">
      <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
        {randomReviews.map((testimonial, index) => (
          <div key={index} className="bg-white/5 p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              {testimonial.avatar ? (
                <div className="relative w-6 h-6 rounded-full overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full bg-purple-400/20 flex items-center justify-center border border-purple-400/30">
                  <span className="text-xs font-medium text-purple-400">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
              )}
              <div className="flex-1">
                <p className="font-semibold text-white">{testimonial.name}</p>
              </div>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
            <p className="text-white/70 italic">{testimonial.quote}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
          <a 
            href={'/reviews'} 
            className="inline-block text-purple-400 hover:text-purple-300 transition-colors"
          >
            <p className="text-white/60 text-sm mt-1">Care to see all my reviews? Click here.</p>
          </a>
        </div>
    </div>
  )
} 