import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo-green.png';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src="../images/logo-green.png" alt={t('header.logoAlt')} />
        </Link>
      </div>
      <button onClick={toggleMenu} className={`menu-icon ${isMenuOpen ? 'active' : ''}`}>
        <img src="../imagens/icone-menu.png" alt="Menu" />
      </button>
      <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/homepage" className={currentPath === '/homepage' ? 'active' : ''}>{t('header.homepage')}</Link></li>
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