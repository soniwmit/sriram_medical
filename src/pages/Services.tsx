import React, { useState } from 'react';
import {
  Pill,
  ThermometerSnowflake,
  Activity,
  Baby,
  Leaf,
  ShieldAlert,
  HeartPulse,
  Sparkles,
  ShoppingBag,
  CheckCircle,
  Phone,
  MessageSquare
} from 'lucide-react';
import { SERVICES_DATA } from '../data/pharmacyData';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { SEOHelmet } from '../components/SEOHelmet';
import { SITE_CONFIG } from '../config/siteConfig';

interface ServicesProps {
  onOpenOrderModal: (serviceOrMedicineName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrderModal }) => {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>('All');

  const categories = [
    'All',
    'Prescription Medicines',
    'Cold Chain Storage',
    'Medical Equipment',
    'Baby Care',
    'Supplements',
    'Home Care'
  ];

  const filteredServices = selectedCategoryTab === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategoryTab);

  return (
    <div className="w-full py-12 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <SEOHelmet
        title="Pharmacy Services & Medicine Stock Checker | Sriram Medical Hall Paliganj"
        description="Search real-time medicine inventory, allopathic prescriptions, insulins, baby care essentials, nebulizers, BP machines & surgical supplies at Sriram Medical Hall."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
            <Pill className="w-3.5 h-3.5" /> Full Healthcare Catalog
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pharmacy Services & Medicine Inventory
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            From daily doctor prescriptions to chronic care management and mother-infant wellness, explore our full spectrum of genuine pharmaceutical offerings.
          </p>
        </div>

        {/* 1. EXCLUSIVE MEDICINE STOCK CHECKER */}
        <div className="space-y-4">
          <MedicineStockChecker onOpenOrderModal={onOpenOrderModal} compact={false} />
        </div>

        {/* 2. CATEGORY-WISE SERVICES & SPECIALIZATIONS */}
        <div className="space-y-8 pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">Categories</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                Specialized Pharmacy Departments
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategoryTab(cat)}
                  className={`px-3 py-1.5 text-xs rounded-full font-semibold transition ${
                    selectedCategoryTab === cat
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((srv) => (
              <div
                key={srv.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {srv.badge && (
                      <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                      {srv.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {srv.fullDesc}
                    </p>

                    {/* Feature Bullets */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                      {srv.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenOrderModal(srv.title)}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition active:scale-98 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Order / Enquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Specialized Healthcare Services in Paliganj */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Patient Care Convenience</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Complementary Patient Care Services</h3>
            <p className="text-xs text-slate-400">Services provided at our Mahabalipur counter for your peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
              <Activity className="w-6 h-6 text-emerald-400" />
              <h4 className="font-bold text-sm">Free BP & Pulse Check</h4>
              <p className="text-xs text-slate-400">Get your blood pressure checked anytime using certified Omron digital monitors.</p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
              <HeartPulse className="w-6 h-6 text-sky-400" />
              <h4 className="font-bold text-sm">Blood Sugar Testing</h4>
              <p className="text-xs text-slate-400">Instant random blood sugar testing with sterile lancets and Accu-Chek meters.</p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
              <Pill className="w-6 h-6 text-amber-400" />
              <h4 className="font-bold text-sm">Monthly Refill Program</h4>
              <p className="text-xs text-slate-400">Special reserved stock and discounts for hypertension and diabetes monthly refills.</p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
              <ThermometerSnowflake className="w-6 h-6 text-purple-400" />
              <h4 className="font-bold text-sm">Insulin Cold Packs</h4>
              <p className="text-xs text-slate-400">Complimentary insulated ice pouches to protect temperature-sensitive medicines on your way home.</p>
            </div>
          </div>
        </div>

        {/* Emergency Call Box */}
        <div className="bg-gradient-to-r from-sky-900 to-slate-900 text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-sky-800">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold">Need a Medicine Not Listed in the Search?</h3>
            <p className="text-xs text-slate-300">Call our pharmacist directly. We can arrange specialized oncological, nephrological or rare formulations within 24 hours.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:+${SITE_CONFIG.phone}`}
              className="px-5 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
