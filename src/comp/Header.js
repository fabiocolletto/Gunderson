import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Obter o caminho atual para destacar o link ativo
  const currentPath = location.pathname;

  // Obter o idioma atual para destacar o botão de idioma ativo
  const currentLanguage = i18n.language;

  // Função para alternar o modo escuro
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  // Função para alterar o idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Função para alternar a visibilidade do menu em telas pequenas
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src="/images/logo-green.png" alt={t('header.logoAlt')} />
        </Link>
      </div>
      <button onClick={toggleMenu} className={`menu-icon ${isMenuOpen ? 'active' : ''}`}>
        <img src="/images/icone-menu.svg" alt="Menu" />
      </button>
      <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/aboutus" className={currentPath === '/aboutus' ? 'active' : ''}>{t('header.aboutUs')}</Link></li>
          <li><Link to="/services" className={currentPath === '/services' ? 'active' : ''}>{t('header.services')}</Link></li>
          <li><Link to="/contact" className={currentPath === '/contact' ? 'active' : ''}>{t('header.contact')}</Link></li>
          <li><Link to="/news" className={currentPath === '/news' ? 'active' : ''}>{t('header.news')}</Link></li>
        </ul>
      </nav>
      <div className="settings">
        <button onClick={() => changeLanguage('en')} className={currentLanguage === 'en' ? 'active' : ''}>EN</button>
        <button onClick={() => changeLanguage('es')} className={currentLanguage === 'es' ? 'active' : ''}>ES</button>
        <button onClick={() => changeLanguage('pt')} className={currentLanguage === 'pt' ? 'active' : ''}>PT</button>
        <button onClick={toggleDarkMode}>{t('header.darkMode')}</button>
      </div>
    </header>
  );
};

export default Header;
