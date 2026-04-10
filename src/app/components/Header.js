'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { withBasePath } from '../lib/paths';

export default function Header({ mobileOpen, setMobileOpen, scrolled, hideHeader }) {
    const pathname = usePathname();
    const showBrandOnly = scrolled && !mobileOpen;
    const onBrandClick = (event) => {
        setMobileOpen(false);
        if (pathname === '/') {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`site-header ${mobileOpen ? 'menu-open' : ''} ${scrolled ? 'scrolled' : ''} ${hideHeader ? 'nav-hidden' : ''} ${showBrandOnly ? 'brand-only-mode' : ''}`}
            id="top"
        >
            {showBrandOnly ? (
                <div className="brand-only">
                    <Link className="brand" href="/" aria-label="Skape home" onClick={onBrandClick}>
                        <img src={withBasePath('/assets/logo.png')} alt="Skape logo" className="brand-logo" />
                    </Link>
                </div>
            ) : (
                <div className="container nav-wrap">
                    <Link className="brand" href="/" aria-label="Skape home" onClick={onBrandClick}>
                        <img src={withBasePath('/assets/logo.png')} alt="Skape logo" className="brand-logo" />
                    </Link>
                    <button
                        className={`menu-toggle ${mobileOpen ? 'open' : ''}`}
                        aria-expanded={mobileOpen}
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        <span className="menu-box" />
                        <div className="menu-lines">
                            <span />
                            <span />
                        </div>
                    </button>
                </div>
            )}
        </header>
    );
}
