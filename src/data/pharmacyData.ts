export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  badge?: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'equipment' | 'products';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface HealthTipItem {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  snippet: string;
  content: string;
  author: string;
  image: string;
}

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  mrp: number;
  discountedPrice: number;
  image: string;
  inStock: boolean;
  tag?: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "prescription-medicines",
    title: "100% Genuine Prescription Medicines",
    category: "Prescription Medicines",
    iconName: "Pill",
    shortDesc: "Complete range of certified allopathic medicines from top pharma brands like Sun, Cipla, Abbott, GSK & Mankind.",
    fullDesc: "We dispense licensed, authentic medications strictly sourced through authenticated pharmaceutical supply chains with batch verification and proper expiry maintenance.",
    features: ["Batch & Expiry verified", "Prescription review by Pharmacist", "Cold chain maintenance for insulins & biologics", "Discounts on chronic disease monthly refills"],
    badge: "Most Requested",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cold-storage-medicines",
    title: "Refrigerated Vaccines & Insulins",
    category: "Cold Chain Storage",
    iconName: "ThermometerSnowflake",
    shortDesc: "Dedicated medical-grade 2°C–8°C temperature monitoring for insulins, vaccines, and biologics.",
    fullDesc: "Precision temperature-controlled inventory with continuous backup generators to ensure zero potency loss for critical life-saving insulins, eye drops, and pediatric vaccines.",
    features: ["Continuous temperature logging (2°C–8°C)", "Insulated ice packs provided for home transit", "Complete insulin pen cartridges & needles", "All pediatric and booster vaccines"],
    badge: "24/7 Temperature Monitored",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "health-devices",
    title: "Health Devices & Diagnostic Equipment",
    category: "Medical Equipment",
    iconName: "Activity",
    shortDesc: "Digital BP monitors, Glucometers, Nebulizers, Pulse Oximeters, and Vaporizers from leading brands.",
    fullDesc: "Empowering families in Paliganj and Mahabalipur to monitor vital signs at home. We provide demo, warranty support, and authorized replacement strips for Omron, Dr. Morepen, and Accu-Chek.",
    features: ["Omron Digital Blood Pressure Monitors", "Accu-Chek & Dr. Morepen Glucometers", "Mesh & Compressor Nebulizers", "Free demonstration at counter"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "baby-mother-care",
    title: "Mother & Baby Care Essentials",
    category: "Baby Care",
    iconName: "Baby",
    shortDesc: "Infant milk formulas, Cerelac, Diapers, baby wipes, gentle skin lotions, and maternity vitamins.",
    fullDesc: "Comprehensive newborn and pediatric essentials from trusted global brands including Sebamed, Pampers, Nestle Cerelac, Lactogen, Himalaya Baby, and Mothercare.",
    features: ["Pediatric formula milk (Stage 1 to 4)", "Hypoallergenic skin care lotions & washes", "Premium soft diapers (all sizes)", "Maternal lactation & iron supplements"],
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ayurvedic-wellness",
    title: "Ayurvedic & Herbal Wellness",
    category: "Supplements",
    iconName: "Leaf",
    shortDesc: "Natural immunity boosters, herbal syrups, Chyawanprash, and joint pain oils from Dabur, Baidyanath & Patanjali.",
    fullDesc: "Authentic herbal remedies and time-tested formulations to nourish vitality, aid natural digestion, strengthen immunity, and manage seasonal colds without harsh chemicals.",
    features: ["Dabur & Baidyanath classical formulations", "Chyawanprash & organic honey", "Herbal joint pain oils and liniments", "Ayurvedic liver & digestion tonics"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "surgical-first-aid",
    title: "Surgical Supplies & First Aid",
    category: "Home Care",
    iconName: "ShieldAlert",
    shortDesc: "Bandages, sterile dressings, surgical gloves, IV sets, Betadine, Crepe bandages, and walkers.",
    fullDesc: "Instant availability of essential clinic and home medical supplies for wound care, post-surgical recovery, emergency dressing, and orthopedic support (knee braces, lumbar belts).",
    features: ["Sterile gauze, micropore tape & cotton rolls", "Antiseptic liquids (Betadine, Dettol, Savlon)", "Orthopedic cervical collars & knee supports", "Walkers, walking sticks & adult diapers"],
    image: "https://images.unsplash.com/photo-1583912267670-6575ad472688?auto=format&fit=crop&w=800&q=80"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Sriram Medical Hall Storefront",
    category: "store",
    categoryLabel: "Front View",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80",
    description: "Main road entrance with dedicated customer parking and emergency counter access at Mahabalipur, Paliganj."
  },
  {
    id: "gal-2",
    title: "Organized Medicine Racks & Shelves",
    category: "shelves",
    categoryLabel: "Medicine Shelves",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80",
    description: "Alphabetically indexed medicine storage racks for swift prescription dispensing."
  },
  {
    id: "gal-3",
    title: "Digital BP & Glucose Health Testing Counter",
    category: "equipment",
    categoryLabel: "Medical Equipment",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
    description: "Complimentary blood pressure checkup and genuine diagnostic device testing zone."
  },
  {
    id: "gal-4",
    title: "Certified Cold-Chain Insulin Refrigerator",
    category: "equipment",
    categoryLabel: "Cold Storage",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80",
    description: "State-of-the-art 2°C–8°C refrigerator for insulins, vaccines, and sensitive biologics."
  },
  {
    id: "gal-5",
    title: "Mother & Baby Wellness Section",
    category: "products",
    categoryLabel: "Products",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80",
    description: "Dedicated baby care aisle featuring Cerelac, formula feeds, diapers, and gentle infant skincare."
  },
  {
    id: "gal-6",
    title: "Modern Dispensary & Billing Counter",
    category: "store",
    categoryLabel: "Interior",
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80",
    description: "Clean, hygienic air-conditioned dispensing area with computerized billing."
  },
  {
    id: "gal-7",
    title: "Surgical & First-Aid Wound Care Station",
    category: "products",
    categoryLabel: "Surgical",
    image: "https://images.unsplash.com/photo-1583912267670-6575ad472688?auto=format&fit=crop&w=1000&q=80",
    description: "Comprehensive bandages, antiseptics, braces, and emergency first aid supplies."
  },
  {
    id: "gal-8",
    title: "Ayurvedic & Immunity Tonic Display",
    category: "products",
    categoryLabel: "Ayurveda",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80",
    description: "Pure herbal syrups, Chyawanprash, organic honey, and natural health rejuvenators."
  }
];

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: "fp-1",
    name: "Omron Automatic Digital BP Monitor (HEM-7120)",
    brand: "Omron",
    category: "Medical Device",
    mrp: 2450,
    discountedPrice: 2150,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80",
    inStock: true,
    tag: "Top Seller"
  },
  {
    id: "fp-2",
    name: "Accu-Chek Active Blood Glucose Meter + 10 Strips",
    brand: "Roche",
    category: "Diabetes Care",
    mrp: 1450,
    discountedPrice: 1250,
    image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&w=500&q=80",
    inStock: true,
    tag: "10-Sec Test"
  },
  {
    id: "fp-3",
    name: "Dabur Chyawanprash 2X Immunity (1kg)",
    brand: "Dabur",
    category: "Ayurveda",
    mrp: 410,
    discountedPrice: 365,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&q=80",
    inStock: true,
    tag: "Best for Family"
  },
  {
    id: "fp-4",
    name: "Sebamed Baby Gentle Protective Facial Cream (50ml)",
    brand: "Sebamed",
    category: "Baby Care",
    mrp: 495,
    discountedPrice: 440,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=500&q=80",
    inStock: true,
    tag: "pH 5.5"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: "How do I order medicines via WhatsApp from Sriram Medical Hall?",
    answer: "Simply click the 'WhatsApp Order' button on our website, fill in your required medicine names or attach a clear photo of your doctor's prescription. We will verify availability, send you the exact total bill, and prepare your medicines for swift pickup or doorstep delivery.",
    category: "Ordering"
  },
  {
    question: "Do you deliver medicines in Mahabalipur and surrounding Paliganj areas?",
    answer: "Yes! We provide prompt local delivery across Mahabalipur, Paliganj Bazar, and neighboring villages within the 801110 postal zone for genuine medicine and emergency requirements.",
    category: "Delivery"
  },
  {
    question: "Are your medicines 100% genuine and fresh?",
    answer: "Every single medicine at Sriram Medical Hall is procured directly from authorized pharmaceutical distributors (Sun Pharma, Cipla, Alkem, Mankind, Abbott, GSK) with transparent GST invoicing, strict expiry tracking, and temperature-controlled storage.",
    category: "Quality"
  },
  {
    question: "Can I get insulins, vaccines, and cold-storage injections here?",
    answer: "Yes. We maintain a dedicated 24/7 refrigerated storage unit maintaining the mandatory 2°C to 8°C temperature curve for insulins (Mixtard, Lantus, Novorapid), pediatric vaccines, and biological medications. Free thermal ice pack wraps are included for your safe transit home.",
    category: "Storage"
  },
  {
    question: "What are your operating hours and do you support emergencies?",
    answer: "Our retail counter is open Monday through Saturday from 7:30 AM to 10:30 PM and Sundays from 8:00 AM to 9:30 PM. For critical emergency prescriptions outside regular hours, you can reach us immediately at +91 89690 97504.",
    category: "Hours"
  }
];

