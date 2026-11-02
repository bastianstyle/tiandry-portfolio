'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageToggle } from '@/components/ui/LanguageToggle';

const NAV_KEYS = [
  { key: 'nav.home', href: '#top' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.academic', href: '#education' },
  { key: 'nav.portfolio', href: '#projects' },
] as const;

export const NavbarClient: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#top');

  useEffect(() => {
    let updateTimeout = 0;
    const syncActiveLink = () => {
      const marker = 110;
      let currentHref = '#top';

      for (const item of NAV_KEYS) {
        const section = document.querySelector<HTMLElement>(item.href);
        if (section && section.getBoundingClientRect().top <= marker) {
          currentHref = item.href;
        }
      }

      setActiveHref(currentHref);
    };
    const updateActiveLink = () => {
      window.clearTimeout(updateTimeout);
      updateTimeout = window.setTimeout(syncActiveLink, 140);
    };

    syncActiveLink();
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    return () => {
      window.clearTimeout(updateTimeout);
      window.removeEventListener('scroll', updateActiveLink);
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    document.body.style.overflow = isOpen ? 'hidden' : '';
    window.addEventListener('keydown', handleKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleKey); };
  }, [isOpen]);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
        {NAV_KEYS.map((item) => {
          const isActive = activeHref === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveHref(item.href)}
              aria-current={isActive ? 'location' : undefined}
              className={`relative px-2 py-3 text-xs transition-colors after:absolute after:bottom-1 after:left-1/2 after:h-px after:w-5 after:-translate-x-1/2 after:content-[''] after:transition-transform ${isActive ? 'font-semibold text-[#22c55e] after:scale-x-100 after:bg-[#22c55e]' : 'text-[#b5c5b8] after:scale-x-0 after:bg-[#22c55e]/50 hover:text-[#e5f3e8] hover:after:scale-x-100'}`}
            >
              {t(item.key)}
            </a>
          );
        })}
      </nav>

      {/* Right: Lang toggle + Contact button + hamburger */}
      <div className="flex items-center gap-3">
        <LanguageToggle />
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center px-4 py-2 rounded-full border border-[#26382c] bg-[#121a15] text-xs font-semibold text-[#22c55e] hover:border-[#4ade80] hover:bg-[#18231b] transition-all"
        >
          {t('nav.contactBtn')}
        </a>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 rounded-lg border border-[#26382c] text-[#b5c5b8] hover:text-[#e5f3e8] transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 flex flex-col bg-[#0d130f] p-6 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_KEYS.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveHref(item.href);
                    setIsOpen(false);
                  }}
                  aria-current={isActive ? 'location' : undefined}
                  className={`py-3 px-3 text-lg font-medium border-b border-[#26382c] ${isActive ? 'text-[#22c55e] underline decoration-1 underline-offset-8 decoration-[#22c55e]' : 'text-[#e5f3e8] hover:text-[#22c55e]'}`}
                >
                  {t(item.key)}
                </a>
              );
            })}
          </nav>
          <div className="mt-8 pt-6 border-t border-[#26382c]">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex justify-center py-3 rounded-lg border border-[#22c55e]/40 text-[#22c55e] font-semibold text-sm"
            >
              {t('nav.contactBtn')}
            </a>
          </div>
        </div>
      )}
    </>
  );
};
