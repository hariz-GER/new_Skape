'use client';

import { withBasePath, withBasePathHash } from '../lib/paths';

export default function About() {
    const philosophyImagePrimary = withBasePath('/assets/about-philosophy-1.jpg');
    const philosophyImageSecondary = withBasePath('/assets/about-philosophy-2.jpg');

    const coreValues = [
        {
            title: 'Structural Integrity',
            text: 'With three decades in the construction industry, "good enough" is never an option. We believe that beauty is meaningless if it is not built to last. Our designs are grounded in technical excellence and a deep respect for engineering.'
        },
        {
            title: 'Visionary Precision',
            text: 'We look at the big picture without ever losing sight of the smallest detail. Whether we are pouring a foundation or selecting a textile, we execute with a level of precision that only comes from a lifetime of experience.'
        },
        {
            title: 'Authentic Collaboration',
            text: 'We view our clients as partners in the creative process. We listen to the unspoken needs of a space and the explicit dreams of the owner, ensuring the final result is a true reflection of their identity.'
        },
        {
            title: 'Elegance Through Simplicity',
            text: 'We believe that the most sophisticated designs are often the simplest. We strive to create shapes that are clean, uncluttered, and functional, allowing the quality of craftsmanship to speak for itself.'
        },
        {
            title: 'Adaptive Innovation',
            text: 'While we value traditional techniques learned over 30 years, we embrace modern technology and sustainable practices. We are constantly evolving our methods to provide cutting-edge solutions for the 21st-century home.'
        },
        {
            title: 'End-to-End Accountability',
            text: 'By managing both the construction and the interior design, we offer a rare, unified accountability. We take full responsibility for the project journey from the first blueprint to the final decor.'
        }
    ];

    return (
        <section className="section about-page" id="about">
            <div className="container">
                <div className="about-hero" data-reveal>
                    <div className="about-hero-overlay">
                        <p className="eyebrow">About</p>
                        <h1>Skape · Shape of Design</h1>
                        <p className="about-hero-lead">
                            Where 30 years of construction intelligence meets a modern interior vision for timeless,
                            deeply personal spaces.
                        </p>
                        <div className="about-metrics">
                            <div className="about-metric">
                                <span>30+</span>
                                <p>Years in Construction</p>
                            </div>
                            <div className="about-metric">
                                <span>4+</span>
                                <p>Years in Interior Design</p>
                            </div>
                            <div className="about-metric">
                                <span>1</span>
                                <p>End-to-End Studio</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-details">
                    <article className="about-block about-block-intro" data-reveal>
                        <h2>The Story</h2>
                        <p>
                            I am a creator driven by the belief that every structure tells a story. With a career
                            spanning over 30 years in the construction industry, I have dedicated my life to mastering
                            the technical complexities of the built environment. My journey began with a focus on the
                            structural integrity and skeletal precision of buildings, the "bones" that allow a space to
                            exist.
                        </p>
                        <p>
                            However, my vision evolved. For the past four years, I have expanded my practice into
                            interior design to bridge the gap between architectural strength and aesthetic soul. As the
                            founder of Shape of Design, I view myself as an architect of form and function. I do not
                            just build walls; I curate the experiences that happen within them. By combining three
                            decades of engineering logic with a fresh, modern approach to interiors, I provide a
                            holistic perspective that ensures every project is as enduring as it is beautiful.
                        </p>
                    </article>

                    <article className="about-block about-block-philosophy" data-reveal>
                        <h3>Interior Design Philosophy</h3>
                        <p>
                            At Shape of Design, our philosophy is rooted in the Science of Space. We believe that
                            interior design is not merely an aesthetic layer applied to a room; it is the final, most
                            intimate stage of architecture. Our approach is defined by the seamless integration of
                            structural history and modern living. We believe that a space must perform before it can
                            please.
                        </p>
                        <div className="about-philosophy-gallery">
                            <figure className="about-philosophy-photo">
                                <img
                                    src={philosophyImagePrimary}
                                    alt="Contemporary interior with layered textures and warm natural light"
                                    loading="lazy"
                                    onError={(event) => {
                                        if (event.currentTarget.dataset.fallbackApplied === '1') return;
                                        event.currentTarget.dataset.fallbackApplied = '1';
                                        event.currentTarget.src = philosophyImageSecondary;
                                    }}
                                />
                            </figure>
                            <figure className="about-philosophy-photo">
                                <img
                                    src={philosophyImageSecondary}
                                    alt="Refined interior composition with balanced form and material contrast"
                                    loading="lazy"
                                    onError={(event) => {
                                        if (event.currentTarget.dataset.fallbackApplied === '1') return;
                                        event.currentTarget.dataset.fallbackApplied = '1';
                                        event.currentTarget.src = philosophyImagePrimary;
                                    }}
                                />
                            </figure>
                        </div>
                        <p>
                            Because of our 30-year foundation in construction, our design process is uniquely informed
                            by what is possible, not just what is fashionable. We prioritize honest materials,
                            intentional light, and ergonomic flow. We strip away the unnecessary to reveal the inherent
                            shape of a design. To us, luxury is found in the perfect alignment of a client&apos;s
                            lifestyle with the physical environment. We do not follow trends; we create environments
                            that feel inevitable, timeless, and deeply personal.
                        </p>
                    </article>

                    <article className="about-block about-block-values" data-reveal>
                        <h3>Core Values</h3>
                        <p>
                            Our core values are the pillars upon which Shape of Design was built. They represent 30
                            years of construction grit and the refined elegance of our interior studio.
                        </p>
                        <ul className="about-values">
                            {coreValues.map((value) => (
                                <li key={value.title}>
                                    <strong>{value.title}:</strong> {value.text}
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="about-block about-block-studio" data-reveal>
                        <h3>About My Studio</h3>
                        <p>
                            Shape of Design is a multidisciplinary firm where 30 years of construction expertise meets
                            a new era of interior innovation. Founded on the principle that architecture and interiors
                            are inseparable, our studio offers a full-circle design experience. We handle the heavy
                            lifting of construction and the delicate art of interior styling under one roof. Our legacy
                            is built on thousands of square feet of realized dreams, and our future is dedicated to
                            shaping spaces that inspire, comfort, and endure.
                        </p>
                    </article>

                    <div className="about-cta-card" data-reveal>
                        <h3>Start Your Project</h3>
                        <p>Tell us what you want to build, renovate, or redesign. We will take it from concept to completion.</p>
                        <div className="about-actions">
                        <a href={withBasePathHash('#contact')} className="btn btn-primary btn-min">
                            Contact Us
                        </a>
                        <a href={withBasePathHash('#contact')} className="btn btn-line btn-min">
                            Forms
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
