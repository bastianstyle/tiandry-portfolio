'use client';

import React from 'react';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { profileData } from '@/data/profile';

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const Hero: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="top" className="relative isolate flex flex-col overflow-hidden scroll-mt-20">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_40%_60%_at_22%_48%,rgba(34,197,94,0.12),transparent_100%)]"
        aria-hidden="true"
      />

      {/* Main hero content */}
      <div className="relative z-10 flex-1 w-full max-w-[1800px] min-[1920px]:max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-20 min-[1920px]:!px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(420px,0.85fr)] 2xl:grid-cols-[minmax(0,1.2fr)_minmax(520px,0.8fr)] min-[1920px]:!grid-cols-[minmax(0,1.15fr)_minmax(600px,0.85fr)] gap-10 lg:gap-16 2xl:gap-24 min-[1920px]:!gap-24 items-center pt-14 pb-8 sm:pt-18 sm:pb-10 lg:pt-20 lg:pb-12 2xl:pt-24 2xl:pb-12 min-[1920px]:!pt-28 min-[1920px]:!pb-14">

          {/* ── LEFT: Text content ── */}
          <div className="hero-enter space-y-5 z-10">

            {/* About Me label */}
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#22c55e]">
              <span className="h-px w-8 bg-[#22c55e]" aria-hidden="true" />
              {t('about.tag')}
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] 2xl:text-[68px] min-[1920px]:!text-[76px] font-extrabold text-[#e5f3e8] leading-[1.02] tracking-[-0.055em]">
              {lang === 'en' ? (
                <>I&apos;m {profileData.name.split(' ')[0]}<br />{profileData.name.split(' ').slice(1).join(' ')}</>
              ) : (
                <>Saya {profileData.name.split(' ')[0]}<br />{profileData.name.split(' ').slice(1).join(' ')}</>
              )}
            </h1>

            {/* Bio */}
              <p className="text-base 2xl:text-lg min-[1920px]:!text-xl text-[#b5c5b8] leading-[1.8] max-w-lg 2xl:max-w-xl min-[1920px]:!max-w-[680px]">
              {lang === 'en'
                ? 'I am a full-stack developer and Informatics Engineering graduate interested in Software Engineering and Data Science.'
                : 'Saya seorang full-stack developer dan lulusan Teknik Informatika dengan minat pada Software Engineering dan Data Science.'}
            </p>

            {/* Download CV */}
            <div>
              <a
                href={profileData.socials.cvUrl}
                download="Tiandry_Simatupang_CV.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-5 py-3 text-sm font-bold text-[#080c09] shadow-[0_8px_22px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#16a34a] hover:shadow-[0_12px_28px_rgba(0,0,0,0.28)]"
              >
                <Download className="w-4 h-4 text-[#080c09]" />
                {t('hero.cta.cv')}
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="rounded-full border border-[#26382c] bg-[#121a15] p-2.5 text-[#b5c5b8] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#22c55e]/40 hover:text-[#22c55e]">
                <GithubIcon />
              </a>
              <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="rounded-full border border-[#26382c] bg-[#121a15] p-2.5 text-[#b5c5b8] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#22c55e]/40 hover:text-[#22c55e]">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* ── RIGHT: Profile Photo ── */}
          <div className="hero-enter hero-enter-delay relative flex justify-center lg:justify-end">
            <div className="relative w-[88%] max-w-[380px] 2xl:max-w-[440px] min-[1920px]:!max-w-[500px]">
              <div
                className="absolute inset-3 translate-x-3 translate-y-3 rounded-[2rem] border border-[#22c55e]/20 bg-[#153c28]"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_20px_56px_rgba(0,0,0,0.18)]">
                <div className="relative h-full overflow-hidden rounded-[2rem]">
                  <Image
                    src="/images/profile-portrait.png"
                    alt={`${profileData.name} — Full-Stack Developer`}
                    fill
                    priority
                    unoptimized
                    sizes="50vw"
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.025]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
