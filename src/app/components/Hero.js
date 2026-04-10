'use client';

import { withBasePath } from '../lib/paths';

export default function Hero() {
    const heroBackground = withBasePath('/assets/hero-bg.jpg');

    return (
        <section className="hero" id="home">
            <div
                className="hero-image-layer"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15, 17, 21, 0.2), var(--bg)), url("${heroBackground}")`,
                }}
            />
            <div className="container hero-grid">
                <div className="hero-copy" data-reveal>
                    <p className="eyebrow">Architecture • Interiors • Construction</p>
                    <h1>Modern Spaces With Timeless Character</h1>
                    <p>Minimal, professional and detail-led projects for residential and commercial clients.</p>
                    <div className="hero-actions">
                        <a href="#portfolio" className="btn btn-primary btn-min">
                            View Portfolio
                        </a>
                        <a href="#services" className="btn btn-line btn-min">
                            Explore Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
