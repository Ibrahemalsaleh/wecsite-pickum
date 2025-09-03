import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>{t('footer.about.title')}</h3>
                        <p>{t('footer.about.p')}</p>
                    </div>
                    <div className="footer-section">
                        <h3>{t('footer.links.title')}</h3>
                        <ul>
                            <li><a href="#home"><i className="fas fa-chevron" style={{ marginLeft: '5px', fontSize: '12px' }}></i>{t('nav.home')}</a></li>
                            <li><a href="#about"><i className="fas fa-chevron" style={{ marginLeft: '5px', fontSize: '12px' }}></i>{t('nav.about')}</a></li>
                            <li><a href="#services"><i className="fas fa-chevron" style={{ marginLeft: '5px', fontSize: '12px' }}></i>{t('nav.services')}</a></li>
                            <li><a href="#apps"><i className="fas fa-chevron" style={{ marginLeft: '5px', fontSize: '12px' }}></i>{t('nav.apps')}</a></li>
                            <li><a href="#contact"><i className="" style={{ marginLeft: '5px', fontSize: '12px' }}></i>{t('nav.contact')}</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>{t('footer.contact.title')}</h3>
                        <ul className="contact-list" style={{ background: 'none', boxShadow: 'none' }}>
                            <li style={{ background: 'none', padding: '5px 0' }}><i className="fas fa-map-marker-alt"></i><span>{t('contact.info.address')}</span></li>
                            <li style={{ background: 'none', padding: '5px 0' }}><i className="fas fa-phone"></i><span>00962781068132</span></li>
                            <li style={{ background: 'none', padding: '5px 0' }}><i className="fas fa-envelope"></i><span>info@pickum.jo</span></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>{t('footer.follow.title')}</h3>
                        <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                            <a href="https://www.facebook.com/pickum.jo?mibextid=ZbWKwL" style={{ display: 'inline-block', width: '50px', height: '50px', background: 'var(--accent-color)', color: 'white', textAlign: 'center', lineHeight: '50px', borderRadius: '50%', transition: 'all 0.3s ease', textDecoration: 'none' }}>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/pickum.jo/?igsh=MWdqczluOHQyMjJueg%3D%3D#" style={{ display: 'inline-block', width: '50px', height: '50px', background: 'var(--accent-color)', color: 'white', textAlign: 'center', lineHeight: '50px', borderRadius: '50%', transition: 'all 0.3s ease', textDecoration: 'none' }}>
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>{t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;