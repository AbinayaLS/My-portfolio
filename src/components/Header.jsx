import { useEffect, useState } from 'react';

const LINKS = [
  ['Home', '#'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Certifications', '#certifications'],
  ['Achievements', '#achievements'],
  ['Contact', '#contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [activeSection, setActiveSection] = useState('#');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'dark'; } catch { return 'dark'; }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch { /* ignore */ }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShrink(scrollY > 40);

      // Scroll progress percentage
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((scrollY / docHeight) * 100);
      }

      // Active section spy
      const sections = LINKS.map(([, href]) => href.replace('#', '')).filter(Boolean);
      let current = '#';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            current = `#${id}`;
            break;
          }
        }
      }
      if (scrollY < 120) current = '#';
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header id="siteHeader" className={shrink ? 'shrink' : ''}>
        {/* Interactive reading scroll progress bar */}
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

        <div className="container">
          <a href="#" className="brand" aria-label="Abinaya L S Home">
            <span className="logo-badge">&lt;/&gt;</span>
            <span className="brand-name">Abinaya <span className="accent">L S</span></span>
          </a>

          <nav className="links" aria-label="Main Navigation">
            {LINKS.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={activeSection === href ? 'active' : ''}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="nav-right">
            <button
              className="theme-btn"
              aria-label="Toggle light or dark theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <span className="theme-icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
            </button>

            <a href="#contact" className="btn btn-primary btn-sm hire-btn">
              <span className="status-ping" />
              <span>Let's Connect</span>
            </a>

            <button
              className="hamburger"
              aria-label={open ? 'Close Menu' : 'Open Menu'}
              onClick={() => setOpen(!open)}
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        <div className={`mobile-menu${open ? ' open' : ''}`}>
          {LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={activeSection === href ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </header>
    </>
  );
}
