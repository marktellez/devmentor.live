import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata'

export const metadata = baseGenerateMetadata({
  title: "Terms of Service | DevmentorLive",
  description: "Terms and conditions for using DevmentorLive's mentorship and educational services.",
  path: '/terms'
})

export default function Terms() {
  return (
    <div className="min-h-screen text-gray-300">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-gray max-w-none">
          <p className="text-sm mb-8">Last updated: March 20, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using DevmentorLive's website and services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
            <p>DevmentorLive provides:</p>
            <ul className="list-disc pl-6">
              <li>One-on-one mentorship sessions</li>
              <li>Technical interview preparation</li>
              <li>AI and web development consulting</li>
              <li>Educational content and resources</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Use the services for lawful purposes only</li>
              <li>Not share access to paid services</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p>
              Payment is required for certain services. All fees are non-refundable unless otherwise specified. 
              We reserve the right to modify our pricing with notice to our users.
            </p>
            <h3 className="text-xl font-medium mt-4 mb-3">Cancellation Policy</h3>
            <ul className="list-disc pl-6">
              <li>24-hour notice required for session cancellation</li>
              <li>Late cancellations may be charged in full</li>
              <li>Unused session credits expire after 6 months</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services are owned by DevmentorLive 
              and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              DevmentorLive shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from your use or inability to use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Service Modifications</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of our services 
              at any time without notice. We shall not be liable to you or any third party for any 
              modification, suspension, or discontinuation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior 
              notice, for conduct that we believe violates these Terms or is harmful to other users, 
              us, or third parties, or for any other reason.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the 
              State of Texas, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p>
              For any questions about these Terms, please contact us at:{' '}
              <a href="mailto:legal@devmentor.live" className="text-blue-400 hover:text-blue-300">
                legal@devmentor.live
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 