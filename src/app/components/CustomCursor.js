'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
    useEffect(() => {
        const dot = document.getElementById('cursorDot');
        const ring = document.getElementById('cursorRing');
        const trail = document.getElementById('cursorTrail');
        
        if (!dot || !ring || !trail) return;

        let x = 0;
        let y = 0;
        let rx = 0;
        let ry = 0;
        let trailX = 0;
        let trailY = 0;
        let isMoving = false;
        let moveTimeout;

        // Show cursor immediately on page load
        dot.style.opacity = '1';
        ring.style.opacity = '1';
        trail.style.opacity = '0.4';

        const onMove = (event) => {
            x = event.clientX;
            y = event.clientY;
            
            // Update dot position with proper centering
            dot.style.left = x + 'px';
            dot.style.top = y + 'px';

            // Add movement class for animation
            dot.classList.add('moving');
            clearTimeout(moveTimeout);
            moveTimeout = setTimeout(() => {
                dot.classList.remove('moving');
            }, 100);

            isMoving = true;
        };

        const onEnterInteractive = (e) => {
            ring.classList.add('cursor-hover');
            dot.classList.add('cursor-hover');
        };

        const onLeaveInteractive = (e) => {
            ring.classList.remove('cursor-hover');
            dot.classList.remove('cursor-hover');
        };

        const tick = () => {
            // Ring follows with smooth easing
            rx += (x - rx) * 0.2;
            ry += (y - ry) * 0.2;
            ring.style.left = rx + 'px';
            ring.style.top = ry + 'px';

            // Trail follows with more lag
            trailX += (x - trailX) * 0.08;
            trailY += (y - trailY) * 0.08;
            trail.style.left = trailX + 'px';
            trail.style.top = trailY + 'px';

            requestAnimationFrame(tick);
        };

        const interactiveSelector = 'a, button, .project-card, .service-card-link, [role="button"], input, textarea, select';

        // Add event listeners
        document.addEventListener('mousemove', onMove);
        
        document.querySelectorAll(interactiveSelector).forEach((el) => {
            el.addEventListener('mouseenter', onEnterInteractive);
            el.addEventListener('mouseleave', onLeaveInteractive);
        });

        // Start animation loop
        const animationId = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(animationId);
            document.removeEventListener('mousemove', onMove);
            clearTimeout(moveTimeout);
            document.querySelectorAll(interactiveSelector).forEach((el) => {
                el.removeEventListener('mouseenter', onEnterInteractive);
                el.removeEventListener('mouseleave', onLeaveInteractive);
            });
        };
    }, []);

    return (
        <>
            <div id="cursorTrail" className="cursor-trail" />
            <div id="cursorDot" className="cursor-dot" />
            <div id="cursorRing" className="cursor-ring" />
        </>
    );
}
