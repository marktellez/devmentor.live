export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-light tracking-tight">
          <span className="text-white">Devmentor</span>
          <span className="text-[#ff3333]">Live</span>
        </a>
        <nav className="flex gap-8">
          <a href="/" className="text-white/70 hover:text-white">Home</a>
          <a href="/about" className="text-white/70 hover:text-white">About your Mentor</a>
          <a href="/reviews" className="text-white/70 hover:text-white">Reviews</a>
        </nav>
      </div>
    </header>
  )
} 