const EXPERIENCES = [
  {
    role: 'Full Stack Development Intern',
    company: 'KaaShiv InfoTech',
    location: 'Chennai, Tamil Nadu',
    duration: '6 Months (Feb – Jul 2025)',
    description: [
      'Completed comprehensive Full Stack Development (JavaScript & Node.js) training.',
      'Developed responsive, dynamic web applications with modular frontend components.',
      'Constructed backend API logic and server endpoints using Node.js.',
      'Utilized Git version control for code tracking, branching, and team collaboration.',
    ],
    tech: ['JavaScript', 'Node.js', 'Express', 'HTML5', 'CSS3', 'Git'],
    cert: {
      img: 'kaashiv',
      title: 'Full Stack JavaScript — Internship Completion',
      issuer: 'KaaShiv InfoTech, Chennai',
      date: 'Feb – Jul 2025',
      thumb: '/images/kaashiv.jpg',
    },
  },
  {
    role: 'Full Stack Development Intern',
    company: 'Geosensing and Imaging Consultancy (GeoSI)',
    location: 'Kerala',
    duration: 'June 2026',
    description: [
      'Engineered core modules for the Actual Recruit Simulator platform using React.js, Node.js, and MongoDB.',
      'Built interactive UI interfaces with clean state management and integrated backend REST endpoints.',
      'Collaborated effectively within a full-stack engineering team to meet sprint milestones.',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'Git'],
    cert: {
      img: 'geosi',
      title: 'Full Stack Development — Internship',
      issuer: 'GeoSI, Kerala',
      date: '8–30 June 2026',
      thumb: '/images/geosi.jpg',
    },
  },
  {
    role: 'Full Stack Development Intern',
    company: 'Matt Engineering Solutions',
    location: 'Tamil Nadu',
    duration: 'June 2026',
    description: [
      'Contributed to client full-stack web applications across frontend and backend modules.',
      'Enhanced system reliability through structured unit testing and cross-browser debugging.',
      'Sharpened software development lifecycle (SDLC) comprehension and code refactoring.',
    ],
    tech: ['React.js', 'Node.js', 'Web Technologies', 'Debugging'],
    cert: {
      img: 'matt',
      title: 'Full-Stack — Internship',
      issuer: 'Matt Engineering Solutions',
      date: '8–26 June 2026',
      thumb: '/images/matt.jpg',
    },
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="kicker">work history</div>
        <h2 className="section-title reveal">Internship experience</h2>
        <p className="lead-text reveal">
          Hands-on full stack contributions across 3 software internships. Click any certificate to view the verified credential.
        </p>

        <div className="tl">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="tl-item reveal">
              <div className="tl-node" />
              <div className="tl-header">
                <div>
                  <h3 className="tl-role">{exp.role}</h3>
                  <div className="tl-company">
                    <span className="company-name">{exp.company}</span>
                    <span className="location-dot">·</span>
                    <span className="location-text">{exp.location}</span>
                  </div>
                </div>
                <div className="tl-duration-badge">{exp.duration}</div>
              </div>

              <ul className="tl-points">
                {exp.description.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>

              <div className="chip-row tl-chips">
                {exp.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>

              {/* Interactive Certificate preview card */}
              <div
                className="tl-cert interactive-hover"
                data-img={exp.cert.img}
                data-title={exp.cert.title}
                data-issuer={exp.cert.issuer}
                data-date={exp.cert.date}
                role="button"
                tabIndex={0}
                title="Click to view verified certificate"
              >
                <div className="tc-thumb-wrap">
                  <img src={exp.cert.thumb} alt={`${exp.company} certificate preview`} />
                  <span className="tc-zoom-icon">🔍</span>
                </div>
                <div className="tc-info">
                  <div className="tc-title">{exp.cert.title}</div>
                  <div className="tc-issuer">{exp.cert.issuer}</div>
                  <div className="tc-link">View verified certificate →</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
