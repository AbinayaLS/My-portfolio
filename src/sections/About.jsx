import { useState } from 'react';

const HIGHLIGHTS = [
  {
    icon: '🎓',
    title: 'B.E. Computer Science & Engineering',
    desc: 'Government College of Engineering, Erode',
    detail: 'Academic Excellence with 8.4/10 CGPA',
    badge: 'Final Year',
  },
  {
    icon: '💻',
    title: 'Full Stack Development',
    desc: '3 Real-World Industry Internships',
    detail: 'React.js, Node.js, Express, MongoDB, RESTful APIs, Git',
    badge: 'Hands-on',
  },
  {
    icon: '🏆',
    title: '1st Prize Hackathon Winner',
    desc: 'Smart Campus Hackathon 2026',
    detail: 'Student Event Tracking System built for college management',
    badge: 'Winner',
  },
  {
    icon: '🧠',
    title: 'Smart India Hackathon (SIH)',
    desc: 'National Level Selected Participant',
    detail: 'Selected to represent college in national innovation challenge',
    badge: 'National',
  },
];

const PILLARS = [
  {
    title: 'Frontend Engineering',
    desc: 'Crafting responsive, high-performance web applications using modern React, component modularity, and smooth CSS animations.',
    tags: ['React.js', 'Modern JavaScript', 'Responsive UI', 'State Management'],
  },
  {
    title: 'Backend & Database Architecture',
    desc: 'Designing RESTful endpoints with Node.js and Express, implementing secure database operations and schemas using MongoDB.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Engineering Practices',
    desc: 'Maintaining clean, maintainable code with Git version control, collaborative debugging, agile workflows, and end-to-end testing.',
    tags: ['Git & GitHub', 'VS Code', 'Agile Mindset', 'Problem Solving'],
  },
];

export default function About() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="about">
      <div className="container">
        <div className="kicker">about me</div>
        <h2 className="section-title reveal">Driven by curiosity, backed by hands-on engineering</h2>
        <p className="lead-text reveal">
          Bridging solid computer science fundamentals with real-world industry experience across full-stack applications.
        </p>

        <div className="about-wrap">
          {/* Narrative bio */}
          <div className="about-bio reveal">
            <p>
              I'm a final-year <strong>Computer Science &amp; Engineering</strong> student at Government College of Engineering, Erode, aspiring to launch my career as a <strong>Full Stack Software Developer</strong>.
            </p>
            <p>
              Through <strong>three intensive internships</strong> (KaaShiv InfoTech, GeoSI, and Matt Engineering Solutions), I have worked directly on live application modules—building intuitive user interfaces in React.js, developing REST APIs in Node.js, and integrating MongoDB databases.
            </p>
            <p>
              Beyond the classroom, I love taking ideas from concept to completion. That passion led my team to win <strong>1st Prize at the Smart Campus Hackathon</strong> for our Student Event Tracking System, as well as selection for the <strong>Smart India Hackathon (SIH)</strong> at the national level.
            </p>
            <p>
              I am currently seeking an entry-level Software Developer role where I can contribute to impactful software products, write clean code, and rapidly grow alongside high-caliber teams.
            </p>

            {/* Interactive pillar selector */}
            <div className="pillars-container">
              <div className="pillar-tabs" role="tablist">
                {PILLARS.map((p, idx) => (
                  <button
                    key={p.title}
                    className={`pillar-tab ${activePillar === idx ? 'active' : ''}`}
                    onClick={() => setActivePillar(idx)}
                    role="tab"
                    aria-selected={activePillar === idx}
                  >
                    {p.title}
                  </button>
                ))}
              </div>
              <div className="pillar-content">
                <p>{PILLARS[activePillar].desc}</p>
                <div className="chip-row">
                  {PILLARS[activePillar].tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive facts / credentials cards */}
          <div className="facts-grid reveal">
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className="fact-card interactive-hover">
                <div className="fact-header">
                  <span className="fact-icon">{h.icon}</span>
                  <span className="fact-badge">{h.badge}</span>
                </div>
                <div className="fact-body">
                  <h4>{h.title}</h4>
                  <div className="fact-desc">{h.desc}</div>
                  <div className="fact-detail">{h.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
