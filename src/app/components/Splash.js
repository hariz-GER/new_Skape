'use client';

import { withBasePath } from '../lib/paths';

const SPLASH_PARTICLES = Array.from({ length: 54 }, (_, index) => ({
  id: index,
  top: (index * 29) % 100,
  delay: (index * 0.12) % 3.2,
  duration: 2.9 + (index % 9) * 0.28,
  size: 3 + (index % 6) * 2,
  drift: 6 + (index % 11) * 2,
  alpha: (0.45 + (index % 5) * 0.12).toFixed(2),
}));

export default function Splash() {
  return (
    <div className="splash">
      <div className="splash-depth-light" />
      <div className="splash-blueprint-grid" />
      <div className="splash-blueprint-grid splash-blueprint-grid-secondary" />
      <div className="splash-particle-field">
        {SPLASH_PARTICLES.map((particle) => (
          <span
            key={particle.id}
            className="splash-particle"
            style={{
              '--particle-top': `${particle.top}`,
              '--particle-delay': `${particle.delay}`,
              '--particle-duration': `${particle.duration}`,
              '--particle-size': `${particle.size}`,
              '--particle-drift': `${particle.drift}`,
              '--particle-alpha': `${particle.alpha}`,
            }}
          />
        ))}
      </div>
      <div className="splash-vignette" />

      <div className="splash-curtain splash-curtain-top" />
      <div className="splash-curtain splash-curtain-bottom" />

      <div className="splash-logo-stage">
        <img src={withBasePath('/assets/logo.png')} alt="Skape" className="splash-logo" />
        <p className="splash-tagline">
          <span className="splash-tagline-text">Architecture | Interiors | Construction</span>
          <span className="splash-tagline-wipe" />
        </p>
      </div>
    </div>
  );
}
