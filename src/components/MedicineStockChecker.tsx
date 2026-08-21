import React, { useState, useMemo } from 'react';
import { Search, CheckCircle, AlertTriangle, XCircle, ShoppingBag, Pill, Filter, RotateCcw } from 'lucide-react';
import medicineData from '../data/medicineStock.json';
import { SITE_CONFIG } from '../config/siteConfig';

interface MedicineStockItem {
  id: string;
  medicineName: string;
  brand: string;
  category: string;
  dosage: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock' | string;
  prescriptionRequired: boolean;
  description: string;
}

interface MedicineStockCheckerProps {
  onOpenOrderModal?: (medicineName: string) => void;
  compact?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onOpenOrderModal,
  compact = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const allItems: MedicineStockItem[] = medicineData as MedicineStockItem[];

  const categories = useMemo(() => {
    const set = new Set(allItems.map(item => item.category));
    return ['All', ...Array.from(set)];
  }, [allItems]);

  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      const matchesSearch =
        item.medicineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.dosage.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [allItems, searchTerm, selectedCategory, selectedStatus]);

  const handleOrderClick = (item: MedicineStockItem) => {
    if (onOpenOrderModal) {
      onOpenOrderModal(`${item.medicineName} (${item.dosage})`);
    } else {
      const msg = `Hello ${SITE_CONFIG.name}, I want to check availability and order *${item.medicineName}* (Brand: ${item.brand}, MRP: ₹${item.mrp}). Please confirm.`;
      window.open(`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-950/80 text-emerald-300 border border-emerald-800">
            <CheckCircle className="w-3 h-3 text-emerald-400" />
            Available
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-950/80 text-amber-300 border border-amber-800">
            <AlertTriangle className="w-3 h-3 text-amber-400" />
            Limited
          </span>
        );
      case 'Out of Stock':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-neutral-900 text-neutral-400 border border-neutral-800">
            <XCircle className="w-3 h-3 text-neutral-400" />
            Sold Out
          </span>
        );
    }
  };

  return (
    <div className="w-full bg-white dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-5 sm:p-8 shadow-2xl" id="medicine-stock-checker-section">
      
      {/* Title & Badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-orange-600 dark:text-orange-400 font-mono text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
            <Pill className="w-3.5 h-3.5" /> LIVE INVENTORY CHECK
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-neutral-950 dark:text-white">
            Medicine Stock Checker
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Search 100% genuine allopathic, chronic care, pediatric & surgical supplies in real-time.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setSelectedStatus('All');
            }}
            className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase font-bold tracking-wider text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="mt-6 space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="medicine-search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type medicine name, brand, or formula (e.g. Dolo 650, Omron, Augmentin, Insulin)..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-neutral-50 dark:bg-[#0A0A0A] border border-neutral-300 dark:border-neutral-700 text-neutral-950 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base transition font-medium"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono font-bold uppercase text-neutral-400 hover:text-white bg-neutral-200 dark:bg-neutral-800 px-2.5 py-1 rounded-md"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filters */}
        {!compact && (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            {/* Status Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-orange-500" /> Status:
              </span>
              {['All', 'Available', 'Limited Stock', 'Out of Stock'].map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider rounded-full transition ${
                    selectedStatus === status
                      ? 'bg-neutral-950 text-white dark:bg-orange-500 dark:text-neutral-950 shadow-sm'
                      : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            {/* Category Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-xs font-mono font-bold uppercase px-3.5 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mt-4 flex items-center justify-between text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400">
        <span>Found <strong>{filteredItems.length}</strong> items in inventory</span>
        <span>Store: Mahabalipur, Paliganj</span>
      </div>

      {/* Table / Grid */}
      <div className="mt-4 overflow-x-auto">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-3xl bg-neutral-50 dark:bg-[#0A0A0A] border border-dashed border-neutral-300 dark:border-neutral-800">
            <Pill className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
            <h3 className="text-base font-bold uppercase tracking-tight text-neutral-900 dark:text-white">No matching medicines found</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mt-1 mb-4">
              Can't find what you need? We stock over 3,000+ formulations at our Paliganj store or can arrange it on special order within 24 hours.
            </p>
            <button
              onClick={() => {
                if (onOpenOrderModal) onOpenOrderModal(searchTerm);
                else {
                  window.open(`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello Sriram Medical Hall, I am inquiring if you have: ${searchTerm}`)}`, '_blank');
                }
              }}
              className="px-5 py-2.5 bg-emerald-600 text-white rounded-full text-xs font-black uppercase tracking-wider shadow hover:bg-emerald-500 transition cursor-pointer"
            >
              Ask on WhatsApp directly
            </button>
          </div>
        ) : (
          <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-neutral-50 dark:hover:bg-neutral-900/60 p-3.5 rounded-2xl transition"
              >
                <div className="space-y-1 sm:max-w-md">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm sm:text-base uppercase tracking-tight text-neutral-950 dark:text-white">
                      {item.medicineName}
                    </h4>
                    {item.prescriptionRequired && (
                      <span className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-rose-950/80 text-rose-300 border border-rose-800 rounded">
                        Rx
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                    <span>Brand: <strong className="text-neutral-900 dark:text-neutral-200 uppercase">{item.brand}</strong></span>
                    <span>•</span>
                    <span>Dosage: <strong className="text-neutral-900 dark:text-neutral-200">{item.dosage}</strong></span>
                    <span>•</span>
                    <span>Category: <strong className="text-neutral-900 dark:text-neutral-200">{item.category}</strong></span>
                  </div>

                  <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                  <div className="text-left sm:text-right">
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <span className="text-xs text-neutral-400 line-through">₹{(item.mrp * 1.1).toFixed(0)}</span>
                      <span className="text-base font-black text-orange-600 dark:text-orange-400">₹{item.mrp.toFixed(2)}</span>
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">
                      Exp: {item.expiry}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2">
                    {getStatusBadge(item.status)}

                    <button
                      onClick={() => handleOrderClick(item)}
                      className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition active:scale-95 cursor-pointer ${
                        item.status === 'Out of Stock'
                          ? 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                          : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{item.status === 'Out of Stock' ? 'Notify' : 'WhatsApp'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
