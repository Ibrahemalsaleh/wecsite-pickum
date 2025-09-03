import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate form submission
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus(''), 3000);
            e.target.reset();
        }, 1500);
    };

    return (
        <section id="contact" style={{ backgroundColor: 'var(--light-green)' }}>
            <div className="container">
                <div className="section-title reveal">
                    <h2>{t('contact.title')}</h2>
                </div>
                <div className="contact-grid">
                    <div className="contact-info reveal-left">
                        <h3>{t('contact.info.title')}</h3>
                        <ul className="contact-list">
                            <li><i className="fas fa-map-marker-alt"></i><span>{t('contact.info.address')}</span></li>
                            <li><i className="fas fa-phone"></i><span>00962781068132</span></li>
                            <li><i className="fas fa-envelope"></i><span>info@pickum.jo</span></li>
                            <li><i className="fas fa-clock"></i><span>{t('contact.info.hours')}</span></li>
                        </ul>
                    </div>
                    <div className="contact-form reveal-right">
                        <h3>{t('contact.form.title')}</h3>
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" id="full-name" placeholder={t('contact.form.name')} required />
                            </div>
                            <div className="form-group">
                                <input type="email" id="email-address" placeholder={t('contact.form.email')} required />
                            </div>
                            <div className="form-group">
                                <input type="tel" id="phone-number" placeholder={t('contact.form.phone')} required />
                            </div>
                            <div className="form-group">
                                <textarea id="message" placeholder={t('contact.form.message')} rows="5" required></textarea>
                            </div>
                            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                                {status === 'sending' && <><i className="fas fa-spinner fa-spin"></i> Sending...</>}
                                {status === 'success' && <><i className="fas fa-check"></i> Sent!</>}
                                {status === '' && <><i className="fas fa-paper-plane"></i> {t('contact.form.submit')}</>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;