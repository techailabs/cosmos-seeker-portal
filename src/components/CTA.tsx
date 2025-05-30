
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 cosmic-gradient text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 animate-pulse-soft"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white/20 animate-float"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-yellow-400 animate-pulse-soft"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
            Join thousands of seekers who've discovered their true path through our sacred-tech fusion approach. 
            Your spiritual awakening starts with a single step.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="golden-gradient text-white hover:opacity-90 transition-all duration-300 px-8 py-4 text-lg font-semibold glow"
            >
              Start Your Free Soul Reading 🌟
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-900 transition-all duration-300 px-8 py-4 text-lg"
            >
              Book a 1:1 Session
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🎁</div>
              <h3 className="text-xl font-semibold mb-2">Free Soul Report</h3>
              <p className="text-purple-200">Get personalized insights into your spiritual path</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌟</div>
              <h3 className="text-xl font-semibold mb-2">7-Day Challenge</h3>
              <p className="text-purple-200">Inner cleanse journey to kickstart your transformation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💝</div>
              <h3 className="text-xl font-semibold mb-2">Full Moon Ritual Pack</h3>
              <p className="text-purple-200">Sacred practices for lunar energy alignment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
