import React from 'react';
import { X, Share2, PlusSquare, ArrowDown } from 'lucide-react';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in" id="ios-install-guide-modal">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative text-slate-800 dark:text-slate-100">
        <button
          onClick={onClose}
          aria-label="Close install instructions"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600 to-sky-600 flex items-center justify-center text-white shadow-md">
            <span className="text-xl font-bold">SM</span>
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Install Sriram Medical</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Add to your iPhone or iPad Home Screen</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 py-2 border-y border-slate-100 dark:border-slate-800">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              1
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Tap the Share icon</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                Look for <Share2 className="w-4 h-4 text-sky-500 inline" /> in Safari's bottom toolbar.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              2
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Select "Add to Home Screen"</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                Scroll down the share sheet and tap <PlusSquare className="w-4 h-4 text-emerald-500 inline" /> <strong>Add to Home Screen</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              3
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Tap "Add" in the top right</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                The pharmacy app icon will now appear on your home screen for instant 1-tap medicine stock check & ordering!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <ArrowDown className="w-4 h-4 text-emerald-500 animate-bounce" />
            <span>Safari Menu below</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-xl transition shadow-sm"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
