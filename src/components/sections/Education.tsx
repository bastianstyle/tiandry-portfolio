'use client';

import React from 'react';
import { GraduationCap, BookOpen, MapPin, CalendarDays, Award } from 'lucide-react';
import { educationDetails } from '@/data/profile';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

export const Education: React.FC = () => {
  const { lang, t } = useLanguage();
  return (
    <section id="education" className="relative min-h-[calc(100svh-68px)] scroll-mt-20 py-10 md:py-14 2xl:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Heading */}
        <SectionHeading
          label={lang === 'en' ? 'Academic Background' : 'Latar Belakang Akademik'}
          title={lang === 'en' ? 'Formal foundations in Computer Science.' : 'Fondasi formal dalam Ilmu Komputer.'}
          description={lang === 'en'
            ? 'Academic credentials and theoretical foundations that underpin my practical engineering capabilities.'
            : 'Kredensial akademik dan fondasi teoritis yang menopang kemampuan rekayasa praktis saya.'
          }
        />

        {/* Educational Credential Card */}
        <div data-reveal className="rounded-3xl border border-[#26382c] bg-[#121a15] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_64px_rgba(0,0,0,0.1)] sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Degree & Institution Info (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-xl border border-[#26382c] bg-[#18231b] p-2.5 text-[#22c55e]">
                  <GraduationCap className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#22c55e]">
                    {lang === 'en' ? 'Higher Education Degree' : 'Gelar Pendidikan Tinggi'}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[#e5f3e8] sm:text-2xl">
                    {lang === 'en' ? 'Bachelor of Informatics Engineering' : educationDetails.degree}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-[#b5c5b8]">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#22c55e]" />
                  <span>{educationDetails.institution}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#87998b]" />
                  <span>{educationDetails.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4 text-[#87998b]" />
                  <span>{educationDetails.period}</span>
                </div>
              </div>

              <p className="pt-2 text-sm leading-relaxed text-[#b5c5b8] sm:text-base">
                {t('education.description')}
              </p>
            </div>

            {/* Right Column: Key Academic Focus Areas (5 cols) */}
            <div className="space-y-4 rounded-2xl border border-[#26382c] bg-[#18231b] p-5 sm:p-6 lg:col-span-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#b5c5b8]">
                <Award className="w-4 h-4 text-[#22c55e]" />
                <span>{lang === 'en' ? 'Grade Point Average' : 'Indeks Prestasi Kumulatif'}</span>
              </div>
              <p className="text-5xl font-bold tracking-[-0.05em] text-[#e5f3e8]">{educationDetails.gpa}</p>
              <p className="text-xs text-[#87998b]">
                {lang === 'en' ? 'GPA' : 'IPK'} · {educationDetails.period}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
