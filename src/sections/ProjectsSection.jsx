import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import CaseStudyModal from '../components/CaseStudyModal';
import { projects } from '../data/portfolioData';

export default function ProjectsSection() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">01 / Selected Work</div>
          <h2 className="section-title">
            Featured Projects & Engineering Case Studies
          </h2>
          <p className="section-subtitle">
            Practical web applications and interactive interfaces built with React, modern tooling, and reliable API integrations. Verified with real application screenshots and public repository sources.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <CaseStudyModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
