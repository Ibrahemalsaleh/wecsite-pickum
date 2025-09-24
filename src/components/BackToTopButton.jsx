import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            id="backToTop"
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '30px',
                left: '30px',
                width: '60px',
                height: '60px',
                background: 'var(--primary-gradient)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                fontSize: '20px',
                cursor: 'pointer',
                boxShadow: '0 8px 25px var(--shadow-medium)',
                transition: 'all 0.3s ease',
                opacity: isVisible ? 1 : 0,
                visibility: isVisible ? 'visible' : 'hidden',
                zIndex: 1000
            }}
        >
            <i className="fas fa-chevron-up"></i>
        </button>
    );
};

export default BackToTopButton;