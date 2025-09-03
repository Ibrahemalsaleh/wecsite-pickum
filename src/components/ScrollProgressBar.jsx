import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollTotal > 0) {
                setScroll((window.pageYOffset / scrollTotal) * 100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div className="scroll-progress" style={{ width: `${scroll}%` }}></div>;
};

export default ScrollProgressBar;