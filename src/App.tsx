import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy loaded page components
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Login = lazy(() => import('./pages/Login').then(m => ({ default: m.Login })));

// Loading skeleton fallback
const PageLoadingFallback = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border-2 border-emerald-500 border-t-transparent animate-spin"></div>
    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Loading Sriram Medical Hall...</p>
  </div>
);

export function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedMedicineForOrder, setSelectedMedicineForOrder] = useState('');

  // Register Service Worker for PWA
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('Sriram Medical Hall SW registered: ', registration.scope);
          })
          .catch((err) => {
            console.log('SW registration note: ', err);
          });
      });
    }
  }, []);

  const handleOpenOrderModal = (medicineName?: string) => {
    setSelectedMedicineForOrder(medicineName || '');
    setIsOrderModalOpen(true);
  };

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-neutral-100 dark:bg-[#0A0A0A] text-neutral-900 dark:text-[#F5F5F5] transition-colors duration-200">
          {/* Main Navigation */}
          <Navbar onOpenOrderModal={() => handleOpenOrderModal()} />

          {/* Page Routing */}
          <main className="flex-grow">
            <Suspense fallback={<PageLoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home onOpenOrderModal={handleOpenOrderModal} />} />
                <Route path="/about" element={<About onOpenOrderModal={() => handleOpenOrderModal()} />} />
                <Route path="/services" element={<Services onOpenOrderModal={handleOpenOrderModal} />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact onOpenOrderModal={() => handleOpenOrderModal()} />} />
                <Route path="/login" element={<Login />} />
                {/* Fallback route */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>

          {/* Footer with Mandatory Tracking and WMIT Popup */}
          <Footer />

          {/* Floating Actions (WhatsApp, Call, Back to Top, Mobile Sticky bar) */}
          <FloatingActions onOpenOrderModal={() => handleOpenOrderModal()} />

          {/* WhatsApp Order Modal */}
          <WhatsAppOrderModal
            isOpen={isOrderModalOpen}
            onClose={() => setIsOrderModalOpen(false)}
            initialMedicineName={selectedMedicineForOrder}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
