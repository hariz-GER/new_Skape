'use client';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <p>© {new Date().getFullYear()} Skape Architecture. All rights reserved.</p>
            </div>
        </footer>
    );
}
