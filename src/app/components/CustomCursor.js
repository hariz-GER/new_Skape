'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
    useEffect(() => {
        const dot = document.getElementById('cursorDot');
        const ring = document.getElementById('cursorRing');
        if (!dot || !ring) return;

        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        let rx = x;
        let ry = y;

        const onMove = (event) => {
            x = event.clientX;
            y = event.clientY;
            dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        };

        const onEnterInteractive = () => ring.classList.add('cursor-hover');
        const onLeaveInteractive = () => ring.classList.remove('cursor-hover');

        const tick = () => {
            rx += (x - rx) * 0.16;
            ry += (y - ry) * 0.16;
            ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
            requestAnimationFrame(tick);
        };

        const interactiveSelector = 'a, button, .project-card, .service-card-link';

        document.addEventListener('mousemove', onMove);
        document.querySelectorAll(interactiveSelector).forEach((el) => {
            el.addEventListener('mouseenter', onEnterInteractive);
            el.addEventListener('mouseleave', onLeaveInteractive);
        });
        requestAnimationFrame(tick);

        return () => {
            document.removeEventListener('mousemove', onMove);
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
