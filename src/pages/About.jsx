import React from "react";
import FadeInSection from "../components/FadeInSection";
import CTASection from "../components/CTASection";

export default function About() {
  const values = ["Precision", "Accountability", "Velocity"];

  return (
    <>
      <FadeInSection className="pageHero">
        <div className="container">
          <h1 className="pageHero__title">We build modern technology for businesses ready to scale.</h1>
          <p className="pageHero__lead">Clean systems. Serious execution.</p>
        </div>
      </FadeInSection>

      <FadeInSection className="section">
        <div className="container">
          <h2 className="section__title">What makes us different</h2>
          <div className="bullets bullets--grid">
            <div className="bullet">Speed</div>
            <div className="bullet">Clarity</div>
            <div className="bullet">Execution</div>
            <div className="bullet">Systems thinking</div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section">
        <div className="container">
          <h2 className="section__title">Founders</h2>
          <div className="grid2">
            <div className="card">
              <div className="card__title">Abdul Bari</div>
              <div className="muted">Co-Founder</div>
              <div className="card__desc">Engineering / Product / Systems</div>
            </div>
            <div className="card">
              <div className="card__title">Mohammed Wajihullah “Wajih”</div>
              <div className="muted">Co-Founder</div>
              <div className="card__desc">Business / Strategy / Growth</div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section">
        <div className="container">
          <h2 className="section__title">Values</h2>
          <div className="chips">
            {values.map(v => <span className="chip" key={v}>{v}</span>)}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <CTASection title="Work with us." buttonLabel="Book a Call" to="/contact" />
      </FadeInSection>
    </>
  );
}
