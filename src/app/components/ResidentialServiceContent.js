'use client';

import { useEffect, useRef } from 'react';

export default function ResidentialServiceContent({ detail }) {
    if (!detail) return null;
    const isTimelineApproach = detail.approachLayout === 'timeline';
    const timelineRef = useRef(null);

    useEffect(() => {
        if (!isTimelineApproach) return;

        const timelineNode = timelineRef.current;
        if (!timelineNode) return;

        const items = Array.from(timelineNode.querySelectorAll('.planning-timeline-item'));
        if (!items.length) return;

        let rafId = 0;

        const updateTimelineState = () => {
            const triggerY = window.innerHeight * 0.62;
            let activeIndex = -1;

            items.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                const anchorY = rect.top + rect.height * 0.4;
                if (anchorY <= triggerY) activeIndex = index;
            });

            items.forEach((item, index) => {
                item.classList.toggle('is-open', index <= activeIndex);
            });
        };

        const onScrollOrResize = () => {
            if (rafId) return;
            rafId = window.requestAnimationFrame(() => {
                rafId = 0;
                updateTimelineState();
            });
        };

        updateTimelineState();
        window.addEventListener('scroll', onScrollOrResize, { passive: true });
        window.addEventListener('resize', onScrollOrResize);

        return () => {
            window.removeEventListener('scroll', onScrollOrResize);
            window.removeEventListener('resize', onScrollOrResize);
            if (rafId) window.cancelAnimationFrame(rafId);
        };
    }, [isTimelineApproach, detail.approach.length]);

    return (
        <section className="section service-detail-page" id="services">
            <div className="container">
                <div className="section-head residential-header" data-reveal>
                    <p className="eyebrow">{detail.eyebrow}</p>
                    <h2>{detail.title}</h2>
                </div>

                <figure className="residential-hero" data-reveal>
                    <img src={detail.heroImage.src} alt={detail.heroImage.alt} loading="lazy" />
                </figure>

                <div className="residential-copy" data-reveal>
                    {detail.intro.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>

                {isTimelineApproach ? (
                    <section className="residential-block planning-timeline-block" data-reveal>
                        <div className="planning-timeline-shell">
                            <div className="planning-timeline-spacer" aria-hidden="true" />
                            <div className="planning-timeline-content">
                                <h3>{detail.approachHeading || 'Our Approach'}</h3>
                                <ol className="planning-timeline" ref={timelineRef}>
                                    {detail.approach.map((item, index) => (
                                        <li className="planning-timeline-item" key={item.title}>
                                            <span className="planning-timeline-number">{String(index + 1).padStart(2, '0')}</span>
                                            <span className="planning-timeline-divider" aria-hidden="true" />
                                            <div className="planning-timeline-copy">
                                                <div className="planning-timeline-copy-inner">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </section>
                ) : (
                    <section className="residential-block" data-reveal>
                        <h3>{detail.approachHeading || 'Our Approach'}</h3>
                        <div className="residential-approach-grid">
                            {detail.approach.map((item, index) => (
                                <article className="residential-approach-card" key={item.title}>
                                    <p className="residential-step">{index + 1}</p>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                <section className="residential-block" data-reveal>
                    <h3>{detail.scopeHeading || 'Service Scope'}</h3>
                    <div className="residential-offering-grid">
                        {detail.offerings.map((item) => (
                            <article className="residential-offering-card" key={item.title}>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="residential-block" data-reveal>
                    <div className="residential-visual-grid">
                        <figure className="residential-visual-card">
                            <img src={detail.landscapeImage.src} alt={detail.landscapeImage.alt} loading="lazy" />
                        </figure>
                        <figure className="residential-visual-card residential-interior-card">
                            <span>{detail.featureLabel || 'INTERIOR DESIGN'}</span>
                        </figure>
                    </div>
                </section>
            </div>
        </section>
    );
}
