export default function CookiePolicy() {
  return (
    <div className="min-h-screen text-gray-300">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-light text-white mb-8">Cookie Policy</h1>
        <div className="prose prose-invert prose-gray">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            This site uses only essential cookies for basic functionality. We do not use
            any tracking or marketing cookies.
          </p>
          {/* Add more cookie policy content as needed */}
        </div>
      </div>
    </div>
  )
} 