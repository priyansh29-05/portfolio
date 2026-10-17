import React from 'react';
import { Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import ContactForm from '../components/ContactForm';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">05 / Start a Conversation</div>
          <h2 className="section-title">
            Let's discuss your next project.
          </h2>
          <p className="section-subtitle">
            Whether you are launching a new startup MVP, need an interactive React frontend, or want to integrate reliable REST APIs, reach out directly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Meta & Contact Info */}
          <div className="contact-info-col">
            <div className="contact-meta-cards">
              {/* Email */}
              <div className="contact-card">
                <div className="contact-card-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="contact-card-label">Direct Inquiries</div>
                  <div className="contact-card-val">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="contact-card-link"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="contact-card">
                <div className="contact-card-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="contact-card-label">Location & Working Mode</div>
                  <div className="contact-card-val">{personalInfo.location}</div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="contact-card">
                <div className="contact-card-icon">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="contact-card-label">Availability & Response</div>
                  <div className="contact-card-val">{personalInfo.responseGuarantee}</div>
                </div>
              </div>
            </div>

            {/* Social & Developer Profiles */}
            <div>
              <div className="contact-card-label" style={{ marginBottom: '0.625rem' }}>
                Verified Developer Profiles
              </div>
              <div className="contact-social-row">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                  <ArrowUpRight size={13} />
                </a>

                {personalInfo.socialLinks.find(s => s.name === 'LinkedIn') && (
                  <a
                    href={personalInfo.socialLinks.find(s => s.name === 'LinkedIn').url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <LinkedinIcon size={15} />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
