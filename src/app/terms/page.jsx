export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-light text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-gray">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            This is an archival site documenting the historical existence of DevmentorLive.
            The service is no longer active and these terms are for informational purposes only.
          </p>
          {/* Add more terms content as needed */}
        </div>
      </div>
    </div>
  )
} 