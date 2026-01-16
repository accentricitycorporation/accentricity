import React from "react";
import { Link } from "react-router-dom";

export default function CTASection({ title, buttonLabel = "Schedule a Call", to = "/contact" }) {
  return (
    <div className="cta">
      <div className="container cta__inner">
        <h2 className="cta__title">{title}</h2>
        <Link to={to} className="btn btn--primary">{buttonLabel}</Link>
      </div>
    </div>
  );
}
