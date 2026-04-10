'use client';

import { useEffect, useRef } from 'react';

export default function RevealText({ text }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const words = containerRef.current.querySelectorAll('span');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            {
                threshold: 0.5,
                rootMargin: '0px 0px -10% 0px'
            }
        );

        words.forEach((word) => observer.observe(word));

        return () => observer.disconnect();
    }, [text]);

    const words = text.split(' ');

    return (
        <div className="reveal-text-section" data-reveal>
            <h2 ref={containerRef} className="reveal-text">
                {words.map((word, i) => (
                    <span key={i} style={{ transitionDelay: `${i * 0.02}s` }}>
                        {word}
                    </span>
                ))}
            </h2>
        </div>
    );
}
