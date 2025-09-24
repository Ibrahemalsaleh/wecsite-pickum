<<<<<<< HEAD
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Goals = () => {
    const { t } = useLanguage();
    return (
        <section id="goals" style={{ backgroundColor: 'var(--light-green)' }}>
            <div className="container">
                <div className="section-title reveal">
                    <h2>{t('goals.title')}</h2>
                </div>
                <div className="goals-container">
                    <div className="goal-item reveal">
                        <h3><i className="fas fa-smile" style={{ marginLeft: '10px', color: 'var(--accent-color)' }}></i>{t('goals.item1.title')}</h3>
                        <p>{t('goals.item1.p')}</p>
                    </div>
                    <div className="goal-item reveal">
                        <h3><i className="fas fa-chart-line" style={{ marginLeft: '10px', color: 'var(--accent-color)' }}></i>{t('goals.item2.title')}</h3>
                        <p>{t('goals.item2.p')}</p>
                    </div>
                    <div className="goal-item reveal">
                        <h3><i className="fas fa-handshake" style={{ marginLeft: '10px', color: 'var(--accent-color)' }}></i>{t('goals.item3.title')}</h3>
                        <p>{t('goals.item3.p')}</p>
                    </div>
                    <div className="goal-item reveal">
                        <h3><i className="fas fa-users-cog" style={{ marginLeft: '10px', color: 'var(--accent-color)' }}></i>{t('goals.item4.title')}</h3>
                        <p>{t('goals.item4.p')}</p>
                    </div>
                    <div className="goal-item reveal">
                        <h3><i className="fas fa-lightbulb" style={{ marginLeft: '10px', color: 'var(--accent-color)' }}></i>{t('goals.item5.title')}</h3>
                        <p>{t('goals.item5.p')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

=======
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Goals = () => {
    const { t } = useLanguage();
    return (
        <section id="goals" style={{ backgroundColor: 'var(--light-green)' }}>
            <div className="container">
                <div className="section-title reveal">
                    <h2>{t('goals.title')}</h2>
                </div>
                <div className="goals-container">
                    <div className="goal-item reveal">
                        <h3><i className="fas fa-smile" style={{ marginLeft: '10px', color: 'var(--accent-color)' }}></i>{t('goals.item1.title')}</h3>
                        <p>{t('goals.item1.p')}</p>
                    </div>
                    <div className="goal-item reveal">
                        <h3><i className="fas fa-chart-line" style={{ marginLeft: '10px', color: 'var(--accent-color)' }}></i>{t('goals.item2.title')}</h3>
                        <p>{t('goals.item2.p')}</p>
                    </div>
                    <div className="goal-item reveal">
                        <h3><i className="fas fa-handshake" style={{ marginLeft: '10px', color: 'var(--accent-color)' }}></i>{t('goals.item3.title')}</h3>
                        <p>{t('goals.item3.p')}</p>
                    </div>
                    <div className="goal-item reveal">
                        <h3><i className="fas fa-users-cog" style={{ marginLeft: '10px', color: 'var(--accent-color)' }}></i>{t('goals.item4.title')}</h3>
                        <p>{t('goals.item4.p')}</p>
                    </div>
                    <div className="goal-item reveal">
                        <h3><i className="fas fa-lightbulb" style={{ marginLeft: '10px', color: 'var(--accent-color)' }}></i>{t('goals.item5.title')}</h3>
                        <p>{t('goals.item5.p')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

>>>>>>> 98dfe2e871c973d53c3c0254093d6d40f73bfb1d
export default Goals;