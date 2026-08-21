export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  email: string;
  address: {
    line1: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    fullAddress: string;
    landmarks: string;
  };
  workingHours: {
    weekdays: string;
    sunday: string;
    emergency: string;
  };
  geo: {
    latitude: number;
    longitude: number;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
  };
  social: {
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  pwa: {
    enabled: boolean;
    appName: string;
    shortName: string;
    themeColor: string;
    backgroundColor: string;
    startUrl: string;
    display: string;
  };
}

export const SITE_CONFIG: BusinessConfig = {
  name: "Sriram Medical Hall",
  shortName: "Sriram Medical",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  category: "Retail Pharmacy & Chemist",
  phone: "918969097504",
  phoneDisplay: "+91 89690 97504",
  whatsappNumber: "8969097504",
  email: "srirammedicalpaliganj@gmail.com",
  address: {
    line1: "Bajar Mahabalipuram To",
    area: "Mahabali Pur",
    city: "Paliganj",
    state: "Bihar",
    pincode: "801110",
    fullAddress: "Bajar Mahabalipuram To, Mahabali Pur, Paliganj, Bihar 801110",
    landmarks: "Near Mahabalipur Main Market & Paliganj Road, Patna District, Bihar"
  },
  workingHours: {
    weekdays: "Monday – Saturday: 7:30 AM – 10:30 PM",
    sunday: "Sunday: 8:00 AM – 9:30 PM",
    emergency: "24/7 Emergency Medicine Dispatch on WhatsApp / Call"
  },
  geo: {
    latitude: 25.3328,
    longitude: 84.8087,
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14408.822606551842!2d84.7957!3d25.3328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d57813a48e7f1%3A0x7d812b19280b08f4!2sPaliganj%2C%20Bihar%20801110!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Mahabali+Pur,+Paliganj,+Bihar+801110"
  },
  social: {
    facebook: "https://facebook.com/srirammedicalhallpaliganj",
    instagram: "https://instagram.com/srirammedicalhall",
    whatsapp: "https://wa.me/918969097504"
  },
  seo: {
    title: "Sriram Medical Hall | Best Pharmacy & Medicine Store in Paliganj, Bihar 801110",
    description: "Sriram Medical Hall in Mahabalipur, Paliganj offers 100% genuine allopathic, ayurvedic, OTC medicines, health devices, baby care, surgical supplies with fast WhatsApp ordering.",
    keywords: [
      "Sriram Medical Hall",
      "Medical Store Paliganj",
      "Pharmacy Mahabalipur",
      "Chemist in Paliganj Bihar",
      "Genuine Medicine Paliganj",
      "Medical shop Bihar 801110",
      "Baby care products Paliganj",
      "BP Machine Glucometer Paliganj",
      "Prescription medicine delivery Paliganj"
    ]
  },
  pwa: {
    enabled: true,
    appName: "Sriram Medical Hall",
    shortName: "Sriram Med",
    themeColor: "#0A8F6A",
    backgroundColor: "#ffffff",
    startUrl: "/",
    display: "standalone"
  }
};
