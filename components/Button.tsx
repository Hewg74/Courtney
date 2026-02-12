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
  
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-sans tracking-wide rounded-full disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Primary: Deep sand/charcoal. Tactile but not harsh.
    primary: "bg-sand-800 text-sand-50 hover:bg-clay-600 hover:shadow-medium active:scale-95",
    // Secondary: Soft clay wash.
    secondary: "bg-clay-100 text-clay-800 hover:bg-clay-200",
    // Outline: Delicate line.
    outline: "border border-sand-300 text-sand-800 hover:border-sand-400 hover:bg-sand-100/50 bg-transparent",
    // Text only
    text: "bg-transparent text-sand-600 hover:text-sand-900 underline decoration-sand-300 underline-offset-4"
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
