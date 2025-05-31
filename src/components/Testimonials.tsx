
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Guruji Cosmos helped me find clarity I searched for 10 years.",
      author: "Sarah M.",
      transformation: "Career Breakthrough"
    },
    {
      quote: "The music therapy healed something talk therapy never could.",
      author: "David K.",
      transformation: "Emotional Healing"
    },
    {
      quote: "My business took off after following their astrological roadmap.",
      author: "Priya S.",
      transformation: "Business Success"
    },
    {
      quote: "I finally understood my life patterns through palmistry reading.",
      author: "Michael R.",
      transformation: "Self-Discovery"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="cosmic-text">Real Transformations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stories of healing, clarity, and spiritual awakening from our community
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentIndex 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-4'
                }`}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                  <div className="text-4xl mb-4">💫</div>
                  <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div>
                      <div className="font-semibold text-purple-600">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.transformation}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'cosmic-gradient' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
