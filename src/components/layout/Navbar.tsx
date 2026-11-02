import React from 'react';
import Link from 'next/link';
import { NavbarClient } from './NavbarClient';

export const Navbar: React.FC = () => {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-[#26382c]/65 bg-[#0d1911]/75 backdrop-blur-xl">
        <div className="max-w-[1800px] min-[1920px]:max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-20 min-[1920px]:px-24 h-[68px] flex items-center justify-between">
          {/* Brand */}
          <Link
            href="#top"
            className="text-xl font-extrabold tracking-[-0.06em] text-[#e5f3e8] hover:text-[#22c55e] transition-colors"
            aria-label="Tiandry Simatupang - Home"
          >
            TS
          </Link>

          {/* Client nav (links + lang toggle + mobile menu) */}
          <NavbarClient />
        </div>
      </header>
      <div className="h-[68px]" aria-hidden="true" />
    </>
  );
};
