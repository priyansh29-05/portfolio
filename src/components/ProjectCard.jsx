import { ExternalLink, Info, Users } from 'lucide-react';
import { GithubIcon } from './Icons';
import TechBadge from './TechBadge';

export default function ProjectCard({ project, onOpenDetails }) {
  return (
    <article className="project-card">
      {/* Visual Media Mockup */}
      <div className="project-media">
        <div className="browser-header">
          <div className="browser-dots" aria-hidden="true">
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-dot" />
          </div>
          <span className="browser-title">
            {project.demoUrl || project.repoUrl || 'project-preview.app'}
          </span>
        </div>

        <div className="project-img-wrapper">
          <img
            src={project.image}
            alt={`${project.title} - application interface preview`}
            className="project-img"
            width="600"
            height="375"
            loading="lazy"
          />
        </div>
      </div>

      {/* Project Information */}
      <div className="project-info">
        <div className="project-meta-row">
          <span className="project-category">{project.category}</span>
          {project.isTeamProject && (
            <span className="team-badge" title="Team collaboration project">
              <Users size={12} />
              <span>Team Project</span>
            </span>
          )}
        </div>

        <h3 className="project-name">{project.title}</h3>

        <p className="project-description">{project.shortDescription}</p>

        {/* Purpose Box */}
        <div className="project-purpose-box">
          <strong>Purpose: </strong>
          <span>{project.purpose}</span>
        </div>

        {/* Verified Tech Badges */}
        <div className="project-tags">
          {project.tags.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>

        {/* Live Demo Authentication Note */}
        {project.demoAuthNote && (
          <div className="auth-note">
            ⚠️ {project.demoAuthNote}
          </div>
        )}

        {/* Action Buttons */}
        <div className="project-actions">
          {project.hasLiveDemo && project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <span>Live Demo</span>
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
              <span>{project.hasLiveDemo ? 'Source Code' : 'View Source Code'}</span>
            </a>
          )}

          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => onOpenDetails(project)}
            title="Read in-depth case study and architectural notes"
          >
            <Info size={14} />
            <span>Case Study</span>
          </button>
        </div>
      </div>
    </article>
  );
}
