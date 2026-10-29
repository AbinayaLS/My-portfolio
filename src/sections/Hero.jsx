import { useMemo } from 'react';

export default function Hero() {
  // Ambient subtle background particles
  const particles = useMemo(
    () => Array.from({ length: 14 }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 5,
      dur: 7 + Math.random() * 4,
      size: 3 + Math.random() * 3,
    })),
    []
  );

  return (
    <section className="hero">
      {/* Background glow meshes & subtle ambient particles */}
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="particles">
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-copy">
          {/* Availability badge */}
          <div className="eyebrow-wrap stagger">
            <span className="live-status-pill">
              <span className="live-dot" />
              <span>Open to Full-Time Software Roles &amp; Internships</span>
            </span>
          </div>

          {/* Name & Headline */}
          <h1 className="hero-title stagger">
            Hi, I'm <span className="accent-name">Abinaya L S</span>
          </h1>

          <div className="hero-headline-wrap stagger">
            <span className="headline-focus">Full-Stack Developer</span>
            <span className="headline-sep">|</span>
            <span className="headline-sub">Problem Solver</span>
          </div>

          {/* Recruiter-friendly introduction */}
          <p className="hero-description stagger">
            Final-year Computer Science &amp; Engineering student at Government College of Engineering, Erode. Passionate about building responsive full-stack applications using React.js, Node.js, and MongoDB, with hands-on internship experience.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions stagger">
            <a href="#projects" className="btn btn-gold glow-btn">
              <span>View My Projects</span>
              <span className="btn-icon">→</span>
            </a>
            <a
              href="/Abinaya_LS_Resume.pdf"
              download="Abinaya_LS_Resume.pdf"
              className="btn btn-ghost"
              title="Download Abinaya's Resume (PDF)"
            >
              <span className="btn-icon">⬇</span>
              <span>Download Resume</span>
            </a>
          </div>

          {/* Statistics Grid */}
          <div className="hero-metrics stagger">
            <div className="metric-card">
              <div className="metric-number">3+</div>
              <div className="metric-label">Internships</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">8.4</div>
              <div className="metric-label">B.E. CGPA</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">3+</div>
              <div className="metric-label">Projects</div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="social-row stagger">
            <a
              className="social-icon"
              href="https://linkedin.com/in/abi-l-s"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn Profile"
              title="LinkedIn: in/abi-l-s"
            >
              <span>in</span>
            </a>
            <a
              className="social-icon"
              href="https://github.com/AbinayaLS"
              target="_blank"
              rel="noopener"
              aria-label="GitHub Profile"
              title="GitHub: AbinayaLS"
            >
              <span>GH</span>
            </a>
            <a
              className="social-icon"
              href="mailto:lsabinaya001@gmail.com"
              aria-label="Direct Email"
              title="Email: lsabinaya001@gmail.com"
            >
              <span>✉</span>
            </a>
          </div>
        </div>

        {/* Profile photo with subtle glow & well-positioned, subtle tech badges */}
        <div className="portrait-stage">
          <div className="portrait-glow-ring" />
          <div className="portrait-blob" />
          <div className="portrait-orbit" />


          <div className="portrait-spark">✦</div>
          <img
            className="portrait-photo"
            src="/images/portrait.webp"
            alt="Abinaya L S — Full Stack Developer"
          />
        </div>
      </div>
    </section>
  );
}
