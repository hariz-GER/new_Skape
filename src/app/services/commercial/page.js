'use client';

import { useEffect, useRef, useState } from 'react';
import CustomCursor from '../../components/CustomCursor';
import Header from '../../components/Header';
import MenuOverlay from '../../components/MenuOverlay';
import Footer from '../../components/Footer';
import CommercialServiceContent from '../../components/CommercialServiceContent';
import { HOSPITALITY_SERVICE_DETAIL, MENU_CONTENT, NAV_ITEMS, WORK_PLACE_SERVICE_DETAIL } from '../../data';

function useRevealOnScroll() {
    useEffect(() => {
        const elements = document.querySelectorAll('[data-reveal]');
        if (!('IntersectionObserver' in window)) {
            elements.forEach((el) => el.classList.add('in-view'));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.14 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}

export default function CommercialServicePage() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [menuFocus, setMenuFocus] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [hideHeader, setHideHeader] = useState(false);
    const lastScrollY = useRef(0);

    useRevealOnScroll();

    useEffect(() => {
        const onEsc = (event) => {
            if (event.key === 'Escape') setMobileOpen(false);
        };
        document.addEventListener('keydown', onEsc);
        return () => document.removeEventListener('keydown', onEsc);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrolled(currentY > 50);

            if (currentY < 70) {
                setHideHeader(false);
            } else if (!mobileOpen) {
                setHideHeader(currentY > lastScrollY.current);
            }

            lastScrollY.current = currentY;
        };

        lastScrollY.current = window.scrollY;
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [mobileOpen]);

    useEffect(() => {
        if (mobileOpen) setHideHeader(false);
    }, [mobileOpen]);

    return (
        <div className="app-shell">
            <CustomCursor />

            <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} scrolled={scrolled} hideHeader={hideHeader} />

            <MenuOverlay
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
                menuFocus={menuFocus}
                setMenuFocus={setMenuFocus}
                NAV_ITEMS={NAV_ITEMS}
                MENU_CONTENT={MENU_CONTENT}
            />

            <main>
                <CommercialServiceContent
                    workPlace={WORK_PLACE_SERVICE_DETAIL}
                    hospitality={HOSPITALITY_SERVICE_DETAIL}
                />
            </main>

            <Footer />
        </div>
    );
}
