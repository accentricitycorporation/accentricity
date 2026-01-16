import React from "react";
import FadeInSection from "../components/FadeInSection";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <FadeInSection className="pageHero">
        <div className="container">
          <h1 className="pageHero__title">Contact</h1>
          <p className="pageHero__lead">Short calls. Clear next steps.</p>

          <div className="contactBar">
            <a className="btn btn--primary" href="#" aria-label="Calendly booking placeholder">
              Book a Call
            </a>
            <a className="btn btn--secondary" href="#" aria-label="WhatsApp link placeholder">
              WhatsApp
            </a>
          </div>

          <div className="contactMeta">
            <div><span className="muted">Email:</span> accentricitycorporation@gmail.com</div>
            <div><span className="muted">Phone:</span> +91 89786 76960 | +1 571 631 9490</div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section">
        <div className="container">
          <ContactForm />
        </div>
      </FadeInSection>
    </>
  );
}
