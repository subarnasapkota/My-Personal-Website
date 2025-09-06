
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  const isClickable = !!onClick;
  return (
    <div
      onClick={onClick}
      className={`bg-slate-800 border border-slate-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
        isClickable ? 'cursor-pointer hover:border-blue-500 hover:scale-[1.02] hover:shadow-blue-500/10' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
