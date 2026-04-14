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
    position: 'center',
  },
  {
    title: 'Volume + Light',
    category: 'Architecture + Interiors',
    location: 'Lower Ground Transformation',
    description:
      'Open-plan levels are connected with a dramatic vertical void and sculptural circulation.',
    image: '/assets/about-philosophy-reference.jpg',
    position: 'center 35%',
  },
  {
    title: 'Material Contrast',
    category: 'Design Details',
    location: 'Joinery + Bespoke Furniture',
    description:
      'Dark timber, pale stone, and crafted brass accents balance warmth with precision.',
    image: '/assets/residential-landscape.jpg',
    position: 'center',
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
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundPosition: slide.position || 'center',
                  }}
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
    </div>
  );
}
