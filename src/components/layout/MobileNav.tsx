'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  items: NavItem[];
  cvUrl?: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ items, cvUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Mobile Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open navigation menu'}
        className="rounded-lg border border-[#26382c] p-2 text-[#b5c5b8] transition-colors hover:bg-[#18231b] hover:text-[#e5f3e8] focus-visible:outline-2 focus-visible:outline-[#22c55e]"
      >
        {isOpen ? <X className="h-5 w-5 text-[#22c55e]" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Backdrop & Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[75px] z-50 flex animate-in flex-col justify-between border-b border-[#26382c] bg-[#0d130f]/95 p-6 backdrop-blur-xl duration-200 fade-in slide-in-from-top-4"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2 pt-2">
            {items.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between border-b border-[#26382c] px-4 py-3 text-lg font-medium transition-colors ${
                  index === 0
                    ? 'text-[#22c55e] underline decoration-1 underline-offset-8 decoration-[#22c55e]'
                    : 'text-[#e5f3e8] hover:text-[#22c55e]'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-[#87998b]">0{index + 1}</span>
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 border-t border-[#26382c] pt-6">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#22c55e] py-3 text-sm font-semibold text-[#080c09] transition-colors hover:bg-[#16a34a]"
            >
              Start a project
            </a>
            {cvUrl && (
              <a
                href={cvUrl}
                download="Tiandry_Simatupang_CV.pdf"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#26382c] py-2.5 text-sm text-[#b5c5b8] transition-colors hover:text-[#e5f3e8]"
              >
                Download CV
              </a>
            )}
            <div className="flex items-center justify-between px-2 pt-2 text-xs text-[#b5c5b8]">
              <span>Tiandry Simatupang</span>
              <span className="font-semibold text-[#22c55e]">Full-Stack Developer</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
