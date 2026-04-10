'use client';

import { useEffect, useState } from 'react';

const HERO_SLIDES = [
  {
    title: 'Cannon Residence',
    category: 'Residential Portfolio',
    location: 'Hampstead, London',
    description:
      'A Victorian house conversion shaped around light, depth, and generous family living.',
    image: '/assets/residential-hero.jpg',
  },
  {
    title: 'Volume + Light',
    category: 'Architecture + Interiors',
    location: 'Lower Ground Transformation',
    description:
      'Open-plan levels are connected with a dramatic vertical void and sculptural circulation.',
    image: '/assets/about-philosophy-reference.jpg',
  },
  {
    title: 'Material Contrast',
    category: 'Design Details',
    location: 'Joinery + Bespoke Furniture',
    description:
      'Dark timber, pale stone, and crafted brass accents balance warmth with precision.',
    image: '/assets/residential-landscape.jpg',
  },
];

const PLAN_VIEWS = [
  {
    label: 'Ground Floor',
    image: '/assets/about-philosophy-1.jpg',
    description: 'Public living spine with dining, kitchen, and reception arranged around a central axis.',
  },
  {
    label: 'Lower Ground',
    image: '/assets/about-philosophy-2.jpg',
    description:
      'A connected family level with garden-facing glazing and a double-height internal relationship.',
  },
];

