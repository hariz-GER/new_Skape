'use client';

export default function Portfolio({ filter, setFilter, filteredProjects, setActiveProjectId }) {
    return (
        <section className="section" id="portfolio">
            <div className="container">
                <div className="section-head" data-reveal>
                    <p className="eyebrow">Portfolio</p>
                    <h2>Residential + Commercial</h2>
                </div>

                <div className="filters" data-reveal>
                    {['all', 'residential', 'commercial'].map((type) => (
                        <button
                            key={type}
                            className={`filter-btn ${filter === type ? 'active' : ''}`}
                            onClick={() => setFilter(type)}
                        >
                            {type[0].toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="project-grid">
                    {filteredProjects.map((project) => (
                        <article className="project-card" data-reveal key={project.id}>
                            <img src={project.cover} alt={project.title} loading="lazy" />
                            <div className="project-overlay">
                                <p className="project-type">{project.banner}</p>
                                <h3>{project.title}</h3>
                                <p>{project.subtitle}</p>
                                <button className="inline-link" onClick={() => setActiveProjectId(project.id)}>
                                    View Project
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
