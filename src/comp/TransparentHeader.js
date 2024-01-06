import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importação do Link do react-router-dom
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
        <Link to="/homepage">{t('header.homepage')}</Link>
        <Link to="/aboutus">{t('header.aboutUs')}</Link>
        <Link to="/services">{t('header.services')}</Link>
        <Link to="/contact">{t('header.contact')}</Link>
        <Link to="/news">{t('header.news')}</Link>
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
