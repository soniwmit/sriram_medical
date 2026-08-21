import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Navigation,
  ShieldCheck,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHelmet } from '../components/SEOHelmet';

interface ContactProps {
  onOpenOrderModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenOrderModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Medicine Availability Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hello ${SITE_CONFIG.name},
*Website Contact Inquiry*
----------------------------
*Name:* ${name.trim()}
*Phone:* ${phone.trim()}
*Subject:* ${subject}
*Message:* ${message.trim()}
----------------------------
(Sent from Sriram Medical Hall Contact Page)`;

    window.open(`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="w-full py-12 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <SEOHelmet
        title="Contact & Location | Sriram Medical Hall - Mahabalipur, Paliganj Bihar"
        description="Get in touch with Sriram Medical Hall at Bajar Mahabalipuram, Paliganj, Bihar 801110. Phone: +91 89690 97504. Open Monday to Saturday 7:30 AM - 10:30 PM, Sunday 8:00 AM - 9:30 PM."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
            <Phone className="w-3.5 h-3.5" /> Get in Touch
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact & Store Location
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Have questions about medicine availability, prescription verification, or monthly refill supplies? Reach out to our pharmacist team in Mahabalipur, Paliganj.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <a
            id="contact-call-btn"
            href={`tel:+${SITE_CONFIG.phone}`}
            className="p-5 rounded-2xl bg-sky-700 hover:bg-sky-800 text-white flex items-center justify-center gap-3 shadow-md font-bold text-sm transition text-center"
          >
            <Phone className="w-5 h-5" />
            <span>Call {SITE_CONFIG.phoneDisplay}</span>
          </a>

          <button
            id="contact-whatsapp-btn"
            onClick={onOpenOrderModal}
            className="p-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-3 shadow-md font-bold text-sm transition cursor-pointer text-center"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp Order / Chat</span>
          </button>

          <a
            id="contact-directions-btn"
            href={SITE_CONFIG.geo.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-3 shadow-md font-bold text-sm transition text-center"
          >
            <Navigation className="w-5 h-5 text-emerald-400" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Main Grid: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Store Information</h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">Address</strong>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5">{SITE_CONFIG.address.fullAddress}</p>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">{SITE_CONFIG.address.landmarks}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">Direct Phone</strong>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5">{SITE_CONFIG.phoneDisplay}</p>
                    <p className="text-[11px] text-slate-400">Monday to Sunday support</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">WhatsApp Business</strong>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5">+91 {SITE_CONFIG.whatsappNumber}</p>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400">Fast prescription review</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">Email</strong>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5">{SITE_CONFIG.email}</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-500" /> Working Hours
                </h4>
                <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                    <span>Monday – Saturday</span>
                    <strong className="text-slate-800 dark:text-slate-200">7:30 AM – 10:30 PM</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                    <span>Sunday</span>
                    <strong className="text-slate-800 dark:text-slate-200">8:00 AM – 9:30 PM</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-medium">
                    24/7 Emergency Dispatch Available via Phone
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Send Us a Direct Inquiry</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Fill out the form below. We will instantly receive your query with your phone number and respond via call or WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Chandra"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-phone-input"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Inquiry Subject
                  </label>
                  <select
                    id="contact-subject-select"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
                  >
                    <option value="Medicine Availability Inquiry">Medicine Availability Inquiry</option>
                    <option value="Cold-Storage / Insulin Booking">Cold-Storage / Insulin Booking</option>
                    <option value="Medical Equipment & BP Monitor Demo">Medical Equipment & BP Monitor Demo</option>
                    <option value="Baby Care / Nutrition Products">Baby Care / Nutrition Products</option>
                    <option value="Monthly Chronic Refill Registration">Monthly Chronic Refill Registration</option>
                    <option value="General Health Query">General Health Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Message / Required Medicines <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message-input"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your medicine requirement, dosage or question..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white resize-none"
                  />
                </div>

                <button
                  id="btn-submit-contact-form"
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>

                {submitted && (
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2 animate-fade-in">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
                    <span>Inquiry generated! WhatsApp is opening to connect you directly with our pharmacist.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Embedded Interactive Google Map */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-500" /> Interactive Map Location
            </h3>
            <a
              href={SITE_CONFIG.geo.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Open Fullscreen on Google Maps →
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-96 bg-slate-200 dark:bg-slate-800">
            <iframe
              title="Sriram Medical Hall Map Paliganj"
              src={SITE_CONFIG.geo.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};
