import React from 'react';
import { processSteps, clientFaqs } from '../data/portfolioData';

export default function ProcessSection() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">04 / Work Process</div>
          <h2 className="section-title">
            Structured, transparent, and deliverable-driven.
          </h2>
          <p className="section-subtitle">
            A clear development roadmap from initial consultation to production launch. Zero guesswork, frequent milestones, and open communication.
          </p>
        </div>

        {/* 4 Process Steps */}
        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.step} className="process-card">
              <span className="process-step-num">{step.step}</span>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Client Trust & FAQs */}
        <div className="faq-wrap">
          <div className="faq-header">
            <h3 className="faq-title">Frequently Asked Questions</h3>
            <p className="faq-desc">
              Straightforward answers regarding collaboration, code ownership, and working together.
            </p>
          </div>

          <div className="faq-grid">
            {clientFaqs.map((faq, idx) => (
              <div key={idx} className="faq-card">
                <div className="faq-q">{faq.question}</div>
                <p className="faq-a">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
