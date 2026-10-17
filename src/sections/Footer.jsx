import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { personalInfo, projects } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Col */}
          <div className="footer-brand">
            <span className="footer-name">{personalInfo.name}</span>
            <span className="footer-title">{personalInfo.title}</span>
            <p className="footer-tagline">
              Web experiences built with clarity and purpose. Helping startups and businesses craft responsive React frontends and reliable API integrations.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <div className="footer-links-list">
              <a href="#projects" className="footer-link">Selected Work</a>
              <a href="#services" className="footer-link">Services & Capabilities</a>
              <a href="#about" className="footer-link">About & Engineering Philosophy</a>
              <a href="#process" className="footer-link">Engagement Process</a>
              <a href="#contact" className="footer-link">Discuss Your Project</a>
            </div>
          </div>

          {/* Real Work & Profiles */}
          <div>
            <div className="footer-col-title">Case Studies & Profiles</div>
            <div className="footer-links-list">
              {projects.map((p) => (
                <a
                  key={p.id}
                  href={p.demoUrl || p.repoUrl || '#projects'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <span>{p.title.split(' ')[0]}</span>
                  <ArrowUpRight size={12} />
                </a>
              ))}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                style={{ marginTop: '0.25rem' }}
              >
                <GithubIcon size={14} />
                <span>GitHub ({personalInfo.github.replace('https://github.com/', '@')})</span>
              </a>
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <LinkedinIcon size={14} />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