export const HEALTH_TIPS: HealthTipItem[] = [
  {
    id: "tip-1",
    title: "5 Essential Rules for Storing Insulin and Medicines at Home",
    date: "Aug 15, 2026",
    category: "Medicine Safety",
    readTime: "3 min read",
    snippet: "Learn how temperature fluctuations and direct sunlight can damage active ingredients in your daily medications.",
    content: "Store unopened insulin vials in the refrigerator (2°C to 8°C). Never freeze insulin. Keep regular tablets in a cool, dry place away from bathroom moisture and direct windowsill sun.",
    author: "Pharmacist Team, Sriram Medical",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tip-2",
    title: "How to Accurately Measure Blood Pressure with a Digital Monitor",
    date: "Aug 10, 2026",
    category: "Health Tips",
    readTime: "4 min read",
    snippet: "Simple steps to avoid inaccurate BP readings: cuff placement, resting before testing, and proper posture.",
    content: "Sit comfortably with your back supported for 5 minutes prior to measuring. Place the cuff 1 inch above your elbow crease directly on bare skin at heart level. Avoid caffeine, exercise, or smoking 30 minutes prior.",
    author: "Clinical Advisory, Sriram Medical",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tip-3",
    title: "Managing Seasonal Viral Fevers: When to Consult a Doctor",
    date: "Aug 02, 2026",
    category: "Seasonal Wellness",
    readTime: "3 min read",
    snippet: "Key signs distinguishing mild seasonal viral infections from conditions requiring immediate clinical lab tests.",
    content: "Stay hydrated with oral rehydration salts (ORS) and clean boiled water. Never take unprescribed antibiotics for viral fevers. If high fever persists beyond 48 hours or is accompanied by severe rash or difficulty breathing, consult a licensed physician immediately.",
    author: "Healthcare Insights, Sriram Medical",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80"
  }
];
