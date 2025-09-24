<<<<<<< HEAD
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

=======
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

>>>>>>> 98dfe2e871c973d53c3c0254093d6d40f73bfb1d
export default ScrollProgressBar;