export default function Page() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activePlan, setActivePlan] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timeoutMs = prefersReducedMotion ? 180 : 1700;
    const timer = window.setTimeout(() => setShowIntro(false), timeoutMs);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-cp-reveal]'));
    if (!('IntersectionObserver' in window)) {
      targets.forEach((node) => node.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16 }
    );

    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const onFieldChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const createMailtoLink = ({ name, email, phone, message }) => {
    const subject = encodeURIComponent(`New inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nProject Brief:\n${message}`
    );
    return `mailto:skapedesign.in@gmail.com?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const cleanPayload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
    };

    if (cleanPayload.name.length < 2) {
      setStatus('Please enter your full name.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanPayload.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    if (cleanPayload.message.length < 10) {
      setStatus('Please share at least 10 characters about your project.');
      return;
    }

    const mailtoLink = createMailtoLink(cleanPayload);

    try {
      setIsSubmitting(true);
      setStatus('Sending your inquiry...');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanPayload),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        if (response.status === 404 || response.status === 405) {
          window.location.href = mailtoLink;
          setStatus('This deployment is static. Your email app was opened.');
          return;
        }
        setStatus(result.error || 'Unable to send right now. Please try again shortly.');
        return;
      }

      setStatus('Thank you. Your inquiry has been received.');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (_error) {
      window.location.href = mailtoLink;
      setStatus('Unable to reach the endpoint here. Your email app was opened instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cp-site">
      {showIntro && (
        <div className="cp-intro" aria-hidden="true">
          <div className="cp-intro-mark">SKAPE</div>
          <p>Architecture + Interior Design</p>
        </div>
      )}

      <header className="cp-header">
        <a href="#" className="cp-logo" aria-label="Skape Home">
          SKAPE
        </a>
        <nav className="cp-nav" aria-label="Primary">
          <a href="#portfolio">Portfolio</a>
          <a href="#story">Story</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="cp-hero" id="portfolio">
          <div
            className="cp-hero-track"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            aria-live="polite"
          >
            {HERO_SLIDES.map((slide) => (
              <article key={slide.title} className="cp-slide">
                <div
                  className="cp-slide-media"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  role="img"
                  aria-label={slide.title}
                />
              </article>
            ))}
          </div>

          <div className="cp-hero-vignette" />

          <div className="cp-hero-content" data-cp-reveal>
            <p className="cp-kicker">{HERO_SLIDES[activeSlide].category}</p>
            <h1>{HERO_SLIDES[activeSlide].title}</h1>
            <p className="cp-location">{HERO_SLIDES[activeSlide].location}</p>
            <p className="cp-description">{HERO_SLIDES[activeSlide].description}</p>

            <div className="cp-hero-controls">
              <button type="button" onClick={prevSlide} aria-label="Previous slide">
                Prev
              </button>
              <button type="button" onClick={nextSlide} aria-label="Next slide">
                Next
              </button>
            </div>

            <div className="cp-dots" aria-hidden="true">
              {HERO_SLIDES.map((_, index) => (
                <span key={index} className={index === activeSlide ? 'is-active' : ''} />
              ))}
            </div>
          </div>
        </section>

        <section className="cp-brief" id="story">
          <div className="cp-panel cp-panel-image" data-cp-reveal>
            <img src="/assets/about-philosophy-reference.jpg" alt="Project overview" />
            <p>
              Hampstead, London
              <br />
              Victorian conversion + basement extension
              <br />
              Architecture, Interiors, and Construction
              <br />
              3,300 sqft
            </p>
          </div>

          <div className="cp-panel cp-panel-text" data-cp-reveal>
            <span className="cp-line" />
            <h2>Design Brief</h2>
            <p>
              Cannon Residence reimagines a Victorian shell into a contemporary family home. The concept
              balances openness and intimacy while preserving the character of the original structure.
            </p>
            <p>
              Our focus was to create flowing volumes, precise natural lighting, and a calm material
              palette that allows architectural moments to stand out.
            </p>
          </div>
        </section>

        <section className="cp-fullbleed" data-cp-reveal>
          <img src="/assets/residential-landscape.jpg" alt="Full-width residential interior" />
        </section>

        <section className="cp-grid-two">
          <article data-cp-reveal>
            <img src="/assets/about-philosophy-1.jpg" alt="Architecture detail one" />
          </article>
          <article data-cp-reveal>
            <img src="/assets/about-philosophy-2.jpg" alt="Architecture detail two" />
          </article>
        </section>

        <section className="cp-dark-split">
          <div className="cp-dark-empty" />
          <div className="cp-dark-content" data-cp-reveal>
            <span className="cp-line" />
            <h2>Architecture</h2>
            <p>
              The central staircase acts as a vertical light tunnel, linking all levels and creating a
              shifting play of shadows through the day.
            </p>
            <p>
              A dramatic void between lower ground and ground floor introduces scale while maintaining a
              warm, livable atmosphere.
            </p>
          </div>
        </section>

        <section className="cp-stack">
          <div className="cp-stack-media">
            <img src="/assets/residential-hero.jpg" alt="Interior composition" data-cp-reveal />
            <img src="/assets/hero-bg.jpg" alt="Material mood" data-cp-reveal />
          </div>

          <div className="cp-stack-copy" data-cp-reveal>
            <h2>Interior Design</h2>
            <p>
              Soft neutral walls amplify daylight while timber textures introduce tactility and warmth.
              The result is gallery-like yet comfortable for daily family life.
            </p>
            <p>
              Brass, marble, and custom joinery provide carefully edited contrast, turning functional
              zones into crafted moments.
            </p>
          </div>
        </section>

        <section className="cp-plan-view" data-cp-reveal>
          <div className="cp-plan-tabs" role="tablist" aria-label="Plan Views">
            {PLAN_VIEWS.map((view, index) => (
              <button
                key={view.label}
                type="button"
                role="tab"
                aria-selected={activePlan === index}
                onClick={() => setActivePlan(index)}
                className={activePlan === index ? 'is-active' : ''}
              >
                {view.label}
              </button>
            ))}
          </div>
          <div className="cp-plan-stage">
            <img src={PLAN_VIEWS[activePlan].image} alt={PLAN_VIEWS[activePlan].label} />
            <p>{PLAN_VIEWS[activePlan].description}</p>
          </div>
        </section>

        <section className="cp-fullbleed" data-cp-reveal>
          <img src="/assets/about-philosophy-reference.jpg" alt="Feature space" />
        </section>

        <section className="cp-dark-split cp-awards">
          <div className="cp-dark-empty" />
          <div className="cp-dark-content" data-cp-reveal>
            <span className="cp-line" />
            <h2>Award Recognition</h2>
            <p>The Sunday Times British Homes Awards</p>
            <ul>
              <li>Winner - Best Interior Design</li>
              <li>Highly Commended - Home Transformation</li>
            </ul>
          </div>
        </section>

        <section className="cp-grid-two">
          <article data-cp-reveal>
            <img src="/assets/about-philosophy-2.jpg" alt="Detail shot three" />
          </article>
          <article data-cp-reveal>
            <img src="/assets/about-philosophy-1.jpg" alt="Detail shot four" />
          </article>
        </section>

        <section className="cp-dark-split">
          <div className="cp-dark-empty" />
          <div className="cp-dark-content" data-cp-reveal>
            <span className="cp-line" />
            <h2>Furniture + Joinery</h2>
            <p>
              Bespoke pieces were designed for each room to maintain spatial continuity, from kitchen
              islands to storage walls and fitted bedroom systems.
            </p>
            <p>
              Each item was proportioned to the architecture, so furniture feels integrated rather than
              layered on top.
            </p>
          </div>
        </section>

        <section className="cp-contact" id="contact">
          <div className="cp-contact-intro" data-cp-reveal>
            <h2>Get in Touch</h2>
            <p>
              Tell us about your project and we will arrange a consultation to discuss architecture,
              interior design, and build strategy.
            </p>
          </div>

          <form className="cp-form" data-cp-reveal onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={onFieldChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={onFieldChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={onFieldChange}
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Project Brief"
              value={form.message}
              onChange={onFieldChange}
              required
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>
            {status && <p className="cp-form-status">{status}</p>}
          </form>
        </section>

        <section className="cp-next" data-cp-reveal>
          <a className="cp-next-card" href="#portfolio">
            <img src="/assets/residential-hero.jpg" alt="Next project preview" />
            <div>
              <span>Residential</span>
              <h3>Explore More Projects</h3>
            </div>
          </a>
        </section>
      </main>

      <footer className="cp-footer">Skape Architecture Studio</footer>

      <style jsx global>{`
        .cp-site,
        .cp-site * {
          cursor: auto;
        }

        .cp-site {
          --cp-bg: #111214;
          --cp-bg-soft: #181a1f;
          --cp-paper: #f3f0e8;
          --cp-text: #efefef;
          --cp-ink: #121212;
          --cp-muted: #a8abb4;
          --cp-line: rgba(255, 255, 255, 0.2);
          --cp-line-dark: rgba(16, 16, 16, 0.23);
          --cp-ease: 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          background: var(--cp-bg);
          color: var(--cp-text);
          font-family: 'Manrope', sans-serif;
          min-height: 100vh;
        }

        .cp-intro {
          position: fixed;
          inset: 0;
          z-index: 80;
          display: grid;
          place-items: center;
          gap: 12px;
          background: #efede6;
          color: #1f1f1f;
          text-transform: uppercase;
          animation: cpIntroOut 1.3s ease 0.75s forwards;
        }

        .cp-intro-mark {
          font: 500 clamp(2rem, 6vw, 4rem) 'Cinzel', serif;
          letter-spacing: 0.28em;
        }

        .cp-intro p {
          letter-spacing: 0.24em;
          font-size: 0.72rem;
        }

        @keyframes cpIntroOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        .cp-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          padding: 22px clamp(18px, 3vw, 42px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #fff;
          mix-blend-mode: difference;
        }

        .cp-logo {
          text-decoration: none;
          color: inherit;
          font: 600 0.94rem/1 'Cinzel', serif;
          letter-spacing: 0.24em;
        }

        .cp-nav {
          display: flex;
          gap: clamp(16px, 2.4vw, 34px);
        }

        .cp-nav a {
          text-decoration: none;
          color: inherit;
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .cp-hero {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #08090b;
        }

        .cp-hero-track {
          display: flex;
          width: 100%;
          height: 100vh;
          transition: transform 0.95s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .cp-slide {
          min-width: 100%;
          height: 100%;
        }

        .cp-slide-media {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          filter: grayscale(10%) saturate(90%);
          transform: scale(1.02);
        }

        .cp-hero-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(7, 8, 10, 0.75) 0%,
            rgba(8, 9, 10, 0.18) 42%,
            rgba(8, 9, 10, 0.66) 100%
          );
          pointer-events: none;
        }

        .cp-hero-content {
          position: absolute;
          left: min(8vw, 90px);
          bottom: clamp(34px, 8vh, 80px);
          max-width: min(740px, 88vw);
          transform: translateY(24px);
          opacity: 0;
          transition: opacity var(--cp-ease), transform var(--cp-ease);
        }

        .cp-kicker {
          font-size: 0.74rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 12px;
          color: rgba(255, 255, 255, 0.82);
        }

        .cp-hero-content h1 {
          margin: 0;
          font: 500 clamp(2rem, 6vw, 5rem) / 1.02 'Cinzel', serif;
          letter-spacing: 0.02em;
          text-wrap: balance;
        }

        .cp-location {
          margin-top: 10px;
          font-size: 0.84rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.78);
        }

        .cp-description {
          margin-top: 14px;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.6;
          max-width: 62ch;
        }

        .cp-hero-controls {
          display: flex;
          gap: 10px;
          margin-top: 28px;
        }

        .cp-hero-controls button {
          border: 1px solid rgba(255, 255, 255, 0.42);
          background: transparent;
          color: #fff;
          padding: 9px 18px;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 0.65rem;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .cp-hero-controls button:hover {
          background: #fff;
          color: #111;
        }

        .cp-dots {
          margin-top: 18px;
          display: flex;
          gap: 8px;
        }

        .cp-dots span {
          width: 28px;
          height: 2px;
          background: rgba(255, 255, 255, 0.35);
          transition: transform 0.3s ease, background 0.3s ease;
          transform-origin: left;
        }

        .cp-dots span.is-active {
          background: #fff;
          transform: scaleX(1.2);
        }

        .cp-brief,
        .cp-dark-split,
        .cp-contact,
        .cp-stack {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .cp-panel-image {
          background: #efede6;
          color: #181818;
          padding: clamp(28px, 6vw, 84px);
        }

        .cp-panel-image img {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          margin-bottom: 24px;
          border: 1px solid rgba(17, 17, 17, 0.1);
        }

        .cp-panel-image p {
          font-size: 0.79rem;
          line-height: 1.7;
          text-transform: uppercase;
          letter-spacing: 0.13em;
          opacity: 0.88;
        }

        .cp-panel-text {
          position: relative;
          background: #fcfbf8;
          color: var(--cp-ink);
          padding: clamp(32px, 7vw, 92px);
        }

        .cp-panel-text h2,
        .cp-dark-content h2,
        .cp-stack-copy h2,
        .cp-contact h2 {
          margin: 0 0 16px;
          font: 500 clamp(1.7rem, 3.6vw, 3rem) / 1.1 'Cinzel', serif;
        }

        .cp-panel-text p,
        .cp-dark-content p,
        .cp-stack-copy p,
        .cp-plan-stage p,
        .cp-contact p {
          color: inherit;
          line-height: 1.75;
          max-width: 58ch;
          opacity: 0.88;
        }

        .cp-line {
          display: inline-block;
          width: 44px;
          height: 1px;
          margin-bottom: 18px;
          background: currentColor;
          opacity: 0.7;
        }

        .cp-fullbleed img {
          width: 100%;
          min-height: 56vh;
          max-height: 90vh;
          object-fit: cover;
        }

        .cp-grid-two {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(14px, 1.8vw, 26px);
          padding: clamp(18px, 3vw, 30px);
          background: #111214;
        }

        .cp-grid-two img {
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
        }

        .cp-dark-split {
          background: #16171a;
        }

        .cp-dark-empty {
          min-height: 420px;
        }

        .cp-dark-content {
          position: relative;
          padding: clamp(32px, 7vw, 90px);
          border-left: 1px solid var(--cp-line);
          color: #f2f2f2;
        }

        .cp-awards ul {
          list-style: none;
          margin-top: 16px;
          display: grid;
          gap: 8px;
          font-size: 0.96rem;
          opacity: 0.93;
        }

        .cp-stack {
          background: #111214;
          align-items: start;
          gap: clamp(16px, 2.2vw, 24px);
          padding: clamp(18px, 2.8vw, 32px);
        }

        .cp-stack-media {
          display: grid;
          gap: clamp(14px, 2vw, 20px);
        }

        .cp-stack-media img {
          width: 100%;
          object-fit: cover;
        }

        .cp-stack-media img:first-child {
          aspect-ratio: 4 / 5;
        }

        .cp-stack-media img:last-child {
          aspect-ratio: 16 / 10;
        }

        .cp-stack-copy {
          position: sticky;
          top: 98px;
          align-self: start;
          padding: clamp(24px, 4vw, 46px);
          background: #1a1b20;
          border: 1px solid var(--cp-line);
        }

        .cp-plan-view {
          padding: clamp(36px, 7vw, 92px);
          background: #f5f3eb;
          color: #151515;
        }

        .cp-plan-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }

        .cp-plan-tabs button {
          border: 1px solid rgba(17, 17, 17, 0.24);
          background: transparent;
          color: inherit;
          padding: 10px 16px;
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .cp-plan-tabs button.is-active {
          background: #151515;
          color: #fff;
        }

        .cp-plan-stage {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 16px;
          max-width: 880px;
        }

        .cp-plan-stage img {
          width: 100%;
          border: 1px solid rgba(17, 17, 17, 0.17);
          background: #fff;
          object-fit: cover;
          max-height: 560px;
        }

        .cp-contact {
          background: #0f1012;
          padding: clamp(26px, 6vw, 82px);
          gap: clamp(16px, 2.2vw, 26px);
        }

        .cp-contact-intro {
          align-self: center;
        }

        .cp-form {
          display: grid;
          gap: 11px;
        }

        .cp-form input,
        .cp-form textarea {
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.24);
          background: transparent;
          color: #fff;
          padding: 12px 14px;
          font: inherit;
        }

        .cp-form button {
          justify-self: start;
          border: 1px solid #fff;
          background: #fff;
          color: #111;
          padding: 10px 18px;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }

        .cp-form button[disabled] {
          opacity: 0.65;
        }

        .cp-form-status {
          font-size: 0.84rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.82);
          max-width: 56ch;
        }

        .cp-next {
          padding: clamp(14px, 2vw, 26px);
          background: #111214;
        }

        .cp-next-card {
          position: relative;
          display: block;
          min-height: 320px;
          color: #fff;
          text-decoration: none;
          overflow: hidden;
        }

        .cp-next-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.03);
          transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          filter: saturate(88%);
        }

        .cp-next-card div {
          position: absolute;
          inset: auto auto 28px 26px;
          z-index: 2;
        }

        .cp-next-card span {
          display: inline-block;
          font-size: 0.74rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          margin-bottom: 6px;
        }

        .cp-next-card h3 {
          margin: 0;
          font: 500 clamp(1.4rem, 3vw, 2.4rem) / 1.1 'Cinzel', serif;
        }

        .cp-next-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.18));
          z-index: 1;
        }

        .cp-next-card:hover img {
          transform: scale(1.09);
        }

        .cp-footer {
          text-align: center;
          padding: 28px 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.11);
          background: #0f1012;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 0.68rem;
          color: rgba(255, 255, 255, 0.6);
        }

        [data-cp-reveal] {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity var(--cp-ease), transform var(--cp-ease);
        }

        [data-cp-reveal].is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
          .cp-brief,
          .cp-dark-split,
          .cp-contact,
          .cp-stack,
          .cp-grid-two {
            grid-template-columns: minmax(0, 1fr);
          }

          .cp-dark-empty {
            display: none;
          }

          .cp-dark-content {
            border-left: 0;
            border-top: 1px solid var(--cp-line);
          }

          .cp-stack-copy {
            position: relative;
            top: 0;
          }

          .cp-header {
            mix-blend-mode: normal;
          }
        }

        @media (max-width: 720px) {
          .cp-header {
            padding: 16px;
          }

          .cp-nav {
            gap: 14px;
          }

          .cp-nav a {
            font-size: 0.62rem;
          }

          .cp-hero-content {
            left: 16px;
            right: 16px;
            max-width: unset;
          }

          .cp-description {
            font-size: 0.94rem;
          }

          .cp-hero-controls button {
            padding: 8px 13px;
            font-size: 0.58rem;
          }

          .cp-grid-two {
            padding: 10px;
            gap: 10px;
          }

          .cp-contact {
            padding: 20px 14px 30px;
          }
        }
      `}</style>
    </div>
  );
}
