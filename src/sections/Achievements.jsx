const AWARDS = [
  {
    icon: '🏆',
    title: 'First Prize — Smart Campus Hackathon 2026',
    issuer: 'Government College of Engineering, Erode',
    detail: 'Awarded 1st place among competing engineering teams for developing the Student Event Tracking System, a campus-wide real-time event coordination platform.',
    badge: '1st Place Winner',
    highlight: 'Campus Innovation Champion',
  },
  {
    icon: '🇮🇳',
    title: 'Smart India Hackathon (SIH) — National Level',
    issuer: 'Ministry of Education & AICTE',
    detail: 'Selected to represent Government College of Engineering at the national level hackathon, solving high-impact problem statements with innovative software solutions.',
    badge: 'National Finalist',
    highlight: 'Selected College Representative',
  },
];

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <div className="kicker">honors &amp; awards</div>
        <h2 className="section-title reveal">Achievements &amp; Recognitions</h2>
        <p className="lead-text reveal">
          Validation of technical innovation and leadership across college and national competitions.
        </p>

        <div className="grid grid-2 reveal">
          {AWARDS.map((award, i) => (
            <div key={i} className="card achievement-card interactive-hover">
              <div className="achievement-header">
                <div className="achievement-icon-wrap">
                  <span className="achievement-icon">{award.icon}</span>
                </div>
                <span className="achievement-pill">{award.badge}</span>
              </div>

              <h3 className="achievement-title">{award.title}</h3>
              <div className="achievement-issuer">{award.issuer}</div>
              <p className="achievement-detail">{award.detail}</p>

              <div className="achievement-footer">
                <span className="achievement-highlight">⭐ {award.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
