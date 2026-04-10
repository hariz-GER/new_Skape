'use client';

import { withBasePath } from '../lib/paths';

const MARQUEE_ROW_ONE = [
    'https://minaleandmann.com/wp-content/uploads/2018/01/2-8.jpg',
    'https://minaleandmann.com/wp-content/uploads/2018/01/3-7.jpg',
    'https://minaleandmann.com/wp-content/uploads/2018/01/4-7.jpg',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80',
];

const MARQUEE_ROW_TWO = [
    'https://minaleandmann.com/wp-content/uploads/2018/01/5-5.jpg',
    'https://minaleandmann.com/wp-content/uploads/2018/01/6-3.jpg',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    withBasePath('/assets/hero-bg.jpg'),
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1200&q=80',
];

const LOCAL_FALLBACK_IMAGES = [
    withBasePath('/assets/hero-bg.jpg'),
    withBasePath('/assets/about-philosophy-reference.jpg'),
];

export default function Marquee() {
    const onImageError = (event, idx) => {
        if (event.currentTarget.dataset.fallbackApplied === '1') return;
        event.currentTarget.dataset.fallbackApplied = '1';
        event.currentTarget.src = LOCAL_FALLBACK_IMAGES[idx % LOCAL_FALLBACK_IMAGES.length];
    };

    return (
        <section className="marquee-section">
            <div className="marquee-container">
                <div className="marquee-track">
                    {MARQUEE_ROW_ONE.map((src, idx) => (
                        <div key={`m1-${idx}`} className="marquee-item">
                            <img src={src} alt={`Architecture showcase ${idx + 1}`} loading="lazy" onError={(event) => onImageError(event, idx)} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="marquee-container" data-direction="right">
                <div className="marquee-track track-reverse">
                    {MARQUEE_ROW_TWO.map((src, idx) => (
                        <div key={`mr1-${idx}`} className="marquee-item">
                            <img src={src} alt={`Architecture reverse ${idx + 1}`} loading="lazy" onError={(event) => onImageError(event, idx)} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
