import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageSquare,
  MapPin,
  ShieldCheck,
  CheckCircle,
  Truck,
  ThermometerSnowflake,
  Award,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Search,
  Star,
  HelpCircle,
  Send,
  Calendar,
  Clock
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA, FEATURED_PRODUCTS, FAQS_DATA, HEALTH_TIPS } from '../data/pharmacyData';
import { SEOHelmet } from '../components/SEOHelmet';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface HomeProps {
  onOpenOrderModal: (medName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenOrderModal }) => {
  const [emailInput, setEmailInput] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      setNewsletterSubscribed(true);
      setEmailInput('');
      setTimeout(() => setNewsletterSubscribed(false), 4000);
    }
  };

  const previewServices = SERVICES_DATA.slice(0, 6);
  const previewFaqs = FAQS_DATA.slice(0, 4);
  const previewHealthTips = HEALTH_TIPS.slice(0, 3);

  return (
    <div className="w-full">
      <SEOHelmet
        title="Sriram Medical Hall | Best Pharmacy in Paliganj, Bihar 801110"
        description="Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care, and daily medical essentials at affordable prices in Mahabalipur, Paliganj."
      />

      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#0A0A0A] text-[#F5F5F5] pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-neutral-800">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-15 bg-cover bg-center mix-blend-luminosity" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-orange-400 font-mono text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                <span>PALIGANJ • BIHAR 801110</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.95] text-white">
                GENUINE MEDICINES. <br />
                <span className="text-orange-500">EXPRESS CARE.</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed font-normal">
                Directly supplied allopathic pharmaceuticals, cold-chain insulins, surgical equipment, baby care, and daily healthcare essentials for Mahabalipur & Paliganj families.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  id="hero-call-now-btn"
                  href={`tel:+${SITE_CONFIG.phone}`}
                  className="px-7 py-4 rounded-full bg-white hover:bg-neutral-200 text-[#0A0A0A] font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl flex items-center gap-2.5 transition active:scale-95"
                >
                  <Phone className="w-4 h-4 text-orange-600" />
                  <span>Call Now</span>
                </a>

                <button
                  id="hero-whatsapp-order-btn"
                  onClick={() => onOpenOrderModal()}
                  className="px-7 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-emerald-600/30 flex items-center gap-2.5 transition active:scale-95 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  id="hero-get-directions-btn"
                  href={SITE_CONFIG.geo.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-bold text-xs sm:text-sm tracking-wider uppercase border border-neutral-700 flex items-center gap-2 transition"
                >
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>Directions</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-neutral-800 grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-orange-500 font-bold tracking-widest uppercase">01 / GENUINE</span>
                  <p className="font-black text-xs sm:text-sm uppercase text-white tracking-tight">100% Certified</p>
                  <p className="text-[11px] text-neutral-400">Direct Pharma Supply</p>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-sky-400 font-bold tracking-widest uppercase">02 / COLD CHAIN</span>
                  <p className="font-black text-xs sm:text-sm uppercase text-white tracking-tight">2°C–8°C Insulins</p>
                  <p className="text-[11px] text-neutral-400">Continuous Monitoring</p>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-emerald-400 font-bold tracking-widest uppercase">03 / DISPATCH</span>
                  <p className="font-black text-xs sm:text-sm uppercase text-white tracking-tight">Local Delivery</p>
                  <p className="text-[11px] text-neutral-400">Paliganj & Mahabalipur</p>
                </div>
              </div>
            </div>

            {/* Right Card / Interactive Preview */}
            <div className="lg:col-span-5">
              <div className="bg-[#121212] border border-neutral-800 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-[0.2em]">STORE ACTIVE NOW</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">MAHABALIPUR</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">Need Urgent Medicines or Advice?</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Upload your prescription or list your tablets. Our pharmacist will cross-check dosage, price, and dispatch quickly to your doorstep.
                  </p>
                </div>

                <div className="bg-[#0A0A0A] rounded-2xl p-4 border border-neutral-800 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-neutral-300">
                    <span className="flex items-center gap-1.5 uppercase text-[11px] text-neutral-400"><Clock className="w-3.5 h-3.5 text-orange-500" /> Mon - Sat</span>
                    <strong className="text-white font-bold">7:30 AM – 10:30 PM</strong>
                  </div>
                  <div className="flex items-center justify-between text-neutral-300">
                    <span className="flex items-center gap-1.5 uppercase text-[11px] text-neutral-400"><Clock className="w-3.5 h-3.5 text-orange-500" /> Sunday</span>
                    <strong className="text-white font-bold">8:00 AM – 9:30 PM</strong>
                  </div>
                  <div className="flex items-center justify-between text-neutral-300">
                    <span className="flex items-center gap-1.5 uppercase text-[11px] text-neutral-400"><Phone className="w-3.5 h-3.5 text-orange-500" /> Hotline</span>
                    <strong className="text-orange-400 font-bold">+91 89690 97504</strong>
                  </div>
                </div>

                <button
                  onClick={() => onOpenOrderModal()}
                  className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Doctor's Prescription</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MEDICINE STOCK CHECKER PREVIEW */}
      <section className="py-12 bg-neutral-100 dark:bg-[#0A0A0A] -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker onOpenOrderModal={onOpenOrderModal} compact={true} />
          
          <div className="mt-4 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 hover:underline"
            >
              <span>Explore full 3,000+ medicine inventory & categories on Services page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SHORT ABOUT PREVIEW */}
      <section className="py-20 bg-white dark:bg-[#0A0A0A] border-y border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80"
                alt="Sriram Medical Hall Storefront"
                className="w-full h-80 sm:h-96 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A0A0A]/90 backdrop-blur-md rounded-2xl p-4 text-white border border-neutral-700">
                <p className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest">ESTABLISHED COMMUNITY HEALTHCARE</p>
                <h4 className="text-sm font-bold uppercase tracking-tight mt-0.5">Sriram Medical Hall — Mahabalipur, Paliganj</h4>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-200 text-[11px] font-mono font-bold tracking-widest uppercase">
                <Award className="w-3.5 h-3.5 text-orange-500" /> TRUSTED LOCAL CHEMIST
              </div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-neutral-950 dark:text-white leading-[1.05]">
                Rooted in Trust. <br />
                <span className="text-orange-500">Serving Paliganj.</span>
              </h2>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Founded with a mission to eliminate counterfeit medicines and bring transparent, affordable healthcare to Mahabalipur and the greater Paliganj region.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800">
                  <span className="font-mono text-[10px] text-orange-500 font-bold tracking-widest uppercase">01 / LICENSED</span>
                  <h3 className="text-sm font-bold uppercase tracking-tight text-neutral-900 dark:text-white mt-1">Registered Chemist</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Strict licensing & GST invoicing</p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800">
                  <span className="font-mono text-[10px] text-emerald-400 font-bold tracking-widest uppercase">02 / PRECISION</span>
                  <h3 className="text-sm font-bold uppercase tracking-tight text-neutral-900 dark:text-white mt-1">Prescription Integrity</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Exact dosages & doctor guidelines</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-black text-xs uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-100 transition shadow-sm"
                >
                  <span>Read Full Story</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FEATURED SERVICES (MAXIMUM 6) */}
      <section className="py-20 bg-neutral-50 dark:bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[11px] font-mono font-bold text-orange-600 dark:text-orange-400 tracking-[0.3em] uppercase">OFFERINGS</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-neutral-950 dark:text-white mt-1">Featured Pharmacy Services</h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 hover:underline"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewServices.map((srv, idx) => (
              <div
                key={srv.id}
                className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 shadow-sm hover:border-neutral-900 dark:hover:border-neutral-200 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="h-44 rounded-2xl overflow-hidden relative">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-[#0A0A0A]/90 text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-full border border-neutral-700">
                      0{idx + 1}
                    </span>
                    {srv.badge && (
                      <span className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                      {srv.category}
                    </span>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-neutral-950 dark:text-white mt-1 group-hover:text-orange-500 transition">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                      {srv.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <button
                    onClick={() => onOpenOrderModal(srv.title)}
                    className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Order / Enquire</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <Link
                    to="/services"
                    className="text-xs font-mono uppercase text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-20 bg-white dark:bg-[#0A0A0A] border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-mono font-bold text-orange-600 dark:text-orange-400 tracking-[0.3em] uppercase">UNCOMPROMISING STANDARDS</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-neutral-950 dark:text-white mt-1">
              Why Paliganj Residents Trust Us
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              Every prescription we fulfill represents our commitment to your family's health and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-neutral-50 dark:bg-[#121212] p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-3">
              <span className="font-mono text-xs font-bold text-orange-500">01 /</span>
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 dark:bg-neutral-800 text-orange-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base uppercase tracking-tight text-neutral-950 dark:text-white">100% Genuine Medicines</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Directly procured from verified brand distributors with proper batch codes and GST billing.
              </p>
            </div>

            <div className="bg-neutral-50 dark:bg-[#121212] p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-3">
              <span className="font-mono text-xs font-bold text-sky-400">02 /</span>
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 dark:bg-neutral-800 text-sky-400 flex items-center justify-center">
                <ThermometerSnowflake className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base uppercase tracking-tight text-neutral-950 dark:text-white">2°C–8°C Cold Chain</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Refrigerated storage with continuous temperature backup for insulins and vaccines.
              </p>
            </div>

            <div className="bg-neutral-50 dark:bg-[#121212] p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-3">
              <span className="font-mono text-xs font-bold text-amber-500">03 /</span>
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 dark:bg-neutral-800 text-amber-400 flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base uppercase tracking-tight text-neutral-950 dark:text-white">Swift Local Dispatch</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Fast doorstep drop-off across Mahabalipur, Paliganj Bazar and nearby villages.
              </p>
            </div>

            <div className="bg-neutral-50 dark:bg-[#121212] p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-3">
              <span className="font-mono text-xs font-bold text-emerald-400">04 /</span>
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 dark:bg-neutral-800 text-emerald-400 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base uppercase tracking-tight text-neutral-950 dark:text-white">Fair & Transparent Rates</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Competitive pricing, special discounts on monthly refills for chronic condition patients.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. FEATURED PRODUCTS PREVIEW */}
      <section className="py-20 bg-neutral-50 dark:bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[11px] font-mono font-bold text-orange-600 dark:text-orange-400 tracking-[0.3em] uppercase">ESSENTIALS</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-neutral-950 dark:text-white mt-1">Featured Health & Wellness</h2>
            </div>
            <button
              onClick={() => onOpenOrderModal()}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 hover:underline cursor-pointer"
            >
              <span>Order Any Product on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-5 shadow-sm hover:border-neutral-900 dark:hover:border-neutral-200 transition flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 rounded-2xl overflow-hidden relative mb-4 bg-neutral-100 dark:bg-neutral-900">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
                      loading="lazy"
                    />
                    {prod.tag && (
                      <span className="absolute top-2.5 right-2.5 bg-neutral-950 text-white font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded-full border border-neutral-700">
                        {prod.tag}
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">{prod.category} • {prod.brand}</span>
                  <h3 className="font-bold text-sm uppercase tracking-tight text-neutral-950 dark:text-white line-clamp-2 mt-1">
                    {prod.name}
                  </h3>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-neutral-400 line-through mr-1.5">₹{prod.mrp}</span>
                    <span className="text-base font-black text-orange-600 dark:text-orange-400">₹{prod.discountedPrice}</span>
                  </div>

                  <button
                    onClick={() => onOpenOrderModal(prod.name)}
                    className="px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider shadow-sm transition active:scale-95 cursor-pointer"
                  >
                    Order
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS & LOCAL TRUST */}
      <section className="py-20 bg-white dark:bg-[#0A0A0A] border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-mono font-bold text-orange-600 dark:text-orange-400 tracking-[0.3em] uppercase">COMMUNITY VOICE</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-neutral-950 dark:text-white mt-1">
              Trusted by Paliganj Families
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              Patron feedback regarding medicine availability, pharmacist support, and fast WhatsApp order fulfillment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 space-y-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                "Finding cold-chain insulin on short notice used to be hard in Paliganj. Sriram Medical Hall always has fresh stock in their temperature-controlled unit. Highly recommended!"
              </p>
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
                <p className="font-bold text-xs uppercase tracking-tight text-neutral-900 dark:text-white">S. K. Singh</p>
                <p className="text-[10px] font-mono text-neutral-400 uppercase">Mahabalipur, Paliganj</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 space-y-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                "The WhatsApp ordering feature is extremely convenient. I send the doctor's slip photo, they verify the dosage, and the medicines are ready when I reach the shop."
              </p>
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
                <p className="font-bold text-xs uppercase tracking-tight text-neutral-900 dark:text-white">Anil Kumar Mishra</p>
                <p className="text-[10px] font-mono text-neutral-400 uppercase">Paliganj Bazar Resident</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 space-y-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                "Genuine baby products, Cerelac, and Nebulizers at reasonable rates. The staff explains how to use health monitoring devices very patiently."
              </p>
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
                <p className="font-bold text-xs uppercase tracking-tight text-neutral-900 dark:text-white">Pooja Kumari</p>
                <p className="text-[10px] font-mono text-neutral-400 uppercase">Local Customer, Paliganj</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. FAQ PREVIEW */}
      <section className="py-20 bg-neutral-50 dark:bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono font-bold text-orange-600 dark:text-orange-400 tracking-[0.3em] uppercase">QUESTIONS</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-neutral-950 dark:text-white mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {previewFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#121212] rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-neutral-900 dark:text-white flex items-center justify-between gap-4 hover:text-orange-500 transition"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-orange-500 font-bold">0{idx + 1}.</span>
                    {faq.question}
                  </span>
                  <ChevronRight className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${openFaqIndex === idx ? 'rotate-90' : ''}`} />
                </button>
                
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-3 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Visit our Contact & FAQ Help Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 9. CTA BANNER */}
      <section className="py-16 bg-[#0A0A0A] border-y border-neutral-800 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="font-mono text-[10px] text-orange-500 font-bold tracking-widest uppercase">FAST MEDICINE DISPATCH</span>
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter">
              Order Your Monthly Medicines via WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
              Send your prescription photo or tablet name. We verify, pack, and prepare for instant pickup or doorstep delivery in Paliganj.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <button
              onClick={() => onOpenOrderModal()}
              className="px-7 py-4 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl transition active:scale-95 cursor-pointer"
            >
              Order on WhatsApp
            </button>
            <a
              href={`tel:+${SITE_CONFIG.phone}`}
              className="px-7 py-4 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-neutral-700 transition"
            >
              Call {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* 10. LATEST HEALTH TIPS PREVIEW */}
      <section className="py-20 bg-white dark:bg-[#0A0A0A] border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-mono font-bold text-orange-600 dark:text-orange-400 tracking-[0.3em] uppercase">HEALTH AWARENESS</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-neutral-950 dark:text-white mt-1">
              Latest Health Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewHealthTips.map((tip) => (
              <div
                key={tip.id}
                className="bg-neutral-50 dark:bg-[#121212] rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col justify-between shadow-sm hover:border-neutral-900 dark:hover:border-neutral-200 transition"
              >
                <div>
                  <div className="h-44 overflow-hidden">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-3 text-[10px] font-mono text-neutral-400 uppercase">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-orange-500" /> {tip.date}</span>
                      <span>•</span>
                      <span>{tip.readTime}</span>
                    </div>
                    <h3 className="font-bold text-base uppercase tracking-tight text-neutral-950 dark:text-white line-clamp-2">
                      {tip.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
                      {tip.content}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                    By {tip.author}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. NEWSLETTER SUBSCRIPTION */}
      <section className="py-16 bg-neutral-100 dark:bg-[#0A0A0A] border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-mono text-[10px] font-bold text-orange-500 tracking-widest uppercase">STAY INFORMED</span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
            Health Alerts & Refill Reminders
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
            Get seasonal health tips, restock notifications for chronic care medicines, and wellness reminders directly in your inbox.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto pt-2">
            <input
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full px-4 py-3 rounded-full bg-white dark:bg-[#121212] border border-neutral-300 dark:border-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-neutral-900 dark:text-white"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-black text-xs uppercase tracking-wider shadow-md transition flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4" />
              <span>Subscribe</span>
            </button>
          </form>

          {newsletterSubscribed && (
            <p className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 animate-fade-in uppercase tracking-wider">
              Thank you for subscribing to Sriram Medical updates!
            </p>
          )}
        </div>
      </section>

    </div>
  );
};
