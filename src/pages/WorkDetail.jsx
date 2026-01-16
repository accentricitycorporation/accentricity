import React from "react";
import { useParams, Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import { caseStudies } from "../data/caseStudies";

export default function WorkDetail() {
  const { slug } = useParams();
  const cs = caseStudies.find(c => c.slug === slug);

  if (!cs) {
    return (
      <div className="container section">
        <h1>Case study not found</h1>
        <Link className="link" to="/work">Back to Work →</Link>
      </div>
    );
  }

  return (
    <>
      <FadeInSection className="pageHero">
        <div className="container">
          <h1 className="pageHero__title">{cs.title}</h1>
          <p className="pageHero__lead">{cs.industry} • {cs.timeframe}</p>
        </div>
      </FadeInSection>

      <FadeInSection className="section">
        <div className="container">
          <div className="detail">
            <div className="detail__media">
              <div className="mediaMock">
                <div className="mediaMock__top" />
                <div className="mediaMock__body" />
              </div>
            </div>

            <div className="detail__content">
              <div className="detail__row">
                <div className="muted small">Built</div>
                <div>{cs.built}</div>
              </div>
              <div className="detail__row">
                <div className="muted small">Outcome</div>
                <div>{cs.outcome}</div>
              </div>
              <hr className="hr" />
              <div className="detail__row">
                <div className="muted small">Problem</div>
                <div>{cs.problem}</div>
              </div>
              <div className="detail__row">
                <div className="muted small">Solution</div>
                <div>{cs.solution}</div>
              </div>
              <div className="detail__row">
                <div className="muted small">Result</div>
                <div>{cs.result}</div>
              </div>

              <div className="detail__actions">
                <Link className="btn btn--secondary" to="/work">Back to Work</Link>
                <Link className="btn btn--primary" to="/contact">Book a Call</Link>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
