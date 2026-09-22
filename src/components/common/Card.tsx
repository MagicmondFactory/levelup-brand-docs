import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  border?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className = '',
  hover = true,
  border = true,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-[#111622] rounded-xl p-5 sm:p-6 transition-all duration-200 ${
        border ? 'border border-[#242F45]' : ''
      } ${
        hover ? 'hover:border-[#384A6E] hover:shadow-lg hover:shadow-black/40' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
