import { useState } from 'react';

const CATEGORIES = ['All', 'Full Stack', 'AI & Node.js', 'Hackathon Winners'];

const PROJECTS = [
  {
    id: 'event-tracker',
    title: 'Student Event Tracking System',
    category: 'Full Stack',
    isWinner: true,
    award: '🏆 1st Prize — Smart Campus Hackathon 2026',
    summary: 'A centralized web platform engineered for Government College of Engineering, Erode, to streamline campus event management, student registrations, and real-time coordinator updates.',
    details: [
      'Engineered an interactive student portal allowing students to view, filter, and register for campus academic and cultural events.',
      'Built coordinator dashboard for posting schedules, managing participant capacities, and viewing registrations in real-time.',
      'Reduced manual paperwork and event broadcast delays across college departments.',
    ],
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'CSS3'],
    period: '2025 – 2026',
    role: 'Full Stack Developer',
    github: 'https://github.com/AbinayaLS/Student-Event-Tracking-System',
  },
  {
    id: 'ai-interview',
    title: 'AI Interview Simulator',
    category: 'AI & Node.js',
    isWinner: false,
    award: '🤖 Powered by Google Gemini AI',
    summary: 'An intelligent mock interview platform that generates customized technical and aptitude questions, dynamically evaluates answers, and generates performance scoring with actionable feedback.',
    details: [
      'Integrated Google Gemini AI API to dynamically create customized questions tailored to specific engineering roles and experience levels.',
      'Built backend scoring pipeline with Node.js and MongoDB to store candidate response logs and historical progress.',
      'Provides candidates with instant evaluations: strengths, weaknesses, and model answers to elevate interview confidence.',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'Gemini AI API', 'JavaScript', 'HTML5/CSS3'],
    period: '2026',
    role: 'Full Stack & AI Integration Developer',
    github: 'https://github.com/AbinayaLS/ai-interview-simulator',
  },
  {
    id: 'alarm-clock',
    title: 'Advanced Digital Alarm Clock',
    category: 'Full Stack',
    isWinner: false,
    award: '⏱️ Responsive Frontend Web App',
    summary: 'A real-time digital alarm clock web application offering multi-alarm scheduling, custom tone alerts, snooze options, and intuitive controls.',
    details: [
      'Built a high-accuracy real-time clock engine with customizable 12-hour / 24-hour display format.',
      'Implemented multiple alarm scheduling with Web Audio API tone alerts and persistent local storage.',
      'Designed a sleek, dark-mode responsive interface optimized for desktop and mobile screens.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API', 'LocalStorage'],
    period: '2024',
    role: 'Frontend Developer',
    github: 'https://github.com/AbinayaLS/ADVANCED-ALARAM-CLOCK',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeCategory === 'All'
    ? PROJECTS
    : activeCategory === 'Hackathon Winners'
      ? PROJECTS.filter((p) => p.isWinner)
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects">
      <div className="container">
        <div className="kicker">portfolio showcase</div>
        <h2 className="section-title reveal">Featured projects</h2>
        <p className="lead-text reveal">
          From a hackathon-winning campus management system to an AI-driven interview coach.
        </p>

        {/* Category filter tabs */}
        <div className="filter-tabs-container reveal">
          <div className="filter-tabs" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive project cards */}
        <div className="grid grid-2 reveal">
          {filtered.map((proj) => (
            <div key={proj.id} className="card project-card interactive-hover">
              <div className="project-card-header">
                <span className={`project-award-badge ${proj.isWinner ? 'winner-badge' : ''}`}>
                  {proj.award}
                </span>
                <span className="project-period">{proj.period}</span>
              </div>

              <h3 className="project-title">{proj.title}</h3>
              <p className="project-summary">{proj.summary}</p>

              <div className="chip-row">
                {proj.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>

              <div className="project-actions">
                <button
                  type="button"
                  className="btn btn-sm btn-ghost project-detail-btn"
                  onClick={() => setSelectedProject(proj)}
                >
                  <span>Quick Details</span>
                  <span className="btn-icon">🔍</span>
                </button>

                {proj.github && (
                  <a
                    className="btn btn-sm btn-primary"
                    href={proj.github}
                    target="_blank"
                    rel="noopener"
                  >
                    <span>View GitHub</span>
                    <span className="btn-icon">→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project interactive detail modal */}
        {selectedProject && (
          <div
            className="modal-bg open"
            onClick={(e) => e.target === e.currentTarget && setSelectedProject(null)}
          >
            <div className="modal-box project-modal-box">
              <div className="modal-head">
                <div>
                  <span className="project-award-badge winner-badge" style={{ marginBottom: '6px', display: 'inline-block' }}>
                    {selectedProject.award}
                  </span>
                  <h3 style={{ margin: 0, fontSize: '20px' }}>{selectedProject.title}</h3>
                </div>
                <button
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <div className="project-modal-body">
                <div className="project-meta-strip">
                  <div><strong>Role:</strong> {selectedProject.role}</div>
                  <div><strong>Timeline:</strong> {selectedProject.period}</div>
                </div>

                <div className="project-section-block">
                  <h4>Overview</h4>
                  <p>{selectedProject.summary}</p>
                </div>

                <div className="project-section-block">
                  <h4>Key Architectural Features</h4>
                  <ul className="project-feature-list">
                    {selectedProject.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-section-block">
                  <h4>Technologies Used</h4>
                  <div className="chip-row">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </div>

                {selectedProject.github && (
                  <div style={{ marginTop: '22px' }}>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener"
                      className="btn btn-gold"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>Explore Repository on GitHub</span>
                      <span className="btn-icon">→</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
