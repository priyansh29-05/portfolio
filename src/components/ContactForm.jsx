import React, { useState } from 'react';
import { Send, CheckCircle, Mail, RotateCcw } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'React Frontend',
    budget: '$1,000 - $3,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    'Responsive Website',
    'React Frontend',
    'API Integration',
    'Full-Stack MVP'
  ];

  const budgetOptions = [
    'Under $1,000',
    '$1,000 - $3,000',
    '$3,000 - $6,000',
    'Custom / Milestone-based'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeSelect = (type) => {
    setFormData((prev) => ({ ...prev, projectType: type }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'React Frontend',
      budget: '$1,000 - $3,000',
      message: ''
    });
    setSubmitted(false);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} — ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Priyansh,\n\nI am contacting you regarding a ${formData.projectType} project.\n\n` +
      `Budget / Scope: ${formData.budget}\n` +
      `My Name: ${formData.name}\n` +
      `My Email: ${formData.email}\n\n` +
      `Project Details:\n${formData.message}\n`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-form-container">
      {submitted ? (
        <div className="form-success-alert">
          <div className="form-success-title">
            <CheckCircle size={20} />
            <span>Thank you, {formData.name || 'there'}! Your inquiry is ready.</span>
          </div>
          <p className="form-success-desc">
            Your project details have been noted. Priyansh typically reviews inquiries and replies within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
            <a
              href={getMailtoLink()}
              className="btn btn-primary btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={14} />
              <span>Confirm & Launch Email Client</span>
            </a>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleReset}
            >
              <RotateCcw size={14} />
              <span>Send Another Message</span>
            </button>
          </div>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Row 1: Name & Email */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name <span style={{ color: 'var(--text-muted)' }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="Jane Doe"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Work Email <span style={{ color: 'var(--text-muted)' }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                placeholder="jane@company.com"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row 2: Project Type Chips */}
          <div className="form-group">
            <label id="project-type-label" className="form-label">Project Type</label>
            <div className="type-chips-grid" role="group" aria-labelledby="project-type-label">
              {projectTypes.map((type) => (
                <button
                  type="button"
                  key={type}
                  className={`type-chip-btn ${formData.projectType === type ? 'selected' : ''}`}
                  onClick={() => handleTypeSelect(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Estimated Budget */}
          <div className="form-group">
            <label htmlFor="budget" className="form-label">
              Estimated Budget or Scope
            </label>
            <select
              id="budget"
              name="budget"
              className="form-select"
              value={formData.budget}
              onChange={handleChange}
            >
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Row 4: Message */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Project Overview & Goals <span style={{ color: 'var(--text-muted)' }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell me about what you're building, key features needed, and your target timeline..."
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Submit Action */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'Preparing Inquiry...' : 'Send Project Inquiry'}</span>
              <Send size={15} />
            </button>

            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              🔒 No spam, direct developer contact.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
