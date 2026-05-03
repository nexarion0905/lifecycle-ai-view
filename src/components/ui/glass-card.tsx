import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl shadow-xl transition-all ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;