import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'cyan' | 'neutral' | 'success' | 'danger' | 'warning';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  variant = 'primary',
  size = 'sm',
  className = '',
}: BadgeProps) {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs tracking-wider",
    md: "px-2.5 py-1 text-xs tracking-widest",
  };

  const variantClasses = {
    primary: "bg-[#00205B]/80 text-sky-200 border border-sky-500/30",
    cyan: "bg-[#00C2FF]/15 text-[#00C2FF] border border-[#00C2FF]/30",
    neutral: "bg-[#151C2C] text-slate-300 border border-[#242F45]",
    success: "bg-emerald-950/60 text-emerald-300 border border-emerald-500/30",
    danger: "bg-rose-950/60 text-rose-300 border border-rose-500/30",
    warning: "bg-amber-950/60 text-amber-300 border border-amber-500/30",
  };

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-md uppercase font-mono ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
