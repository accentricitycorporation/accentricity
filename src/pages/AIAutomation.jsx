import React from "react";
import FadeInSection from "../components/FadeInSection";
import CTASection from "../components/CTASection";

export default function AIAutomation() {
  const problems = ["Missed leads", "Slow follow-ups", "Manual admin work", "Support overload"];
  const deliver = ["Voice agent", "Chat support", "Automations", "Dashboards"];

  return (
    <>
      <FadeInSection className="pageHero">
        <div className="container">
          <h1 className="pageHero__title">Automate operations. Move faster.</h1>
          <p className="pageHero__lead">Reduce friction. Improve speed. Keep teams focused.</p>
        </div>
      </FadeInSection>

      <FadeInSection className="section">
        <div className="container">
          <h2 className="section__title">Problems we solve</h2>
          <div className="bullets bullets--grid">
            {problems.map(p => <div className="bullet" key={p}>{p}</div>)}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section">
        <div className="container">
          <h2 className="section__title">What we deliver</h2>
          <div className="bullets bullets--grid">
            {deliver.map(d => <div className="bullet" key={d}>{d}</div>)}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section">
        <div className="container">
          <h2 className="section__title">What it looks like</h2>
          <div className="flow">
            <div className="flow__node">Call</div>
            <div className="flow__arrow" aria-hidden="true">→</div>
            <div className="flow__node">Booking confirmed</div>
            <div className="flow__arrow" aria-hidden="true">→</div>
            <div className="flow__node">CRM updated</div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <CTASection title="Want an automation audit?" buttonLabel="Get an Automation Audit" to="/contact" />
      </FadeInSection>
    </>
  );
}
