import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'surface' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'surface',
  size = 'md',
  className = '',
  dot = false,
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1 gap-1.5',
    md: 'text-xs sm:text-sm px-3.5 py-1.5 gap-2',
  };

  const variantClasses = {
    accent: 'bg-[#153c28] text-[#22c55e] border border-[#285b3c]',
    surface: 'bg-[#121a15] text-[#e5f3e8] border border-[#26382c] hover:border-[#22c55e]/40 hover:text-[#22c55e]',
    outline: 'bg-transparent text-[#b5c5b8] border border-[#26382c] hover:text-[#e5f3e8] hover:border-[#4ade80]',
  };

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-md transition-all duration-200 select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === 'accent' ? 'bg-[#22c55e]' : 'bg-[#22c55e]/80'
          }`}
        />
      )}
      <span>{children}</span>
    </span>
  );
};
