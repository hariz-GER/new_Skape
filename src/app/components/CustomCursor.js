'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
    useEffect(() => {
        const dot = document.getElementById('cursorDot');
        const ring = document.getElementById('cursorRing');
        if (!dot || !ring) return;

        let x = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
        let y = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
        let rx = x;
        let ry = y;

        // Initialize cursor position to current mouse position
        const onMove = (event) => {
            x = event.clientX;
            y = event.clientY;
            dot.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
        };

        const onEnterInteractive = () => ring.classList.add('cursor-hover');
        const onLeaveInteractive = () => ring.classList.remove('cursor-hover');

        const tick = () => {
            rx += (x - rx) * 0.16;
            ry += (y - ry) * 0.16;
            ring.style.transform = `translate3d(calc(${rx}px - 50%), calc(${ry}px - 50%), 0)`;
            requestAnimationFrame(tick);
        };

        const interactiveSelector = 'a, button, .project-card, .service-card-link, [role="button"], input, textarea, select';

        // Show cursor on first mousemove
        const onFirstMove = (event) => {
            dot.style.opacity = '1';
            ring.style.opacity = '1';
            document.removeEventListener('mousemove', onFirstMove);
            document.addEventListener('mousemove', onMove);
            x = event.clientX;
            y = event.clientY;
        };

        document.addEventListener('mousemove', onFirstMove);

        // Handle mouse leaving window
        const onMouseLeave = () => {
            dot.style.opacity = '0';
            ring.style.opacity = '0';
        };

        const onMouseEnter = () => {
            dot.style.opacity = '1';
            ring.style.opacity = '1';
        };

        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mouseenter', onMouseEnter);

        // Add event listeners to interactive elements
        const addListeners = () => {
            document.querySelectorAll(interactiveSelector).forEach((el) => {
                el.addEventListener('mouseenter', onEnterInteractive);
                el.addEventListener('mouseleave', onLeaveInteractive);
            });
        };

        addListeners();
        const animationId = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(animationId);
            document.removeEventListener('mousemove', onFirstMove);
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.querySelectorAll(interactiveSelector).forEach((el) => {
                el.removeEventListener('mouseenter', onEnterInteractive);
                el.removeEventListener('mouseleave', onLeaveInteractive);
            });
        };
    }, []);

    return (
        <>
            <div id="cursorDot" className="cursor-dot" />
            <div id="cursorRing" className="cursor-ring" />
        </>
    );
}
