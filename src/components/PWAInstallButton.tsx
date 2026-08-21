import React from 'react';
import { Smartphone, CheckCircle } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'nav' | 'hero' | 'drawer';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = '',
  variant = 'nav'
}) => {
  const {
    isInstallable,
    isInstalled,
    showIOSGuide,
    setShowIOSGuide,
    installSuccessMessage,
    promptInstall
  } = usePWAInstall();

  // If already installed, show subtle indicator or hide
  if (isInstalled) {
    if (variant === 'drawer') {
      return (
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-2 rounded-xl">
          <CheckCircle className="w-4 h-4" /> App Installed
        </div>
      );
    }
    return null;
  }

  // If installable or on iOS Safari
  if (!isInstallable) {
    return null;
  }

  return (
    <>
      <button
        id="btn-pwa-add-to-home"
        onClick={promptInstall}
        aria-label="Add Sriram Medical Hall App to Home Screen"
        className={`inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
          variant === 'nav'
            ? 'px-3.5 py-1.5 text-xs sm:text-sm rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow'
            : variant === 'drawer'
            ? 'w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm shadow-md'
            : 'px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-base shadow-lg hover:shadow-xl'
        } ${className}`}
      >
        <Smartphone className="w-4 h-4" />
        <span>📲 Add to Home</span>
      </button>

      {installSuccessMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-emerald-900 text-white px-4 py-2 rounded-full text-xs font-medium shadow-2xl flex items-center gap-2 animate-bounce">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>App installed successfully!</span>
        </div>
      )}

      <IOSInstallGuide
        isOpen={showIOSGuide}
        onClose={() => setShowIOSGuide(false)}
      />
    </>
  );
};
