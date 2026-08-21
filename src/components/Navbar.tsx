import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Phone,
  MessageSquare,
  Sun,
  Moon,
  Menu,
  X,
  Plus,
  Lock,
  Clock,
  MapPin
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login', isLogin: true },
  ];

  return (
    <>
      {/* Top Notification / Emergency Bar */}
      <div className="bg-[#0A0A0A] text-[#F5F5F5] text-xs py-2 px-4 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold tracking-wider uppercase text-[10px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              LIVE: {SITE_CONFIG.workingHours.weekdays}
            </span>
            <span className="hidden md:flex items-center gap-1 text-neutral-400 font-mono text-[10px] tracking-widest uppercase">
              <MapPin className="w-3.5 h-3.5 text-orange-500" /> Mahabalipur, Paliganj (801110)
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="hidden lg:inline text-neutral-400 font-mono text-[10px] tracking-wider uppercase">Emergency Hotline:</span>
            <a
              href={`tel:+${SITE_CONFIG.phone}`}
              className="flex items-center gap-1.5 font-mono font-bold text-white hover:text-orange-400 transition tracking-wide text-xs"
            >
              <Phone className="w-3 h-3 text-orange-500" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <span className="text-neutral-800">|</span>
            <span className="text-emerald-400 font-mono text-[10px] font-bold tracking-widest uppercase hidden sm:inline">100% GENUINE RX</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo Branding */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none" id="brand-logo-link">
            <div className="w-11 h-11 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-[#0A0A0A] flex items-center justify-center font-black shadow-md group-hover:scale-105 transition-transform duration-200 border border-neutral-800 dark:border-neutral-200">
              <div className="relative">
                <Plus className="w-6 h-6 stroke-[3]" />
              </div>
            </div>
            <div>
              <span className="font-black text-xl sm:text-2xl tracking-tighter uppercase text-neutral-950 dark:text-[#F5F5F5] flex items-center gap-1.5">
                {SITE_CONFIG.name}
              </span>
              <p className="text-[10px] font-bold font-mono text-orange-600 dark:text-orange-400 tracking-[0.25em] uppercase">
                Pharmacy • Chemist • Paliganj
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-neutral-100 dark:bg-neutral-900 p-1.5 rounded-full border border-neutral-200 dark:border-neutral-800">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                    isActive
                      ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* PWA Add to Home Button */}
            <PWAInstallButton variant="nav" className="hidden sm:inline-flex" />

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="p-2.5 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 transition"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-orange-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
            </button>

            {/* WhatsApp Order Button */}
            <button
              id="navbar-whatsapp-btn"
              onClick={onOpenOrderModal}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black tracking-wider uppercase shadow-md shadow-emerald-600/20 transition active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2.5 rounded-xl text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 transition"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-[#0A0A0A] border-b border-neutral-200 dark:border-neutral-800 px-4 py-5 animate-fade-in shadow-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-between transition ${
                      isActive
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-black'
                        : 'text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  {link.isLogin && <Lock className="w-4 h-4 text-neutral-400" />}
                </NavLink>
              ))}

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-2.5">
                {/* Mobile PWA Install */}
                <PWAInstallButton variant="drawer" />

                {/* Mobile WhatsApp Order */}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenOrderModal();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </button>

                {/* Call Store */}
                <a
                  href={`tel:+${SITE_CONFIG.phone}`}
                  className="w-full py-3 px-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>Call {SITE_CONFIG.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
