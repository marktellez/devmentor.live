export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-light text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-gray">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            This site serves as a historical archive of DevmentorLive. We collect minimal
            data through basic analytics to understand site usage. No personal information
            is collected or stored.
          </p>
          {/* Add more privacy policy content as needed */}
        </div>
      </div>
    </div>
  )
} 