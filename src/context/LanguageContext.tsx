'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

export type Language = 'en' | 'id';

interface LanguageContextValue {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

// ── Translation dictionary ────────────────────────────────────────────────────
export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.academic': 'Academic',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.contactBtn': 'Contact',
    'nav.downloadCV': 'Download CV',

    // Hero
    'hero.greeting': "Hello, I'm",
    'hero.role': 'Full-Stack Developer',
    'hero.headline': 'I build custom websites that help your business grow',
    'hero.subheadline': 'I can help your business to grow fast online.',
    'hero.cta.project': 'Start a project',
    'hero.cta.cv': 'Download CV',
    'hero.badge.open': 'Open to work',

    // About
    'about.tag': 'About Me',
    'about.title': 'Passionate about building scalable digital solutions',
    'about.bio1': 'Full-Stack Developer with a background in Computer Science (Teknik Informatika) from Universitas Komputer Indonesia. Focused on modern web ecosystems, reliable API integrations, and intuitive digital experiences.',
    'about.bio2': 'My workflow emphasizes clean code, strict type-safety, maintainable component architecture, and continuous performance optimization using modern Next.js and React patterns.',
    'about.location': 'Indonesia',
    'about.status': 'Open for Full-Stack Opportunities',
    'about.education': 'Teknik Informatika, UNIKOM',

    // Projects
    'projects.tag': 'Portfolio',
    'projects.title': 'Selected Work',
    'projects.subtitle': 'A selection of real-world projects built with modern technologies.',
    'projects.viewDemo': 'Live Demo',
    'projects.viewCode': 'View Code',
    'projects.featured': 'Featured',

    // Approach
    'approach.tag': 'My Approach',
    'approach.title': 'How I Build Software',
    'approach.subtitle': 'The principles and practices that guide every project I work on.',

    // Education
    'education.tag': 'Education',
    'education.title': 'Academic Foundation',
    'education.degree': 'Bachelor of Computer Science (S.Kom) — S1 Teknik Informatika',
    'education.institution': 'Universitas Komputer Indonesia (UNIKOM)',
    'education.period': 'Bandung, Indonesia',
    'education.description': 'Informatics Engineering graduate from UNIKOM (2022–2026) with interests in Software Engineering and Data Science.',
    'education.focus': 'Focus Areas',

    // Contact
    'contact.tag': 'Get in Touch',
    'contact.title': "Let's Work Together",
    'contact.subtitle': "Have a project in mind? I'd love to hear about it. Send me a message and let's build something great.",
    'contact.email': 'Send Email',
    'contact.linkedin': 'Connect on LinkedIn',
    'contact.github': 'GitHub Profile',
    'contact.cta': 'Start a project',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with Next.js & Tailwind CSS',
    'footer.role': 'Full-Stack Developer',
  },
  id: {
    // Navbar
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.academic': 'Akademik',
    'nav.portfolio': 'Portofolio',
    'nav.contact': 'Kontak',
    'nav.contactBtn': 'Kontak',
    'nav.downloadCV': 'Unduh CV',

    // Hero
    'hero.greeting': 'Halo, Saya',
    'hero.role': 'Full-Stack Developer',
    'hero.headline': 'Saya membangun website kustom yang membantu bisnis Anda berkembang',
    'hero.subheadline': 'Saya dapat membantu bisnis Anda tumbuh pesat secara online.',
    'hero.cta.project': 'Mulai proyek',
    'hero.cta.cv': 'Unduh CV',
    'hero.badge.open': 'Terbuka untuk bekerja',

    // About
    'about.tag': 'Tentang Saya',
    'about.title': 'Bersemangat membangun solusi digital yang skalabel',
    'about.bio1': 'Full-Stack Developer dengan latar belakang Teknik Informatika dari Universitas Komputer Indonesia. Berfokus pada ekosistem web modern, integrasi API yang andal, dan pengalaman digital yang intuitif.',
    'about.bio2': 'Alur kerja saya menekankan kode bersih, keamanan tipe yang ketat, arsitektur komponen yang mudah dipelihara, dan optimasi performa berkelanjutan menggunakan pola Next.js dan React modern.',
    'about.location': 'Indonesia',
    'about.status': 'Terbuka untuk Peluang Full-Stack',
    'about.education': 'Teknik Informatika, UNIKOM',

    // Projects
    'projects.tag': 'Portofolio',
    'projects.title': 'Karya Pilihan',
    'projects.subtitle': 'Pilihan proyek nyata yang dibangun dengan teknologi modern.',
    'projects.viewDemo': 'Demo Langsung',
    'projects.viewCode': 'Lihat Kode',
    'projects.featured': 'Unggulan',

    // Approach
    'approach.tag': 'Pendekatan Saya',
    'approach.title': 'Cara Saya Membangun Perangkat Lunak',
    'approach.subtitle': 'Prinsip dan praktik yang memandu setiap proyek yang saya kerjakan.',

    // Education
    'education.tag': 'Pendidikan',
    'education.title': 'Fondasi Akademik',
    'education.degree': 'Sarjana Komputer (S.Kom) — S1 Teknik Informatika',
    'education.institution': 'Universitas Komputer Indonesia (UNIKOM)',
    'education.period': 'Bandung, Indonesia',
    'education.description': 'Lulusan S1 Teknik Informatika UNIKOM (2022–2026) dengan minat pada Software Engineering dan Data Science.',
    'education.focus': 'Area Fokus',

    // Contact
    'contact.tag': 'Hubungi Saya',
    'contact.title': 'Mari Bekerja Sama',
    'contact.subtitle': 'Punya proyek? Saya ingin mendengarnya. Kirimkan pesan dan mari bangun sesuatu yang luar biasa bersama.',
    'contact.email': 'Kirim Email',
    'contact.linkedin': 'Terhubung di LinkedIn',
    'contact.github': 'Profil GitHub',
    'contact.cta': 'Mulai proyek',

    // Footer
    'footer.rights': 'Hak cipta dilindungi.',
    'footer.built': 'Dibangun dengan Next.js & Tailwind CSS',
    'footer.role': 'Full-Stack Developer',
  },
};

// ── Provider ──────────────────────────────────────────────────────────────────
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'id' : 'en'));
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[lang][key] ?? translations['en'][key] ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ── Hook ──────────────────────────────────────────────────────────────────────
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
