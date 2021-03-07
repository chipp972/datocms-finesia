import css from './nav.module.sass';
import React from 'react';
import clsx from 'clsx';

type Props = {
  className?: string;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuIcon: React.FC<Props> = ({ className, isMenuOpen, setIsMenuOpen }) => (
  <button className={clsx(css.menuIcon, className)} onClick={() => setIsMenuOpen((isOpen) => !isOpen)}>
    {isMenuOpen ? (
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        stroke="white">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    )}
  </button>
);
