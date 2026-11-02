'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { profileData } from '@/data/profile';

const skillGroups = [
  {
    title: { en: 'Programming & Frontend', id: 'Pemrograman & Frontend' },
    skills: ['Python', 'PHP', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS', 'React.js', 'Next.js', 'Tailwind CSS', 'Shadcn UI'],
  },
  {
    title: { en: 'Backend & Databases', id: 'Backend & Basis Data' },
    skills: ['Laravel 11', 'FastAPI', 'REST API', 'MySQL', 'PostgreSQL', 'MongoDB', 'Cloud Firestore', 'Firebase Authentication', 'Firebase Storage'],
  },
  {
    title: { en: 'Data Science & Tools', id: 'Data Science & Tools' },
    skills: ['OpenCV', 'scikit-learn', 'scikit-image', 'SVM', 'GridSearchCV', 'Git', 'GitHub', 'Microsoft Excel', 'Leaflet'],
  },
];

const spokenLanguages = ['Indonesia (Native)', 'English (Intermediate)'];
const SkillPills = ({ items }: { items: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((item) => (
      <li
        key={item}
        className="rounded-full border border-[#26382c] bg-[#18231b] px-3 py-1.5 text-xs leading-5 text-[#b5c5b8] transition-colors duration-200 hover:border-[#1d472f] hover:bg-[#153c28] hover:text-[#e5f3e8]"
      >
        {item}
      </li>
    ))}
  </ul>
);

export const About: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="about" className="scroll-mt-16 border-t border-[#26382c] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#22c55e]">
            {lang === 'en' ? 'About Me' : 'Tentang Saya'}
          </p>
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-12">
            <h2 className="max-w-xl text-3xl font-bold leading-[1.12] tracking-[-0.04em] text-[#e5f3e8] sm:text-4xl">
              {lang === 'en'
                ? 'I build web apps and systems that make work easier'
                : 'Saya membangun aplikasi web dan sistem yang mempermudah pekerjaan'}
            </h2>
            <div className="space-y-4 text-sm leading-[1.8] text-[#b5c5b8] sm:text-base">
              <p>
                {lang === 'en'
                  ? `I am an Informatics Engineering graduate from ${profileData.education.university} with interests in Software Engineering and Data Science.`
                  : `Saya lulusan Teknik Informatika dari ${profileData.education.university} dengan minat pada Software Engineering dan Data Science.`}
              </p>
              <p>
                {lang === 'en'
                  ? 'My experience includes full-stack web applications, multi-branch inventory systems, and machine-learning projects. I work with React, TypeScript, Next.js, Python, and databases, and value testing and teamwork.'
                  : 'Pengalaman saya mencakup aplikasi web full-stack, sistem inventori multi-cabang, dan proyek machine learning. Saya menggunakan React, TypeScript, Next.js, Python, serta basis data, dan terbiasa melakukan pengujian serta bekerja dalam tim.'}
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h3 className="text-xl font-bold tracking-tight text-[#e5f3e8]">
              {lang === 'en' ? 'Skills' : 'Keahlian'}
            </h3>
            <p className="mt-2 text-sm text-[#b5c5b8]">
              {lang === 'en'
                ? 'Technologies and tools from my recent projects.'
                : 'Teknologi dan tools yang saya gunakan dalam proyek.'}
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3 lg:gap-5">
            {skillGroups.map((group, index) => (
              <div
                key={group.title.en}
                data-reveal
                data-reveal-delay={index % 3}
                className="rounded-2xl border border-[#26382c] bg-[#121a15] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#4ade80] hover:shadow-[0_16px_34px_rgba(0,0,0,0.09)] sm:p-6"
              >
                <h4 className="mb-4 border-b border-[#26382c] pb-3 text-sm font-bold text-[#e5f3e8]">
                  {group.title[lang]}
                </h4>
                <SkillPills items={group.skills} />
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 border-t border-[#26382c] pt-4 text-xs leading-relaxed text-[#b5c5b8] sm:flex-row sm:items-start sm:gap-8">
            <p>
              <span className="font-bold text-[#e5f3e8]">{lang === 'en' ? 'Languages: ' : 'Bahasa: '}</span>
              {spokenLanguages.join(' · ')}
            </p>
            <p>
              <span className="font-bold text-[#e5f3e8]">{lang === 'en' ? 'Strengths: ' : 'Soft Skills: '}</span>
              {lang === 'en'
                ? 'Problem solving · Analytical thinking · Teamwork · Adaptability · Communication'
                : 'Pemecahan masalah · Berpikir analitis · Kerja tim · Adaptabilitas · Komunikasi'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
