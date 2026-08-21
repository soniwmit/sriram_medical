import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, ShoppingCart } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FloatingActionsProps {
  onOpenOrderModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppQuickClick = () => {
    const message = `Hello ${SITE_CONFIG.name}, I would like to order medicines / check availability at your Mahabalipur, Paliganj store.`;
    window.open(`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* Floating Buttons Desktop & Mobile Right Side */}
      <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* Back to Top */}
        {showBackToTop && (
          <button
            id="btn-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="w-11 h-11 rounded-full bg-white dark:bg-[#121212] text-neutral-950 dark:text-white shadow-2xl border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-200 active:scale-95 cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          id="btn-floating-call"
          href={`tel:+${SITE_CONFIG.phone}`}
          aria-label={`Call ${SITE_CONFIG.name}`}
          className="w-12 h-12 rounded-full bg-white hover:bg-neutral-200 text-[#0A0A0A] shadow-2xl border border-neutral-300 flex items-center justify-center transition duration-200 active:scale-95 hover:scale-105 group relative"
        >
          <Phone className="w-5 h-5 text-orange-600" />
          <span className="absolute right-14 bg-[#0A0A0A] text-white text-xs font-mono font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-neutral-800 shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition duration-200 hidden sm:block">
            Call: {SITE_CONFIG.phoneDisplay}
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          id="btn-floating-whatsapp"
          onClick={handleWhatsAppQuickClick}
          aria-label="Chat on WhatsApp"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-600/40 flex items-center justify-center transition duration-200 active:scale-95 hover:scale-105 group relative cursor-pointer"
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#0A0A0A] animate-pulse"></div>
          <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="absolute right-16 bg-[#0A0A0A] text-white text-xs font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-neutral-800 shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition duration-200 hidden sm:block">
            Order on WhatsApp
          </span>
        </button>
      </div>

      {/* Sticky Bottom Mobile Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-lg border-t border-neutral-800 px-3 py-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:+${SITE_CONFIG.phone}`}
          className="flex-1 py-3 px-3 rounded-full bg-white text-[#0A0A0A] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition active:scale-98"
        >
          <Phone className="w-3.5 h-3.5 text-orange-600" />
          <span>Call Store</span>
        </a>

        <button
          onClick={onOpenOrderModal}
          className="flex-1 py-3 px-3 rounded-full bg-emerald-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/30 transition active:scale-98 cursor-pointer"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </button>
      </div>
    </>
  );
};
