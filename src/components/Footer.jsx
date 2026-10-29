export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="logo-badge">&lt;/&gt;</span>
            <span className="brand-name">Abinaya <span className="accent">L S</span></span>
          </div>
          <p className="footer-tagline">
            Final Year CSE Student · Government College of Engineering, Erode · Aspiring Full Stack Developer.
          </p>
        </div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <div>Built with React, Vite &amp; Modern CSS · Web3Forms Connected</div>
          <div>© {new Date().getFullYear()} Abinaya L S. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
