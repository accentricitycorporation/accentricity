import React from "react";
import { Link } from "react-router-dom";

export default function CaseStudyCard({ cs }) {
  return (
    <article className="csCard">
      <div className="csCard__header">
        <h3 className="csCard__title">{cs.title}</h3>
        <div className="csCard__meta">
          <span>{cs.industry}</span>
          <span className="dot" aria-hidden="true">•</span>
          <span>{cs.timeframe}</span>
        </div>
      </div>

      <div className="csCard__body">
        <div className="csCard__row">
          <span className="muted">Built</span>
          <span>{cs.built}</span>
        </div>
        <div className="csCard__row">
          <span className="muted">Outcome</span>
          <span>{cs.outcome}</span>
        </div>
      </div>

      <div className="csCard__footer">
        <Link className="link" to={`/work/${cs.slug}`}>
          View case study <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
