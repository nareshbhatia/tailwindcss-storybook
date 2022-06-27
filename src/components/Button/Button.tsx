import * as React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined';
  color?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const baseStyles = 'font-medium rounded';

const sizeStyles = {
  small: 'text-xs leading-4 px-2.5 py-1.5',
  medium: 'text-sm leading-5 px-3 py-2',
  large: 'text-sm leading-5 px-4 py-2',
};

const variantStyles = {
  contained: 'border border-transparent',
  outlined: 'bg-transparent border',
};

const colorStyles = {
  contained: {
    default: 'text-black bg-gray-200 hover:bg-gray-400',
    primary: 'text-white bg-primary-main hover:bg-primary-dark',
    secondary: 'text-black bg-secondary-main hover:bg-secondary-dark',
  },
  outlined: {
    default: 'text-gray-500 border-gray-500 hover:bg-gray-200',
    primary: 'text-primary-main border-primary-main hover:bg-primary-50',
    secondary:
      'text-secondary-dark border-secondary-dark hover:bg-secondary-light',
  },
};

const disabledSyles = 'cursor-default pointer-events-none';
const disabledVariantSyles = {
  contained: 'text-gray-300 bg-gray-100',
  outlined: 'text-gray-300 border-gray-300',
};

export function Button({
  className,
  variant = 'contained',
  color = 'default',
  size = 'medium',
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  const buttonClass = disabled
    ? clsx(
        className,
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabledSyles,
        disabledVariantSyles[variant]
      )
    : clsx(
        className,
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        colorStyles[variant][color]
      );

  return (
    <button className={buttonClass} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
