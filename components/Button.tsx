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
  
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-sans tracking-wide rounded-full disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-clay-500 focus:ring-offset-2";
  
  const variants = {
    // Primary: Deep sand/charcoal. Tactile but not harsh.
    primary: "bg-sand-800 text-sand-50 hover:bg-clay-600 hover:shadow-medium active:scale-95 active:shadow-soft",
    // Secondary: Soft clay wash.
    secondary: "bg-clay-100 text-clay-800 hover:bg-clay-200 active:scale-[0.98]",
    // Outline: Delicate line.
    outline: "border-2 border-sand-300 text-sand-800 hover:border-sand-400 hover:bg-sand-100/50 bg-transparent active:scale-[0.98]",
    // Text only
    text: "bg-transparent text-sand-600 hover:text-sand-900 underline decoration-sand-300 underline-offset-4 hover:underline-offset-2 transition-all"
  };

  const sizes = {
    sm: "text-xs px-5 py-2 uppercase tracking-wider font-medium",
    md: "text-sm px-7 py-3 font-medium",
    lg: "text-base px-10 py-4 font-medium"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
