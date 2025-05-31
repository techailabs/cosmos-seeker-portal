
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
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
      <Services />
      <Testimonials />
      <CosmicForecast />
      <Dashboard />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
