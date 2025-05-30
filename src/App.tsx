
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service Pages
import AstrologyService from "./pages/services/AstrologyService";
import PalmistryService from "./pages/services/PalmistryService";
import MindReadingService from "./pages/services/MindReadingService";
import FaceReadingService from "./pages/services/FaceReadingService";
import HypnotherapyService from "./pages/services/HypnotherapyService";
import MusicTherapyService from "./pages/services/MusicTherapyService";
import MeditationService from "./pages/services/MeditationService";

// Content Pages
import About from "./pages/About";
import Practitioners from "./pages/Practitioners";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

// Special Landing Pages
import FreeSoulReport from "./pages/FreeSoulReport";
import Challenge from "./pages/Challenge";
import CosmicQuiz from "./pages/CosmicQuiz";

// Booking Pages
import BookSession from "./pages/BookSession";

// Legal Pages
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Pages */}
          <Route path="/services/astrology" element={<AstrologyService />} />
          <Route path="/services/palmistry" element={<PalmistryService />} />
          <Route path="/services/mind-reading" element={<MindReadingService />} />
          <Route path="/services/face-reading" element={<FaceReadingService />} />
          <Route path="/services/hypnotherapy" element={<HypnotherapyService />} />
          <Route path="/services/music-therapy" element={<MusicTherapyService />} />
          <Route path="/services/meditation" element={<MeditationService />} />
          
          {/* Content Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/practitioners" element={<Practitioners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          
          {/* Special Landing Pages */}
          <Route path="/free-soul-report" element={<FreeSoulReport />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/cosmic-quiz" element={<CosmicQuiz />} />
          
          {/* Booking */}
          <Route path="/book-session" element={<BookSession />} />
          
          {/* Legal */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
