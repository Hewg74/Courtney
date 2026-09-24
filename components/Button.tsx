import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'clay' | 'outline' | 'light' | 'outline-light' | 'text' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  /** Trailing arrow that nudges forward on hover. */
  arrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  className = '',
  type = 'button',
  ...props
}) => {
  const base =
    'group inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-medium tracking-[0.01em] ' +
    'transition-[background-color,color,border-color,transform,box-shadow] duration-feedback ease-calm ' +
    'active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ' +
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay';

  const variants: Record<string, string> = {
    primary: 'bg-ink text-paper hover:bg-forest',
    clay: 'bg-clay-deep text-paper hover:bg-ink',
    secondary: 'bg-clay-wash text-ink hover:bg-clay-soft',
    outline: 'border border-line-strong text-ink hover:border-ink hover:bg-paper-2',
    light: 'bg-paper text-forest hover:bg-clay-soft',
    'outline-light': 'border border-mist/30 text-mist hover:border-mist hover:bg-mist/5',
    text: 'text-ink hover:text-clay-deep !px-0 !py-1 rounded-none',
  };

  const sizes: Record<string, string> = {
    sm: 'text-sm px-5 py-2.5 min-h-[40px]',
    md: 'text-[0.9375rem] px-7 py-3.5 min-h-[48px]',
    lg: 'text-base px-8 py-4 min-h-[56px]',
  };

  return (
    <button type={type} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          size={size === 'sm' ? 15 : 17}
          strokeWidth={1.75}
          aria-hidden="true"
          className="transition-transform duration-feedback ease-calm group-hover:translate-x-1"
        />
      )}
    </button>
  );
};
