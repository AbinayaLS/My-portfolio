export default function Resume() {
  return (
    <section id="resume-anchor" style={{ paddingBottom: '20px' }}>
      <div className="container">
        <div className="kicker">official curriculum vitae</div>
        <h2 className="section-title reveal">Resume &amp; Credentials</h2>

        <div className="resume-box reveal interactive-hover">
          <div className="resume-left">
            <div className="resume-pdf-icon">
              <span>📄</span>
              <span className="pdf-tag">PDF</span>
            </div>
            <div>
              <h3 className="resume-filename">Abinaya_LS_Resume.pdf</h3>
              <p className="resume-sub">
                Comprehensive overview of my B.E. CSE coursework (CGPA 8.4), 3 Full Stack internships, hackathon awards, and technical skill set.
              </p>
              <div className="resume-meta-chips">
                <span className="chip">Full Stack</span>
                <span className="chip">React &amp; Node.js</span>
                <span className="chip">MongoDB</span>
                <span className="chip">NPTEL Elite</span>
              </div>
            </div>
          </div>

          <div className="resume-actions">
            <a
              href="/Abinaya_LS_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <span>View in Browser</span>
              <span className="btn-icon">↗</span>
            </a>
            <a
              href="/Abinaya_LS_Resume.pdf"
              download="Abinaya_LS_Resume.pdf"
              className="btn btn-gold glow-btn"
            >
              <span>Download PDF</span>
              <span className="btn-icon">⬇</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
