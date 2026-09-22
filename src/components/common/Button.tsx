import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#080B10]";
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-5 py-2.5 text-base gap-2.5",
  };

  const variantClasses = {
    primary: "bg-[#00205B] text-white hover:bg-[#1A3B7A] border border-[#242F45] focus:ring-blue-500",
    secondary: "bg-[#111622] text-slate-200 hover:bg-[#151C2C] border border-[#242F45] hover:border-slate-600 focus:ring-slate-500",
    cyan: "bg-[#00C2FF] text-[#001438] font-semibold hover:bg-[#33CEFF] shadow-sm hover:shadow-[#00C2FF]/20 focus:ring-cyan-400",
    outline: "bg-transparent text-slate-300 border border-[#242F45] hover:border-sky-400 hover:text-white focus:ring-sky-400",
    ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-[#111622] focus:ring-slate-400",
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
