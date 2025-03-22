import reviews from '@/data/reviews.json'
import featuredReviews from '@/data/featured.json'
import { MENTORING_SESSIONS, FIVE_STAR_REVIEWS } from '@/lib/config'
import Image from 'next/image'

export default function ReviewsPage() {
  const averageRating = reviews.reduce((acc, review) => acc + (review.rating || 5), 0) / reviews.length

  // Get more featured reviews - take top rated ones
  const extendedFeaturedReviews = [...featuredReviews]
  const additionalFeatured = reviews
    .filter(review => 
      review.rating === 5 && 
      review.content.length > 100 &&
      !featuredReviews.some(f => f.content === review.content)
    )
    .slice(0, 4)
  extendedFeaturedReviews.push(...additionalFeatured)

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <div className="mb-20">
          <h1 className="text-5xl font-bold text-white mb-4">Client Reviews</h1>
          <p className="text-zinc-400 text-lg">
            Over {new Date().getFullYear() - 1999} years of helping developers solve their toughest challenges.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-light text-green-400 mb-2">{MENTORING_SESSIONS}</div>
            <div className="text-zinc-500 text-sm">MENTORING SESSIONS</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-green-400 mb-2">{FIVE_STAR_REVIEWS}</div>
            <div className="text-zinc-500 text-sm">5★ REVIEWS ON CODEMENTOR</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-green-400 mb-2">{averageRating.toFixed(1)}</div>
            <div className="text-zinc-500 text-sm">AVERAGE RATING</div>
          </div>
        </div>

        {/* Featured Reviews */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-12">Featured Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {extendedFeaturedReviews.map((review, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  {review.writer.avatar_url ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={decodeURIComponent(review.writer.avatar_url.replace(/\\u0026/g, '&'))}
                        alt={review.writer.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-purple-400/10 flex items-center justify-center">
                      <span className="text-purple-400 font-semibold">
                        {review.writer.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-white font-semibold">{review.writer.name}</h3>
                    <p className="text-purple-400/80 text-sm">
                      {new Date(review.created_at * 1000).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </p>
                  </div>
                </div>
                <p className="text-zinc-400">{review.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* All Reviews */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-12">All Reviews</h2>
          <div className="space-y-12">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="border-l border-purple-400/20 pl-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  {review.writer.avatar_url ? (
                    <Image
                      src={decodeURIComponent(review.writer.avatar_url.replace(/\\u0026/g, '&'))}
                      alt={review.writer.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-purple-400/10 flex items-center justify-center">
                      <span className="text-purple-400 font-semibold">
                        {review.writer.name.charAt(0)}
                      </span>
                    </div>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 