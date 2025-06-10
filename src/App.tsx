
import { Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

// Lazy load components for better performance
const Index = lazy(() => import('@/pages/Index'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Auth = lazy(() => import('@/pages/Auth'));
const AdminDashboard = lazy(() => import('@/pages/admin/AdminDashboard'));
const AstrologyService = lazy(() => import('@/pages/services/AstrologyService'));
const PalmistryService = lazy(() => import('@/pages/services/PalmistryService'));
const FaceReadingService = lazy(() => import('@/pages/services/FaceReadingService'));
const HypnotherapyService = lazy(() => import('@/pages/services/HypnotherapyService'));
const MeditationService = lazy(() => import('@/pages/services/MeditationService'));
const MusicTherapyService = lazy(() => import('@/pages/services/MusicTherapyService'));
const MindReadingService = lazy(() => import('@/pages/services/MindReadingService'));
const Practitioners = lazy(() => import('@/pages/Practitioners'));
const BookSession = lazy(() => import('@/pages/BookSession'));
const FreeSoulReport = lazy(() => import('@/pages/FreeSoulReport'));
const CosmicQuiz = lazy(() => import('@/pages/CosmicQuiz'));
const Challenge = lazy(() => import('@/pages/Challenge'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const Terms = lazy(() => import('@/pages/Terms'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
    },
  },
});

const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin text-6xl mb-4">🔮</div>
      <p className="text-white text-xl">Loading cosmic wisdom...</p>
    </div>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <BrowserRouter>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/practitioners" element={<Practitioners />} />
                <Route path="/book-session" element={<BookSession />} />
                <Route path="/free-soul-report" element={<FreeSoulReport />} />
                <Route path="/cosmic-quiz" element={<CosmicQuiz />} />
                <Route path="/challenge" element={<Challenge />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Service Pages */}
                <Route path="/services/astrology" element={<AstrologyService />} />
                <Route path="/services/palmistry" element={<PalmistryService />} />
                <Route path="/services/face-reading" element={<FaceReadingService />} />
                <Route path="/services/hypnotherapy" element={<HypnotherapyService />} />
                <Route path="/services/meditation" element={<MeditationService />} />
                <Route path="/services/music-therapy" element={<MusicTherapyService />} />
                <Route path="/services/mind-reading" element={<MindReadingService />} />
                
                {/* Protected Routes */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                
                {/* Admin Routes */}
                <Route path="/admin/dashboard" element={
                  <ProtectedRoute requiredRole="admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                } />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
