import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Apps from './components/Apps';
import Goals from './components/Goals';
import Challenges from './components/Challenges';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import BackToTopButton from './components/BackToTopButton';

const FloatingShapes = () => (
    <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
);

const App = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        revealElements.forEach(element => {
            observer.observe(element);
        });

        // Cleanup observer on component unmount
        return () => revealElements.forEach(element => observer.unobserve(element));
    }, []);

    return (
        <>
            <FloatingShapes />
            <ScrollProgressBar />
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Apps />
                <Goals />
                <Challenges />
                <Contact />
            </main>
            <Footer />
            <BackToTopButton />
        </>
    );
};

export default App;