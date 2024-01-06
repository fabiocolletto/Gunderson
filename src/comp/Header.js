import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo-green.png';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from './ThemeContext'; // Certifique-se de que o caminho para ThemeContext.js está correto

const Header = () => {
  const { t, i18n } = useTranslation();
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className={`transparent-header ${darkMode ? 'dark-mode' : ''}`}>
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
        <button onClick={toggleDarkMode}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default Header;
