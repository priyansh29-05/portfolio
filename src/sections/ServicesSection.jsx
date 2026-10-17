import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/portfolioData';

export default function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">02 / Services & Capabilities</div>
          <h2 className="section-title">
            Tailored Engineering for Modern Web Products
          </h2>
          <p className="section-subtitle">
            Focused frontend and full-stack development services tailored for founders, startups, and businesses looking for dependable execution and clean code.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
