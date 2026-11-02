'use client';

import React from 'react';
import { Mail, ArrowUpRight, FileDown } from 'lucide-react';
import { profileData } from '@/data/profile';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { CopyEmailButton } from '@/components/ui/CopyEmailButton';
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

export const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const mailtoUrl = `mailto:${profileData.socials.email}?subject=Project%20Inquiry%20-%20Tiandry%20Simatupang`;

  return (
    <section id="contact" className="relative scroll-mt-20 border-t border-[#26382c] py-12 md:py-16 2xl:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Heading */}
        <SectionHeading
          label={lang === 'en' ? 'Get in Touch' : 'Hubungi Saya'}
          title={lang === 'en' ? "Let's build something exceptional together." : 'Mari membangun sesuatu yang luar biasa bersama.'}
          description={lang === 'en'
            ? 'Interested in collaborating on a web application, discussing engineering roles, or starting a new project? Feel free to reach out directly.'
            : 'Tertarik berkolaborasi dalam aplikasi web, mendiskusikan peran rekayasa, atau memulai proyek baru? Jangan ragu untuk menghubungi langsung.'
          }
        />

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Direct Mail Card (7 cols) */}
          <div data-reveal className="flex flex-col justify-between rounded-3xl border border-[#26382c] bg-[#121a15] p-5 shadow-[0_18px_48px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(0,0,0,0.1)] sm:p-6 lg:col-span-7 lg:p-8">
            <div>
              {/* Availability Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#26382c] bg-[#18231b] px-3 py-1">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]" />
                <span className="text-xs font-semibold text-[#22c55e]">
                  {profileData.status}
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-bold tracking-[-0.035em] text-[#e5f3e8] sm:text-3xl">
                {lang === 'en' ? 'Direct Email Communication' : 'Komunikasi Email Langsung'}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#b5c5b8] sm:text-base">
                {lang === 'en'
                  ? 'Send a direct message straight to my inbox. I usually reply within 24 hours regarding software development and web project inquiries.'
                  : 'Kirim pesan langsung ke kotak masuk saya. Saya biasanya membalas dalam 24 jam mengenai pertanyaan pengembangan perangkat lunak dan proyek web.'
                }
              </p>

              {/* Email Box with Mailto & Copy */}
              <div className="mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#26382c] bg-[#18231b] p-4 sm:flex-row sm:items-center sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-[#26382c] bg-[#121a15] p-2.5 text-[#22c55e]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#87998b]">Primary Contact</p>
                    <a
                      href={mailtoUrl}
                      className="text-sm font-semibold text-[#e5f3e8] transition-colors hover:text-[#22c55e] sm:text-base"
                    >
                      {profileData.socials.email}
                    </a>
                  </div>
                </div>

                <CopyEmailButton email={profileData.socials.email} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 border-t border-[#26382c] pt-6">
              <Button
                variant="primary"
                size="md"
                href={mailtoUrl}
                icon={<Mail className="w-4 h-4" />}
              >
                {lang === 'en' ? 'Send Email Message' : 'Kirim Pesan Email'}
              </Button>
              <Button
                variant="outline"
                size="md"
                href={profileData.socials.cvUrl}
                download="Tiandry_Simatupang_CV.pdf"
                icon={<FileDown className="w-4 h-4" />}
              >
                {lang === 'en' ? 'Download Resume (CV)' : 'Unduh Resume (CV)'}
              </Button>
            </div>
          </div>

          {/* Social Channels & Professional Profiles (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div data-reveal data-reveal-delay="1" className="flex flex-1 flex-col justify-between rounded-3xl border border-[#26382c] bg-[#121a15] p-5 shadow-[0_18px_48px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(0,0,0,0.1)] sm:p-6">
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#22c55e]">
                  {'// CONNECT DIRECTLY'}
                </span>
                <h4 className="mb-2 text-lg font-bold tracking-tight text-[#e5f3e8]">
                  {lang === 'en' ? 'Professional Profiles' : 'Profil Profesional'}
                </h4>
                <p className="mb-6 text-xs leading-relaxed text-[#b5c5b8]">
                  {lang === 'en'
                    ? 'Check out repositories, code commits, and professional experience through verified channels.'
                    : 'Lihat repositori, commit kode, dan pengalaman profesional melalui saluran yang terverifikasi.'
                  }
                </p>

                {/* Links List */}
                <div className="space-y-3">
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-[#26382c] bg-[#18231b] p-3 transition-all hover:border-[#22c55e]/40 hover:bg-[#121a15]"
                    aria-label="GitHub Profile"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg border border-[#26382c] bg-[#121a15] p-2 text-[#e5f3e8] transition-colors group-hover:text-[#22c55e]">
                        <GithubIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#e5f3e8]">GitHub</p>
                        <p className="text-[11px] text-[#87998b]">github.com/bastianstyle</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[#87998b] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#22c55e]" />
                  </a>

                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-[#26382c] bg-[#18231b] p-3 transition-all hover:border-[#22c55e]/40 hover:bg-[#121a15]"
                    aria-label="LinkedIn Profile"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg border border-[#26382c] bg-[#121a15] p-2 text-[#e5f3e8] transition-colors group-hover:text-[#22c55e]">
                        <LinkedinIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#e5f3e8]">LinkedIn</p>
                        <p className="text-[11px] text-[#87998b]">linkedin.com/in/tiandrysimatupang</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[#87998b] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#22c55e]" />
                  </a>
                </div>
              </div>

              {/* Location Badge at Bottom */}
              <div className="mt-6 flex items-center justify-between border-t border-[#26382c] pt-4 text-xs text-[#87998b]">
                <span>Timezone: UTC+7 (WIB)</span>
                <span className="font-semibold text-[#22c55e]">Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
