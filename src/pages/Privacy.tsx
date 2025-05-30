
import Layout from '@/components/Layout';

const Privacy = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 cosmic-text text-center">Privacy Policy</h1>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <h2 className="text-2xl font-bold mb-4 cosmic-text">Information We Collect</h2>
                <p className="mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  book a session, or contact us for support. This may include your name, email address, 
                  birth information for readings, and session preferences.
                </p>

                <h2 className="text-2xl font-bold mb-4 cosmic-text">How We Use Your Information</h2>
                <ul className="mb-6 space-y-2">
                  <li>• Provide spiritual guidance and healing services</li>
                  <li>• Schedule and conduct sessions with practitioners</li>
                  <li>• Send you session recordings and reports</li>
                  <li>• Improve our services and user experience</li>
                  <li>• Communicate with you about your account and services</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 cosmic-text">Information Sharing</h2>
                <p className="mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties. 
                  Your session information is kept strictly confidential between you and your practitioner.
                </p>

                <h2 className="text-2xl font-bold mb-4 cosmic-text">Data Security</h2>
                <p className="mb-6">
                  We implement appropriate security measures to protect your personal information. 
                  All session recordings and personal data are encrypted and stored securely.
                </p>

                <h2 className="text-2xl font-bold mb-4 cosmic-text">Your Rights</h2>
                <p className="mb-6">
                  You have the right to access, update, or delete your personal information at any time. 
                  You may also opt out of promotional communications while still receiving important 
                  service-related messages.
                </p>

                <h2 className="text-2xl font-bold mb-4 cosmic-text">Contact Us</h2>
                <p className="mb-6">
                  If you have any questions about this Privacy Policy, please contact us at 
                  privacy@gurujicosmos.com or through our contact form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
