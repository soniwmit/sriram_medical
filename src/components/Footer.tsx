import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  Heart,
  Plus,
  ExternalLink,
  X,
  MessageSquare
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const [showWmitModal, setShowWmitModal] = useState(false);
  const [showLegalModal, setShowLegalModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // STEP 11: Mandatory Global Tracking Hook Integration
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    if (!cid) return;
    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);
    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };
    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };
    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };
    sendInitPayload();
    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;
    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };
    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================
    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };
    window.addEventListener('popstate', handleLocationChange);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  // Handle WMIT Popup click
  const handleWmitClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowWmitModal(true);
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#F5F5F5] pt-16 pb-12 border-t border-neutral-800 relative z-10" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Column 1: Business Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-orange-500 shadow-md">
                <Plus className="w-6 h-6 stroke-[3]" />
              </div>
              <div>
                <h3 className="font-black text-white text-base uppercase tracking-tight">{SITE_CONFIG.name}</h3>
                <p className="text-[10px] font-mono text-orange-400 font-bold uppercase tracking-widest">LICENSED PHARMACY & CHEMIST</p>
              </div>
            </div>
            
            <p className="text-xs leading-relaxed text-neutral-400">
              {SITE_CONFIG.tagline}. Serving the families of Mahabalipur and Paliganj with genuine allopathic medicines, baby products, and diagnostic supplies.
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-neutral-300">{SITE_CONFIG.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={`tel:+${SITE_CONFIG.phone}`} className="text-neutral-300 hover:text-white transition font-bold">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-neutral-300 hover:text-white transition">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Services */}
          <div>
            <h4 className="font-mono font-bold text-orange-500 text-xs mb-4 tracking-[0.2em] uppercase">QUICK NAVIGATION</h4>
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-white flex items-center gap-1.5 transition">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-500" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-white flex items-center gap-1.5 transition">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-500" /> About Us & History
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-white flex items-center gap-1.5 transition">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-500" /> Stock Checker & Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-400 hover:text-white flex items-center gap-1.5 transition">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-500" /> Store Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-white flex items-center gap-1.5 transition">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-500" /> Contact & Directions
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-neutral-400 hover:text-white flex items-center gap-1.5 transition">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-500" /> Pharmacist Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Working Hours & Emergency */}
          <div className="space-y-4">
            <h4 className="font-mono font-bold text-orange-500 text-xs tracking-[0.2em] uppercase">STORE HOURS</h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="flex items-start gap-2 bg-[#121212] p-3 rounded-2xl border border-neutral-800">
                <Clock className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold uppercase tracking-tight text-white">Monday – Saturday</p>
                  <p className="text-[11px] font-mono text-neutral-400">7:30 AM – 10:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-[#121212] p-3 rounded-2xl border border-neutral-800">
                <Clock className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold uppercase tracking-tight text-white">Sunday</p>
                  <p className="text-[11px] font-mono text-neutral-400">8:00 AM – 9:30 PM</p>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-800/80 text-emerald-300">
                <p className="font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> 24/7 Emergency Dispatch
                </p>
                <p className="text-[11px] text-emerald-400/80 mt-0.5">Call or WhatsApp anytime for critical medicines.</p>
              </div>
            </div>
          </div>

          {/* Column 4: Google Map Location */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold text-orange-500 text-xs tracking-[0.2em] uppercase">PALIGANJ LOCATION</h4>
            <div className="rounded-2xl overflow-hidden border border-neutral-800 h-36 bg-neutral-900">
              <iframe
                title="Sriram Medical Hall Paliganj Location"
                src={SITE_CONFIG.geo.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href={SITE_CONFIG.geo.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-orange-400 hover:text-orange-300 transition"
            >
              <span>Directions on Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar with Mandatory WMIT Anchor and Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. ALL RIGHTS RESERVED.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => setShowLegalModal('privacy')}
              className="hover:text-neutral-300 transition uppercase tracking-wider"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setShowLegalModal('terms')}
              className="hover:text-neutral-300 transition uppercase tracking-wider"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => setShowLegalModal('disclaimer')}
              className="hover:text-neutral-300 transition uppercase tracking-wider"
            >
              Medical Disclaimer
            </button>
            <span>•</span>
            {/* MANDATORY EXACT WMIT POPUP TRIGGER */}
            <a
              href="#"
              className="wmit-popup-trigger text-orange-400 hover:text-orange-300 font-bold uppercase tracking-wider"
              onClick={handleWmitClick}
            >
              Developed by WMIT
            </a>
          </div>
        </div>
      </div>

      {/* WMIT Popup Modal */}
      {showWmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" id="wmit-popup-dialog">
          <div className="bg-[#121212] border border-neutral-800 rounded-3xl max-w-md w-full p-6 sm:p-8 text-white shadow-2xl relative">
            <button
              onClick={() => setShowWmitModal(false)}
              className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-orange-500 font-black text-xl mb-4">
              W
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight">WebMaker IT Solutions (WMIT)</h3>
            <p className="text-xs font-mono text-orange-400 uppercase tracking-wider mt-0.5">Enterprise Digital & Web Solutions</p>
            <p className="text-xs text-neutral-300 mt-3 leading-relaxed">
              This high-performance healthcare platform for Sriram Medical Hall was architected with modern React, Progressive Web App (PWA) offline capabilities, real-time inventory checking, and WhatsApp automated ordering.
            </p>
            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs">
              <a
                href="https://webmakerit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 font-bold uppercase tracking-wider hover:underline flex items-center gap-1"
              >
                Visit webmakerit.com <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => setShowWmitModal(false)}
                className="px-5 py-2 bg-white text-neutral-950 font-black uppercase tracking-wider text-xs rounded-full hover:bg-neutral-200 transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Legal Dialog Modals */}
      {showLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#121212] border border-neutral-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-neutral-200 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setShowLegalModal(null)}
              className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">
              {showLegalModal === 'privacy' && 'Privacy Policy'}
              {showLegalModal === 'terms' && 'Terms of Service'}
              {showLegalModal === 'disclaimer' && 'Medical & Prescription Disclaimer'}
            </h3>

            <div className="text-xs text-neutral-400 space-y-3 leading-relaxed">
              {showLegalModal === 'privacy' && (
                <>
                  <p>Sriram Medical Hall is committed to protecting your privacy. Any phone numbers, addresses, or prescriptions shared for medicine orders are used solely to fulfill your pharmacy requirements and are never sold or shared with unauthorized third parties.</p>
                  <p>Customer contact details collected via WhatsApp ordering are securely processed in accordance with Indian IT & Pharmacy privacy standards.</p>
                </>
              )}
              {showLegalModal === 'terms' && (
                <>
                  <p>All medicines sold at Sriram Medical Hall comply with the Drugs and Cosmetics Act of India. Schedule H and Schedule H1 drugs strictly require a valid medical prescription from a registered medical practitioner.</p>
                  <p>Delivery timeframes in Paliganj and Mahabalipur depend on traffic and medicine batch availability. Express orders are fulfilled on priority.</p>
                </>
              )}
              {showLegalModal === 'disclaimer' && (
                <>
                  <p>The information on this website, including health tips and medicine stock details, is for informational purposes only and does not constitute medical advice or diagnosis.</p>
                  <p>Always consult your doctor or registered medical practitioner before starting any medication, adjusting dosage, or treating health conditions.</p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-end">
              <button
                onClick={() => setShowLegalModal(null)}
                className="px-6 py-2.5 bg-white text-neutral-950 rounded-full text-xs font-black uppercase tracking-wider hover:bg-neutral-200 transition cursor-pointer"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
