import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { personalInfo, technicalSkills } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">03 / About & Philosophy</div>
          <h2 className="section-title">
            Disciplined engineering with a client-first mindset.
          </h2>
          <p className="section-subtitle">
            A developer who treats interface design, state architecture, and API reliability with equal importance.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative Column */}
          <div className="about-narrative">
            <p className="about-lead">
              I am {personalInfo.name}, a freelance React and Full-Stack Developer focused on building clean web experiences for businesses, startups, and founders.
            </p>

            <p className="about-paragraph">
              My engineering philosophy revolves around clarity and execution. Rather than overloading projects with unnecessary abstractions, I build modular React applications, responsive layouts, and reliable REST API integrations that are maintainable, easy to scale, and fast.
            </p>

            <p className="about-paragraph">
              Whether you need an interactive scroll-driven landing page, a customer-facing dashboard, or an end-to-end full-stack portal with database connectivity, I handle the development lifecycle with direct communication and consistent milestones.
            </p>

            {/* Core Principles */}
            <div className="about-principles">
              <div className="principle-item">
                <CheckCircle2 size={18} color="var(--accent-status)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div className="principle-title">Clarity Over Complexity</div>
                  <div className="principle-desc">Clean, readable React components and straightforward state management that any developer can understand and extend.</div>
                </div>
              </div>

              <div className="principle-item">
                <CheckCircle2 size={18} color="var(--accent-status)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div className="principle-title">Responsive & Device-Agile</div>
                  <div className="principle-desc">Tested across viewport sizes from compact mobile screens to ultra-wide displays with zero visual breakage.</div>
                </div>
              </div>

              <div className="principle-item">
                <CheckCircle2 size={18} color="var(--accent-status)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div className="principle-title">Dependable API & Database Wiring</div>
                  <div className="principle-desc">Thoughtfully designed schemas, robust error handling, and secure token authentication with zero loose ends.</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={15} />
                <span>GitHub ({personalInfo.github.replace('https://github.com/', '@')})</span>
                <ArrowUpRight size={13} />
              </a>

              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </div>

          {/* Technical Skills Column */}
          <div className="skills-column">
            <h3 className="skills-heading">Verified Technical Toolkit</h3>

            {technicalSkills.map((category) => (
              <div key={category.category} className="skill-category-block">
                <span className="skill-category-label">{category.category}</span>
                <div className="skill-badges-wrap">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
