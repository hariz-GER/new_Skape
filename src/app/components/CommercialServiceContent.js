'use client';

function CommercialDetailSection({ detail }) {
    return (
        <section className="residential-block" data-reveal>
            <div className="residential-header">
                <p className="eyebrow">{detail.eyebrow}</p>
                <h3>{detail.title}</h3>
            </div>

            <figure className="residential-hero">
                <img src={detail.heroImage.src} alt={detail.heroImage.alt} loading="lazy" />
            </figure>

            <div className="residential-copy">
                {detail.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>

            <section className="residential-block">
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

            <section className="residential-block">
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

            <section className="residential-block">
                <div className="residential-visual-grid">
                    <figure className="residential-visual-card">
                        <img src={detail.landscapeImage.src} alt={detail.landscapeImage.alt} loading="lazy" />
                    </figure>
                    <figure className="residential-visual-card residential-interior-card">
                        <span>{detail.featureLabel || 'INTERIOR DESIGN'}</span>
                    </figure>
                </div>
            </section>
        </section>
    );
}

export default function CommercialServiceContent({ workPlace, hospitality }) {
    if (!workPlace || !hospitality) return null;

    return (
        <section className="section service-detail-page" id="services">
            <div className="container">
                <div className="section-head residential-header" data-reveal>
                    <p className="eyebrow">Architectural Design | Commercial</p>
                    <h2>Commercial Architecture</h2>
                </div>

                <CommercialDetailSection detail={workPlace} />
                <CommercialDetailSection detail={hospitality} />
            </div>
        </section>
    );
}
