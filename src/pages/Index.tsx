
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FindPathQuiz from '@/components/FindPathQuiz';
import UnlockJourney from '@/components/UnlockJourney';
import Services from '@/components/Services';
import ScienceOfSoul from '@/components/ScienceOfSoul';
import Testimonials from '@/components/Testimonials';
import CosmicForecast from '@/components/CosmicForecast';
import Dashboard from '@/components/Dashboard';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FindPathQuiz />
      <UnlockJourney />
      <Services />
      <ScienceOfSoul />
      <Testimonials />
      <CosmicForecast />
      <Dashboard />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
