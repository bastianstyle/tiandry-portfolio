import React from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-8 md:mb-10 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'} ${className}`}>
      <div className={`inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#22c55e] ${isCenter ? 'mx-auto' : ''}`}>
        <span className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_14px_rgba(34,197,94,0.3)]" />
        <span>{label}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.04em] text-[#e5f3e8] leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-[#b5c5b8] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
