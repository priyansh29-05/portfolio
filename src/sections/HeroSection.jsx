import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-content">
          {/* Availability Indicator */}
          <div className="availability-badge">
            <span className="status-dot" aria-hidden="true" />
            <span>{personalInfo.availability}</span>
          </div>

          {/* Primary Headline */}
          <h1 className="hero-title">
            {personalInfo.headline}
          </h1>

          {/* Supporting Copy */}
          <p className="hero-subtitle">
            {personalInfo.supportingCopy}
          </p>

          {/* Hero CTAs */}
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <span>Discuss Your Project</span>
              <ArrowUpRight size={16} className="btn-icon-arrow" />
            </a>

            <a href="#projects" className="btn btn-secondary">
              <span>Explore My Work</span>
              <ArrowDown size={16} />
            </a>
          </div>

          {/* Credibility & Engineering Pillars Strip */}
          <div className="hero-stats-grid">
            {personalInfo.stats.map((stat) => (
              <div key={stat.label} className="hero-stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-desc">{stat.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
