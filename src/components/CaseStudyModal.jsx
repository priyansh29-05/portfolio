import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, ShieldAlert } from 'lucide-react';
import { GithubIcon } from './Icons';
import TechBadge from './TechBadge';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <span className="modal-category">{project.category}</span>
            <h2 id="modal-title" className="modal-title">{project.title}</h2>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close case study modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="modal-body">
          {/* Real Screenshot Preview */}
          <div className="modal-image-container">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="modal-image"
              loading="lazy"
            />
          </div>

          {/* Project Purpose & Problem Statement */}
          <div className="modal-section">
            <h3 className="modal-section-heading">Project Purpose & Overview</h3>
            <p className="modal-text">{project.purpose}</p>
          </div>

          {/* Verified Technical Stack */}
          <div className="modal-section">
            <h3 className="modal-section-heading">Verified Technical Stack</h3>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <TechBadge key={tag} label={tag} />
              ))}
            </div>
          </div>

          {/* Key Architecture Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-heading">Key Architecture Highlights</h3>
              <div className="modal-highlights-list">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="modal-highlight-item">
                    <span className="modal-highlight-dot" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Role & Team Contribution */}
          <div className="modal-section">
            <h3 className="modal-section-heading">Role & Individual Contribution</h3>
            <div className="modal-callout">
              {project.isTeamProject && (
                <div style={{ marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Note: Team Collaboration Project
                </div>
              )}
              <p>{project.roleDetails}</p>
            </div>
          </div>

          {/* Authentication Note if applicable */}
          {project.demoAuthNote && (
            <div className="modal-section">
              <h3 className="modal-section-heading">Access & Demo Authentication</h3>
              <div className="modal-callout" style={{ borderLeftColor: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <ShieldAlert size={16} />
                  <strong>Protected Application</strong>
                </div>
                <p>{project.demoAuthNote}</p>
              </div>
            </div>
          )}

          {/* Client Value Takeaway */}
          <div className="modal-section">
            <h3 className="modal-section-heading">Client Value & Takeaway</h3>
            <p className="modal-text">{project.clientTakeaway}</p>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="modal-footer">
          <div className="modal-footer-actions">
            {project.hasLiveDemo && project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <span>Open Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={14} />
                <span>View Source Code</span>
              </a>
            )}
          </div>

          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
