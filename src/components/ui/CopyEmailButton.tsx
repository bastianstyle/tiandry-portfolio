'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyEmailButtonProps {
  email: string;
}

export const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-full border border-[#26382c] bg-[#121a15] px-3 py-1.5 text-xs font-medium text-[#b5c5b8] transition-colors hover:border-[#22c55e]/40 hover:text-[#22c55e] focus-visible:outline-2 focus-visible:outline-[#22c55e]"
      aria-label="Copy email address"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-[#22c55e]" />
          <span className="text-[#22c55e]">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>Copy Email</span>
        </>
      )}
    </button>
  );
};
