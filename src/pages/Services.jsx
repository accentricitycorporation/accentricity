import React from "react";
import FadeInSection from "../components/FadeInSection";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";

function ServiceBlock({ title, who, what, timeline, ctaTo }) {
  return (
    <div className="serviceBlock">
      <h2 className="serviceBlock__title">{title}</h2>
      <div className="serviceBlock__grid">
        <div><div className="muted small">Who it’s for</div><div>{who}</div></div>
        <div><div className="muted small">What you get</div><div>{what}</div></div>
        <div><div className="muted small">Typical timeline</div><div>{timeline}</div></div>
      </div>
      <Link className="btn btn--secondary" to={ctaTo}>Discuss this service</Link>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <FadeInSection className="pageHero">
        <div className="container">
          <h1 className="pageHero__title">Services built for businesses that want speed and scale.</h1>
          <p className="pageHero__lead">Minimal process. Maximum delivery.</p>
        </div>
      </FadeInSection>

      <FadeInSection className="section">
        <div className="container stack">
          <ServiceBlock
            title="AI Automation"
            who="Teams tired of manual follow-ups, slow ops, missed leads."
            what="Voice agents, chat support, workflow automation, CRM pipelines."
            timeline="1–4 weeks depending on scope"
            ctaTo="/contact"
          />
          <ServiceBlock
            title="Web Platforms"
            who="Businesses that need modern sites and custom systems that convert."
            what="WordPress builds, landing pages, and custom React/Django platforms."
            timeline="1–6 weeks"
            ctaTo="/contact"
          />
          <ServiceBlock
            title="Mobile Apps"
            who="Companies launching booking, marketplace, or operational apps."
            what="Flutter iOS/Android apps, admin dashboards, scalable architecture."
            timeline="2–10+ weeks"
            ctaTo="/contact"
          />
        </div>
      </FadeInSection>

      <FadeInSection>
        <CTASection title="Want a plan you can execute?" buttonLabel="Book a Call" to="/contact" />
      </FadeInSection>
    </>
  );
}
