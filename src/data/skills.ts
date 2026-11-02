import { SkillCategory } from '@/types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    categoryKey: 'LANGUAGES',
    description: 'Programming languages listed in the resume.',
    skills: [
      'Python',
      'PHP',
      'JavaScript',
      'TypeScript',
      'SQL',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    categoryKey: 'FRAMEWORKS',
    description: 'Frameworks and libraries used across web and mobile projects.',
    skills: [
      'Laravel 11',
      'Next.js',
      'React',
      'Tailwind CSS',
      'FastAPI',
      'Leaflet',
    ],
  },
  {
    title: 'Databases & Tools',
    categoryKey: 'DATA & TOOLS',
    description: 'Databases and practical tools listed in the resume.',
    skills: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Cloud Firestore',
      'Git',
      'GitHub',
      'Microsoft Excel',
    ],
  },
  {
    title: 'Spoken Languages',
    categoryKey: 'LANGUAGES',
    description: 'Spoken language proficiency listed in the resume.',
    skills: [
      'Indonesia (Native)',
      'Inggris (Pasif–Menengah)',
    ],
  },
];
