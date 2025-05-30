
import Layout from '@/components/Layout';

const Terms = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 cosmic-text text-center">Terms of Service</h1>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <h2 className="text-2xl font-bold mb-4 cosmic-text">Acceptance of Terms</h2>
                <p className="mb-6">
                  By accessing and using Guruji Cosmos Trust services, you agree to be bound by these 
                  Terms of Service and all applicable laws and regulations.
                </p>

                <h2 className="text-2xl font-bold mb-4 cosmic-text">Services Provided</h2>
                <p className="mb-6">
                  We provide spiritual guidance, healing sessions, and educational content for personal 
                  growth and wellness. Our services are for entertainment and educational purposes and 
                  should not replace professional medical or psychological treatment.
                </p>

                <h2 className="text-2xl font-bold mb-4 cosmic-text">User Responsibilities</h2>
                <ul className="mb-6 space-y-2">
                  <li>• Provide accurate information for bookings and sessions</li>
                  <li>• Attend scheduled sessions or cancel with appropriate notice</li>
                  <li>• Treat practitioners and staff with respect</li>
                  <li>• Use services for personal growth and healing purposes only</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 cosmic-text">Payment and Refunds</h2>
                <p className="mb-6">
                  Payment is required at the time of booking. We offer a satisfaction guarantee with 
                  full refunds available within 48 hours of your session if you're not completely satisfied.
                </p>

                <h2 className="text-2xl font-bold mb-4 cosmic-text">Cancellation Policy</h2>
                <p className="mb-6">
                  Sessions may be cancelled or rescheduled up to 24 hours before the scheduled time 
                  without penalty. Cancellations with less than 24 hours notice may be subject to fees.
                </p>

                <h2 className="text-2xl font-bold mb-4 cosmic-text">Disclaimer</h2>
                <p className="mb-6">
                  Our spiritual guidance services are not a substitute for professional medical, 
                  psychological, or legal advice. We encourage you to seek professional help for 
                  serious health or legal matters.
                </p>

                <h2 className="text-2xl font-bold mb-4 cosmic-text">Contact Information</h2>
                <p className="mb-6">
                  For questions about these Terms of Service, please contact us at 
                  legal@gurujicosmos.com or through our contact form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
