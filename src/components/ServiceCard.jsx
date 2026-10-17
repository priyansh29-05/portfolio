import React from 'react';
import { Check } from 'lucide-react';

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card-header">
        <span className="service-number">{service.number}</span>
      </div>

      <h3 className="service-title">{service.title}</h3>
      <div className="service-subtitle">{service.subtitle}</div>
      <p className="service-desc">{service.description}</p>

      <div className="deliverables-header">Key Deliverables</div>
      <div className="deliverables-list">
        {service.deliverables.map((item, idx) => (
          <div key={idx} className="deliverable-item">
            <Check size={16} className="deliverable-icon" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="service-footer">
        <strong>Best for: </strong>
        <span>{service.bestFor}</span>
      </div>
    </article>
  );
}
