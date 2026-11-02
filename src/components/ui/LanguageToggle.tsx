'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === 'en' ? 'Switch to Bahasa Indonesia' : 'Switch to English'}
      className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#26382c] bg-[#121a15] hover:border-[#22c55e]/40 transition-all text-xs font-semibold tracking-wider group"
    >
      <span className={`px-1.5 py-0.5 rounded-full transition-all ${lang === 'en' ? 'bg-[#22c55e] text-[#080c09]' : 'text-[#87998b] group-hover:text-[#e5f3e8]'}`}>EN</span>
      <span className="text-[#26382c]">|</span>
      <span className={`px-1.5 py-0.5 rounded-full transition-all ${lang === 'id' ? 'bg-[#22c55e] text-[#080c09]' : 'text-[#87998b] group-hover:text-[#e5f3e8]'}`}>ID</span>
    </button>
  );
};
