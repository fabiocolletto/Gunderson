/* TransparentHeader.js */

import React, { useState } from 'react';
import './TransparentHeader.css';
import logo from '../images/logo-green.png'; // Caminho correto para a logo
import { useTranslation } from 'react-i18next';


const TransparentHeader = () => {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false); // Estado para controlar o tema

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <header className="transparent-header">
      <div className="logo-container">
        <img src={logo} alt={t('header.logoAlt')} />
      </div>

      <nav className="navigation-links">
        <a href="/homepage">{t('header.homepage')}</a>
        <a href="/aboutus">{t('header.aboutUs')}</a>
        <a href="/services">{t('header.services')}</a>
        <a href="/contact">{t('header.contact')}</a>
        <a href="/news">{t('header.news')}</a>
      </nav>

      <div className="settings">
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('es')}>ES</button>
        <button onClick={() => changeLanguage('pt')}>PT</button>
        <button onClick={toggleTheme}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default TransparentHeader;
