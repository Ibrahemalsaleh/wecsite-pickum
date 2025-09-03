import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo_vertical.png';

const Header = () => {
    const { language, changeLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const handleLanguageToggle = () => {
        const newLang = language === 'ar' ? 'en' : 'ar';
        changeLanguage(newLang);
    };

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <div className="container">
                <div className="header-content">
                    <div className="logo"><img src={logo} alt="شعار أهلا بكم" /></div>
                    <div className="mobile-menu">
                        <i className="fas fa-bars"></i>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#home"><i className=""></i> {t('nav.home')}</a></li>
                            <li><a href="#about"><i className=""></i> {t('nav.about')}</a></li>
                            <li><a href="#services"><i className="fas fa-cogs"></i> {t('nav.services')}</a></li>
                            <li><a href="#apps"><i className="fas fa-mobile-alt"></i> {t('nav.apps')}</a></li>
                            <li><a href="#goals"><i className="fas fa-target"></i> {t('nav.goals')}</a></li>
                            <li><a href="#challenges"><i className="fas fa-chess"></i> {t('nav.challenges')}</a></li>
                            <li><a href="#contact"><i className="fas fa-envelope"></i> {t('nav.contact')}</a></li>
                            <li>
                                <button id="language-toggle" className="language-btn" onClick={handleLanguageToggle}>
                                    <span className="lang-text">{language === 'ar' ? t('language.english') : t('language.arabic')}</span>
                                    <i className="fas fa-globe"></i>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;