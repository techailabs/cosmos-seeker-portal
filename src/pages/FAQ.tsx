
import Layout from '@/components/Layout';

const FAQ = () => {
  const faqs = [
    {
      question: "What makes Guruji Cosmos Trust different from other spiritual services?",
      answer: "We combine ancient wisdom traditions with modern healing techniques, creating a unique 'sacred-tech fusion' approach. Our practitioners are highly trained in both traditional methods and contemporary therapeutic practices, offering you the best of both worlds."
    },
    {
      question: "How accurate are the readings?",
      answer: "Our practitioners have decades of experience and thousands of satisfied clients. While we cannot predict the future with 100% certainty, our readings provide valuable insights and guidance that help you make informed decisions about your life path."
    },
    {
      question: "Do I need to believe in astrology or spirituality for the sessions to work?",
      answer: "An open mind is helpful, but you don't need to be a believer. Many of our clients are initially skeptical but find value in the psychological insights and practical guidance provided during sessions."
    },
    {
      question: "How should I prepare for my session?",
      answer: "Come with specific questions or areas you'd like to explore. For astrology readings, have your exact birth time, date, and location ready. For other sessions, simply bring an open mind and willingness to explore your inner world."
    },
    {
      question: "Are the sessions confidential?",
      answer: "Absolutely. All sessions are completely confidential. We maintain the highest standards of privacy and never share your personal information or session details with anyone."
    },
    {
      question: "Can I record my session?",
      answer: "Yes! We encourage clients to record their sessions for future reference. We also provide a recording of the session along with any written reports or recommendations."
    },
    {
      question: "What if I'm not satisfied with my session?",
      answer: "Your satisfaction is our priority. If you're not completely satisfied with your session, we offer a full refund within 48 hours. We're confident in the value our practitioners provide."
    },
    {
      question: "How often should I have sessions?",
      answer: "This varies by individual and service type. Some clients benefit from monthly sessions, while others prefer quarterly or annual check-ins. Your practitioner will recommend a schedule based on your specific needs and goals."
    }
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 cosmic-text">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about your spiritual journey with us
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold cosmic-text mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4 cosmic-text">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">We're here to help you on your spiritual journey</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cosmic-gradient text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Contact Support
              </button>
              <button className="border border-purple-200 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
