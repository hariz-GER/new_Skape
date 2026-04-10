'use client';

export default function Contact({ form, onFieldChange, onSubmit, errors, status, isSubmitting }) {
    return (
        <section className="section" id="contact">
            <div className="container split contact-split">
                <div data-reveal>
                    <p className="eyebrow">Contact</p>
                    <h2>Let's Build Your Project</h2>
                    <p>Share your requirement and we will respond with next steps.</p>
                    <ul className="contact-list">
                        <li>Email: skapedesign.in@gmail.com</li>
                        <li>Phone: +91 9940482048</li>
                        <li>Phone: +91 9940340216</li>
                        <li>Studio: Kolathur, Chennai-600099, TAMIL NADU, INDIA</li>
                    </ul>
                </div>

                <form className="contact-form" onSubmit={onSubmit} noValidate data-reveal>
                    <div>
                        <label htmlFor="name">Full Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={onFieldChange}
                            disabled={isSubmitting}
                        />
                        <small className="error">{errors.name || ''}</small>
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={onFieldChange}
                            disabled={isSubmitting}
                        />
                        <small className="error">{errors.email || ''}</small>
                    </div>

                    <div>
                        <label htmlFor="message">Project Brief</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={form.message}
                            onChange={onFieldChange}
                            disabled={isSubmitting}
                        />
                        <small className="error">{errors.message || ''}</small>
                    </div>

                    <button type="submit" className="btn btn-primary btn-min" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                    </button>
                    <p className="form-status" aria-live="polite">
                        {status}
                    </p>
                </form>
            </div>
        </section>
    );
}
