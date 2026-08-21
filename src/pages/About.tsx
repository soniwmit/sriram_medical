import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Heart,
  Target,
  Eye,
  CheckCircle,
  Building,
  Users,
  Calendar,
  ThermometerSnowflake,
  Clock,
  Phone,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHelmet } from '../components/SEOHelmet';

interface AboutProps {
  onOpenOrderModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenOrderModal }) => {
  const timelineEvents = [
    {
      year: "Foundation",
      title: "Establishment in Mahabalipur, Paliganj",
      desc: "Started with a clear objective: to make 100% authentic medicines and daily emergency healthcare essentials accessible to all residents of Paliganj without needing to travel to Patna city."
    },
    {
      year: "Expansion",
      title: "Dedicated Cold-Chain & Surgical Wing",
      desc: "Upgraded infrastructure with medical-grade 2°C–8°C refrigeration for insulins and vaccines, alongside an expanded surgical first-aid and orthopedic support section."
    },
    {
      year: "Modernization",
      title: "Digital Inventory & WhatsApp Ordering",
      desc: "Introduced digital inventory management, computerized billing, and instant WhatsApp prescription order dispatch for faster customer service."
    },
    {
      year: "Present",
      title: "Trusted Healthcare Landmark",
      desc: "Serving hundreds of families daily with genuine chronic care medicines, mother & baby products, and reliable wellness advice."
    }
  ];

  return (
    <div className="w-full py-12 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <SEOHelmet
        title="About Us | Sriram Medical Hall - Trusted Pharmacy in Paliganj, Bihar"
        description="Learn about Sriram Medical Hall's story, mission, vision, licensed pharmacy team, cold storage capabilities, and our dedication to community healthcare in Mahabalipur, Paliganj."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
            <Building className="w-3.5 h-3.5" /> About Sriram Medical Hall
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Committed to Genuine Healthcare & Community Trust
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Serving Mahabalipur, Paliganj, and surrounding villages with authenticity, licensed pharmaceutical guidance, and unwavering care.
          </p>
        </div>

        {/* Story & Store Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">Our Story</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Providing Peace of Mind with Every Prescribed Dose
            </h2>
            
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              At <strong>{SITE_CONFIG.name}</strong>, situated at Bajar Mahabalipuram, Paliganj (Bihar 801110), we believe that access to genuine, properly stored medicines is a fundamental right. Counterfeit medicines and improperly stored vaccines pose grave risks to patient health.
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We established our pharmacy to offer a transparent, ethical, and dependable alternative. By procuring directly from authorized national pharmaceutical companies and maintaining certified cold-storage equipment, we guarantee that every tablet, syrup, insulin vial, or infant feed you receive is 100% genuine and at its peak clinical efficacy.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">3,000+</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Available Formulations</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-2xl sm:text-3xl font-extrabold text-sky-600 dark:text-sky-400">100%</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Genuine Sourced</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80"
              alt="Sriram Medical Hall Pharmacy Interior"
              className="w-full h-80 sm:h-[420px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="text-xs font-semibold text-emerald-400">Mahabali Pur, Paliganj, Bihar 801110</p>
                <h3 className="text-base font-bold">Standardized Clean Pharmacy & Diagnostic Storage</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To supply 100% genuine, affordable allopathic, chronic care, and wellness medications to every home in Paliganj and Mahabalipur with pharmacist guidance and fast fulfillment.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To be the most dependable and tech-enabled community pharmacy in the Patna rural district, recognized for zero compromise on medicine potency and patient well-being.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Core Values</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Integrity, compassionate patient support, clinical precision, transparent pricing, and unwavering adherence to drug regulatory standards.
            </p>
          </div>
        </div>

        {/* Pharmacist & Owner Message */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="w-24 h-24 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto lg:mx-0 text-emerald-300 text-2xl font-bold mb-3">
                SMH
              </div>
              <h3 className="text-lg font-bold">Pharmacist In-Charge</h3>
              <p className="text-xs text-emerald-400">Sriram Medical Hall, Paliganj</p>
              <p className="text-[11px] text-slate-400 mt-1">Licensed Drug Inspector Approved</p>
            </div>

            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">A Message to Our Patrons</span>
              <blockquote className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
                "We understand that when you or your family members are ill, you need reliable medication without ambiguity or delay. Our promise is simple: we will never compromise on authenticity, we will explain prescriptions clearly, and we will do our utmost to deliver your critical medicines in times of emergency."
              </blockquote>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Licensed Pharmacist</span>
                <span className="flex items-center gap-1.5"><ThermometerSnowflake className="w-4 h-4 text-sky-400" /> Cold-Storage Monitored</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400" /> Open 7 Days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Business Timeline */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">Milestones</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Our Journey & Healthcare Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineEvents.map((ev, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center mb-3">
                    {idx + 1}
                  </div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">{ev.year}</span>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white mt-1">{ev.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Services & Contact */}
        <div className="bg-emerald-600 text-white rounded-3xl p-8 text-center sm:flex sm:items-center sm:justify-between gap-6 shadow-xl">
          <div className="text-left space-y-1 mb-4 sm:mb-0">
            <h3 className="text-xl font-bold">Have a Prescription or Medicine Query?</h3>
            <p className="text-xs text-emerald-100">Check medicine availability in our real-time stock checker or order on WhatsApp.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/services"
              className="px-5 py-3 rounded-xl bg-white text-emerald-800 font-bold text-xs hover:bg-emerald-50 transition"
            >
              Stock Checker
            </Link>
            <button
              onClick={onOpenOrderModal}
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition cursor-pointer"
            >
              WhatsApp Order
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
