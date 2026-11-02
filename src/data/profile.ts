import { Profile, EducationItem, ApproachPillar } from '@/types/portfolio';

export const profileData: Profile = {
  name: 'Tiandry Simatupang',
  brandName: 'TS',
  greeting: 'Hello,',
  role: 'Full-Stack Developer',
  heroHeadline: 'I build custom websites that help your business grow',
  heroSubheadline: 'I can help your business to grow fast online.',
  tagline: 'Informatics Engineering graduate interested in Software Engineering and Data Science.',
  shortBio: 'Full-stack developer and Informatics Engineering graduate with experience in web applications, multi-branch inventory, and machine learning.',
  fullBio: [
    'Informatics Engineering graduate from Universitas Komputer Indonesia (UNIKOM) with interests in Software Engineering and Data Science.',
    'Experienced in full-stack web application development, multi-branch inventory systems, and machine-learning projects. Skilled with React, TypeScript, Next.js, Python, and databases; accustomed to testing systems and collaborating with teams.',
  ],
  location: 'Indonesia',
  status: 'Open for Full-Stack Opportunities',
  education: {
    major: 'Teknik Informatika',
    university: 'Universitas Komputer Indonesia',
  },
  socials: {
    github: 'https://github.com/bastianstyle',
    linkedin: 'https://www.linkedin.com/in/tiandrysimatupang/',
    email: 'tiandristg899@gmail.com',
    cvUrl: '/CV_TiandrySimatupang.pdf',
  },
};

export const approachPillars: ApproachPillar[] = [
  {
    number: '01',
    title: 'Component-Driven & Strict Type Safety',
    description: 'Decomposing complex user interfaces into predictable, modular units bound by strict TypeScript contracts. Catching regressions during compilation ensures long-term codebase resilience.',
    highlights: ['Strict TypeScript interfaces', 'Reusable component design system', 'Zero unvalidated prop mutations'],
  },
  {
    number: '02',
    title: 'Performance-First & Core Web Vitals',
    description: 'Employing Server Components by default to ship minimal JavaScript bundles to the browser. Prioritizing instant load times, responsive image optimization, and zero layout shift.',
    highlights: ['Next.js App Router RSC default', 'Optimized responsive images with WebP', 'Zero layout shifts and fast LCP'],
  },
  {
    number: '03',
    title: 'Clean Architecture & Data Integrity',
    description: 'Enforcing a clean separation between presentation UI, server mutations, and database schemas. Designing normalized relational tables with proper indexing and foreign key constraints.',
    highlights: ['Separation of concerns', 'Predictable Server Actions & API routes', 'Relational data modeling (PostgreSQL/MySQL)'],
  },
  {
    number: '04',
    title: 'User-Centric & Accessible Craftsmanship',
    description: 'Building web applications that respect real users across all devices. Ensuring semantic HTML5 tags, full keyboard navigability, clear focus rings, and high-contrast editorial aesthetics.',
    highlights: ['Semantic HTML5 structure', 'Keyboard accessibility & focus visible', 'Responsive layout from 360px to 1440px+'],
  },
];

export const educationDetails: EducationItem = {
  degree: 'S1 Teknik Informatika',
  institution: 'Universitas Komputer Indonesia (UNIKOM)',
  period: '2022–2026',
  location: 'Bandung, Jawa Barat',
  gpa: '3.21',
  description: 'Informatics Engineering graduate from UNIKOM with interests in Software Engineering and Data Science, supported by practical full-stack and machine-learning projects.',
};

export const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Academic', href: '#education' },
  { label: 'Portofolio', href: '#projects' },
];
