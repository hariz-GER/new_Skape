'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function Services({ services }) {
    const router = useRouter();
    const pathname = usePathname();

    const serviceRoutes = {
        'planning applications': '/services/planning-applications'
    };

    const getServiceRoute = (title) => serviceRoutes[(title || '').toLowerCase()] || '';

    const onServiceActivate = (title) => {
        const targetRoute = getServiceRoute(title);
        if (!targetRoute || pathname === targetRoute) return;
        router.push(targetRoute);
    };

    return (
        <section className="section" id="services">
            <div className="container">
                <div className="section-head" data-reveal>
                    <p className="eyebrow">Services</p>
                    <h2>What We Offer</h2>
                </div>
                <div className="service-grid">
                    {services.map((service) => {
                        const route = getServiceRoute(service.title);
                        const isInteractive = Boolean(route);

                        return (
                            <article
                                className={`service-card ${isInteractive ? 'service-card-link' : ''}`}
                                data-reveal
                                key={service.title}
                                role={isInteractive ? 'button' : undefined}
                                tabIndex={isInteractive ? 0 : undefined}
                                aria-label={isInteractive ? `Open ${service.title}` : undefined}
                                onClick={isInteractive ? () => onServiceActivate(service.title) : undefined}
                                onKeyDown={
                                    isInteractive
                                        ? (event) => {
                                              if (event.key === 'Enter' || event.key === ' ') {
                                                  event.preventDefault();
                                                  onServiceActivate(service.title);
                                              }
                                          }
                                        : undefined
                                }
                            >
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.text}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
