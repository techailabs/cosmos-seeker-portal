
import EnhancedHero from '@/components/EnhancedHero';
import EnhancedHeader from '@/components/EnhancedHeader';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScienceOfSoul from '@/components/ScienceOfSoul';
import CosmicForecast from '@/components/CosmicForecast';
import PremiumFeatures from '@/components/PremiumFeatures';

const Index = () => {
  return (
    <div className="min-h-screen">
      <EnhancedHeader />
      <EnhancedHero />
      <Services />
      <ScienceOfSoul />
      <PremiumFeatures />
      <CosmicForecast />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
