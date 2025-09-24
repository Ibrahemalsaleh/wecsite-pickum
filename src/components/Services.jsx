<<<<<<< HEAD
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
    const { t } = useLanguage();
    return (
        <section id="services" style={{ backgroundColor: 'var(--light-green)' }}>
            <div className="container">
                <div className="section-title reveal">
                    <h2>{t('services.title')}</h2>
                </div>
                <div className="services-grid">
                    <div className="service-card reveal">
                        <div className="service-icon"><i className="fas fa-home"></i></div>
                        <div className="service-content">
                            <h3>{t('services.card1.title')}</h3>
                            <p>{t('services.card1.p')}</p>
                        </div>
                    </div>
                    <div className="service-card reveal">
                        <div className="service-icon"><i className="fas fa-truck"></i></div>
                        <div className="service-content">
                            <h3>{t('services.card2.title')}</h3>
                            <p>{t('services.card2.p')}</p>
                        </div>
                    </div>
                    <div className="service-card reveal">
                        <div className="service-icon"><i className="fas fa-shipping-fast"></i></div>
                        <div className="service-content">
                            <h3>{t('services.card3.title')}</h3>
                            <p>{t('services.card3.p')}</p>
                        </div>
                    </div>
                    <div className="service-card reveal">
                        <div className="service-icon"><i className="fas fa-car"></i></div>
                        <div className="service-content">
                            <h3>{t('services.card4.title')}</h3>
                            <p>{t('services.card4.p')}</p>
                        </div>
                    </div>
                    <div className="service-card reveal">
                        <div className="service-icon"><i className="fas fa-bus"></i></div>
                        <div className="service-content">
                            <h3>{t('services.card5.title')}</h3>
                            <p>{t('services.card5.p')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

=======
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
    const { t } = useLanguage();
    return (
        <section id="services" style={{ backgroundColor: 'var(--light-green)' }}>
            <div className="container">
                <div className="section-title reveal">
                    <h2>{t('services.title')}</h2>
                </div>
                <div className="services-grid">
                    <div className="service-card reveal">
                        <div className="service-icon"><i className="fas fa-home"></i></div>
                        <div className="service-content">
                            <h3>{t('services.card1.title')}</h3>
                            <p>{t('services.card1.p')}</p>
                        </div>
                    </div>
                    <div className="service-card reveal">
                        <div className="service-icon"><i className="fas fa-truck"></i></div>
                        <div className="service-content">
                            <h3>{t('services.card2.title')}</h3>
                            <p>{t('services.card2.p')}</p>
                        </div>
                    </div>
                    <div className="service-card reveal">
                        <div className="service-icon"><i className="fas fa-shipping-fast"></i></div>
                        <div className="service-content">
                            <h3>{t('services.card3.title')}</h3>
                            <p>{t('services.card3.p')}</p>
                        </div>
                    </div>
                    <div className="service-card reveal">
                        <div className="service-icon"><i className="fas fa-car"></i></div>
                        <div className="service-content">
                            <h3>{t('services.card4.title')}</h3>
                            <p>{t('services.card4.p')}</p>
                        </div>
                    </div>
                    <div className="service-card reveal">
                        <div className="service-icon"><i className="fas fa-bus"></i></div>
                        <div className="service-content">
                            <h3>{t('services.card5.title')}</h3>
                            <p>{t('services.card5.p')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

>>>>>>> 98dfe2e871c973d53c3c0254093d6d40f73bfb1d
export default Services;