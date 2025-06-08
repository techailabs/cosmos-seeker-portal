
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FindPathQuiz from '@/components/FindPathQuiz';
import UnlockJourney from '@/components/UnlockJourney';
import Services from '@/components/Services';
import EnhancedServices from '@/components/EnhancedServices';
import ScienceOfSoul from '@/components/ScienceOfSoul';
import Testimonials from '@/components/Testimonials';
import CosmicForecast from '@/components/CosmicForecast';
import Dashboard from '@/components/Dashboard';
import SpiritualDashboard from '@/components/SpiritualDashboard';
import PremiumFeatures from '@/components/PremiumFeatures';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FindPathQuiz />
      <UnlockJourney />
      <Services />
      <EnhancedServices />
      <ScienceOfSoul />
      <SpiritualDashboard />
      <Testimonials />
      <CosmicForecast />
      <PremiumFeatures />
      <Dashboard />
      <CTA />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
