'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { withBasePath } from '../lib/paths';

export default function MenuOverlay({
    mobileOpen,
    setMobileOpen,
    menuFocus,
    setMenuFocus,
    NAV_ITEMS,
    MENU_CONTENT,
    onSubmenuItemClick
}) {
    const router = useRouter();
    const pathname = usePathname();
    const previousPathnameRef = useRef(pathname);
    const activeMenu = menuFocus ? MENU_CONTENT[menuFocus] : null;
    const activeNav = menuFocus ? NAV_ITEMS.find((item) => item.id === menuFocus) : null;
    const [expandedItem, setExpandedItem] = useState('');
    const [isRouteLoading, setIsRouteLoading] = useState(false);

    useEffect(() => {
        setExpandedItem('');
    }, [menuFocus, mobileOpen]);

    useEffect(() => {
        if (isRouteLoading && pathname !== previousPathnameRef.current) {
            setIsRouteLoading(false);
        }
        previousPathnameRef.current = pathname;
    }, [pathname, isRouteLoading]);

    useEffect(() => {
        if (!isRouteLoading) return;
        const timeout = window.setTimeout(() => setIsRouteLoading(false), 2200);
        return () => window.clearTimeout(timeout);
    }, [isRouteLoading]);

    useEffect(() => {
        const routesToPrefetch = [
            '/',
            '/about',
            '/services/residential',
            '/services/commercial',
            '/services/work-place',
            '/services/hospitality',
            '/services/planning-applications',
            '/services/create-construct',
            '/services/interior-design',
            '/services/interior-design/residential',
            '/services/interior-design/commercial'
        ];
        routesToPrefetch.forEach((route) => router.prefetch(route));
    }, [router]);

    const selectedExpandable = activeMenu
        ? activeMenu.items.find(
              (item) =>
                  typeof item === 'object' &&
                  item.label === expandedItem &&
                  Array.isArray(item.children) &&
                  item.children.length > 0
          )
        : null;
    const selectedChildren = selectedExpandable ? selectedExpandable.children : [];
    const isPlanningOpen = Boolean(activeMenu && expandedItem && selectedChildren.length);

    const serviceLeafRoutes = {
        'planning applications': '/services/planning-applications',
        'create & construct': '/services/create-construct'
    };

    const serviceSubmenuRoutes = {
        'architectural design': {
            residential: '/services/residential',
            commercial: '/services/commercial',
            'work place': '/services/work-place',
            hospitality: '/services/hospitality'
        },
        'interior design': {
            residential: '/services/interior-design/residential',
            commercial: '/services/interior-design/commercial'
        }
    };

    const resolveLeafRoute = (menuId, itemLabel) => {
        if (menuId !== 'services') return '';
        return serviceLeafRoutes[(itemLabel || '').toLowerCase()] || '';
    };

    const onSubmenuClick = (childLabel) => {
        const normalizedParent = (expandedItem || '').toLowerCase();
        const normalizedChild = (childLabel || '').toLowerCase();
        const targetRoute =
            menuFocus === 'services' && serviceSubmenuRoutes[normalizedParent]
                ? serviceSubmenuRoutes[normalizedParent][normalizedChild]
                : '';

        if (targetRoute) {
            setExpandedItem('');
            setMenuFocus('');
            setMobileOpen(false);
            if (pathname !== targetRoute) {
                setIsRouteLoading(true);
                router.push(targetRoute);
            }
            return;
        }

        if (onSubmenuItemClick) {
            onSubmenuItemClick({
                menuId: menuFocus,
                parentLabel: expandedItem,
                childLabel
            });
        }
        setExpandedItem('');
        setMenuFocus('');
        setMobileOpen(false);
    };

    const onLeafMenuItemClick = (itemLabel) => {
        const targetRoute = resolveLeafRoute(menuFocus, itemLabel);

        if (targetRoute) {
            setExpandedItem('');
            setMenuFocus('');
            setMobileOpen(false);
            if (pathname !== targetRoute) {
                setIsRouteLoading(true);
                router.push(targetRoute);
            }
            return;
        }

        if (onSubmenuItemClick) {
            onSubmenuItemClick({
                menuId: menuFocus,
                parentLabel: '',
                childLabel: itemLabel
            });
        }
        setExpandedItem('');
        setMenuFocus('');
        setMobileOpen(false);
    };

    const onMainNavClick = (sectionId) => {
        if (sectionId === 'about') {
            setExpandedItem('');
            setMenuFocus('');
            setMobileOpen(false);
            if (pathname !== '/about') {
                setIsRouteLoading(true);
                router.push('/about');
                return;
            }
            window.requestAnimationFrame(() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            return;
        }

        if (pathname !== '/') {
            setExpandedItem('');
            setMenuFocus('');
            setMobileOpen(false);
            router.push(`/#${sectionId}`);
            return;
        }

        setMenuFocus((prev) => (prev === sectionId ? '' : sectionId));
    };

    return (
        <>
            {isRouteLoading && (
                <div className="route-loading-overlay" role="status" aria-live="polite" aria-label="Loading page">
                    <img src={withBasePath('/assets/logo.png')} alt="Skape loading" className="route-loading-logo" />
                </div>
            )}

            <div
                className={`menu-overlay ${mobileOpen ? 'open' : ''}`}
                aria-hidden={!mobileOpen}
                onClick={() => setMobileOpen(false)}
            >
                <div
                    className={`container menu-overlay-inner ${isPlanningOpen ? 'has-submenu' : ''}`}
                    onClick={(event) => event.stopPropagation()}
                >
                    <div className="menu-col menu-nav-col planning-menu-nav">
                        <nav className="menu-links">
                            {NAV_ITEMS.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    className={`menu-main-link ${menuFocus === item.id ? 'active' : ''}`}
                                    onClick={() => onMainNavClick(item.id)}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div
                        className={`menu-col menu-info-col ${activeMenu ? 'open' : ''} planning-menu-info ${isPlanningOpen ? 'planning-open' : ''}`}
                    >
                        <p className="eyebrow">{activeMenu ? activeMenu.heading : 'Navigation'}</p>
                        {activeMenu ? (
                            <a className="menu-jump open" href={`#${menuFocus}`} onClick={() => setMobileOpen(false)}>
                                Open {activeNav ? activeNav.label : 'Section'}
                            </a>
                        ) : (
                            <span className="menu-jump" />
                        )}
                        <ul className={`menu-service-links ${activeMenu ? 'open' : ''}`}>
                            {(activeMenu ? activeMenu.items : []).map((item, index) => {
                                const label = typeof item === 'string' ? item : item.label;
                                const children = typeof item === 'object' ? item.children || [] : [];
                                const isExpandable = children.length > 0;
                                const isOpen = expandedItem === label;
                                const leafRoute = resolveLeafRoute(menuFocus, label);

                                return (
                                    <li key={`${label}-${index}`} style={{ '--item-delay': `${index * 0.14}s` }}>
                                        {isExpandable ? (
                                            <button
                                                type="button"
                                                className={`menu-service-trigger ${isOpen ? 'open' : ''}`}
                                                onClick={() => setExpandedItem((prev) => (prev === label ? '' : label))}
                                                aria-expanded={isOpen}
                                            >
                                                {label}
                                            </button>
                                        ) : leafRoute ? (
                                            <button
                                                type="button"
                                                className="menu-service-link"
                                                onClick={() => onLeafMenuItemClick(label)}
                                            >
                                                {label}
                                            </button>
                                        ) : (
                                            label
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                        <p className={`menu-placeholder ${activeMenu ? 'hide' : ''}`}>
                            Click a section on the left to view its subtopics.
                        </p>
                    </div>
                    <div className={`menu-col menu-submenu-col ${isPlanningOpen ? 'open' : ''}`}>
                        <ul className={`menu-submenu-links ${isPlanningOpen ? 'open' : ''}`}>
                            {selectedChildren.map((child, index) => (
                                <li key={`${expandedItem}-${child}`} style={{ '--item-delay': `${index * 0.16}s` }}>
                                    <button type="button" className="menu-submenu-link" onClick={() => onSubmenuClick(child)}>
                                        {child}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
