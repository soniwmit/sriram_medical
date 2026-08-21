import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  pagePath?: string;
}

export const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title = SITE_CONFIG.seo.title,
  description = SITE_CONFIG.seo.description,
  keywords = SITE_CONFIG.seo.keywords,
  canonicalUrl = `https://srirammedicalhall.com${window.location.pathname}`,
  pagePath = '/'
}) => {
  useEffect(() => {
    document.title = title;
    
    // Update Meta Description
    let descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', description);
    }

    // Update Keywords
    let kwMeta = document.querySelector('meta[name="keywords"]');
    if (kwMeta) {
      kwMeta.setAttribute('content', keywords.join(', '));
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Inject JSON-LD Schema
    const schemaId = 'schema-local-business-jsonld';
    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": SITE_CONFIG.name,
      "alternateName": SITE_CONFIG.shortName,
      "description": SITE_CONFIG.seo.description,
      "url": "https://srirammedicalhall.com",
      "telephone": `+${SITE_CONFIG.phone}`,
      "priceRange": "₹₹",
      "paymentAccepted": "Cash, UPI, PhonePe, Google Pay, Paytm, Cards",
      "currenciesAccepted": "INR",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "07:30",
          "closes": "22:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "08:00",
          "closes": "21:30"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE_CONFIG.address.line1,
        "addressLocality": SITE_CONFIG.address.area,
        "addressRegion": SITE_CONFIG.address.state,
        "postalCode": SITE_CONFIG.address.pincode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": SITE_CONFIG.geo.latitude,
        "longitude": SITE_CONFIG.geo.longitude
      },
      "hasMap": SITE_CONFIG.geo.googleMapsDirectionsUrl
    };

    schemaScript.text = JSON.stringify(structuredData);
  }, [title, description, keywords, canonicalUrl, pagePath]);

  return null;
};
