export default function Header() {
  return (
    <header className="relative sm:fixed sm:top-0 sm:left-0 sm:right-0 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <a href="/" className="text-2xl tracking-tight">
            <span className="text-white font-normal">Devmentor</span>
            <span className="text-accent font-semibold">Live</span>
          </a>
          <nav className="flex gap-4 sm:gap-8 text-sm sm:text-base">
            <a href="/" className="text-white/70 hover:text-white">Home</a>
            <a href="/about" className="text-white/70 hover:text-white">About your Mentor</a>
            <a href="/reviews" className="text-white/70 hover:text-white">Reviews</a>
          </nav>
        </div>
      </div>
    </header>
  )
} 