import React, { useState } from 'react';
import {
  Images,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Eye,
  Camera,
  MapPin
} from 'lucide-react';
import { GALLERY_DATA, GalleryItem } from '../data/pharmacyData';
import { SEOHelmet } from '../components/SEOHelmet';
import { SITE_CONFIG } from '../config/siteConfig';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'store', label: 'Store & Front View' },
    { id: 'shelves', label: 'Medicine Shelves' },
    { id: 'equipment', label: 'Equipment & Cold Storage' },
    { id: 'products', label: 'Healthcare Products' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="w-full py-12 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <SEOHelmet
        title="Photo Gallery | Sriram Medical Hall - Storefront, Shelves & Cold Storage Paliganj"
        description="View photo gallery of Sriram Medical Hall pharmacy at Mahabalipur, Paliganj, Bihar. Explore clean medicine racks, 2°C–8°C insulin storage units, and diagnostic testing counters."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
            <Camera className="w-3.5 h-3.5" /> Visual Tour
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pharmacy Store & Facility Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Take a visual tour inside Sriram Medical Hall. See our hygienic dispensing counters, indexed medicine shelves, and certified cold-storage equipment in Mahabalipur, Paliganj.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-150 ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="h-64 relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="p-3 bg-white/90 dark:bg-slate-900/90 rounded-full text-emerald-600 dark:text-emerald-400 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>
                <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="p-5 space-y-1.5">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Store Location Notice */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold">Visit Us In Person</h4>
              <p className="text-xs text-slate-400">{SITE_CONFIG.address.fullAddress}</p>
            </div>
          </div>
          <a
            href={SITE_CONFIG.geo.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow transition shrink-0"
          >
            Get Direction on Map
          </a>
        </div>

      </div>

      {/* Lightbox Modal with Zoom & Navigation */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          id="gallery-lightbox-modal"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-800 transition"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-slate-950/70 text-white hover:bg-emerald-600 transition"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-slate-950/70 text-white hover:bg-emerald-600 transition"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="h-[50vh] sm:h-[65vh] bg-black flex items-center justify-center">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Caption */}
            <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
              <div>
                <span className="text-xs font-semibold text-emerald-400">
                  {filteredItems[activeLightboxIndex].categoryLabel} ({activeLightboxIndex + 1} of {filteredItems.length})
                </span>
                <h3 className="text-base font-bold mt-0.5">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {filteredItems[activeLightboxIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
