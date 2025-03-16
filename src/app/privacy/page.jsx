import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'

export const metadata = baseGenerateMetadata({
  title: "Privacy Policy | DevmentorLive",
  description: "Learn how DevmentorLive protects and handles your data with our comprehensive privacy policy.",
  path: '/privacy'
})

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen text-gray-300">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-gray max-w-none">
          <p className="text-sm mb-8">Last updated: March 20, 2024</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              At DevmentorLive, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, and protect your personal information when you use our website and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-medium mb-3">1. Information You Provide</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and email address when you contact us</li>
              <li>Information shared during mentorship sessions</li>
              <li>Payment information when purchasing services</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">2. Automatically Collected Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Usage data through Vercel Analytics</li>
              <li>Device and browser information</li>
              <li>IP address and approximate location</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6">
              <li>To provide and improve our services</li>
              <li>To communicate with you about our services</li>
              <li>To process payments and maintain accounts</li>
              <li>To analyze website performance and user behavior</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your 
              personal information. However, no method of transmission over the internet is 
              100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p>
              We use trusted third-party services for:
            </p>
            <ul className="list-disc pl-6">
              <li>Analytics (Vercel Analytics)</li>
              <li>Payment processing</li>
              <li>Email communication</li>
            </ul>
            <p className="mt-4">
              These services may collect and process your data according to their own privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or your personal data, please contact us at:{' '}
              <a href="mailto:privacy@devmentor.live" className="text-blue-400 hover:text-blue-300">
                privacy@devmentor.live
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 