import React from 'react';
import './HeroTrustStrip.css';

export default function HeroTrustStrip({ items }) {
  const defaultItems = [
    { label: "24/7 Emergency", detail: "Immediate Casualty Care" },
    { label: "Advanced ICU", detail: "Critical Life Support" },
    { label: "General Medicine", detail: "15+ Years Clinical Care" },
    { label: "100% Cashless", detail: "All Major Insurance TPAs" }
  ];

  const trustItems = items || defaultItems;

  return (
    <div className="hero-trust-strip-bar">
      <div className="trust-strip-continuous-float">
        <div className="trust-strip-container">
          {trustItems.map((item, idx) => (
            <div key={idx} className="trust-strip-item">
              <div className="trust-item-bullet" aria-hidden="true" />
              <div className="trust-item-text">
                <span className="trust-item-title">{item.label}</span>
                <span className="trust-item-detail">{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
