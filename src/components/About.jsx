import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();
    return (
        <section id="about">
            <div className="container">
                <div className="section-title reveal">
                    <h2>{t('about.title')}</h2>
                </div>
                <div className="about-content">
                    <div className="about-text reveal-right">
                        <p>{t('about.p1')}</p>
                        <p>{t('about.p2')}</p>
                    </div>
                    <div className="about-image reveal-left">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="صورة عن الشركة" />
                    </div>
                </div>

                <div className="vision-mission reveal-scale">
                    <div className="vision-card">
                        <h3><i className="fas fa-eye" style={{ marginLeft: '10px', color: 'var(--accent-color)' }}></i>{t('about.vision.title')}</h3>
                        <p>{t('about.vision.p')}</p>
                    </div>
                    <div className="mission-card">
                        <h3><i className="fas fa-bullseye" style={{ marginLeft: '10px', color: 'var(--accent-color)' }}></i>{t('about.mission.title')}</h3>
                        <p>{t('about.mission.p')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;