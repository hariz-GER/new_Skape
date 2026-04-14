'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const services = [
  {
    icon: '◈',
    name: 'Architectural Design',
    desc: 'We craft buildings that harmonize form, function, and environment. From concept sketches to construction documentation, our architectural services deliver spaces that stand the test of time.',
    tags: ['Residential', 'Commercial', 'Institutional'],
  },
  {
    icon: '◉',
    name: 'Interior Design',
    desc: 'Our interior design experience creates spaces that feel personal, comfortable, and connected to the way you live. From materials and colors to furniture and lighting, we make the process simple and enjoyable.',
    tags: ['Concept', 'Execution', 'Styling'],
  },
  {
    icon: '◎',
    name: 'Home Renovation',
    desc: 'We offer a seamless renovation experience that transforms outdated spaces into functional, modern, and beautifully refined environments through clear planning and quality execution.',
    tags: ['Structural', 'Aesthetic', 'Full Scope'],
  },
  {
    icon: '◇',
    name: 'Planning Application',
    desc: 'We provide thoughtful residential planning that transforms ideas into well-organized, efficient living spaces with strong compliance and practical clarity.',
    tags: ['Permissions', 'Compliance', 'Regulation'],
  },
  {
    icon: '◈',
    name: 'Create & Construct',
    desc: 'Our construction services focus on delivering high-quality, durable, and precisely executed spaces with strict quality control and on-site supervision.',
    tags: ['Build', 'Manage', 'Deliver'],
  },
  {
    icon: '◉',
    name: 'Conservation & Heritage',
    desc: 'We balance preservation of historic character with modern needs through sensitive restoration and thoughtful contemporary intervention.',
    tags: ['Heritage', 'Restoration', 'Conservation'],
  },
];

const projects = {
  mythiri: {
    key: 'mythiri',
    category: 'residential',
    tag: 'Residential · Interior Design',
    name: 'Ms. Mythiri',
    subtitle: 'Chennai Residence',
    desc: 'A harmonious blend of modern comfort and subtle elegance, tailored to the lifestyle and preferences of the client in Chennai.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
    brief:
      'The interior design for Mythiri in Chennai was envisioned as a harmonious blend of modern comfort and subtle elegance, tailored to the lifestyle and preferences of the client.',
    interior:
      'For Mythiri, we designed interiors that unite style, comfort, and practicality. The design balances openness with privacy while enhancing daily living through thoughtful lighting and storage.',
  },
  antony: {
    key: 'antony',
    category: 'residential',
    tag: 'Residential · Architecture',
    name: 'Mr. Antony Residence',
    subtitle: 'Chennai',
    desc: "Modern Tropical Contemporary blending clean aesthetics with warmth, natural materials, and Chennai's climate considerations.",
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
    brief:
      'This project involves the interior design of a residential home for Mr. Antony in Chennai with focus on a refined, comfortable, and climate-responsive living environment.',
    interior:
      "The concept is Modern Tropical Contemporary. Natural light is maximized throughout, while careful material selection ensures the home remains cool and comfortable year-round.",
  },
  leisure: {
    key: 'leisure',
    category: 'commercial',
    tag: 'Commercial · Interior Design',
    name: 'Leisure Hall',
    subtitle: 'Commercial Project',
    desc: 'A warm, contemporary leisure space blending natural materials with modern design elements for social engagement and comfort.',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80',
    brief:
      'This project creates a warm, contemporary leisure space that blends natural materials with modern design to deliver an inviting environment.',
    interior:
      'Curved furniture, layered pendant lights, and textured surfaces create a rich visual narrative. Natural light enhances the earthy palette and material contrasts.',
  },
  cultural: {
    key: 'cultural',
    category: 'commercial',
    tag: 'Commercial · Interior Design',
    name: 'Cultural Hall',
    subtitle: 'Commercial Project',
    desc: 'An elegant cultural hall for gatherings and formal events, balancing traditional aesthetics with a refined modern layout.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80',
    brief:
      'To create an elegant cultural hall for gatherings and ceremonies, blending traditional aesthetics with a contemporary spatial approach.',
    interior:
      'Vibrant tones, crafted wood detailing, and expressive ceiling elements establish grandeur while maintaining comfort for large audiences.',
  },
  dental: {
    key: 'dental',
    category: 'commercial',
    tag: 'Commercial · Institutional',
    name: 'Dental Clinic',
    subtitle: 'Institutional Project',
    desc: 'A modern dental clinic prioritizing patient comfort, efficient workflow, and a calm atmosphere through thoughtful space planning.',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80',
    brief:
      'Create a modern clinic that prioritizes patient comfort, clear movement, and a reassuring professional environment.',
    interior:
      'Teal accents, warm timber, and soft lighting shape a calm setting. Spatial zoning supports clinical efficiency while preserving privacy.',
  },
  renovation: {
    key: 'renovation',
    category: 'residential',
    tag: 'Residential · Renovation',
    name: 'Home Renovation',
    subtitle: 'Residential Project',
    desc: 'Transforming an outdated space into a functional, modern, and beautifully refined environment through precise planning.',
    img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80',
    brief:
      'A complete residential renewal with upgraded function, flow, and visual identity while preserving what matters most to the client.',
    interior:
      'We handled structural improvements and finish detailing through coordinated execution, resulting in a fresh, timeless, and personalized home.',
  },
};

