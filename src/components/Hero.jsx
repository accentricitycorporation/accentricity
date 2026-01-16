import React from "react";
import { Link } from "react-router-dom";

export default function Hero({
  title,
  subtitle,
  primaryCta = { label: "Book a Call", to: "/contact" },
  secondaryCta = { label: "View Work", to: "/work" },
  kicker = "Accentricity Corp"
}) {
  return (
    <div className="hero">
      <div className="container hero__inner">
        <div className="hero__kicker">{kicker}</div>
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>

        <div className="hero__actions">
          <Link className="btn btn--primary" to={primaryCta.to}>{primaryCta.label}</Link>
          <Link className="btn btn--secondary" to={secondaryCta.to}>{secondaryCta.label}</Link>
        </div>
      </div>
    </div>
  );
}
