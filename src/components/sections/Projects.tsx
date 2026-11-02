'use client';

import React from 'react';
import { projectsData } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';

export const Projects: React.FC = () => {
  const { lang } = useLanguage();
  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const standardProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative scroll-mt-20 border-t border-[#26382c] py-12 md:py-16 2xl:py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <SectionHeading
          label={lang === 'en' ? 'Portfolio' : 'Portofolio'}
          title={lang === 'en' ? 'Selected Work' : 'Proyek Pilihan'}
          description={lang === 'en'
            ? 'Selected academic and professional work from my resume.'
            : 'Pilihan proyek akademik dan profesional yang tercantum di CV saya.'
          }
        />

        {/* Featured thesis project */}
        {featuredProject && (
          <div className="w-full mb-6">
            <ProjectCard project={featuredProject} />
          </div>
        )}

        {/* Other CV projects */}
        <div className="grid grid-cols-1 gap-6 items-stretch">
          {standardProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Footnote Bar on Project Methodology */}
        <div data-reveal className="mt-7 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#26382c] bg-[#121a15] p-5 text-center shadow-[0_8px_24px_rgba(0,0,0,0.04)] sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-semibold text-[#e5f3e8]">
              {lang === 'en' ? 'Want to learn more about these projects?' : 'Ingin tahu lebih lanjut tentang proyek-proyek ini?'}
            </p>
            <p className="mt-0.5 text-xs text-[#b5c5b8]">
              {lang === 'en'
                ? 'Get in touch to discuss my project experience and technical background.'
                : 'Hubungi saya untuk membahas pengalaman proyek dan latar belakang teknis.'
              }
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-full bg-[#22c55e] px-5 py-2.5 text-xs font-bold text-[#e5f3e8] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#16a34a]"
          >
            {lang === 'en' ? 'Start a project →' : 'Mulai proyek →'}
          </a>
        </div>
      </div>
    </section>
  );
};
