import React, { useState } from 'react';
import { X, Phone, MessageSquare, Upload, CheckCircle2, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedicineName?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  initialMedicineName = ''
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState(initialMedicineName);
  const [hasPrescription, setHasPrescription] = useState<'Yes' | 'No'>('No');
  const [prescriptionFileName, setPrescriptionFileName] = useState('');
  const [preferredTime, setPreferredTime] = useState('Earliest Possible (Express)');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Sync initial medicine name if provided
  React.useEffect(() => {
    if (initialMedicineName) {
      setMedicineName(initialMedicineName);
    }
  }, [initialMedicineName]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFileName(e.target.files[0].name);
      setHasPrescription('Yes');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedText = `Hello ${SITE_CONFIG.name},
*Medicine Order Request*
-----------------------------
*Customer Name:* ${customerName.trim() || 'Valued Customer'}
*Phone:* ${phone.trim() || 'Not specified'}
*Medicine Required:* ${medicineName.trim() || 'Enquiry for Medicines'}
*Address / Location:* ${address.trim() || 'Paliganj / Mahabalipur'}
*Prescription Attached:* ${hasPrescription}${prescriptionFileName ? ` (${prescriptionFileName})` : ''}
*Preferred Time:* ${preferredTime}
*Notes/Message:* ${message.trim() || 'Please confirm price & availability.'}
-----------------------------
(Sent from Sriram Medical Hall Web App)`;

    const whatsappUrl = `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
    
    setFormSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setFormSubmitted(false);
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto" id="whatsapp-order-modal-backdrop">
      <div className="bg-[#121212] border border-neutral-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8 text-neutral-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Order Form"
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-700 text-orange-500 flex items-center justify-center shadow-lg">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">Order On WhatsApp</h2>
            <p className="text-xs font-mono text-orange-400 uppercase tracking-wider flex items-center gap-1.5 mt-0.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 inline" /> Express Paliganj Dispatch
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                Customer Name <span className="text-orange-500">*</span>
              </label>
              <input
                id="order-customer-name"
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Rajesh Kumar"
                className="w-full px-4 py-3 rounded-2xl border border-neutral-800 bg-[#0A0A0A] text-white text-sm focus:outline-none focus:border-orange-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                Mobile Number <span className="text-orange-500">*</span>
              </label>
              <input
                id="order-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit mobile number"
                className="w-full px-4 py-3 rounded-2xl border border-neutral-800 bg-[#0A0A0A] text-white text-sm focus:outline-none focus:border-orange-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
              Medicine Name(s) & Quantity <span className="text-orange-500">*</span>
            </label>
            <textarea
              id="order-medicine-name"
              required
              rows={2}
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              placeholder="e.g. Dolo 650 (1 Strip), Pan 40 (10 tabs), Omron BP Monitor"
              className="w-full px-4 py-3 rounded-2xl border border-neutral-800 bg-[#0A0A0A] text-white text-sm focus:outline-none focus:border-orange-500 transition resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                Email Address (Optional)
              </label>
              <input
                id="order-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="w-full px-4 py-3 rounded-2xl border border-neutral-800 bg-[#0A0A0A] text-white text-sm focus:outline-none focus:border-orange-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-orange-500" /> Preferred Delivery
              </label>
              <select
                id="order-delivery-time"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-neutral-800 bg-[#0A0A0A] text-white text-sm focus:outline-none focus:border-orange-500 transition"
              >
                <option value="Earliest Possible (Express)">Earliest Possible (Express)</option>
                <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                <option value="Evening (4:00 PM - 9:00 PM)">Evening (4:00 PM - 9:00 PM)</option>
                <option value="Store Counter Self-Pickup">Store Counter Self-Pickup</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1.5 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-orange-500" /> Landmark / Area in Paliganj
            </label>
            <input
              id="order-address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. Near Mahabalipur High School, Paliganj"
              className="w-full px-4 py-3 rounded-2xl border border-neutral-800 bg-[#0A0A0A] text-white text-sm focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          {/* Prescription Upload Mockup */}
          <div className="bg-[#0A0A0A] p-4 rounded-2xl border border-neutral-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5 text-orange-500" /> Prescription Available?
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setHasPrescription('Yes')}
                  className={`px-3 py-1 text-xs rounded-full font-black uppercase tracking-wider transition cursor-pointer ${
                    hasPrescription === 'Yes'
                      ? 'bg-white text-neutral-950 shadow-sm'
                      : 'bg-neutral-800 text-neutral-400'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setHasPrescription('No');
                    setPrescriptionFileName('');
                  }}
                  className={`px-3 py-1 text-xs rounded-full font-black uppercase tracking-wider transition cursor-pointer ${
                    hasPrescription === 'No'
                      ? 'bg-white text-neutral-950'
                      : 'bg-neutral-800 text-neutral-400'
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {hasPrescription === 'Yes' && (
              <div className="mt-3">
                <label className="flex items-center justify-center gap-2 p-3.5 border-2 border-dashed border-neutral-700 hover:border-orange-500 rounded-2xl cursor-pointer bg-neutral-900/60 transition text-center">
                  <Upload className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-mono text-neutral-300 truncate max-w-[240px]">
                    {prescriptionFileName ? `File: ${prescriptionFileName}` : 'Select prescription image/PDF'}
                  </span>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <p className="text-[10px] font-mono text-neutral-500 mt-1">You can also attach the image directly inside WhatsApp.</p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
              Additional Notes / Instructions
            </label>
            <input
              id="order-notes"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Please bring changes for ₹500, or call before coming."
              className="w-full px-4 py-3 rounded-2xl border border-neutral-800 bg-[#0A0A0A] text-white text-sm focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              id="btn-send-whatsapp-order"
              type="submit"
              className="w-full py-3.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition active:scale-98 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>
            <a
              id="btn-call-now-order"
              href={`tel:+${SITE_CONFIG.phone}`}
              className="w-full py-3.5 px-4 rounded-full bg-white hover:bg-neutral-200 text-[#0A0A0A] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition text-center"
            >
              <Phone className="w-4 h-4 text-orange-600" />
              <span>Call Now</span>
            </a>
          </div>
        </form>

        {formSubmitted && (
          <div className="absolute inset-0 bg-[#121212]/95 rounded-3xl flex flex-col items-center justify-center p-6 text-center animate-fade-in z-20">
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mb-3 animate-pulse" />
            <h3 className="text-xl font-black text-white uppercase tracking-tight">Opening WhatsApp...</h3>
            <p className="text-xs font-mono text-neutral-400 mt-1 uppercase tracking-wider">Connecting to Sriram Medical Hall pharmacist.</p>
          </div>
        )}
      </div>
    </div>
  );
};
