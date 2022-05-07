import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string;
  size?: keyof typeof sizes;
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({ children, className = '', size = 'default', ...props }) => {
  return (
    <button
      className={`
        ${sizes[size]}
        ${className}
        bg-primary
        hover:bg-secondary
        hover:text-primary-darker
        rounded
        text-white
    `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
