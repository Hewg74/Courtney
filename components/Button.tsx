import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {

  const baseStyles = "inline-flex items-center justify-center transition-all duration-500 font-sans tracking-wide rounded-full disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-clay-500 focus:ring-offset-2 relative overflow-hidden group";

  const variants = {
    // Primary: Deep charcoal, rich tactile feel.
    primary: "bg-sand-900 text-sand-50 hover:bg-clay-700 hover:shadow-premium hover:-translate-y-0.5 active:scale-[0.98] active:shadow-soft active:translate-y-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]",
    // Secondary: Soft clay wash with glassmorphic touch.
    secondary: "bg-clay-100/80 backdrop-blur-sm text-clay-900 hover:bg-clay-200 hover:shadow-medium hover:-translate-y-0.5 active:scale-[0.98] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] border border-white/50",
    // Outline: Delicate line with subtle background fill on hover.
    outline: "border border-sand-300 text-sand-900 hover:border-sand-500 hover:bg-sand-100/50 hover:shadow-soft hover:-translate-y-0.5 active:scale-[0.98]",
    // Text only: Subtle underline interaction
    text: "bg-transparent text-sand-700 hover:text-sand-900 underline decoration-sand-300 decoration-1 underline-offset-8 hover:underline-offset-4 hover:decoration-clay-400 transition-all duration-300"
  };

  const sizes = {
    sm: "text-xs px-5 py-2 uppercase tracking-widest font-semibold",
    md: "text-sm px-7 py-3.5 font-medium",
    lg: "text-base px-10 py-4.5 font-medium"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Subtle shine effect on hover for primary/secondary buttons */}
      {(variant === 'primary' || variant === 'secondary') && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 pointer-events-none" />
      )}
    </button>
  );
};
