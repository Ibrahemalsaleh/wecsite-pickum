import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Challenges = () => {
    const { t } = useLanguage();

    const challengeItems = [
        { num: 1, titleKey: "challenges.item1.title", pKey: "challenges.item1.p", solutionKey: "challenges.item1.solution", icon: "fa-lightbulb" },
        { num: 2, titleKey: "challenges.item2.title", pKey: "challenges.item2.p", solutionKey: "challenges.item2.solution", icon: "fa-comments" },
        { num: 3, titleKey: "challenges.item3.title", pKey: "challenges.item3.p", solutionKey: "challenges.item3.solution", icon: "fa-rocket" },
        { num: 4, titleKey: "challenges.item4.title", pKey: "challenges.item4.p", solutionKey: "challenges.item4.solution", icon: "fa-graduation-cap" },
        { num: 5, titleKey: "challenges.item5.title", pKey: "challenges.item5.p", solutionKey: "challenges.item5.solution", icon: "fa-heart" }
    ];

    return (
        <section id="challenges">
            <div className="container">
                <div className="section-title reveal">
                    <h2>{t('challenges.title')}</h2>
                </div>
                <div className="challenges-container reveal-scale">
                    {challengeItems.map(item => (
                        <div className="challenge-item" key={item.num}>
                            <div className="challenge-header">
                                <div className="challenge-number">{item.num}</div>
                                <h3>{t(item.titleKey)}</h3>
                            </div>
                            <p><strong>{t('challenges.challenge')}</strong> <span>{t(item.pKey)}</span></p>
                            <div className="challenge-solution">
                                <strong><i className={`fas ${item.icon}`} style={{ marginLeft: '5px' }}></i><span>{t('challenges.solution')}</span></strong> <span>{t(item.solutionKey)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Challenges;