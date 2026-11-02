import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Database, ExternalLink, FileCheck2, ScanSearch, UsersRound } from 'lucide-react';
import { Project } from '@/types/portfolio';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { lang } = useLanguage();
  const content = project.content[lang];
  const VisualIcon = project.visual === 'inventory'
    ? Database
    : project.visual === 'classification'
      ? ScanSearch
      : project.visual === 'hr-management'
        ? UsersRound
        : FileCheck2;
  const projectImage = project.visual === 'inventory'
    ? {
        src: '/images/inventory-dashboard.png',
        alt: 'Dashboard inventori Toko Snack Nyommy yang memantau stok Bandung dan Pontianak',
      }
    : project.visual === 'classification'
      ? {
          src: '/images/skin-lesion-segmentation.png',
          alt: 'Tahapan segmentasi lesi kulit: citra asli, mask lesi, dan hasil segmentasi',
        }
      : project.visual === 'hr-management'
        ? {
            src: '/images/hr-management-dashboard.png',
            alt: 'Dashboard NexaPeople HR Management System dengan ringkasan karyawan, departemen, kehadiran, dan aktivitas',
          }
        : project.visual === 'wood-sales'
          ? {
              src: '/images/sumber-rezeki-wood-sales-dashboard.png',
              alt: 'Dashboard Sistem Manajemen Penjualan Kayu Sumber Rezeki dengan ringkasan penjualan, stok produk, dan transaksi terbaru',
            }
        : null;

  return (
    <article data-reveal className="group grid grid-cols-1 gap-5 rounded-3xl border border-[#26382c] bg-[#121a15] p-4 shadow-[0_18px_48px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#4ade80] hover:shadow-[0_24px_58px_rgba(0,0,0,0.1)] sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-8 sm:p-5 lg:p-6">
      <div className={`relative flex aspect-[16/10] flex-col justify-between overflow-hidden rounded-2xl border border-[#26382c] ${
        projectImage
          ? project.visual === 'inventory'
            ? 'bg-[#090d0b]'
            : project.visual === 'classification'
              ? 'bg-[#090d0b]'
              : project.visual === 'hr-management' ? 'bg-[#0b100e]' : 'bg-[#121a15]'
          : 'bg-[radial-gradient(ellipse_at_80%_10%,rgba(34,197,94,0.12),transparent_58%),linear-gradient(145deg,#18231b,#0d130f)] p-5 sm:p-6'
      }`}>
        {projectImage ? (
          <Image
            src={projectImage.src}
            alt={projectImage.alt}
            fill
            sizes="(max-width: 640px) 100vw, 45vw"
            className={`transition-transform duration-500 group-hover:scale-[1.025] ${
              project.visual === 'inventory' ? 'object-cover' : 'object-contain'
            }`}
          />
        ) : (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#22c55e]">{content.category}</p>
                  <p className="mt-2 text-sm text-[#b5c5b8]">{content.subtitle}</p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#153c28] text-[#22c55e]">
                <VisualIcon className="h-5 w-5" />
              </span>
            </div>

            <ProjectVisual project={project} lang={lang} />

            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#87998b]">
              {project.statusLabel}
            </p>
          </>
        )}
      </div>

      <div className="flex min-w-0 flex-col justify-center py-1 sm:py-2">
        <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold text-[#22c55e]">
          <span className="uppercase tracking-wide">{content.category}</span>
          {project.featured && <span className="rounded-full bg-[#153c28] px-2.5 py-1 font-medium text-[#22c55e]">{lang === 'en' ? 'Featured' : 'Proyek Utama'}</span>}
        </div>
        <h3 className="text-xl font-bold tracking-tight text-[#e5f3e8] sm:text-2xl">{content.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#b5c5b8]">{content.description}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-full border border-[#26382c] bg-[#18231b] px-2.5 py-1 text-[11px] text-[#b5c5b8]">
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px]">
          <details className="basis-full text-[#b5c5b8] marker:text-[#22c55e]">
            <summary className="w-fit cursor-pointer font-medium text-[#e5f3e8] hover:text-[#22c55e]">{lang === 'en' ? 'Project details' : 'Detail proyek'}</summary>
            <div className="mt-2 grid gap-2 border-l border-[#22c55e]/40 pl-3 leading-relaxed">
              <p><span className="font-semibold text-[#e5f3e8]">{lang === 'en' ? 'Problem:' : 'Tantangan:'}</span> {content.problem}</p>
              <p><span className="font-semibold text-[#e5f3e8]">{lang === 'en' ? 'Approach:' : 'Pendekatan:'}</span> {content.solution}</p>
              <ul className="list-disc space-y-1 pl-4">
                {content.keyFeatures.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </div>
          </details>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#22c55e] hover:text-[#e5f3e8]">
              Live Project <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#b5c5b8] hover:text-[#22c55e]">
              GitHub <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {!project.demoUrl && !project.githubUrl && (
            <a href="#contact" className="inline-flex items-center gap-1 text-[#22c55e] hover:text-[#e5f3e8]">
              {lang === 'en' ? 'Discuss project' : 'Diskusikan proyek'} <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

function ProjectVisual({ project, lang }: ProjectCardProps & { lang: 'en' | 'id' }) {
  if (project.visual === 'inventory') {
    return (
      <div className="grid grid-cols-2 gap-2 text-xs">
        {['Bandung', 'Pontianak'].map((branch) => (
          <div key={branch} className="rounded-xl border border-[#26382c] bg-[#121a15]/80 p-3">
          <p className="text-[10px] uppercase text-[#87998b]">{branch}</p>
          <p className="mt-2 text-base font-semibold text-[#e5f3e8]">{lang === 'en' ? 'Live sync' : 'Sinkron'}</p>
          <div className="mt-3 h-1 rounded-full bg-[#26382c]">
              <div className="h-full w-2/3 rounded-full bg-[#22c55e]" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (project.visual === 'classification') {
    return (
      <div className="grid grid-cols-3 gap-2 text-center">
        {(lang === 'en'
          ? [['9,605', 'Train'], ['1,000', 'Test'], ['83%', 'Accuracy']]
          : [['9.605', 'Latih'], ['1.000', 'Uji'], ['83%', 'Akurasi']]
        ).map(([value, label]) => (
          <div key={label} className="rounded-xl border border-[#26382c] bg-[#121a15]/80 px-2 py-3">
            <p className="text-lg font-bold text-[#e5f3e8]">{value}</p>
            <p className="mt-1 text-[9px] uppercase tracking-wide text-[#87998b]">{label}</p>
          </div>
        ))}
      </div>
    );
  }

  if (project.visual === 'hr-management') {
    return (
      <div className="rounded-xl border border-[#26382c] bg-[#121a15]/80 p-4">
        <p className="text-[10px] uppercase tracking-wide text-[#87998b]">{lang === 'en' ? 'HR management' : 'Manajemen HR'}</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[lang === 'en' ? 'Employee data' : 'Data karyawan', lang === 'en' ? 'HR administration' : 'Administrasi HR'].map((label) => (
            <div key={label} className="rounded-lg border border-[#26382c] bg-[#18231b] p-3">
              <span className="block h-1.5 w-10 rounded-full bg-[#22c55e]" />
              <p className="mt-2 text-[10px] font-medium text-[#b5c5b8]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (project.visual === 'wood-sales') {
    return (
      <div className="rounded-xl border border-[#26382c] bg-[#121a15]/80 p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-wide text-[#87998b]">{lang === 'en' ? 'E-invoice verification' : 'Verifikasi e-invoice'}</p>
            <p className="mt-2 text-sm font-semibold text-[#e5f3e8]">RSA</p>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#153c28] text-[#22c55e]">
            <FileCheck2 className="h-5 w-5" />
          </span>
        </div>
        <p className="mt-3 text-xs text-[#b5c5b8]">
          {lang === 'en' ? 'Integrity and authenticity verified' : 'Integritas dan keaslian terverifikasi'}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#26382c] bg-[#121a15]/80 p-3">
      <div className="flex items-end gap-2">
        {[42, 68, 51, 82, 61].map((height, index) => (
          <div key={height + index} className="flex-1 rounded-t-sm bg-gradient-to-t from-[#22c55e] to-[#4ade80]" style={{ height: `${height}px` }} />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[9px] text-[#87998b]">
        {['2016', '2017', '2018', '2019', '2020'].map((year) => <span key={year}>{year}</span>)}
      </div>
    </div>
  );
}
