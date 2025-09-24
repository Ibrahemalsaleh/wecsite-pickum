import React, { createContext, useState, useEffect, useContext } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('ar');

    useEffect(() => {
        const savedLang = localStorage.getItem('preferredLanguage') || 'ar';
        setLanguage(savedLang);
        document.documentElement.lang = savedLang;
        document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    }, []);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('preferredLanguage', lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};