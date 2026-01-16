import React from "react";
import FadeInSection from "../components/FadeInSection";
import CaseStudyCard from "../components/CaseStudyCard";
import { caseStudies } from "../data/caseStudies";

export default function Work() {
  return (
    <>
      <FadeInSection className="pageHero">
        <div className="container">
          <h1 className="pageHero__title">Work</h1>
          <p className="pageHero__lead">Focused case studies. Clean outcomes.</p>
        </div>
      </FadeInSection>

      <FadeInSection className="section">
        <div className="container">
          <div className="grid3">
            {caseStudies.map(cs => <CaseStudyCard key={cs.slug} cs={cs} />)}
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
