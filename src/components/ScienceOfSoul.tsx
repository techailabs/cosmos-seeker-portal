
const ScienceOfSoul = () => {
  const sciences = [
    {
      icon: "🧠",
      title: "Brainwave Entrainment",
      description: "Sound frequencies that synchronize your neural oscillations for deeper states"
    },
    {
      icon: "⚡",
      title: "Energy Field Mapping",
      description: "Biofield science shows how emotional states create measurable electromagnetic changes"
    },
    {
      icon: "🧬",
      title: "Subconscious Programming",
      description: "Neuroplasticity research proves we can rewire limiting beliefs at the cellular level"
    },
    {
      icon: "🌊",
      title: "Resonance Therapy",
      description: "Quantum physics reveals how intention and vibration influence reality at molecular scales"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="cosmic-text">Science of the Soul</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ancient wisdom backed by modern research. Here's how energy, consciousness, 
            and healing actually work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {sciences.map((science, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{science.icon}</div>
              <h3 className="text-lg font-bold cosmic-text mb-3">{science.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{science.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold cosmic-text mb-4">This Isn't Woo. It Works.</h3>
            <p className="text-gray-700 mb-6">
              Every technique we use is grounded in measurable science. From heart rate variability 
              to brain imaging studies, the results speak for themselves.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold cosmic-text">89%</div>
                <div className="text-sm text-gray-600">Felt emotional clarity within 2 sessions</div>
              </div>
              <div>
                <div className="text-3xl font-bold cosmic-text">73%</div>
                <div className="text-sm text-gray-600">Found breakthrough in major life decisions</div>
              </div>
              <div>
                <div className="text-3xl font-bold cosmic-text">95%</div>
                <div className="text-sm text-gray-600">Would recommend to a friend</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceOfSoul;
