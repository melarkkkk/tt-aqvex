import React from 'react';
import s from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.headerContent}>
        <a href="#" className={s.headerLogo}>
          <img src="./icons/aqvex_logo.svg" alt="logo" className={s.headerLogo} />
        </a>
      </div>
    </header>
  );
};