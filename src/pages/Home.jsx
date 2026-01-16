import React from "react";
import FadeInSection from "../components/FadeInSection";
import Hero from "../components/Hero";
import Tiles from "../components/Tiles";
import ProcessStepper from "../components/ProcessStepper";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";

export default function Home() {
  const tiles = [
    { title: "AI Automation", desc: "Cut manual work. Increase speed.", to: "/ai-automation" },
    { title: "Web Development", desc: "Modern systems built to convert.", to: "/services" },
    { title: "Mobile App Development", desc: "Mobile experiences that feel premium.", to: "/app-development" },
  ];

  const steps = [
    { title: "Discovery", desc: "Clarify goals, constraints, success metrics." },
    { title: "Assessment", desc: "Confirm scope, risks, and delivery plan." },
    { title: "Prototype", desc: "Build something tangible fast." },
    { title: "Build", desc: "Ship in milestones with clean QA." },
    { title: "Launch", desc: "Deploy with confidence and monitoring." },
    { title: "Support", desc: "Iterate, optimize, and scale." },
  ];

  return (
    <>
      <FadeInSection>
        <Hero
          title="Technology crafted for your business."
          subtitle="AI automation, web platforms, and mobile apps — built for real businesses."
          primaryCta={{ label: "Book a Call", to: "/contact" }}
          secondaryCta={{ label: "View Work", to: "/work" }}
        />
      </FadeInSection>

      <FadeInSection className="section" delayMs={60}>
        <div className="container">
          <h2 className="section__title">What we do</h2>
          <p className="section__lead">Clear outcomes. Clean execution.</p>
          <Tiles items={tiles} />
        </div>
      </FadeInSection>

      <FadeInSection className="section" delayMs={80}>
        <div className="container">
          <h2 className="section__title">Built to ship</h2>
          <div className="bullets">
            <div className="bullet">Lean team, senior execution.</div>
            <div className="bullet">Serving India, USA, Oman.</div>
            <div className="bullet muted">Selected work available on request.</div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section" delayMs={100}>
        <div className="container">
          <h2 className="section__title">How it works</h2>
          <ProcessStepper steps={steps} />
        </div>
      </FadeInSection>

      <FadeInSection className="section" delayMs={120}>
        <div className="container">
          <div className="featured">
            <div className="featured__media" aria-label="Case study mock image placeholder">
              <div className="mediaMock">
                <div className="mediaMock__top" />
                <div className="mediaMock__body" />
              </div>
            </div>

            <div className="featured__content">
              <h2 className="section__title">Featured case study</h2>
              <div className="miniGrid">
                <div>
                  <div className="muted small">Problem</div>
                  <div>Stakeholders needed a tangible prototype to validate booking flows quickly.</div>
                </div>
                <div>
                  <div className="muted small">Solution</div>
                  <div>Designed a user-first booking journey with provider intake and admin-ready data structure.</div>
                </div>
                <div>
                  <div className="muted small">Result</div>
                  <div>Prototype used as the approval artifact for moving into MVP build.</div>
                </div>
              </div>

              <Link className="link" to="/work">
                View case study <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <CTASection title="Ready to build something serious?" buttonLabel="Schedule a Call" to="/contact" />
      </FadeInSection>
    </>
  );
}