const planningItems = [
  {
    number: '01',
    title: 'Planning Permissions',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
    text: 'We manage the planning permission process from architectural drawings to statutory documentation and authority coordination.',
  },
  {
    number: '02',
    title: 'Building Regulation',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    text: 'We ensure every project aligns with NBC guidelines and local municipal rules with documentation clarity and technical compliance.',
  },
];

const processSteps = [
  {
    number: 'Step 01',
    title: 'Consultation & Site Analysis',
    text: 'Understanding requirements, site conditions, and regulations to establish a clear approval strategy.',
  },
  {
    number: 'Step 02',
    title: 'Design & Documentation',
    text: 'Preparing detailed drawings and statutory documents in compliance with applicable rules.',
  },
  {
    number: 'Step 03',
    title: 'Submission & Coordination',
    text: 'Submitting applications and coordinating with authorities to resolve queries quickly.',
  },
  {
    number: 'Step 04',
    title: 'Approval & Compliance',
    text: 'Supporting until final approval so the project is legally clear and ready for execution.',
  },
];

const interactiveSelector =
  'a, button, .nd-project-card, .nd-service-card, input, textarea, label';

export default function Page() {
  const [loaderHidden, setLoaderHidden] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeProjectKey, setActiveProjectKey] = useState(null);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);
  const [customCursorEnabled, setCustomCursorEnabled] = useState(false);

  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  const projectList = Object.values(projects);
  const visibleProjects = useMemo(() => {
    if (activeCategory === 'all') return projectList;
    return projectList.filter((project) => project.category === activeCategory);
  }, [activeCategory, projectList]);

  const activeProject = activeProjectKey ? projects[activeProjectKey] : null;

  useEffect(() => {
    const onLoad = () => {
      window.setTimeout(() => setLoaderHidden(true), 2300);
    };

    if (document.readyState === 'complete') {
      onLoad();
      return undefined;
    }

    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsNavScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProjectKey(null);
        setMobileNavOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('.nd-reveal'));

    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const enableCursor = media.matches && !reducedMotion;
    setCustomCursorEnabled(enableCursor);
    if (!enableCursor) return undefined;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return undefined;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let frame = 0;

    const onMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.style.left = `${targetX}px`;
      cursor.style.top = `${targetY}px`;
      cursor.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const onPointerOver = (event) => {
      if (!event.target.closest(interactiveSelector)) return;
      cursor.classList.add('is-hover');
      ring.classList.add('is-hover');
    };

    const onPointerOut = (event) => {
      if (!event.target.closest(interactiveSelector)) return;
      const related = event.relatedTarget;
      if (related && related.closest(interactiveSelector)) return;
      cursor.classList.remove('is-hover');
      ring.classList.remove('is-hover');
    };

    const onMouseDown = () => {
      cursor.classList.add('is-pressed');
      ring.classList.add('is-pressed');
    };

    const onMouseUp = () => {
      cursor.classList.remove('is-pressed');
      ring.classList.remove('is-pressed');
    };

    const animate = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onPointerOver);
    document.addEventListener('mouseout', onPointerOut);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onPointerOver);
      document.removeEventListener('mouseout', onPointerOut);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const handleAnchorClick = () => {
    setMobileNavOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormSent(true);
    window.setTimeout(() => setIsFormSent(false), 3000);
  };

  return (
    <div className="nd-site">
      {customCursorEnabled && (
        <>
          <div className="nd-cursor" ref={cursorRef} aria-hidden="true" />
          <div className="nd-cursor-ring" ref={ringRef} aria-hidden="true" />
        </>
      )}

      <div className={`nd-loader ${loaderHidden ? 'hidden' : ''}`} aria-hidden={loaderHidden}>
        <div className="nd-loader-logo">SKAPE</div>
        <div className="nd-loader-line" />
        <div className="nd-loader-sub">Design & Construction · Est. 2002</div>
      </div>

      <div className={`nd-mobile-nav ${mobileNavOpen ? 'open' : ''}`}>
        <a href="#hero" onClick={handleAnchorClick}>
          Home
        </a>
        <a href="#services" onClick={handleAnchorClick}>
          Services
        </a>
        <a href="#portfolio" onClick={handleAnchorClick}>
          Portfolio
        </a>
        <a href="#about" onClick={handleAnchorClick}>
          About
        </a>
        <a href="#contact" onClick={handleAnchorClick}>
          Contact
        </a>
      </div>

      <nav className={`nd-nav ${isNavScrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nd-nav-logo">
          SK<span>A</span>PE
        </a>
        <ul className="nd-nav-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#planning">Planning</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button
          className="nd-nav-menu-btn"
          type="button"
          onClick={() => setMobileNavOpen((prev) => !prev)}
          aria-expanded={mobileNavOpen}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <section id="hero" className="nd-hero">
        <div className="nd-hero-bg" />
        <div className="nd-hero-grid" />
        <div className="nd-hero-content">
          <div className="nd-hero-eyebrow">Architecture & Interior Design Studio · Chennai</div>
          <h1 className="nd-hero-title">
            Design
            <br />
            <em>Matters.</em>
          </h1>
          <p className="nd-hero-subtitle">
            Designing spaces that inspire life, emotion, purpose and timeless human experience
          </p>
          <div className="nd-hero-cta">
            <a href="#portfolio" className="nd-btn-primary">
              View Portfolio
            </a>
            <a href="#contact" className="nd-btn-outline">
              Start a Project
            </a>
          </div>
        </div>
        <div className="nd-hero-scroll" aria-hidden="true">
          <span>Scroll</span>
          <div className="nd-scroll-line" />
        </div>
      </section>

      <section id="about-strip" className="nd-about-strip">
        <div className="nd-reveal">
          <div className="nd-strip-label">Who We Are</div>
          <h2 className="nd-strip-heading">
            Skape <em>Design</em>
            <br />
            & Build
          </h2>
          <div className="nd-strip-stat">
            <div>
              <div className="nd-stat-num">20+</div>
              <div className="nd-stat-label">Years of Excellence</div>
            </div>
            <div>
              <div className="nd-stat-num">150+</div>
              <div className="nd-stat-label">Projects Delivered</div>
            </div>
            <div>
              <div className="nd-stat-num">100%</div>
              <div className="nd-stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="nd-reveal nd-reveal-delay-2">
          <p className="nd-strip-text">
            At Skape Design, founded in 2002, we transform spaces into meaningful, functional and beautifully crafted environments. Our approach blends thoughtful planning, timeless aesthetics, and meticulous attention to detail.
          </p>
          <p className="nd-strip-text nd-strip-text-gap">
            From residential architecture and interior design to renovations and spatial planning, we provide personalized solutions tailored to each client while ensuring a clear and smooth delivery process.
          </p>
        </div>
      </section>

      <section id="services" className="nd-services">
        <div className="nd-section-header nd-reveal">
          <div className="nd-section-num">01</div>
          <div>
            <div className="nd-section-label">What We Do</div>
            <h2 className="nd-section-title">
              Our <em>Services</em>
            </h2>
          </div>
        </div>

        <div className="nd-services-grid">
          {services.map((service, index) => (
            <article
              key={service.name}
              className={`nd-service-card nd-reveal ${index % 3 === 1 ? 'nd-reveal-delay-1' : ''} ${
                index % 3 === 2 ? 'nd-reveal-delay-2' : ''
              }`}
            >
              <div className="nd-service-icon">{service.icon}</div>
              <h3 className="nd-service-name">{service.name}</h3>
              <p className="nd-service-desc">{service.desc}</p>
              <div className="nd-service-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="nd-service-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="nd-portfolio">
        <div className="nd-section-header nd-reveal">
          <div className="nd-section-num">02</div>
          <div>
            <div className="nd-section-label">Selected Work</div>
            <h2 className="nd-section-title">
              Our <em>Portfolio</em>
            </h2>
          </div>
        </div>

        <div className="nd-portfolio-tabs" role="tablist" aria-label="Project categories">
          <button
            type="button"
            className={`nd-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Projects
          </button>
          <button
            type="button"
            className={`nd-tab-btn ${activeCategory === 'residential' ? 'active' : ''}`}
            onClick={() => setActiveCategory('residential')}
          >
            Residential
          </button>
          <button
            type="button"
            className={`nd-tab-btn ${activeCategory === 'commercial' ? 'active' : ''}`}
            onClick={() => setActiveCategory('commercial')}
          >
            Commercial
          </button>
        </div>

        <div className="nd-portfolio-grid" id="portfolioGrid">
          {visibleProjects.map((project, index) => (
            <article
              key={project.key}
              className={`nd-project-card nd-reveal ${index % 3 === 1 ? 'nd-reveal-delay-1' : ''} ${
                index % 3 === 2 ? 'nd-reveal-delay-2' : ''
              }`}
              onClick={() => setActiveProjectKey(project.key)}
            >
              <img src={project.img} alt={project.name} loading="lazy" />
              <div className="nd-project-overlay">
                <div className="nd-project-tag">{project.tag}</div>
                <div className="nd-project-name">{project.name}</div>
                <div className="nd-project-desc">{project.desc}</div>
                <div className="nd-project-view">View Project →</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div
        className={`nd-modal-overlay ${activeProject ? 'open' : ''}`}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          setActiveProjectKey(null);
        }}
      >
        {activeProject && (
          <div className="nd-modal-box">
            <button
              type="button"
              className="nd-modal-close"
              onClick={() => setActiveProjectKey(null)}
              aria-label="Close project details"
            >
              ✕
            </button>
            <img className="nd-modal-img" src={activeProject.img} alt={activeProject.name} />
            <div className="nd-modal-body">
              <div className="nd-modal-tag">{activeProject.tag}</div>
              <div className="nd-modal-title">{activeProject.name}</div>
              <div className="nd-modal-subtitle">{activeProject.subtitle}</div>
              <div className="nd-modal-sections">
                <div>
                  <div className="nd-modal-section-title">Design Brief</div>
                  <p className="nd-modal-text">{activeProject.brief}</p>
                </div>
                <div>
                  <div className="nd-modal-section-title">Interior Design</div>
                  <p className="nd-modal-text">{activeProject.interior}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <section id="planning" className="nd-planning">
        <div className="nd-section-header nd-reveal">
          <div className="nd-section-num">03</div>
          <div>
            <div className="nd-section-label">Regulatory Services</div>
            <h2 className="nd-section-title">
              Planning <em>Applications</em>
            </h2>
          </div>
        </div>

        <div className="nd-planning-grid">
          {planningItems.map((item, index) => (
            <article
              key={item.title}
              className={`nd-planning-item nd-reveal ${index === 1 ? 'nd-reveal-delay-1' : ''}`}
            >
              <img className="nd-planning-img" src={item.image} alt={item.title} loading="lazy" />
              <div>
                <div className="nd-strip-label">{item.number}</div>
                <h3 className="nd-planning-title">{item.title}</h3>
                <p className="nd-planning-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="nd-process-steps">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className={`nd-step nd-reveal ${index === 1 ? 'nd-reveal-delay-1' : ''} ${
                index === 2 ? 'nd-reveal-delay-2' : ''
              } ${index === 3 ? 'nd-reveal-delay-3' : ''}`}
            >
              <div className="nd-step-num">{step.number}</div>
              <div className="nd-step-title">{step.title}</div>
              <p className="nd-step-desc">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="nd-about">
        <div className="nd-section-header nd-reveal">
          <div className="nd-section-num">04</div>
          <div>
            <div className="nd-section-label">Our Story</div>
            <h2 className="nd-section-title">
              About <em>Skape</em>
            </h2>
          </div>
        </div>

        <div className="nd-about-grid">
          <div className="nd-about-img-wrap nd-reveal">
            <img
              className="nd-about-img"
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"
              alt="Skape Design Studio"
              loading="lazy"
            />
            <div className="nd-about-accent-box">
              <div className="nd-about-accent-year">2002</div>
              <div className="nd-about-accent-label">Founded in Chennai</div>
            </div>
          </div>

          <div className="nd-reveal nd-reveal-delay-1">
            <blockquote className="nd-about-quote">
              "Designing spaces that inspire life, emotion, purpose, and timeless human experience."
            </blockquote>
            <p className="nd-about-bio">
              At Skape Design, we believe architecture is about creating environments that enrich everyday life. We bring over two decades of experience blending creativity with technical precision.
            </p>
            <p className="nd-about-bio">
              Our philosophy is rooted in function, emotion, and visual identity. Every project is approached collaboratively, translating client goals into clear, impactful spatial solutions.
            </p>
            <p className="nd-about-bio">
              We prioritize user-centric planning, sustainable choices, and careful detailing to produce spaces that remain relevant for years.
            </p>
            <a href="#contact" className="nd-btn-primary nd-about-cta">
              Work With Us
            </a>
          </div>
        </div>

        <div className="nd-philosophy-section">
          <div className="nd-philosophy-word">STOIC</div>
          <p className="nd-philosophy-text">
            Deliberate. Intentional. Enduring. We design not for trends but for time, creating spaces with clarity of purpose and commitment to craft.
          </p>
        </div>
      </section>

      <section id="contact" className="nd-contact">
        <div className="nd-section-header nd-reveal">
          <div className="nd-section-num">05</div>
          <div>
            <div className="nd-section-label">Get In Touch</div>
            <h2 className="nd-section-title">
              Start Your <em>Project</em>
            </h2>
          </div>
        </div>

        <div className="nd-contact-grid">
          <div className="nd-reveal">
            <h2 className="nd-contact-headline">
              Let's create something <em>remarkable</em> together.
            </h2>
            <p className="nd-contact-intro">
              Read more about our Create & Construct service, or contact us to discuss your project. We'd love to understand your vision and explore how we can help.
            </p>
            <div className="nd-contact-details">
              <div>
                <div className="nd-contact-item-label">Location</div>
                <div className="nd-contact-item-val">Chennai, Tamil Nadu, India</div>
              </div>
              <div>
                <div className="nd-contact-item-label">Studio</div>
                <div className="nd-contact-item-val">SKAPE! Design & Construction</div>
              </div>
              <div>
                <div className="nd-contact-item-label">Established</div>
                <div className="nd-contact-item-val">2002 — Est. over 20 years</div>
              </div>
              <div>
                <div className="nd-contact-item-label">Services</div>
                <div className="nd-contact-item-val">Architecture · Interior · Planning · Build</div>
              </div>
            </div>
          </div>

          <div className="nd-reveal nd-reveal-delay-2">
            <h3 className="nd-contact-form-title">Get in touch</h3>
            <p className="nd-contact-form-subtitle">
              Share your project goals and we will get back with the next steps.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="nd-form-row">
                <label className="nd-form-label" htmlFor="name">
                  Name *
                </label>
                <input id="name" className="nd-form-input" type="text" placeholder="Your full name" required />
              </div>

              <div className="nd-form-row">
                <label className="nd-form-label" htmlFor="phone">
                  Phone Number *
                </label>
                <input id="phone" className="nd-form-input" type="tel" placeholder="+91 00000 00000" required />
              </div>

              <div className="nd-form-row">
                <label className="nd-form-label" htmlFor="email">
                  Email Address *
                </label>
                <input id="email" className="nd-form-input" type="email" placeholder="your@email.com" required />
              </div>

              <div className="nd-form-row">
                <label className="nd-form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="nd-form-textarea"
                  placeholder="Tell us about your project..."
                  rows={5}
                />
              </div>

              <div className="nd-form-check">
                <input type="checkbox" id="privacy" required />
                <label className="nd-form-check-text" htmlFor="privacy">
                  I understand that my data will be stored in accordance with the privacy policy.
                </label>
              </div>

              <button className={`nd-form-submit ${isFormSent ? 'is-sent' : ''}`} type="submit">
                {isFormSent ? 'Message Sent ✓' : 'Submit Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="nd-footer">
        <div className="nd-footer-grid">
          <div>
            <div className="nd-footer-logo">
              SK<span>A</span>PE
            </div>
            <p className="nd-footer-tagline">
              Design & Construction studio based in Chennai. Transforming spaces since 2002 through architecture, interiors, and thoughtful construction.
            </p>
          </div>

          <div>
            <div className="nd-footer-col-title">Services</div>
            <ul className="nd-footer-links">
              <li>
                <a href="#services">Architectural Design</a>
              </li>
              <li>
                <a href="#services">Interior Design</a>
              </li>
              <li>
                <a href="#services">Home Renovation</a>
              </li>
              <li>
                <a href="#planning">Planning Applications</a>
              </li>
              <li>
                <a href="#services">Create & Construct</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="nd-footer-col-title">Portfolio</div>
            <ul className="nd-footer-links">
              <li>
                <a href="#portfolio">Residential</a>
              </li>
              <li>
                <a href="#portfolio">Commercial</a>
              </li>
              <li>
                <a href="#portfolio">Conservation</a>
              </li>
              <li>
                <a href="#portfolio">View All Projects</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="nd-footer-col-title">Studio</div>
            <ul className="nd-footer-links">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#about">Our Philosophy</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#contact">Start a Project</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="nd-footer-bottom">
          <div className="nd-footer-copy">© 2026 SKAPE Design & Construction · Chennai · All rights reserved</div>
          <div className="nd-footer-copy">Architecture · Interior Design · Build</div>
        </div>
      </footer>
    </div>
  );
}
