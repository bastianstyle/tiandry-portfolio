'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { profileData } from '@/data/profile';
import { useLanguage } from '@/context/LanguageContext';

const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { t, lang } = useLanguage();
  const currentYear = 2026;

  const NAV_LINKS = [
    { label: t('nav.home'), href: '#top' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.academic'), href: '#education' },
    { label: t('nav.portfolio'), href: '#projects' },
  ];

  return (
    <footer className="border-t border-[#26382c] bg-[#0d130f] pt-14 pb-12 text-[#b5c5b8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-start gap-10 border-b border-[#26382c] pb-12 md:grid-cols-12">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="#top"
              className="inline-block text-2xl font-extrabold tracking-[-0.06em] text-[#e5f3e8] hover:opacity-90"
              aria-label="Tiandry Simatupang - Back to top"
            >
              TS
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-[#b5c5b8]">
              {lang === 'en'
                ? <>Personal portfolio of <strong className="text-[#e5f3e8]">{profileData.name}</strong>. Full-Stack Developer with an academic background in {profileData.education.major} from {profileData.education.university}.</>
                : <>Portofolio pribadi <strong className="text-[#e5f3e8]">{profileData.name}</strong>. Full-Stack Developer dengan latar belakang akademis di {profileData.education.major} dari {profileData.education.university}.</>
              }
            </p>
            <p className="text-xs font-medium text-[#22c55e]">
              Next.js App Router • TypeScript Strict • Tailwind CSS
            </p>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#e5f3e8]">
              {lang === 'en' ? 'Navigation' : 'Navigasi'}
            </p>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block rounded-sm py-0.5 transition-colors hover:text-[#22c55e] focus-visible:outline-2 focus-visible:outline-[#22c55e]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Actions (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#e5f3e8]">
              {lang === 'en' ? 'Channels & Resume' : 'Kanal & Resume'}
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#26382c] bg-[#18231b] p-2.5 transition-colors hover:border-[#22c55e]/40 hover:text-[#22c55e]"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#26382c] bg-[#18231b] p-2.5 transition-colors hover:border-[#22c55e]/40 hover:text-[#22c55e]"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.socials.cvUrl}
                download="Tiandry_Simatupang_CV.pdf"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#26382c] bg-[#18231b] px-3.5 py-2 text-xs font-medium transition-colors hover:border-[#22c55e]/40 hover:text-[#22c55e]"
              >
                <span>CV.pdf</span>
              </a>
            </div>

            {/* Back to top button */}
            <div className="pt-2">
              <a
                href="#top"
                className="inline-flex items-center gap-2 py-1 text-xs text-[#b5c5b8] transition-colors hover:text-[#22c55e]"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Back to top of page' : 'Kembali ke atas halaman'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center text-xs text-[#b5c5b8]/80 sm:flex-row sm:text-left">
          <p>© {currentYear} {profileData.name}. {t('footer.rights')}</p>
          <p className="text-[11px] text-[#87998b]">
            {lang === 'en' ? 'Crafted with minimalist precision • UNIKOM Alumni' : 'Dibuat dengan presisi minimalis • Alumni UNIKOM'}
          </p>
        </div>
      </div>
    </footer>
  );
};
