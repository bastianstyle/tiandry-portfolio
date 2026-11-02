import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ScrollEffects } from '@/components/ui/ScrollEffects';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0b130e',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tiandry.dev'),
  alternates: {
    canonical: '/',
  },
  title: 'Tiandry Simatupang ',
  description: 'Portfolio of Tiandry Simatupang, a Full-Stack Developer specializing in modern Next.js ecosystems, scalable API architecture, and editorial minimalist interfaces.',
  keywords: ['Tiandry Simatupang', 'Full-Stack Developer', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Portfolio'],
  authors: [{ name: 'Tiandry Simatupang' }],
  creator: 'Tiandry Simatupang',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tiandry.dev',
    title: 'Tiandry Simatupang — Full-Stack Developer',
    description: 'Engineering robust, scalable web applications with clean architecture and modern editorial precision.',
    siteName: 'TIANDRY.DEV',
    images: [
      {
        url: '/images/profile.png',
        width: 1456,
        height: 816,
        alt: 'Tiandry Simatupang — Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiandry Simatupang — Full-Stack Developer',
    description: 'Engineering robust, scalable web applications with clean architecture and modern editorial precision.',
    images: ['/images/profile.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-[#0b130e] text-[#e5f3e8] font-sans antialiased selection:bg-[#22c55e] selection:text-[#080c09]">
        <LanguageProvider>
          <ScrollEffects />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
