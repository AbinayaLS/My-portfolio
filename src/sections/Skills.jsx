import { useState } from 'react';

const CATEGORIES = ['All', 'Frontend', 'Backend & DB', 'Languages', 'Tools & Core'];

const SKILLS = [
  { name: 'React.js', category: 'Frontend', level: 'Proficient', icon: '⚛️', color: '#61DAFB', desc: 'Component architecture, hooks, responsive SPAs' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 'Advanced', icon: '⚡', color: '#F7DF1E', desc: 'Asynchronous JS, DOM APIs, modern ES features' },
  { name: 'HTML5 & CSS3', category: 'Frontend', level: 'Advanced', icon: '🎨', color: '#E34F26', desc: 'Semantic layouts, Flexbox, Grid, CSS animations' },
  { name: 'Node.js', category: 'Backend & DB', level: 'Proficient', icon: '🟢', color: '#339933', desc: 'RESTful API servers, middleware, Express.js' },
  { name: 'MongoDB', category: 'Backend & DB', level: 'Proficient', icon: '🍃', color: '#47A248', desc: 'NoSQL collections, schema modeling, CRUD operations' },
  { name: 'Java', category: 'Languages', level: 'Proficient', icon: '☕', color: '#ED8B00', desc: 'NPTEL Elite (85%), OOP principles, data structures' },
  { name: 'C Programming', category: 'Languages', level: 'Proficient', icon: '💻', color: '#00599C', desc: 'Foundational programming, memory concepts' },
  { name: 'Git & GitHub', category: 'Tools & Core', level: 'Proficient', icon: '🐙', color: '#F05032', desc: 'Version control, branch management, collaboration' },
  { name: 'VS Code', category: 'Tools & Core', level: 'Advanced', icon: '🛠️', color: '#007ACC', desc: 'Productive developer environment and debugging' },
  { name: 'Problem Solving', category: 'Tools & Core', level: 'Strong', icon: '🧩', color: '#8B5CF6', desc: 'Algorithm design, SIH participant, hackathon winner' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills">
      <div className="container">
        <div className="kicker">technical expertise</div>
        <h2 className="section-title reveal">What I build with</h2>
        <p className="lead-text reveal">
          Technologies and tools honed through university coursework, 3 internships, and competitive hackathons.
        </p>

        {/* Interactive category filter tabs */}
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
                {cat} {cat === 'All' ? `(${SKILLS.length})` : ''}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive skills grid */}
        <div className="skills-interactive-grid reveal">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card interactive-hover"
              style={{ '--skill-accent': skill.color }}
            >
              <div className="skill-card-top">
                <div className="skill-icon-wrap" style={{ background: `${skill.color}18`, borderColor: `${skill.color}40` }}>
                  <span className="skill-icon">{skill.icon}</span>
                </div>
                <span className="skill-level-pill">{skill.level}</span>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.desc}</p>
              <div className="skill-category-tag">{skill.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
