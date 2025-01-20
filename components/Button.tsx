import Link from "next/link";
import React from 'react';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
}

interface ButtonLinkProps {
  children: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'border border-primary text-primary bg-transparent font-semibold';
      case 'danger':
        return 'bg-red-600 text-white';
      case 'primary':
      default:
        return 'bg-primary text-white';
    }
  };

  return (
    <button
      className={`text-[1rem] leading-[1.4rem] md:text-[1.6rem] md:leading-[2.4rem] py-[0.7rem] md:py-[1.2rem] px-[2.4rem] rounded-[8px] w-fit ${getVariantStyles()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children, variant = 'primary' }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'border border-primary text-primary bg-transparent font-semibold';
      case 'danger':
        return 'bg-red-600 text-white';
      case 'primary':
      default:
        return 'bg-primary text-white';
    }
  };

  return (
    <Link
      href={href}
      className={`w-fit text-[1rem] leading-[1.4rem] md:text-[1.6rem] md:leading-[2.4rem] py-[0.7rem] md:py-[1.2rem] px-[2.4rem] rounded-[10px] inline-block ${getVariantStyles()}`}
    >
      {children}
    </Link>
  );
};

export default Button;
