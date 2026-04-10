'use client';

export default function ProjectDetail({ project, onClose }) {
    if (!project) return null;
    const detailSections =
        Array.isArray(project.detailSections) && project.detailSections.length
            ? project.detailSections
            : [
                  { title: 'Design Brief', content: [project.designBrief] },
                  { title: 'Interior Design', content: [project.interiorDesign] }
              ].filter((section) => section.content[0]);

    return (
        <div className="project-modal" id="project-view">
            <div className="modal-backdrop" onClick={onClose} />
            <div className="modal-content">
                <button className="modal-close" onClick={onClose} aria-label="Close project">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <div className="project-header-premium">
                    <p className="eyebrow">{project.banner}</p>
                    <h2>{project.title}</h2>
                    <p className="subtitle">{project.subtitle}</p>
                </div>

                <div className="container detail-grid-premium">
                    <div className="brief-section" data-reveal>
                        {detailSections.map((section) => {
                            const paragraphs = Array.isArray(section.content) ? section.content : [section.content];

                            return (
                                <article className="brief-card-premium" key={`${project.id}-${section.title}`}>
                                    <h3>{section.title}</h3>
                                    {paragraphs.filter(Boolean).map((paragraph, index) => (
                                        <p key={`${project.id}-${section.title}-${index}`}>{paragraph}</p>
                                    ))}
                                </article>
                            );
                        })}
                    </div>

                    <div className="photo-gallery-premium" data-reveal>
                        {project.gallery.map((image, index) => (
                            <figure className={`photo-item ${index === 0 ? 'main' : ''}`} key={image}>
                                <img src={image} alt={`${project.title} - ${index + 1}`} loading="lazy" />
                            </figure>
                        ))}
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="btn btn-line" onClick={onClose}>
                        Back to Portfolio
                    </button>
                </div>
            </div>
        </div>
    );
}
