import { useState } from 'react';

const CERTS = [
  {
    id: 'nptel',
    img: 'nptel',
    title: 'Programming in Java',
    issuer: 'NPTEL · IIT Kharagpur',
    grade: 'Elite Grade, 85%',
    date: 'Jul – Oct 2025',
    category: 'Coursework',
    thumb: '/images/nptel.jpg',
    description: 'Advanced Java programming concepts, object-oriented paradigms, concurrency, and algorithm implementations certified by IIT Kharagpur.',
  },
  {
    id: 'infosys',
    img: 'infosys',
    title: 'Introduction to Python',
    issuer: 'Infosys Springboard',
    grade: 'Course Completion',
    date: 'Issued 21 March 2025',
    category: 'Coursework',
    thumb: '/images/infosys.jpg',
    description: 'Foundational programming constructs, data structures, and script development through the official Infosys Springboard platform.',
  },
  {
    id: 'kaashiv',
    img: 'kaashiv',
    title: 'Full Stack JavaScript Training',
    issuer: 'KaaShiv InfoTech, Chennai',
    grade: 'Internship Certified',
    date: 'Feb – Jul 2025',
    category: 'Internship',
    thumb: '/images/kaashiv.jpg',
    description: '6-month industrial internship certification covering end-to-end JavaScript, backend services, and web deployment.',
  },
  {
    id: 'geosi',
    img: 'geosi',
    title: 'Full Stack Web Development',
    issuer: 'GeoSI, Kerala',
    grade: 'Internship Certified',
    date: '8–30 June 2026',
    category: 'Internship',
    thumb: '/images/geosi.jpg',
    description: 'Full stack development internship focusing on React.js, Node.js, and MongoDB architecture on live simulation platforms.',
  },
  {
    id: 'matt',
    img: 'matt',
    title: 'Full-Stack Development',
    issuer: 'Matt Engineering Solutions',
    grade: 'Internship Certified',
    date: '8–26 June 2026',
    category: 'Internship',
    thumb: '/images/matt.jpg',
    description: 'Industry training on full-stack application modules, unit testing, and component debugging.',
  },
];

export default function Certifications() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? CERTS
    : CERTS.filter((c) => c.category === filter);

  return (
    <section id="certifications">
      <div className="container">
        <div className="kicker">verified credentials</div>
        <h2 className="section-title reveal">Certifications &amp; Licenses</h2>
        <p className="lead-text reveal">
          Accredited certifications from IIT Kharagpur (NPTEL), Infosys, and industrial training partners. Click any card to inspect the full certificate.
        </p>

        {/* Filter tabs */}
        <div className="filter-tabs-container reveal">
          <div className="filter-tabs" role="tablist">
            {['All', 'Coursework', 'Internship'].map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
                role="tab"
                aria-selected={filter === cat}
              >
                {cat} ({cat === 'All' ? CERTS.length : CERTS.filter((c) => c.category === cat).length})
              </button>
            ))}
          </div>
        </div>

        {/* Certificate grid */}
        <div className="grid grid-3 reveal">
          {filtered.map((cert) => (
            <div
              key={cert.id}
              className="card cert-card interactive-hover"
              data-img={cert.img}
              data-title={cert.title}
              data-issuer={`${cert.issuer} · ${cert.grade}`}
              data-date={cert.date}
              role="button"
              tabIndex={0}
              title="Click to view full certificate"
            >
              <div className="cert-thumb">
                <img src={cert.thumb} alt={cert.title} loading="lazy" />
                <div className="cert-overlay">
                  <span className="cert-zoom-btn">🔍 View Credential</span>
                </div>
              </div>

              <div className="cert-card-body">
                <div className="cert-tag-row">
                  <span className="cert-badge">{cert.grade}</span>
                  <span className="cert-cat">{cert.category}</span>
                </div>
                <h3 className="cert-title">{cert.title}</h3>
                <div className="issuer">{cert.issuer}</div>
                <div className="date">{cert.date}</div>
                <div className="view-link">Inspect Full Certificate →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
